const LOCALE_COOKIE_NAMES = ['l2detona_locale', 'locale', 'user_locale', 'lang'] as const
const COUNTRY_COOKIE_NAMES = ['l2detona_country', 'country', 'country_code', 'user_country'] as const

const SPANISH_SPEAKING_COUNTRIES = new Set([
  'AR', 'BO', 'CL', 'CO', 'CR', 'CU', 'DO', 'EC', 'ES', 'GQ', 'GT',
  'HN', 'MX', 'NI', 'PA', 'PE', 'PR', 'PY', 'SV', 'UY', 'VE',
])

function normalizeLocale(value?: string | null) {
  if (!value) {
    return null
  }

  const normalized = value.trim().toLowerCase().replace('_', '-')

  if (normalized.startsWith('pt')) {
    return 'pt-BR'
  }

  if (normalized.startsWith('es')) {
    return 'es'
  }

  if (normalized.startsWith('en')) {
    return 'en'
  }

  return null
}

function resolveLocaleFromCountry(value?: string | null) {
  if (!value) {
    return null
  }

  const country = value.trim().toUpperCase()

  if (country === 'BR') {
    return 'pt-BR'
  }

  if (SPANISH_SPEAKING_COUNTRIES.has(country)) {
    return 'es'
  }

  return 'en'
}

function resolveFromCookies(
  names: readonly string[],
  resolver: (value?: string | null) => string | null,
) {
  for (const name of names) {
    const cookie = useCookie<string | null>(name)
    const resolved = resolver(cookie.value)

    if (resolved) {
      return resolved
    }
  }

  return null
}

export default defineNuxtPlugin(async (nuxtApp) => {
  const i18n = nuxtApp.$i18n

  if (!i18n) {
    return
  }

  const demographicLocale
    = resolveFromCookies(LOCALE_COOKIE_NAMES, normalizeLocale)
      ?? resolveFromCookies(COUNTRY_COOKIE_NAMES, resolveLocaleFromCountry)

  const currentLocale = typeof i18n.locale === 'string' ? i18n.locale : i18n.locale.value

  if (demographicLocale && demographicLocale !== currentLocale) {
    if (typeof i18n.setLocale === 'function') {
      await i18n.setLocale(demographicLocale)
      return
    }

    if (typeof i18n.locale === 'string') {
      i18n.locale = demographicLocale
      return
    }

    i18n.locale.value = demographicLocale
  }
})

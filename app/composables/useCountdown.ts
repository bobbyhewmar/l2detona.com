type CountdownTarget = number | Date

type CountdownOptions = {
  intervalMs?: number
  onlineLabel?: string
}

let sharedTimer: number | null = null
let sharedUsers = 0

const sharedNow = ref(Date.now())

function startSharedTimer(intervalMs: number) {
  if (sharedTimer !== null) return
  sharedTimer = window.setInterval(() => {
    sharedNow.value = Date.now()
  }, intervalMs)
}

function stopSharedTimer() {
  if (sharedTimer === null) return
  clearInterval(sharedTimer)
  sharedTimer = null
}

function pad(value: number, digits = 2) {
  return String(value).padStart(digits, '0')
}

export function useCountdown(target: CountdownTarget, options: CountdownOptions = {}) {
  const targetMs = typeof target === 'number' ? target : target.getTime()
  const intervalMs = options.intervalMs ?? 1000
  const onlineLabel = options.onlineLabel ?? 'ONLINE'

  onMounted(() => {
    if (!process.client) return
    sharedUsers += 1
    sharedNow.value = Date.now()
    startSharedTimer(intervalMs)
  })

  onBeforeUnmount(() => {
    if (!process.client) return
    sharedUsers -= 1
    if (sharedUsers <= 0) {
      sharedUsers = 0
      stopSharedTimer()
    }
  })

  const diffMs = computed(() => targetMs - sharedNow.value)
  const isOnline = computed(() => diffMs.value <= 0)
  const remainingMs = computed(() => Math.max(0, diffMs.value))

  const days = computed(() => Math.floor(remainingMs.value / (1000 * 60 * 60 * 24)))
  const hours = computed(() => Math.floor((remainingMs.value / (1000 * 60 * 60)) % 24))
  const minutes = computed(() => Math.floor((remainingMs.value / (1000 * 60)) % 60))
  const seconds = computed(() => Math.floor((remainingMs.value / 1000) % 60))

  const display = computed(() => {
    if (isOnline.value) return onlineLabel
    return `${pad(days.value, 2)}:${pad(hours.value, 2)}:${pad(minutes.value, 2)}:${pad(seconds.value, 2)}`
  })

  return {
    days,
    hours,
    minutes,
    seconds,
    isOnline,
    display,
  }
}


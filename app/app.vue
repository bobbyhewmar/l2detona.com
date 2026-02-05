<template>
  <nav class="bg-base-100/95 shadow-sm fixed top-0 left-0 right-0 z-50">
    <div class="navbar max-w-6xl mx-auto">
      <div class="navbar-start">
        <!-- <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabindex="-1" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul class="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div> -->
        <NuxtImg class="h-16" format="webp" src="/logo.png" />
      </div>
      <!-- <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><a>Item 1</a></li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul class="p-2 bg-base-100 w-40 z-1">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div> -->
      <div class="navbar-end">
        <NuxtLink to="https://app.l2detona.com/register" :external="true" class="btn btn-primary">Register/Login</NuxtLink>
      </div>
    </div>
  </nav>
  <section class="flex flex-col items-center h-screen bg-[url('/e509f273-819a-4520-9662-9525abcbe1b1.webp')] bg-cover bg-bottom">
    <div class="flex flex-col items-center gap-0 w-full max-w-4xl mt-auto">
      <div
        class="flex items-center justify-center w-full h-24 mb-4 bg-[linear-gradient(to_right,transparent_0%,white_35%,white_65%,transparent_100%)] text-base-100 gap-8">
        <div class="flex-1 flex flex-col text-right">
          <span class="text-2xl leading-7">CUSTOM PVP SERVER</span>
          <span class="font-extrabold text-4xl leading-6">INTERLUDE</span>
        </div>
        <div class="flex-1 text-7xl font-extrabold">
          X500
        </div>
      </div>
      <div
        class="w-full max-w-2xl h-16 flex justify-center items-center bg-[linear-gradient(to_right,transparent_0%,red_35%,red_65%,transparent_100%)] text-white mb-4">
        <span class="text-3xl font-extrabold">
          OPEN {{ targetDateLabel }}
        </span>
      </div>
      <div class="grid auto-cols-max grid-flow-col gap-5 text-center mb-8 min-2xl:mb-32">
        <div class="flex flex-col bg-black/75 rounded-2xl justify-center items-center aspect-square p-4">
          <span class="countdown font-mono text-5xl">
            <span :style="`--value:${days}; --digits: 2;`">{{ pad2(days) }}</span>
          </span>
          Dias
        </div>

        <div class="flex flex-col bg-black/75 rounded-2xl justify-center items-center aspect-square p-4">
          <span class="countdown font-mono text-5xl">
            <span :style="`--value:${hours}; --digits: 2;`">{{ pad2(hours) }}</span>
          </span>
          Horas
        </div>

        <div class="flex flex-col bg-black/75 rounded-2xl justify-center items-center aspect-square p-4">
          <span class="countdown font-mono text-5xl">
            <span :style="`--value:${minutes}; --digits: 2;`">{{ pad2(minutes) }}</span>
          </span>
          Min
        </div>

        <div class="flex flex-col bg-black/75 rounded-2xl justify-center items-center aspect-square p-4">
          <span class="countdown font-mono text-5xl">
            <span :style="`--value:${seconds}; --digits: 2;`">{{ pad2(seconds) }}</span>
          </span>
          Seg
        </div>
      </div>
    </div>
  </section>
  <dialog id="open_beta_detona" class="modal" open>
    <div class="modal-box bg-[url(/DIVUL_OBT.png)] bg-cover aspect-[1080/1350] max-md:p-8 p-16 flex justify-center items-end">
      <NuxtLink to="https://discord.gg/eUth6mTQzR" target="_blank" class="w-full">
        <button class="btn btn-secondary gap-3 w-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_42_2)">
              <path
                d="M20.3001 4.51C18.7216 3.79651 17.058 3.28901 15.3501 3C15.1154 3.41473 14.9038 3.84204 14.7161 4.28C12.8961 4.00844 11.046 4.00844 9.22605 4.28C9.03738 3.844 8.82605 3.41733 8.59205 3C6.88205 3.289 5.21205 3.797 3.63205 4.51C0.502052 9.1 -0.347948 13.57 0.0720517 18.01C1.91205 19.35 3.96205 20.37 6.14205 21.03C6.6354 20.376 7.07041 19.68 7.44205 18.95C6.73205 18.688 6.04205 18.364 5.39205 17.982C5.56405 17.858 5.73138 17.7333 5.89405 17.608C7.79574 18.4912 9.86726 18.9488 11.9641 18.9488C14.0608 18.9488 16.1324 18.4912 18.0341 17.608C18.1987 17.742 18.3661 17.8667 18.5361 17.982C17.8823 18.3644 17.1963 18.689 16.4861 18.952C16.8591 19.678 17.2941 20.372 17.7861 21.022C19.9761 20.37 22.0261 19.352 23.8661 18.012C24.3641 12.902 23.0151 8.462 20.2961 4.512L20.3001 4.51ZM8.00005 15.31C6.82005 15.31 5.84005 14.25 5.84005 12.94C5.84005 11.63 6.78405 10.56 8.00005 10.56C9.21005 10.56 10.1801 11.63 10.1601 12.94C10.1401 14.25 9.20705 15.31 8.00005 15.31ZM15.9701 15.31C14.7801 15.31 13.8101 14.25 13.8101 12.94C13.8101 11.63 14.7541 10.56 15.9701 10.56C17.1901 10.56 18.1501 11.63 18.1301 12.94C18.1101 14.25 17.1791 15.31 15.9701 15.31Z"
                fill="currentColor" />
            </g>
            <defs>
              <clipPath id="clip0_42_2">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          JOIN / PARTICIPAR
        </button>
      </NuxtLink>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

const targetDate = new Date('2026-02-27T20:00:00').getTime()
const date = new Date(targetDate)
const dd = String(date.getDate()).padStart(2, '0')
const mm = String(date.getMonth() + 1).padStart(2, '0')
const yy = String(date.getFullYear()).slice(-2)
const hh = String(date.getHours()).padStart(2, '0')
const offsetHours = -date.getTimezoneOffset() / 60
const tzLabel = `GMT${offsetHours >= 0 ? `+${offsetHours}` : offsetHours}`
const targetDateLabel = `${dd}/${mm}/${yy} ${hh}H ${tzLabel}`

let timer: number

const updateCountdown = () => {
  const now = Date.now()
  const diff = targetDate - now

  if (diff <= 0) {
    days.value = hours.value = minutes.value = seconds.value = 0
    return
  }

  days.value = Math.floor(diff / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((diff / (1000 * 60 * 60)) % 24)
  minutes.value = Math.floor((diff / (1000 * 60)) % 60)
  seconds.value = Math.floor((diff / 1000) % 60)
}

const pad2 = (value: number) => String(value).padStart(2, '0')

onMounted(() => {
  updateCountdown()
  timer = window.setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

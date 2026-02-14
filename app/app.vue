<template>
  <nav class="bg-base-100/95 shadow-sm fixed top-0 left-0 right-0 z-50">
    <div class="navbar min-md:max-w-6xl mx-auto">
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
        <NuxtLink to="https://app.l2detona.com/register" :external="true" class="btn bg-orange-400 hover:bg-orange-500 text-[#250906] font-extrabold rounded-full">CREATE ACCOUNT</NuxtLink>
      </div>
    </div>
  </nav>
  <section class="flex flex-col items-center min-h-screen bg-[url('/e509f273-819a-4520-9662-9525abcbe1b1.webp')] bg-cover bg-bottom">
    <div class="flex flex-col items-center gap-0 w-full min-md:max-w-4xl mt-auto">
      <div
        class="flex items-center justify-center w-full h-24 mb-4 bg-[linear-gradient(to_right,transparent_0%,orange_35%,orange_65%,transparent_100%)] text-[#250906] gap-8 max-2xl:mt-80">
        <div class="flex-1 flex flex-col text-right">
          <span class="text-2xl leading-7">CUSTOM PVP SERVER</span>
          <span class="font-extrabold text-4xl leading-6">INTERLUDE</span>
        </div>
        <div class="flex-1 text-7xl font-extrabold">
          X500
        </div>
      </div>
      <div
        class="w-full min-md:max-w-2xl h-16 flex justify-center items-center bg-[linear-gradient(to_right,transparent_0%,red_35%,red_65%,transparent_100%)] text-white mb-4">
        <span class="text-3xl font-extrabold">
          OPEN {{ targetDateLabel }}
        </span>
      </div>
      <div class="grid auto-cols-max grid-flow-col gap-5 text-center mb-8">
        <div class="flex flex-col bg-[#250906] rounded-2xl justify-center items-center aspect-square p-4">
          <span class="countdown font-mono text-5xl">
            <span :style="`--value:${days}; --digits: 2;`">{{ pad2(days) }}</span>
          </span>
          Days
        </div>

        <div class="flex flex-col bg-[#250906] rounded-2xl justify-center items-center aspect-square p-4">
          <span class="countdown font-mono text-5xl">
            <span :style="`--value:${hours}; --digits: 2;`">{{ pad2(hours) }}</span>
          </span>
          Hours
        </div>

        <div class="flex flex-col bg-[#250906] rounded-2xl justify-center items-center aspect-square p-4">
          <span class="countdown font-mono text-5xl">
            <span :style="`--value:${minutes}; --digits: 2;`">{{ pad2(minutes) }}</span>
          </span>
          Mins
        </div>

        <div class="flex flex-col bg-[#250906] rounded-2xl justify-center items-center aspect-square p-4">
          <span class="countdown font-mono text-5xl">
            <span :style="`--value:${seconds}; --digits: 2;`">{{ pad2(seconds) }}</span>
          </span>
          Secs
        </div>
      </div>

        <NuxtLink to="https://discord.gg/dhxpqSUj2G" target="_blank" class="mb-8 min-2xl:mb-32">
          <button class="btn btn-xl gap-4 border-none text-[#250906] font-extrabold rounded-full bg-orange-400 hover:bg-orange-500">
            DOWNLOAD NOW
          </button>
        </NuxtLink>
    </div>
  </section>
  <section class="flex flex-col items-center min-h-screen bg-[url('/9ddbbce1-86c0-41ab-8ac6-dea76f6bbf28.webp')] bg-cover bg-top p-32">
        <div class="flex items-center justify-center w-full min-md:max-w-[80%] py-3 mb-4 bg-[linear-gradient(to_right,transparent_0%,orange_35%,orange_65%,transparent_100%)] text-[#250906]">
          <h1 class="text-5xl font-extrabold">
            INFORMATIONS
          </h1>
        </div>
        <p class="text-center text-lg min-md:max-w-2/3 mb-8">
          Basic information about the server.<br>Other informations can be found in the server's <NuxtLink to="https://discord.gg/VJURzNdVzp" class="link link-accent font-bold" external target="_blank">Discord.</NuxtLink>
        </p>

        <div
          class="flex items-center justify-center w-full py-2 mb-1 min-md:max-w-[70%] bg-[linear-gradient(to_right,transparent_0%,#250906_35%,#250906_65%,transparent_100%)] text-base-content gap-4">
          <div class="flex-1 flex flex-col text-right">
            <span class="text-2xl">500X</span>
          </div>
          <div class="flex-1 text-3xl font-bold text-primary">
            RATES
          </div>
        </div>

        <div
          class="flex items-center justify-center w-full py-2 mb-1 min-md:max-w-[70%] bg-[linear-gradient(to_right,transparent_0%,#250906_35%,#250906_65%,transparent_100%)] text-base-content gap-4">
          <div class="flex-1 flex flex-col text-right">
            <span class="text-2xl">2x all rates</span>
          </div>
          <div class="flex-1 text-3xl font-bold text-primary">
            VIP
          </div>
        </div>

        <div
          class="flex items-center justify-center w-full py-2 mb-1 min-md:max-w-[70%] bg-[linear-gradient(to_right,transparent_0%,#250906_35%,#250906_65%,transparent_100%)] text-base-content gap-4">
          <div class="flex-1 flex flex-col text-right">
            <span class="text-2xl">+400 P.DEF/M.DEF</span>
          </div>
          <div class="flex-1 text-3xl font-bold text-primary">
            ACCESSORY
          </div>
        </div>

        <div
          class="flex items-center justify-center w-full py-2 mb-1 min-md:max-w-[70%] bg-[linear-gradient(to_right,transparent_0%,#250906_35%,#250906_65%,transparent_100%)] text-base-content gap-4">
          <div class="flex-1 flex flex-col text-right">
            <span class="text-2xl">52+4 Slots Schema Npc</span>
          </div>
          <div class="flex-1 text-3xl font-bold text-primary">
            BUFFS
          </div>
        </div>

        <div
          class="flex items-center justify-center w-full py-2 mb-16 min-md:max-w-[70%] bg-[linear-gradient(to_right,transparent_0%,#250906_35%,#250906_65%,transparent_100%)] text-base-content gap-4">
          <div class="flex-1 flex flex-col text-right">
            <span class="text-2xl">Safe +12 Max +25</span>
          </div>
          <div class="flex-1 text-3xl font-bold text-primary">
            ENCHANT
          </div>
        </div>

        <NuxtLink to="https://discord.gg/dhxpqSUj2G" target="_blank">
          <button class="btn btn-warning btn-xl gap-4 border-none text-[#250906] font-extrabold rounded-full">
            DOWNLOAD NOW
          </button>
        </NuxtLink>

  </section>
  <dialog id="open_beta_detona" class="modal" open>
    <div class="relative modal-box aspect-[1080/1350] flex flex-col p-0">
      <iframe src="https://discord.com/widget?id=1449403936007262443&theme=dark" width="100%" height="100%" class="aspect-[1080/1350]" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
    <form method="dialog" class="absolute top-4 right-4">
      <button class="btn btn-sm btn-circle btn-primary">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
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

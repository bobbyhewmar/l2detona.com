<template>
  <main class="flex flex-col items-center justify-center h-screen gap-8">
    <NuxtImg class="mx-auto px-4" format="webp" src="/logo.png" />

    <div class="grid auto-cols-max grid-flow-col gap-5 text-center">
      <div class="flex flex-col mb-8">
        <span class="countdown font-mono text-5xl">
          <span :style="`--value:${days}; --digits: 2;`">{{ pad2(days) }}</span>
        </span>
        Dias
      </div>

      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span :style="`--value:${hours}; --digits: 2;`">{{ pad2(hours) }}</span>
        </span>
        Horas
      </div>

      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span :style="`--value:${minutes}; --digits: 2;`">{{ pad2(minutes) }}</span>
        </span>
        Min
      </div>

      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span :style="`--value:${seconds}; --digits: 2;`">{{ pad2(seconds) }}</span>
        </span>
        Seg
      </div>
    </div>

    <div class="flex items-center gap-6">

      <NuxtLink to="https://discord.gg/eUth6mTQzR" target="_blank">
        <button class="btn btn-secondary btn-outline gap-3">
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
          Discord
        </button>
      </NuxtLink>

      <NuxtLink to="https://www.facebook.com/lineage2dd/" target="_blank">
        <button class="btn btn-accent btn-outline gap-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
              fill="currentColor" />
          </svg>
  
          facebook
        </button>
      </NuxtLink>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

const targetDate = new Date('2026-02-27T00:00:17').getTime()

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
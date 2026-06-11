<template>
    <div
        v-if="isOpen('servers-menu')"
        id="servers-menu"
        class="fixed left-0 top-[80px] z-20 flex min-h-64 w-full bg-black/85 py-4 backdrop-blur-xs"
        @click.self="close('servers-menu')"
    >
        <div class="mx-auto flex w-full max-w-[1366px] font-[Onest]">
            <div class="tabs tabs-border self-start">
                <input type="radio" name="servers-tab" class="tab px-8" aria-label="INTERLUDE" checked />
                <div class="tab-content rounded-none border-t border-t-gray-800 px-2 pt-6 text-sm text-slate-200">
                    <div class="flex-1 pb-8 inline-flex flex-col justify-start items-start gap-6">
                        <div class="inline-flex justify-start items-center gap-3">
                            <div class="justify-start text-white text-3xl font-bold">Detona Envolved</div>
                            <div class="px-2 py-1 bg-blue-700 rounded flex justify-center items-center gap-4">
                                <div class="justify-start text-white text-xs">Online</div>
                            </div>
                        </div>
                        <div class="self-stretch justify-start text-white text-sm">
                            Servidor interlude 500x focado em PVP, nossa missão é inovar o cenários pvp com modalidades exclusivas
                        </div>
                        <div class="flex justify-start items-center gap-4">

                            <div class="flex justify-start items-center gap-2">
                                <svg width="24" height="24" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.34666 0.5H6.71999L4.85333 3.16667L6.71999 5.83333H8.34666L6.94666 3.83333H7.99999C9.05302 3.83346 10.075 4.18973 10.9 4.84423C11.7249 5.49873 12.3042 6.41299 12.5437 7.43841C12.7833 8.46383 12.669 9.54012 12.2194 10.4924C11.7698 11.4446 11.0114 12.2168 10.0675 12.6834C9.12347 13.1501 8.04941 13.2837 7.01984 13.0627C5.99028 12.8417 5.06574 12.2789 4.39649 11.4659C3.72723 10.6529 3.35262 9.63746 3.33353 8.58461C3.31444 7.53175 3.65199 6.50339 4.29133 5.66667L3.46799 4.568C2.57024 5.60275 2.05362 6.91356 2.00397 8.28257C1.95433 9.65158 2.37466 10.9964 3.1951 12.0934C4.01555 13.1905 5.18671 13.9737 6.51394 14.313C7.84116 14.6524 9.24454 14.5273 10.4908 13.9586C11.7371 13.3899 12.7513 12.4118 13.3648 11.1869C13.9782 9.96207 14.1541 8.56415 13.8631 7.2255C13.5721 5.88685 12.8318 4.68808 11.7652 3.82842C10.6986 2.96877 9.36991 2.49999 7.99999 2.5H6.94666L8.34666 0.5Z"
                                        fill="#EDF2F6" />
                                    <path
                                        d="M6.41421 7.08579L7.82843 8.5M7.82843 8.5L9.24264 9.91421M7.82843 8.5L6.41421 9.91421M7.82843 8.5L9.24264 7.08579"
                                        stroke="#CF9B0A" stroke-width="1.33333" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>

                                <div class="justify-start text-slate-100 text-xs font-normal ">Never wipe
                                </div>
                            </div>
                            <div class="flex justify-start items-center gap-2">
                                <svg width="24" height="24" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2 6.66667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H4.66667M2 6.66667C2.88867 6.66667 4.66667 6.13333 4.66667 4M2 6.66667V9.33333M4.66667 4H11.3333M2 9.33333V10.6667C2 11.0203 2.14048 11.3594 2.39052 11.6095C2.64057 11.8595 2.97971 12 3.33333 12H4.66667M2 9.33333C2.88867 9.33333 4.66667 9.86667 4.66667 12M14 6.66667V5.33333C14 4.97971 13.8595 4.64057 13.6095 4.39052C13.3594 4.14048 13.0203 4 12.6667 4H11.3333M14 6.66667C13.1113 6.66667 11.3333 6.13333 11.3333 4M14 6.66667V8M4.66667 12H7.33333"
                                        stroke="#EDF2F6" stroke-width="1.33333" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M8.00001 9.33333C8.73638 9.33333 9.33334 8.73638 9.33334 8C9.33334 7.26362 8.73638 6.66667 8.00001 6.66667C7.26363 6.66667 6.66667 7.26362 6.66667 8C6.66667 8.73638 7.26363 9.33333 8.00001 9.33333Z"
                                        stroke="#EDF2F6" stroke-width="1.33333" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M10.5858 10.5858L12 12M12 12L13.4142 13.4142M12 12L10.5858 13.4142M12 12L13.4142 10.5858"
                                        stroke="#CF9B0A" stroke-width="1.33333" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <div class="justify-start text-slate-100 text-xs font-normal ">No pay to win
                                </div>
                            </div>
                        </div>
                        <div class="self-stretch bg-neutral-800/30 flex flex-col justify-start items-start">
                            <div class="self-stretch justify-start text-blue-400 text-xs">
                                <ClientOnly>
                                    <span>{{ detonaEnvolvedIsOnline ? 'Server is now online' : 'The opening is coming soon' }}</span>
                                    <template #fallback>
                                        <span>The opening is coming soon</span>
                                    </template>
                                </ClientOnly>
                            </div>
                            <div class="self-stretch justify-start text-white text-3xl font-bold">
                                <ClientOnly>
                                    <span>{{ detonaEnvolvedDisplay }}</span>
                                    <template #fallback>
                                        <span>247:08:52:51</span>
                                    </template>
                                </ClientOnly>
                            </div>
                        </div>
                    </div>
                </div>

                <input type="radio" name="servers-tab" class="tab px-8" aria-label="HIGH FIVE" />
                <div class="tab-content rounded-none border-t border-t-gray-800 px-2 pt-6 text-sm text-slate-200">
                    <div class="flex-1 pb-8 inline-flex flex-col justify-start items-start gap-6">
                        <div class="inline-flex justify-start items-center gap-3">
                            <div class="justify-start text-white text-3xl font-bold">Detona High Five
                            </div>
                            <div class="px-2 py-1 bg-blue-700 rounded flex justify-center items-center gap-4">
                                <div class="justify-start text-white text-xs">Soon</div>
                            </div>
                        </div>
                        <div class="self-stretch justify-start text-white text-sm">Servidor H5 20x, focado em campanha, nossa missão é trazer nostalgia dos tempos de ouro do lineage 2.
                        </div>
                        <div class="flex justify-start items-center gap-4">
        
                            <div class="flex justify-start items-center gap-2">
                                <svg width="24" height="24" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.34666 0.5H6.71999L4.85333 3.16667L6.71999 5.83333H8.34666L6.94666 3.83333H7.99999C9.05302 3.83346 10.075 4.18973 10.9 4.84423C11.7249 5.49873 12.3042 6.41299 12.5437 7.43841C12.7833 8.46383 12.669 9.54012 12.2194 10.4924C11.7698 11.4446 11.0114 12.2168 10.0675 12.6834C9.12347 13.1501 8.04941 13.2837 7.01984 13.0627C5.99028 12.8417 5.06574 12.2789 4.39649 11.4659C3.72723 10.6529 3.35262 9.63746 3.33353 8.58461C3.31444 7.53175 3.65199 6.50339 4.29133 5.66667L3.46799 4.568C2.57024 5.60275 2.05362 6.91356 2.00397 8.28257C1.95433 9.65158 2.37466 10.9964 3.1951 12.0934C4.01555 13.1905 5.18671 13.9737 6.51394 14.313C7.84116 14.6524 9.24454 14.5273 10.4908 13.9586C11.7371 13.3899 12.7513 12.4118 13.3648 11.1869C13.9782 9.96207 14.1541 8.56415 13.8631 7.2255C13.5721 5.88685 12.8318 4.68808 11.7652 3.82842C10.6986 2.96877 9.36991 2.49999 7.99999 2.5H6.94666L8.34666 0.5Z"
                                        fill="#EDF2F6" />
                                    <path
                                        d="M6.41421 7.08579L7.82843 8.5M7.82843 8.5L9.24264 9.91421M7.82843 8.5L6.41421 9.91421M7.82843 8.5L9.24264 7.08579"
                                        stroke="#CF9B0A" stroke-width="1.33333" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>

                                <div class="justify-start text-slate-100 text-xs font-normal ">Never wipe
                                </div>
                            </div>
                            <div class="flex justify-start items-center gap-2">
                                <svg width="24" height="24" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2 6.66667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H4.66667M2 6.66667C2.88867 6.66667 4.66667 6.13333 4.66667 4M2 6.66667V9.33333M4.66667 4H11.3333M2 9.33333V10.6667C2 11.0203 2.14048 11.3594 2.39052 11.6095C2.64057 11.8595 2.97971 12 3.33333 12H4.66667M2 9.33333C2.88867 9.33333 4.66667 9.86667 4.66667 12M14 6.66667V5.33333C14 4.97971 13.8595 4.64057 13.6095 4.39052C13.3594 4.14048 13.0203 4 12.6667 4H11.3333M14 6.66667C13.1113 6.66667 11.3333 6.13333 11.3333 4M14 6.66667V8M4.66667 12H7.33333"
                                        stroke="#EDF2F6" stroke-width="1.33333" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M8.00001 9.33333C8.73638 9.33333 9.33334 8.73638 9.33334 8C9.33334 7.26362 8.73638 6.66667 8.00001 6.66667C7.26363 6.66667 6.66667 7.26362 6.66667 8C6.66667 8.73638 7.26363 9.33333 8.00001 9.33333Z"
                                        stroke="#EDF2F6" stroke-width="1.33333" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M10.5858 10.5858L12 12M12 12L13.4142 13.4142M12 12L10.5858 13.4142M12 12L13.4142 10.5858"
                                        stroke="#CF9B0A" stroke-width="1.33333" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <div class="justify-start text-slate-100 text-xs font-normal ">No pay to win
                                </div>
                            </div>
                        </div>
                        <div class="self-stretch bg-neutral-800/30 flex flex-col justify-start items-start">
                            <div class="self-stretch justify-start text-blue-400 text-xs">
                                <ClientOnly>
                                    <span>{{ detonaHighFiveIsOnline ? 'Server is now online' : 'The opening is coming soon' }}</span>
                                    <template #fallback>
                                        <span>The opening is coming soon</span>
                                    </template>
                                </ClientOnly>
                            </div>
                            <div class="self-stretch justify-start text-white text-3xl font-bold">
                                <ClientOnly>
                                    <span>{{ detonaHighFiveDisplay }}</span>
                                    <template #fallback>
                                        <span>07:01:38:22</span>
                                    </template>
                                </ClientOnly>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="w-full bg-[#1F2426] font-[Onest]">
        <div class="w-full bg-[url('/page-bg.webp')] bg-top bg-contain bg-no-repeat pb-16 max-md:px-8">
            <div class="mx-auto flex w-full flex-col items-center gap-12">
                <header class="sticky top-0 z-10 backdrop-blur-md w-full inline-flex">
                    <div class="w-full h-20 max-w-[1366px] inline-flex justify-between items-center mx-auto">
                        <div class="flex justify-start items-center gap-6">
                            <NuxtLink to="/">
                                <img class="h-11" src="/logo_new.webp" />
                            </NuxtLink>
                            <div class="w-px h-6 bg-white"></div>
                            <div class="flex justify-start items-center gap-8">
                                <button
                                    type="button"
                                    class="btn rounded-lg flex justify-start items-center gap-2"
                                    :class="isOpen('servers-menu') ? 'btn-accent' : 'btn-ghost btn-accent'"
                                    aria-controls="servers-menu"
                                    :aria-expanded="isOpen('servers-menu')"
                                    @click.prevent="toggle('servers-menu')"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_2038_41)">
                                            <path
                                                d="M2 18C2 16.46 2 15.69 2.347 15.124C2.541 14.807 2.807 14.541 3.124 14.347C3.689 14 4.46 14 6 14C7.54 14 8.31 14 8.876 14.347C9.193 14.541 9.459 14.807 9.653 15.124C10 15.689 10 16.46 10 18C10 19.54 10 20.31 9.653 20.877C9.459 21.193 9.193 21.459 8.876 21.653C8.311 22 7.54 22 6 22C4.46 22 3.69 22 3.124 21.653C2.80735 21.4593 2.54108 21.1934 2.347 20.877C2 20.31 2 19.54 2 18ZM14 18C14 16.46 14 15.69 14.347 15.124C14.541 14.807 14.807 14.541 15.124 14.347C15.689 14 16.46 14 18 14C19.54 14 20.31 14 20.877 14.347C21.193 14.541 21.459 14.807 21.653 15.124C22 15.689 22 16.46 22 18C22 19.54 22 20.31 21.653 20.877C21.4589 21.1931 21.1931 21.4589 20.877 21.653C20.31 22 19.54 22 18 22C16.46 22 15.69 22 15.124 21.653C14.8073 21.4593 14.5411 21.1934 14.347 20.877C14 20.31 14 19.54 14 18ZM2 6C2 4.46 2 3.69 2.347 3.124C2.541 2.807 2.807 2.541 3.124 2.347C3.689 2 4.46 2 6 2C7.54 2 8.31 2 8.876 2.347C9.193 2.541 9.459 2.807 9.653 3.124C10 3.689 10 4.46 10 6C10 7.54 10 8.31 9.653 8.876C9.459 9.193 9.193 9.459 8.876 9.653C8.311 10 7.54 10 6 10C4.46 10 3.69 10 3.124 9.653C2.80724 9.45904 2.54096 9.19277 2.347 8.876C2 8.311 2 7.54 2 6ZM14 6C14 4.46 14 3.69 14.347 3.124C14.541 2.807 14.807 2.541 15.124 2.347C15.689 2 16.46 2 18 2C19.54 2 20.31 2 20.877 2.347C21.193 2.541 21.459 2.807 21.653 3.124C22 3.689 22 4.46 22 6C22 7.54 22 8.31 21.653 8.876C21.459 9.193 21.193 9.459 20.877 9.653C20.31 10 19.54 10 18 10C16.46 10 15.69 10 15.124 9.653C14.8072 9.45904 14.541 9.19277 14.347 8.876C14 8.311 14 7.54 14 6Z"
                                                stroke="#EDF2F6" stroke-width="2.5" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2038_41">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <div class="justify-start text-slate-100 text-sm font-normal">Servers</div>
                                    <svg :class="{'rotate-180' : isOpen('servers-menu')}" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_2046_408)">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12.707 15.707C12.5195 15.8945 12.2652 15.9998 12 15.9998C11.7348 15.9998 11.4805 15.8945 11.293 15.707L5.63601 10.05C5.5405 9.95776 5.46431 9.84742 5.41191 9.72541C5.3595 9.60341 5.33191 9.47219 5.33076 9.33941C5.3296 9.20663 5.3549 9.07495 5.40519 8.95205C5.45547 8.82916 5.52972 8.7175 5.62361 8.62361C5.71751 8.52972 5.82916 8.45547 5.95205 8.40519C6.07495 8.3549 6.20663 8.3296 6.33941 8.33076C6.47219 8.33191 6.60341 8.3595 6.72541 8.41191C6.84742 8.46431 6.95776 8.5405 7.05001 8.63601L12 13.586L16.95 8.63601C17.1386 8.45385 17.3912 8.35305 17.6534 8.35533C17.9156 8.35761 18.1664 8.46278 18.3518 8.64819C18.5372 8.8336 18.6424 9.08441 18.6447 9.34661C18.647 9.6088 18.5462 9.86141 18.364 10.05L12.707 15.707Z"
                                                fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2046_408">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                                <NuxtLink to="https://discord.gg/VJURzNdVzp" target="_blank" :external="true" class="flex justify-start items-center gap-2 text-slate-100 hover:text-accent ease-in-out duration-300">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.25002 12C8.25002 11.7033 8.33799 11.4133 8.50281 11.1666C8.66763 10.92 8.9019 10.7277 9.17599 10.6142C9.45008 10.5006 9.75168 10.4709 10.0427 10.5288C10.3336 10.5867 10.6009 10.7296 10.8107 10.9393C11.0205 11.1491 11.1633 11.4164 11.2212 11.7074C11.2791 11.9983 11.2494 12.2999 11.1358 12.574C11.0223 12.8481 10.83 13.0824 10.5834 13.2472C10.3367 13.412 10.0467 13.5 9.75002 13.5C9.35219 13.5 8.97066 13.342 8.68936 13.0607C8.40805 12.7794 8.25002 12.3978 8.25002 12ZM14.25 13.5C14.5467 13.5 14.8367 13.412 15.0834 13.2472C15.33 13.0824 15.5223 12.8481 15.6358 12.574C15.7494 12.2999 15.7791 11.9983 15.7212 11.7074C15.6633 11.4164 15.5205 11.1491 15.3107 10.9393C15.1009 10.7296 14.8336 10.5867 14.5427 10.5288C14.2517 10.4709 13.9501 10.5006 13.676 10.6142C13.4019 10.7277 13.1676 10.92 13.0028 11.1666C12.838 11.4133 12.75 11.7033 12.75 12C12.75 12.3978 12.9081 12.7794 13.1894 13.0607C13.4707 13.342 13.8522 13.5 14.25 13.5ZM22.125 6V18C22.125 18.4973 21.9275 18.9742 21.5758 19.3258C21.2242 19.6775 20.7473 19.875 20.25 19.875H7.91908L4.96877 22.4222L4.95752 22.4325C4.62141 22.7174 4.19532 22.8742 3.7547 22.875C3.47957 22.8744 3.20789 22.8136 2.95877 22.6969C2.63418 22.5481 2.35934 22.3089 2.16714 22.0079C1.97494 21.707 1.87352 21.3571 1.87502 21V6C1.87502 5.50272 2.07256 5.02581 2.42419 4.67417C2.77582 4.32254 3.25274 4.125 3.75002 4.125H20.25C20.7473 4.125 21.2242 4.32254 21.5758 4.67417C21.9275 5.02581 22.125 5.50272 22.125 6ZM19.875 6.375H4.12502V20.1778L6.76502 17.8978C6.96908 17.7212 7.23013 17.6243 7.50002 17.625H19.875V6.375Z"
                                            fill="currentColor" />
                                    </svg>
                                    <div class="justify-start text-slate-100 text-sm">Community</div>
                                </NuxtLink>
                                <NuxtLink to="https://app.l2detona.com/news" :external="true" class="flex justify-start items-center gap-2 text-slate-100 hover:text-accent ease-in-out duration-300">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16 3C16.7652 2.99996 17.5015 3.29233 18.0583 3.81728C18.615 4.34224 18.9501 5.06011 18.995 5.824L19 6V16H19.75C20.397 16 20.93 16.492 20.994 17.122L21 17.25V19C21 19.7652 20.7077 20.5015 20.1827 21.0583C19.6578 21.615 18.9399 21.9501 18.176 21.995L18 22H8C7.23479 22 6.49849 21.7077 5.94174 21.1827C5.38499 20.6578 5.04989 19.9399 5.005 19.176L5 19V9H3.25C2.94054 9.00014 2.64203 8.88549 2.41223 8.67823C2.18244 8.47097 2.03769 8.18583 2.006 7.878L2 7.75V6C1.99996 5.23479 2.29233 4.49849 2.81728 3.94174C3.34224 3.38499 4.06011 3.04989 4.824 3.005L5 3H16ZM16 5H7V19C7 19.2652 7.10536 19.5196 7.29289 19.7071C7.48043 19.8946 7.73478 20 8 20C8.26522 20 8.51957 19.8946 8.70711 19.7071C8.89464 19.5196 9 19.2652 9 19V17.25C9 16.56 9.56 16 10.25 16H17V6C17 5.73478 16.8946 5.48043 16.7071 5.29289C16.5196 5.10536 16.2652 5 16 5ZM19 18H11V19C11 19.35 10.94 19.687 10.83 20H18C18.2652 20 18.5196 19.8946 18.7071 19.7071C18.8946 19.5196 19 19.2652 19 19V18ZM12 12C12.2652 12 12.5196 12.1054 12.7071 12.2929C12.8946 12.4804 13 12.7348 13 13C13 13.2652 12.8946 13.5196 12.7071 13.7071C12.5196 13.8946 12.2652 14 12 14H10C9.73478 14 9.48043 13.8946 9.29289 13.7071C9.10536 13.5196 9 13.2652 9 13C9 12.7348 9.10536 12.4804 9.29289 12.2929C9.48043 12.1054 9.73478 12 10 12H12ZM14 8C14.2652 8 14.5196 8.10536 14.7071 8.29289C14.8946 8.48043 15 8.73478 15 9C15 9.26522 14.8946 9.51957 14.7071 9.70711C14.5196 9.89464 14.2652 10 14 10H10C9.73478 10 9.48043 9.89464 9.29289 9.70711C9.10536 9.51957 9 9.26522 9 9C9 8.73478 9.10536 8.48043 9.29289 8.29289C9.48043 8.10536 9.73478 8 10 8H14ZM5 5C4.75507 5.00003 4.51866 5.08996 4.33563 5.25272C4.15259 5.41547 4.03566 5.63975 4.007 5.883L4 6V7H5V5Z"
                                            fill="currentColor" />
                                    </svg>
                                    <div class="justify-start text-slate-100 text-sm">News</div>
                                </NuxtLink>
                                <NuxtLink to="https://lineage2wiki.org" target="_blank" :external="true" class="flex justify-start items-center gap-2 text-slate-100 hover:text-accent ease-in-out duration-300">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.4 11.6L12.4 2.6C12 2.2 11.5 2 11 2H4C2.9 2 2 2.9 2 4V11C2 11.5 2.2 12 2.6 12.4L11.6 21.4C12 21.8 12.5 22 13 22C13.5 22 14 21.8 14.4 21.4L21.4 14.4C21.8 14 22 13.5 22 13C22 12.5 21.8 12 21.4 11.6ZM13 20L4 11V4H11L20 13M6.5 5C7.3 5 8 5.7 8 6.5C8 7.3 7.3 8 6.5 8C5.7 8 5 7.3 5 6.5C5 5.7 5.7 5 6.5 5ZM10.1 8.9L11.5 7.5L17 13L15.6 14.4L10.1 8.9ZM7.6 11.4L9 10L13 14L11.6 15.4L7.6 11.4Z"
                                            fill="currentColor" />
                                    </svg>
                                    <div class="justify-start text-slate-100 text-sm">Wiki</div>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="flex justify-start items-center gap-6">
                            <button
                                @click="openDownloadModal"
                                class="px-4 py-2 rounded-lg outline-1 -outline-offset-1 outline-slate-100 flex justify-center items-center gap-2 cursor-pointer">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M3.005 12L3 6.408L9.8 5.485V12.002H3.005V12ZM11 5.32L19.997 4V12H11V5.32ZM20.067 13L19.998 21L10.933 19.725L11 13H20.067ZM9.8 19.58L3.005 18.649V13H9.8V19.58Z"
                                        fill="white" />
                                </svg>
                                <div class="justify-start text-slate-100 text-xs">Download for windows</div>
                            </button>
                            <div class="relative">
                                <button
                                    type="button"
                                    class="px-4 py-2 bg-blue-700 rounded-lg flex justify-center items-center gap-2 cursor-pointer"
                                    aria-haspopup="menu"
                                    :aria-expanded="isOpen('account-menu')"
                                    @click.prevent="toggle('account-menu')"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13Z"
                                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M20 21C20 18.8783 19.1571 16.8434 17.6569 15.3431C16.1566 13.8429 14.1217 13 12 13C9.87827 13 7.84344 13.8429 6.34315 15.3431C4.84285 16.8434 4 18.8783 4 21"
                                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="justify-start text-slate-100 text-xs">Account</div>
                                    <svg :class="{ 'rotate-180': isOpen('account-menu') }" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_2046_408)">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12.707 15.707C12.5195 15.8945 12.2652 15.9998 12 15.9998C11.7348 15.9998 11.4805 15.8945 11.293 15.707L5.63601 10.05C5.5405 9.95776 5.46431 9.84742 5.41191 9.72541C5.3595 9.60341 5.33191 9.47219 5.33076 9.33941C5.3296 9.20663 5.3549 9.07495 5.40519 8.95205C5.45547 8.82916 5.52972 8.7175 5.62361 8.62361C5.71751 8.52972 5.82916 8.45547 5.95205 8.40519C6.07495 8.3549 6.20663 8.3296 6.33941 8.33076C6.47219 8.33191 6.60341 8.3595 6.72541 8.41191C6.84742 8.46431 6.95776 8.5405 7.05001 8.63601L12 13.586L16.95 8.63601C17.1386 8.45385 17.3912 8.35305 17.6534 8.35533C17.9156 8.35761 18.1664 8.46278 18.3518 8.64819C18.5372 8.8336 18.6424 9.08441 18.6447 9.34661C18.647 9.6088 18.5462 9.86141 18.364 10.05L12.707 15.707Z"
                                                fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2046_408">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                                <div
                                    v-if="isOpen('account-menu')"
                                    class="fixed inset-0 z-20"
                                    @click="close('account-menu')"
                                ></div>
                                <div
                                    v-if="isOpen('account-menu')"
                                    class="absolute right-0 z-30 mt-2 w-44 overflow-hidden rounded-lg border border-slate-100/15 bg-[#1F2426] shadow-lg"
                                    role="menu"
                                >
                                    <NuxtLink
                                        to="https://app.l2detona.com/login"
                                        :external="true"
                                        class="block px-4 py-2 text-sm text-slate-100 hover:bg-white/5"
                                        role="menuitem"
                                        @click="close('account-menu')"
                                    >
                                        Login
                                    </NuxtLink>
                                    <NuxtLink
                                        to="https://app.l2detona.com/register"
                                        :external="true"
                                        class="block px-4 py-2 text-sm text-slate-100 hover:bg-white/5"
                                        role="menuitem"
                                        @click="close('account-menu')"
                                    >
                                        Register
                                    </NuxtLink>
                                </div>
                            </div>
                            <NuxtLink to="https://discord.gg/eUth6mTQzR" target="_blank" external>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.2701 5.33C17.9401 4.71 16.5001 4.26 15.0001 4C14.9737 4.00038 14.9486 4.01116 14.9301 4.03C14.7501 4.36 14.5401 4.79 14.4001 5.12C12.8091 4.88015 11.1911 4.88015 9.60012 5.12C9.46012 4.78 9.25012 4.36 9.06012 4.03C9.05012 4.01 9.02012 4 8.99012 4C7.49012 4.26 6.06012 4.71 4.72012 5.33C4.71012 5.33 4.70012 5.34 4.69012 5.35C1.97012 9.42 1.22012 13.38 1.59012 17.3C1.59012 17.32 1.60012 17.34 1.62012 17.35C3.42012 18.67 5.15012 19.47 6.86012 20C6.89012 20.01 6.92012 20 6.93012 19.98C7.33012 19.43 7.69012 18.85 8.00012 18.24C8.02012 18.2 8.00012 18.16 7.96012 18.15C7.39012 17.93 6.85012 17.67 6.32012 17.37C6.28012 17.35 6.28012 17.29 6.31012 17.26C6.42012 17.18 6.53012 17.09 6.64012 17.01C6.66012 16.99 6.69012 16.99 6.71012 17C10.1501 18.57 13.8601 18.57 17.2601 17C17.2801 16.99 17.3101 16.99 17.3301 17.01C17.4401 17.1 17.5501 17.18 17.6601 17.27C17.7001 17.3 17.7001 17.36 17.6501 17.38C17.1301 17.69 16.5801 17.94 16.0101 18.16C15.9701 18.17 15.9601 18.22 15.9701 18.25C16.2901 18.86 16.6501 19.44 17.0401 19.99C17.0701 20 17.1001 20.01 17.1301 20C18.8501 19.47 20.5801 18.67 22.3801 17.35C22.4001 17.34 22.4101 17.32 22.4101 17.3C22.8501 12.77 21.6801 8.84 19.3101 5.35C19.3001 5.34 19.2901 5.33 19.2701 5.33ZM8.52012 14.91C7.49012 14.91 6.63012 13.96 6.63012 12.79C6.63012 11.62 7.47012 10.67 8.52012 10.67C9.58012 10.67 10.4201 11.63 10.4101 12.79C10.4101 13.96 9.57012 14.91 8.52012 14.91ZM15.4901 14.91C14.4601 14.91 13.6001 13.96 13.6001 12.79C13.6001 11.62 14.4401 10.67 15.4901 10.67C16.5501 10.67 17.3901 11.63 17.3801 12.79C17.3801 13.96 16.5501 14.91 15.4901 14.91Z" fill="#EDF2F6"/>
                                </svg>
                            </NuxtLink>
                        </div>
                    </div>
                </header>
                <div class="w-full block text-center p-4 absolute top-20 left-0 bg-orange-600 font-bold text-white tracking-[.4rem]">
                    O SERVIDOR L2DETONA.COM ESTÁ SOB NOVA DIREÇÃO.
                </div>
                <section class="flex w-full max-w-[1366px] px-8 flex-col items-center gap-8 px-6 py-16 mb-24 text-center md:px-10">
                    <div class="inline-flex items-center gap-3 border border-slate-100/15 px-4 py-2 text-xs uppercase tracking-[0.24em] text-blue-300">
                        <span>League Of Lineage</span>
                    </div>

                    <div class="flex max-w-4xl flex-col items-center gap-5">
                        <h1 class="text-4xl font-bold leading-tight text-white md:text-6xl">
                            O Lineage II Detona entrou em uma nova era: chegou o League of Lineage
                        </h1>
                        <p class="max-w-3xl text-base leading-7 text-slate-200 md:text-lg">
                            Escolha sua classe, evolua durante a partida, destrua torres, vença teamfights e domine o mapa
                            em batalhas instanciadas intensas e estrategicas.
                        </p>
                    </div>

                    <div class="flex flex-col gap-3 sm:flex-row">
                        <button
                            type="button"
                            class="inline-flex items-center justify-center gap-4 bg-blue-700 px-8 py-4 text-base font-medium text-slate-100 cursor-pointer rounded-xl"
                            @click="openDownloadModal"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M3.005 12L3 6.408L9.8 5.485V12.002H3.005V12ZM11 5.32L19.997 4V12H11V5.32ZM20.067 13L19.998 21L10.933 19.725L11 13H20.067ZM9.8 19.58L3.005 18.649V13H9.8V19.58Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Download for Windows</span>
                        </button>
                        <NuxtLink
                            to="https://app.l2detona.com/register"
                            class="inline-flex items-center justify-center border-2 border-slate-100/20 px-8 py-4 text-base font-medium text-slate-100 cursor-pointer rounded-xl"
                        >
                            Cadastre-se agora
                        </NuxtLink>
                    </div>

                </section>
                <section
                    class="w-full max-w-[1366px] px-16 rounded-2xl inline-flex justify-center items-center  bg-[url(/bg-hero.webp)] bg-center object-cover mb-16">
                    <div class="flex-1 inline-flex flex-col justify-center items-start gap-8 py-18">
                        <div class="justify-start text-white text-3xl font-bold ">League of Lineage</div>
                        <div class="self-stretch justify-start text-white text-base leading-6">
                            League of Lineage é uma nova modalidade competitiva do L2Detona.com que coloca duas equipes de seis jogadores frente a frente em disputas estratégicas dentro de uma arena desenvolvida para testar habilidade, coordenação e tomada de decisão.
                        </div>
                        <div class="self-stretch inline-flex justify-start items-center gap-8">
                            <div class="flex justify-start items-center gap-4">
                                <div class="flex justify-start items-center gap-2">
                                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2 6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H16C16.5304 4 17.0391 4.21071 17.4142 4.58579C17.7893 4.96086 18 5.46957 18 6V14C18 14.5304 17.7893 15.0391 17.4142 15.4142C17.0391 15.7893 16.5304 16 16 16H4C3.46957 16 2.96086 15.7893 2.58579 15.4142C2.21071 15.0391 2 14.5304 2 14V6ZM4 5C3.73478 5 3.48043 5.10536 3.29289 5.29289C3.10536 5.48043 3 5.73478 3 6V14C3 14.2652 3.10536 14.5196 3.29289 14.7071C3.48043 14.8946 3.73478 15 4 15H9.5V11.5H10.5V15H16C16.2652 15 16.5196 14.8946 16.7071 14.7071C16.8946 14.5196 17 14.2652 17 14V6C17 5.73478 16.8946 5.48043 16.7071 5.29289C16.5196 5.10536 16.2652 5 16 5H10.5V8.5H9.5V5H4ZM6.854 8.354C6.90049 8.30751 6.93736 8.25232 6.96252 8.19158C6.98768 8.13084 7.00063 8.06574 7.00063 8C7.00063 7.93426 6.98768 7.86916 6.96252 7.80842C6.93736 7.74768 6.90049 7.69249 6.854 7.646C6.80751 7.59951 6.75232 7.56264 6.69158 7.53748C6.63084 7.51232 6.56574 7.49937 6.5 7.49937C6.43426 7.49937 6.36916 7.51232 6.30842 7.53748C6.24768 7.56264 6.19249 7.59951 6.146 7.646L4.146 9.646C4.09944 9.69245 4.06249 9.74762 4.03729 9.80837C4.01208 9.86911 3.99911 9.93423 3.99911 10C3.99911 10.0658 4.01208 10.1309 4.03729 10.1916C4.06249 10.2524 4.09944 10.3076 4.146 10.354L6.146 12.354C6.23989 12.4479 6.36722 12.5006 6.5 12.5006C6.63278 12.5006 6.76011 12.4479 6.854 12.354C6.94789 12.2601 7.00063 12.1328 7.00063 12C7.00063 11.8672 6.94789 11.7399 6.854 11.646L5.707 10.5H14.293L13.146 11.646C13.0521 11.7399 12.9994 11.8672 12.9994 12C12.9994 12.1328 13.0521 12.2601 13.146 12.354C13.2399 12.4479 13.3672 12.5006 13.5 12.5006C13.6328 12.5006 13.7601 12.4479 13.854 12.354L15.854 10.354C15.9006 10.3076 15.9375 10.2524 15.9627 10.1916C15.9879 10.1309 16.0009 10.0658 16.0009 10C16.0009 9.93423 15.9879 9.86911 15.9627 9.80837C15.9375 9.74762 15.9006 9.69245 15.854 9.646L13.854 7.646C13.7601 7.55211 13.6328 7.49937 13.5 7.49937C13.3672 7.49937 13.2399 7.55211 13.146 7.646C13.0521 7.73989 12.9994 7.86722 12.9994 8C12.9994 8.13278 13.0521 8.26011 13.146 8.354L14.293 9.5H5.707L6.854 8.354Z"
                                            fill="#EDF2F6" />
                                    </svg>

                                    <div class="justify-start text-slate-100 text-xs font-normal ">No dualbox
                                    </div>
                                </div>
                                <div class="flex justify-start items-center gap-2">
                                    <svg width="24" height="24" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.34666 0.5H6.71999L4.85333 3.16667L6.71999 5.83333H8.34666L6.94666 3.83333H7.99999C9.05302 3.83346 10.075 4.18973 10.9 4.84423C11.7249 5.49873 12.3042 6.41299 12.5437 7.43841C12.7833 8.46383 12.669 9.54012 12.2194 10.4924C11.7698 11.4446 11.0114 12.2168 10.0675 12.6834C9.12347 13.1501 8.04941 13.2837 7.01984 13.0627C5.99028 12.8417 5.06574 12.2789 4.39649 11.4659C3.72723 10.6529 3.35262 9.63746 3.33353 8.58461C3.31444 7.53175 3.65199 6.50339 4.29133 5.66667L3.46799 4.568C2.57024 5.60275 2.05362 6.91356 2.00397 8.28257C1.95433 9.65158 2.37466 10.9964 3.1951 12.0934C4.01555 13.1905 5.18671 13.9737 6.51394 14.313C7.84116 14.6524 9.24454 14.5273 10.4908 13.9586C11.7371 13.3899 12.7513 12.4118 13.3648 11.1869C13.9782 9.96207 14.1541 8.56415 13.8631 7.2255C13.5721 5.88685 12.8318 4.68808 11.7652 3.82842C10.6986 2.96877 9.36991 2.49999 7.99999 2.5H6.94666L8.34666 0.5Z"
                                            fill="#EDF2F6" />
                                        <path
                                            d="M6.41421 7.08579L7.82843 8.5M7.82843 8.5L9.24264 9.91421M7.82843 8.5L6.41421 9.91421M7.82843 8.5L9.24264 7.08579"
                                            stroke="#CF9B0A" stroke-width="1.33333" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>

                                    <div class="justify-start text-slate-100 text-xs font-normal ">Never wipe
                                    </div>
                                </div>
                                <div class="flex justify-start items-center gap-2">
                                    <svg width="24" height="24" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2 6.66667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H4.66667M2 6.66667C2.88867 6.66667 4.66667 6.13333 4.66667 4M2 6.66667V9.33333M4.66667 4H11.3333M2 9.33333V10.6667C2 11.0203 2.14048 11.3594 2.39052 11.6095C2.64057 11.8595 2.97971 12 3.33333 12H4.66667M2 9.33333C2.88867 9.33333 4.66667 9.86667 4.66667 12M14 6.66667V5.33333C14 4.97971 13.8595 4.64057 13.6095 4.39052C13.3594 4.14048 13.0203 4 12.6667 4H11.3333M14 6.66667C13.1113 6.66667 11.3333 6.13333 11.3333 4M14 6.66667V8M4.66667 12H7.33333"
                                            stroke="#EDF2F6" stroke-width="1.33333" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M8.00001 9.33333C8.73638 9.33333 9.33334 8.73638 9.33334 8C9.33334 7.26362 8.73638 6.66667 8.00001 6.66667C7.26363 6.66667 6.66667 7.26362 6.66667 8C6.66667 8.73638 7.26363 9.33333 8.00001 9.33333Z"
                                            stroke="#EDF2F6" stroke-width="1.33333" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M10.5858 10.5858L12 12M12 12L13.4142 13.4142M12 12L10.5858 13.4142M12 12L13.4142 10.5858"
                                            stroke="#CF9B0A" stroke-width="1.33333" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                    <div class="justify-start text-slate-100 text-xs font-normal ">No pay to win
                                    </div>
                                </div>
                            </div>
      
                        </div>
                    </div>
                    <div class="w-[45%] self-stretch relative">
                        <img class="h-[500px] aspect-[512/412] object-contain object-bottom left-0 bottom-0 absolute" src="/hero_pin.webp" />
                    </div>
                </section>
                <section id="impacto" class="flex w-full max-w-[1366px] px-8 flex-col items-center gap-5 py-6 mb-8 text-center">
                    <h2 class="text-3xl font-bold text-slate-100 md:text-4xl">Escolha entre as classes disponíveis</h2>
                    <p class="text-base leading-8 text-slate-300">
                        Seja Warrior, Mage ou Rogue experimente diferentes estratégias.
                    </p>
                </section>
                <section class="w-full max-w-[1366px] grid grid-cols-2 lg:grid-cols-3 justify-start items-start gap-6 mb-16">
                    <div
                        v-for="classCard in classCards"
                        :key="classCard.id"
                        class="w-full rounded-2xl inline-flex flex-col justify-start items-start"
                    >
                        <div
                            class="w-full h-60 px-8 relative rounded-2xl flex flex-col justify-center items-end gap-4 bg-[url(/interlude-frame.webp)]"
                        >
                            <img
                                class="h-64 left-0 bottom-0 absolute z-1 rounded-bl-2xl"
                                :src="classCard.characterImageSrc"
                                :alt="classCard.name"
                            />
                            <div class="w-56 flex flex-col justify-start items-end z-2">
                                <img class="w-auto h-24" :src="classCard.titleImageSrc" :alt="classCard.name" />
                                <div class="relative group/class-preview">
                                    <div
                                        class="pointer-events-none absolute bottom-full left-1/2 z-30 mb-4 w-64 -translate-x-1/2 translate-y-2 overflow-visible opacity-0 transition duration-200 group-hover/class-preview:translate-y-0 group-hover/class-preview:opacity-100 group-focus-within/class-preview:translate-y-0 group-focus-within/class-preview:opacity-100"
                                    >
                                        <div class="overflow-hidden rounded-2xl border border-slate-100/10 bg-[#0B0F13] shadow-2xl">
                                            <div class="aspect-video w-full">
                                                <video
                                                    v-if="classCard.previewVideoSrc"
                                                    class="h-full w-full object-cover"
                                                    :src="classCard.previewVideoSrc"
                                                    autoplay
                                                    muted
                                                    loop
                                                    playsinline
                                                    preload="none"
                                                ></video>
                                                <div
                                                    v-else
                                                    class="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.22),_rgba(11,15,19,0.96)_68%)] px-6 text-center text-sm font-medium text-slate-200"
                                                >
                                                    Soon video here
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="absolute left-1/2 top-full h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 border-r border-b border-slate-100/10 bg-[#0B0F13]"
                                        ></div>
                                    </div>
                                    <button
                                        type="button"
                                        class="px-6 py-3 bg-blue-700 rounded-2xl inline-flex justify-center items-center gap-4 cursor-pointer"
                                        :aria-label="`Preview de video da class ${classCard.name}`"
                                    >
                                        <div class="justify-start text-slate-100 text-sm flex items-center gap-2">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.75 2.75V13.25L12.25 8L2.75 2.75Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            Play now
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="self-stretch w-full  p-0 m-0 bg-[url('/win-platform-bg.webp')] bg-center bg-cover">
                    <div class="self-stretch w-full p-0 m-0 bg-linear-to-r from-[#1F2426] via-[#1F2426]/0 to-[#1F2426]">
                        <div
                            class="self-stretch py-32 bg-linear-to-b from-[#1F2426] via-[#1F2426]/0 to-[#1F2426] flex flex-col justify-center items-center gap-4"
                        >
                            <div class="flex w-full max-w-5xl justify-center items-center gap-8 bg-white aspect-video rounded-2xl overflow-hidden">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/c4Adp4i0YAs?si=cQYl1zqqOfXYO7jv&amp;controls=0&amp;start=380" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="como-funciona" class="flex w-full max-w-[1366px] px-8 flex-col items-center gap-4 pt-8 mb-16 text-center">
                    <div class="text-sm uppercase tracking-[0.2em] text-blue-300">Como Funciona</div>
                    <h2 class="text-3xl font-bold text-slate-100 md:text-4xl">Entre, evolua, lute e destrua o Nexus adversário!</h2>
                    <p class="text-base leading-8 text-slate-300">
                        Um estilo de jogo justo, onde o que realmente importa é a estratégia e a habilidade do jogador.
                    </p>
                </section>
                <section class="w-full grid lg:grid-cols-2 max-w-[1366px] mx-auto">
                    <img class="w-full aspect-square" src="/moba-map-3d-isometric-transparent.webp" />
                    <div class="grid px-8 gap-4 mb-16 w-full">
                        <div
                            v-for="(step, index) in steps"
                            :key="step"
                            class="grid items-center gap-4 border border-slate-100/10 px-6 py-5 text-center md:grid-cols-[72px_1fr] md:text-left"
                        >
                            <div class="text-3xl font-bold text-blue-400">{{ String(index + 1).padStart(2, '0') }}</div>
                            <div class="text-base text-slate-100">{{ step }}</div>
                        </div>
                    </div>
                </section>
                <section class="flex w-full max-w-[1366px] px-8 flex-col items-center gap-5 pt-8 text-center mb-16">
                    <div class="text-sm uppercase tracking-[0.2em] text-blue-300">Nossos Servidores</div>
                    <h2 class="text-3xl font-bold text-slate-100 md:text-4xl">Conheça os servidores disponíveis</h2>
                    <p class="text-base leading-8 text-slate-300">
                        L ][ Detona é um projeto desenvolvido para durar por longo tempo, com uma comunidade ativa e uma plataforma confiável. 
                    </p>
                </section>
                <section class="w-full max-w-[1366px] grid lg:grid-cols-2 justify-start items-start gap-6 px-4 mb-16">
                    <div class="flex-1 pr-8 rounded-2xl flex justify-between items-end bg-[url(/bg-upcoming-1.webp)] bg-center bg-cover">
                        <img class="h-72 rounded-tl-md rounded-tr-md rounded-bl-2xl rounded-br-md"
                            src="/angel.webp" />
                        <div class="flex-1 py-8 inline-flex flex-col justify-start items-start gap-4">
                            <div class="inline-flex justify-start items-center gap-3">
                                <div class="justify-start text-white text-3xl font-bold">Detona Envolved</div>
                                <div class="px-2 py-1 bg-blue-700 rounded flex justify-center items-center gap-4">
                                    <div class="justify-start text-white text-xs">Online</div>
                                </div>
                            </div>
                            <div class="self-stretch justify-start text-white text-sm">
                                Servidor interlude 500x focado em PVP, nossa missão é inovar o cenários pvp com modalidades exclusivas
                            </div>
                            <div class="flex justify-start items-center gap-4">

                                <div class="flex justify-start items-center gap-2">
                                    <svg width="24" height="24" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.34666 0.5H6.71999L4.85333 3.16667L6.71999 5.83333H8.34666L6.94666 3.83333H7.99999C9.05302 3.83346 10.075 4.18973 10.9 4.84423C11.7249 5.49873 12.3042 6.41299 12.5437 7.43841C12.7833 8.46383 12.669 9.54012 12.2194 10.4924C11.7698 11.4446 11.0114 12.2168 10.0675 12.6834C9.12347 13.1501 8.04941 13.2837 7.01984 13.0627C5.99028 12.8417 5.06574 12.2789 4.39649 11.4659C3.72723 10.6529 3.35262 9.63746 3.33353 8.58461C3.31444 7.53175 3.65199 6.50339 4.29133 5.66667L3.46799 4.568C2.57024 5.60275 2.05362 6.91356 2.00397 8.28257C1.95433 9.65158 2.37466 10.9964 3.1951 12.0934C4.01555 13.1905 5.18671 13.9737 6.51394 14.313C7.84116 14.6524 9.24454 14.5273 10.4908 13.9586C11.7371 13.3899 12.7513 12.4118 13.3648 11.1869C13.9782 9.96207 14.1541 8.56415 13.8631 7.2255C13.5721 5.88685 12.8318 4.68808 11.7652 3.82842C10.6986 2.96877 9.36991 2.49999 7.99999 2.5H6.94666L8.34666 0.5Z"
                                            fill="#EDF2F6" />
                                        <path
                                            d="M6.41421 7.08579L7.82843 8.5M7.82843 8.5L9.24264 9.91421M7.82843 8.5L6.41421 9.91421M7.82843 8.5L9.24264 7.08579"
                                            stroke="#CF9B0A" stroke-width="1.33333" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>

                                    <div class="justify-start text-slate-100 text-xs font-normal ">Never wipe
                                    </div>
                                </div>
                                <div class="flex justify-start items-center gap-2">
                                    <svg width="24" height="24" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2 6.66667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H4.66667M2 6.66667C2.88867 6.66667 4.66667 6.13333 4.66667 4M2 6.66667V9.33333M4.66667 4H11.3333M2 9.33333V10.6667C2 11.0203 2.14048 11.3594 2.39052 11.6095C2.64057 11.8595 2.97971 12 3.33333 12H4.66667M2 9.33333C2.88867 9.33333 4.66667 9.86667 4.66667 12M14 6.66667V5.33333C14 4.97971 13.8595 4.64057 13.6095 4.39052C13.3594 4.14048 13.0203 4 12.6667 4H11.3333M14 6.66667C13.1113 6.66667 11.3333 6.13333 11.3333 4M14 6.66667V8M4.66667 12H7.33333"
                                            stroke="#EDF2F6" stroke-width="1.33333" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M8.00001 9.33333C8.73638 9.33333 9.33334 8.73638 9.33334 8C9.33334 7.26362 8.73638 6.66667 8.00001 6.66667C7.26363 6.66667 6.66667 7.26362 6.66667 8C6.66667 8.73638 7.26363 9.33333 8.00001 9.33333Z"
                                            stroke="#EDF2F6" stroke-width="1.33333" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M10.5858 10.5858L12 12M12 12L13.4142 13.4142M12 12L10.5858 13.4142M12 12L13.4142 10.5858"
                                            stroke="#CF9B0A" stroke-width="1.33333" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                    <div class="justify-start text-slate-100 text-xs font-normal ">No pay to win
                                    </div>
                                </div>
                            </div>
                            <div class="self-stretch bg-neutral-800/30 flex flex-col justify-start items-start">
                                <div class="self-stretch justify-start text-blue-400 text-xs">
                                    <ClientOnly>
                                        <span>{{ detonaEnvolvedIsOnline ? 'Server is now online' : 'The opening is coming soon' }}</span>
                                        <template #fallback>
                                            <span>The opening is coming soon</span>
                                        </template>
                                    </ClientOnly>
                                </div>
                                <div class="self-stretch justify-start text-white text-3xl font-bold">
                                    <ClientOnly>
                                        <span>{{ detonaEnvolvedDisplay }}</span>
                                        <template #fallback>
                                            <span>247:08:52:51</span>
                                        </template>
                                    </ClientOnly>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1 pr-8 rounded-2xl flex justify-between items-end bg-[url(/bg-upcoming-2.webp)] bg-center bg-cover">
                        <img class="h-72 rounded-tl-md rounded-tr-md rounded-bl-2xl rounded-br-md"
                            src="/elf.webp" />
                        <div class="flex-1 py-8 inline-flex flex-col justify-start items-start gap-4">
                            <div class="inline-flex justify-start items-center gap-3">
                                <div class="justify-start text-white text-3xl font-bold">Detona High Five
                                </div>
                                <div class="px-2 py-1 bg-blue-700 rounded flex justify-center items-center gap-4">
                                    <div class="justify-start text-white text-xs">Soon</div>
                                </div>
                            </div>
                            <div class="self-stretch justify-start text-white text-sm">Servidor H5 20x, focado em campanha, nossa missão é trazer nostalgia dos tempos de ouro do lineage 2.
                            </div>
                            <div class="flex justify-start items-center gap-4">
            
                                <div class="flex justify-start items-center gap-2">
                                    <svg width="24" height="24" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.34666 0.5H6.71999L4.85333 3.16667L6.71999 5.83333H8.34666L6.94666 3.83333H7.99999C9.05302 3.83346 10.075 4.18973 10.9 4.84423C11.7249 5.49873 12.3042 6.41299 12.5437 7.43841C12.7833 8.46383 12.669 9.54012 12.2194 10.4924C11.7698 11.4446 11.0114 12.2168 10.0675 12.6834C9.12347 13.1501 8.04941 13.2837 7.01984 13.0627C5.99028 12.8417 5.06574 12.2789 4.39649 11.4659C3.72723 10.6529 3.35262 9.63746 3.33353 8.58461C3.31444 7.53175 3.65199 6.50339 4.29133 5.66667L3.46799 4.568C2.57024 5.60275 2.05362 6.91356 2.00397 8.28257C1.95433 9.65158 2.37466 10.9964 3.1951 12.0934C4.01555 13.1905 5.18671 13.9737 6.51394 14.313C7.84116 14.6524 9.24454 14.5273 10.4908 13.9586C11.7371 13.3899 12.7513 12.4118 13.3648 11.1869C13.9782 9.96207 14.1541 8.56415 13.8631 7.2255C13.5721 5.88685 12.8318 4.68808 11.7652 3.82842C10.6986 2.96877 9.36991 2.49999 7.99999 2.5H6.94666L8.34666 0.5Z"
                                            fill="#EDF2F6" />
                                        <path
                                            d="M6.41421 7.08579L7.82843 8.5M7.82843 8.5L9.24264 9.91421M7.82843 8.5L6.41421 9.91421M7.82843 8.5L9.24264 7.08579"
                                            stroke="#CF9B0A" stroke-width="1.33333" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>

                                    <div class="justify-start text-slate-100 text-xs font-normal ">Never wipe
                                    </div>
                                </div>
                                <div class="flex justify-start items-center gap-2">
                                    <svg width="24" height="24" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2 6.66667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H4.66667M2 6.66667C2.88867 6.66667 4.66667 6.13333 4.66667 4M2 6.66667V9.33333M4.66667 4H11.3333M2 9.33333V10.6667C2 11.0203 2.14048 11.3594 2.39052 11.6095C2.64057 11.8595 2.97971 12 3.33333 12H4.66667M2 9.33333C2.88867 9.33333 4.66667 9.86667 4.66667 12M14 6.66667V5.33333C14 4.97971 13.8595 4.64057 13.6095 4.39052C13.3594 4.14048 13.0203 4 12.6667 4H11.3333M14 6.66667C13.1113 6.66667 11.3333 6.13333 11.3333 4M14 6.66667V8M4.66667 12H7.33333"
                                            stroke="#EDF2F6" stroke-width="1.33333" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M8.00001 9.33333C8.73638 9.33333 9.33334 8.73638 9.33334 8C9.33334 7.26362 8.73638 6.66667 8.00001 6.66667C7.26363 6.66667 6.66667 7.26362 6.66667 8C6.66667 8.73638 7.26363 9.33333 8.00001 9.33333Z"
                                            stroke="#EDF2F6" stroke-width="1.33333" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M10.5858 10.5858L12 12M12 12L13.4142 13.4142M12 12L10.5858 13.4142M12 12L13.4142 10.5858"
                                            stroke="#CF9B0A" stroke-width="1.33333" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                    <div class="justify-start text-slate-100 text-xs font-normal ">No pay to win
                                    </div>
                                </div>
                            </div>
                            <div class="self-stretch bg-neutral-800/30 flex flex-col justify-start items-start">
                                <div class="self-stretch justify-start text-blue-400 text-xs">
                                    <ClientOnly>
                                        <span>{{ detonaHighFiveIsOnline ? 'Server is now online' : 'The opening is coming soon' }}</span>
                                        <template #fallback>
                                            <span>The opening is coming soon</span>
                                        </template>
                                    </ClientOnly>
                                </div>
                                <div class="self-stretch justify-start text-white text-3xl font-bold">
                                    <ClientOnly>
                                        <span>{{ detonaHighFiveDisplay }}</span>
                                        <template #fallback>
                                            <span>07:01:38:22</span>
                                        </template>
                                    </ClientOnly>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="w-full max-w-[1366px] px-24 py-16 rounded-2xl inline-flex justify-center items-center gap-4 bg-[url(/wiki-bg.webp)] bg-center bg-cover">
                    <div class="flex-1 inline-flex flex-col justify-start items-start gap-6">
                        <div class="self-stretch justify-start text-white text-3xl font-bold">Lineage 2
                            Wikipedia</div>
                        <div class="self-stretch justify-start text-white text-lg">
                            New to the game?<br>
                            We have created knowledge base which includes information about the most popular versions
                        </div>
                        <NuxtLink to="https://www.lineage2wiki.org/" target="_blank" class="px-6 py-3 bg-blue-700 rounded-lg inline-flex justify-center items-center gap-4">
                            <div class="justify-start text-slate-100">Lineage2wiki.org
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="flex-1 inline-flex flex-col justify-center items-center gap-8">
                        <img class="h-[200px]" src="/wiki-logo.webp" />
                    </div>
                </section>
                <section class="self-stretch w-full  p-0 m-0 bg-[url('/win-platform-bg.webp')] bg-center bg-cover">
                    <div class="self-stretch w-full p-0 m-0 bg-linear-to-r from-[#1F2426] via-[#1F2426]/0 to-[#1F2426]">
                        <div
                            class="self-stretch py-32 bg-linear-to-b from-[#1F2426] via-[#1F2426]/0 to-[#1F2426] flex flex-col justify-center items-center gap-4"
                        >
                            <div class="flex flex-col justify-center items-center gap-8">
                                <img class="w-80 h-44" src="/windows-platform.webp" alt="Windows platform" />
                                <div class="text-center justify-start text-white text-3xl font-bold">Get the desktop app</div>
                                <div class="text-center justify-start text-white text-lg">
                                    Download Detona launcher aand join our community
                                </div>
                                <button
                                    type="button"
                                    class="px-8 py-3 bg-blue-700 inline-flex justify-center items-center gap-4 rounded-xl cursor-pointer"
                                    @click="openDownloadModal"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M3.005 12L3 6.408L9.8 5.485V12.002H3.005V12ZM11 5.32L19.997 4V12H11V5.32ZM20.067 13L19.998 21L10.933 19.725L11 13H20.067ZM9.8 19.58L3.005 18.649V13H9.8V19.58Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <div class="justify-start text-slate-100 text-base font-medium">Download for windows</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <footer class="w-full max-w-[1366px] px-8 inline-flex justify-start items-center gap-16">
                    <div class="inline-flex flex-col justify-center items-start gap-6">
                        <img class="h-11" src="/logo_new.webp" alt="L2Detona" />
                        <div class="text-center justify-start text-slate-500 text-sm font-normal">2026 Game Project Detona</div>
                    </div>
                    <div class="w-[878px] inline-flex flex-col justify-start items-start gap-11">
                        <div class="self-stretch inline-flex justify-start items-center gap-8">
                            <div class="flex justify-start items-center gap-8">
                                <div class="flex justify-start items-center gap-2">
                                    <div class="justify-start text-blue-400 text-sm">Menu:</div>
                                </div>
                                <div class="flex justify-start items-center gap-2">
                                    <div class="justify-start text-slate-100 text-sm">Home page</div>
                                </div>
                                <div class="flex justify-start items-center gap-2">
                                    <div class="justify-start text-slate-100 text-sm">News</div>
                                </div>
                                <div class="flex justify-start items-center gap-2">
                                    <div class="justify-start text-slate-100 text-sm">Community</div>
                                </div>
                                <div class="flex justify-start items-center gap-2">
                                    <div class="justify-start text-slate-100 text-sm">Wiki</div>
                                </div>
                                <div class="flex justify-start items-center gap-2">
                                    <div class="justify-start text-slate-100 text-sm">Support</div>
                                </div>
                            </div>
                            <div class="flex justify-start items-center gap-8">
                                <div class="flex justify-start items-center gap-2">
                                    <div class="justify-start text-blue-400 text-sm">Servers:</div>
                                </div>
                                <div class="flex justify-start items-center gap-2">
                                    <div class="justify-start text-slate-100 text-sm">Detona IL</div>
                                </div>
                                <div class="flex justify-start items-center gap-2">
                                    <div class="justify-start text-slate-100 text-sm">Detona C5</div>
                                </div>
                                <div class="flex justify-start items-center gap-2">
                                    <div class="justify-start text-slate-100 text-sm">Detona H5</div>
                                </div>
                            </div>
                        </div>
                        <div class="inline-flex justify-start items-center gap-8">
                            <div class="flex justify-start items-center gap-8">
                                <div class="flex justify-start items-center gap-2">
                                    <div class="justify-start text-blue-400 text-sm">Documentation:</div>
                                </div>
                                <div class="flex justify-start items-center gap-2">
                                    <div class="justify-start text-slate-100 text-sm">Server Rules</div>
                                </div>
                                <div class="flex justify-start items-center gap-2">
                                    <div class="justify-start text-slate-100 text-sm">Privacy policy</div>
                                </div>
                                <div class="flex justify-start items-center gap-2">
                                    <div class="justify-start text-slate-100 text-sm">Terms and Conditions</div>
                                </div>
                                <div class="flex justify-start items-center gap-2">
                                    <div class="justify-start text-slate-100 text-sm">Cookie policy</div>
                                </div>
                                <div class="flex justify-start items-center gap-2">
                                    <div class="justify-start text-slate-100 text-sm">Refound policy</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </div>

    <dialog id="download_modal" class="modal">
        <div class="modal-box max-w-3xl bg-white font-[Onest] text-black">
            <h3 class="mb-4 text-lg font-bold">Opcoes de download</h3>
            <div class="overflow-x-auto">
                <table class="table">
                    <thead>
                        <tr class="text-black bg-black/25">
                            <th>Nome</th>
                            <th>Platform</th>
                            <th>Descricao</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in downloads" :key="item.id">
                            <td>{{ item.name }}</td>
                            <td align="center">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M3.005 12L3 6.408L9.8 5.485V12.002H3.005V12ZM11 5.32L19.997 4V12H11V5.32ZM20.067 13L19.998 21L10.933 19.725L11 13H20.067ZM9.8 19.58L3.005 18.649V13H9.8V19.58Z"
                                        fill="#007AFF"
                                    />
                                </svg>
                            </td>
                            <td>{{ item.description }}</td>
                            <td width="20%">
                                <NuxtLink
                                    :external="true"
                                    :to="item.url"
                                    target="_blank"
                                    rel="noopener"
                                    class="btn btn-primary btn-block btn-sm rounded-full"
                                >
                                    Download
                                </NuxtLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
</template>

<script setup lang="ts">
useHead({
    title: 'L2Detona | League of Lineage',
})

const detonaEnvolvedOpensAt = new Date('2026-02-27T20:00:00')
const detonaHighFiveOpensAt = new Date('2026-08-30T21:00:00')

const {
    display: detonaEnvolvedDisplay,
    isOnline: detonaEnvolvedIsOnline,
} = useCountdown(detonaEnvolvedOpensAt)

const {
    display: detonaHighFiveDisplay,
    isOnline: detonaHighFiveIsOnline,
} = useCountdown(detonaHighFiveOpensAt)

const heroStats = [
    { label: 'Formato', value: 'Partidas instanciadas e competitivas' },
    { label: 'Foco', value: 'Pressao de mapa, teamfight e objetivo' },
    { label: 'Replay', value: 'Cada match exige leitura e adaptacao' },
]

const classCards = [
    {
        id: 'adventure',
        name: 'Adventure',
        characterImageSrc: '/class/adventure.webp',
        titleImageSrc: '/class/adventure-class-name.webp',
        previewVideoSrc: null,
    },
    {
        id: 'cardinal',
        name: 'Cardinal',
        characterImageSrc: '/class/cardinal.webp',
        titleImageSrc: '/class/cardinal-class-name.webp',
        previewVideoSrc: null,
    },
    {
        id: 'dreadnought',
        name: 'Dreadnought',
        characterImageSrc: '/class/dreadnought.webp',
        titleImageSrc: '/class/dreadnought-class-name.webp',
        previewVideoSrc: null,
    },
    {
        id: 'phoenix-knight',
        name: 'Phoenix Knight',
        characterImageSrc: '/class/phoenix-knight.webp',
        titleImageSrc: '/class/phoenix-knight-class-name.webp',
        previewVideoSrc: null,
    },
    {
        id: 'storm-screamer',
        name: 'Storm Screamer',
        characterImageSrc: '/class/storm-screamer.webp',
        titleImageSrc: '/class/storm-screamer-class-name.webp',
        previewVideoSrc: null,
    },
    {
        id: 'titan',
        name: 'Titan',
        characterImageSrc: '/class/titan.webp',
        titleImageSrc: '/class/titan-class-name.webp',
        previewVideoSrc: null,
    },
]

const impactPillars = [
    {
        kicker: 'Territorio',
        title: 'Mapa vivo',
        text: 'Cada rota importa, cada avancada abre espaco e cada erro muda o ritmo da partida.',
    },
    {
        kicker: 'Progressao',
        title: 'Poder dentro da match',
        text: 'Voce comeca definido, cresce durante o confronto e sente a evolucao em tempo real.',
    },
    {
        kicker: 'Decisao',
        title: 'Objetivo acima do caos',
        text: 'Nao basta trocar dano. Vence quem pressiona melhor, administra vantagem e fecha a base.',
    },
]

const featureCards = [
    {
        title: 'Partidas instanciadas',
        text: 'Cada confronto acontece em um ambiente isolado, competitivo e justo, sem interferencia do mundo aberto.',
    },
    {
        title: 'Progressao durante a match',
        text: 'Seu personagem cresce dentro da partida, desbloqueando forca real conforme avanca no jogo.',
    },
    {
        title: 'Classes com identidade',
        text: 'Cada classe possui estilo, ritmo e funcao proprios para compor estrategias de equipe.',
    },
    {
        title: 'Torres, rotas e pressao de mapa',
        text: 'Nao basta matar. E preciso empurrar rota, conquistar espaco e abrir caminho ate a vitoria.',
    },
    {
        title: 'Combate constante',
        text: 'Teamfights, pickoffs, defesa de base e decisoes rapidas aparecem a cada minuto da partida.',
    },
    {
        title: 'Competitividade de verdade',
        text: 'Tudo foi desenhado para entregar partidas dinamicas, emocionantes e com alto fator de replay.',
    },
]

const steps = [
    'Selecione uma das classes disponíveis.',
    'Faça jungle para acumular Adena e evoluir seus equipamentos.',
    'Elimine minions adversários e obtenha level para evoluir seu herói.',
    'Jogue de forma estratégica e ajude seu time a conquistar espaco.',
    'Destrua as torres inimigas.',
    'Avance ate a base e finalize o Nexus adversario.',
]

const matchHighlights = [
    {
        kicker: 'Virada',
        title: 'Defesa improvavel',
        text: 'Uma base quase perdida pode virar o jogo quando a equipe encaixa a luta certa no momento certo.',
    },
    {
        kicker: 'Leitura',
        title: 'Pickoff que abre rota',
        text: 'Uma eliminacao precisa muda a pressao do mapa e abre janela para objetivo, torre e controle.',
    },
    {
        kicker: 'Execucao',
        title: 'Teamfight decisiva',
        text: 'Sincronia, sangue frio e escolha de alvo definem quem avanca e quem assiste a queda da propria base.',
    },
]

const visualHighlights = [
    {
        title: 'Rotas sob pressao',
        text: 'Empurre terreno, responda movimentacoes inimigas e decida quando forcar luta ou objetivo.',
    },
    {
        title: 'Classes com funcao clara',
        text: 'Entre sabendo seu papel e adapte sua execucao conforme a partida se desenvolve.',
    },
    {
        title: 'Objetivos com peso',
        text: 'Torres, base e espaco de mapa definem a vitoria tanto quanto eliminacoes bem convertidas.',
    },
    {
        title: 'Ritmo alto',
        text: 'A partida nao para. Defesa, avancada e reposicionamento exigem atencao constante.',
    },
]

const faqItems = [
    {
        question: 'O que e o evento MOBA?',
        answer: 'E um modo de jogo instanciado com foco em estrategia, progressao por partida, destruicao de torres e vitoria por objetivos.',
    },
    {
        question: 'Preciso estar forte no mundo aberto para jogar?',
        answer: 'Nao. A experiencia foi pensada para a partida acontecer dentro do proprio evento, com regras e progressao proprias.',
    },
    {
        question: 'E focado em PvP?',
        answer: 'Sim. O evento foi feito para jogadores que gostam de confronto, coordenacao em equipe e disputa por mapa.',
    },
]

const downloads = [
    {
        id: '1',
        name: 'Client Full (4.1GB)',
        description: 'Full game client download (Mediafire)',
        url: 'https://www.mediafire.com/file/sr17ymdrd8fqbs5/CLIENT_FULL_L2DETONA.zip/file',
    },
    {
        id: '2',
        name: 'Client Full (4.1GB)',
        description: 'Full game client download (Google Drive)',
        url: 'https://drive.google.com/file/d/1E93o5gu8BvOIdldL5VGSQZ7mqOK8cBjw/view?usp=sharing',
    },
    {
        id: '3',
        name: 'Client Full (4.1GB)',
        description: 'Full game client download (Mega)',
        url: 'https://mega.nz/file/8mEGyLgY#yRzDV3Rb4uqv-37GOWxRz3hIXGfbZcXv5MFl6GMTkmU',
    },
]

const { isOpen, toggle, close, closeAll } = useUiMenus()

function openDownloadModal() {
    const modal = document.getElementById('download_modal') as HTMLDialogElement | null
    modal?.showModal()
}

function onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
        closeAll()
    }
}

onMounted(() => {
    window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKeydown)
})
</script>

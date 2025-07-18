<template>
  <header
    class="sticky inset-x-0 top-0 z-50 w-full bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800"
  >
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <RouterLink to="/" class="-m-1.5 p-1.5 flex gap-x-4 items-center">
          <img
            class="h-10 w-auto"
            src="@/assets/images/logo.png"
            alt="Afonso Management"
          />
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Afonso Management
          </h3>
        </RouterLink>
      </div>
      <div class="flex lg:hidden">
        <ThemeToggle class="mr-2" />
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <FAI icon="bars" class="size-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-10">
        <RouterLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          class="flex items-center gap-1 text-sm/6 font-semibold text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <FAI
            :icon="item.icon"
            class="inline-block h-4 w-6 text-gray-500 dark:text-white"
            aria-hidden="true"
          />
          <span>{{ item.name }}</span>
        </RouterLink>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <ThemeToggle />
      </div>
    </nav>
    <!-- Mobile menu overlay -->
    <div
      v-if="mobileMenuOpen"
      class="fixed inset-0 z-50 lg:hidden"
      @click="mobileMenuOpen = false"
    ></div>

    <!-- Mobile menu -->
    <div
      :class="[
        'fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-gray-100/10 transition-transform duration-300 ease-in-out lg:hidden',
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full',
      ]"
    >
      <div class="flex items-center justify-between">
        <RouterLink to="/" class="-m-1.5 p-1.5 flex gap-x-4 items-center">
          <img
            class="h-10 w-auto"
            src="@/assets/images/logo.png"
            alt="Afonso Management"
          />
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Afonso Management
          </h3>
        </RouterLink>
        <button
          type="button"
          class="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
          @click="mobileMenuOpen = false"
        >
          <span class="sr-only">Close menu</span>
          <FAI icon="x" class="size-6" aria-hidden="true" />
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10 dark:divide-gray-400/10">
          <div class="space-y-2 py-6">
            <RouterLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              @click="mobileMenuOpen = false"
              class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <FAI
                :icon="item.icon"
                class="inline-block h-4 w-6 text-gray-700 dark:text-white"
              />
              {{ item.name }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import ThemeToggle from "@/components/ThemeToggle.vue";

import { ref } from "vue";
import { RouterLink } from "vue-router";

const navigation = [
  { name: "Home", href: "/", icon: "house" },
  { name: "Services", href: "/services", icon: "screwdriver-wrench" },
  { name: "About", href: "/about", icon: "building" },
  { name: "Contact", href: "/contact", icon: "envelope" },
];
const mobileMenuOpen = ref(false);
</script>

<template>
  <header class="sticky inset-x-0 top-0 z-50 w-full bg-white shadow-sm">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <RouterLink to="/" class="-m-1.5 p-1.5 flex gap-x-4 items-center">
          <img
            class="h-10 w-auto"
            src="@/assets/images/logo3.png"
            alt="Afonso Management"
          />
          <h3 class="text-lg font-semibold text-gray-900">Afonso Management</h3>
        </RouterLink>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-10">
        <RouterLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          class="flex items-center gap-1 text-sm/6 font-semibold text-gray-900"
        >
          <component
            :is="item.icon || HomeIcon"
            class="inline-block h-4 w-6"
            aria-hidden="true"
          />
          <span>{{ item.name }}</span>
        </RouterLink>
      </div>
      <!-- <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="text-sm/6 font-semibold text-gray-900"
          >Log in <span aria-hidden="true">&rarr;</span></a
        >
      </div> -->
    </nav>
    <Dialog
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <RouterLink to="/" class="-m-1.5 p-1.5 flex gap-x-4 items-center">
            <img
              class="h-10 w-auto"
              src="@/assets/images/logo3.png"
              alt="Afonso Management"
            />
            <h3 class="text-lg font-semibold text-gray-900">
              Afonso Management
            </h3>
          </RouterLink>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <RouterLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >
                <component
                  :is="item.icon || HomeIcon"
                  class="inline-block h-6 w-6 mr-2"
                  aria-hidden="true"
                />
                {{ item.name }}
              </RouterLink>
            </div>
            <div class="py-6">
              <!-- <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >Log in</a
              > -->
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  EnvelopeIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/vue/24/outline";
import { RouterLink } from "vue-router";
const navigation = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Services", href: "/services", icon: WrenchScrewdriverIcon },
  { name: "About", href: "/about", icon: BuildingOfficeIcon },
  { name: "Contact", href: "/contact", icon: EnvelopeIcon },
];
const mobileMenuOpen = ref(false);
</script>

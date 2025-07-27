<template>
  <header
    class="sticky inset-x-0 top-0 z-[100] w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm dark:shadow-gray-800 border-b border-gray-200/50 dark:border-gray-700/50"
    v-motion
    :initial="{ opacity: 0, y: -20 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
  >
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
      aria-label="Global"
    >
      <!-- Logo section -->
      <div class="flex lg:flex-1">
        <a
          href="#home"
          @click.prevent="scrollToSection('home')"
          class="-m-1.5 p-1.5 flex gap-x-4 items-center group hover:scale-105 transition-all duration-300 cursor-pointer"
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: { duration: 500, delay: 200 },
          }"
        >
          <img
            class="h-10 w-auto group-hover:rotate-12 transition-transform duration-300"
            src="@/assets/images/logo.png"
            alt="Afonso Management"
          />
          <h3
            class="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300"
          >
            Afonso Management
          </h3>
        </a>
      </div>

      <!-- Mobile menu controls -->
      <div class="flex items-center lg:hidden">
        <ThemeToggle class="mr-3" />
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-110 transition-all duration-200 border border-gray-300 dark:border-gray-600"
          @click="toggleMobileMenu"
          v-motion
          :initial="{ opacity: 0, scale: 0 }"
          :enter="{
            opacity: 1,
            scale: 1,
            transition: { duration: 400, delay: 300 },
          }"
        >
          <span class="sr-only">Open main menu</span>
          <FAI icon="bars" class="size-6" aria-hidden="true" />
        </button>
      </div>

      <!-- Desktop navigation -->
      <div class="hidden lg:flex lg:gap-x-10">
        <a
          v-for="(item, index) in navigation"
          :key="item.name"
          :href="'#' + item.section"
          @click.prevent="scrollToSection(item.section)"
          class="flex items-center gap-1 text-sm/6 font-semibold text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-105 transition-all duration-300 group relative cursor-pointer"
          :class="{
            'text-indigo-600 dark:text-indigo-400':
              activeSection === item.section,
          }"
          v-motion
          :initial="{ opacity: 0, y: -10 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { duration: 400, delay: 300 + index * 100 },
          }"
        >
          <FAI
            :icon="item.icon"
            class="inline-block h-4 w-6 text-gray-500 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:rotate-12 transition-all duration-300"
            :class="{
              'text-indigo-600 dark:text-indigo-400':
                activeSection === item.section,
            }"
            aria-hidden="true"
          />
          <span class="relative">
            {{ item.name }}
            <!-- Animated underline -->
            <div
              class="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300"
              :class="
                activeSection === item.section
                  ? 'w-full'
                  : 'w-0 group-hover:w-full'
              "
            ></div>
          </span>
        </a>
      </div>

      <!-- Theme toggle for desktop -->
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0 }"
          :enter="{
            opacity: 1,
            scale: 1,
            transition: { duration: 400, delay: 600 },
          }"
        >
          <ThemeToggle />
        </div>
      </div>
    </nav>

    <!-- Mobile menu overlay -->
    <div
      v-show="mobileMenuOpen"
      class="fixed inset-0 z-[9998] lg:hidden"
      style="z-index: 99998 !important"
      @click="closeMobileMenu"
    ></div>

    <!-- Enhanced mobile menu -->
    <div
      v-show="mobileMenuOpen"
      :class="[
        'fixed inset-y-0 right-0 z-[9999] w-full overflow-y-auto bg-white dark:bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-gray-100/10 transition-transform duration-300 ease-out lg:hidden shadow-2xl border-l border-gray-200 dark:border-gray-700',
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full',
      ]"
      style="height: 100vh"
    >
      <!-- Mobile menu header -->
      <div class="flex items-center justify-between">
        <a
          href="#home"
          @click.prevent="scrollToSectionAndClose('home')"
          class="-m-1.5 p-1.5 flex gap-x-4 items-center cursor-pointer"
        >
          <img
            class="h-10 w-auto"
            src="@/assets/images/logo.png"
            alt="Afonso Management"
          />
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Afonso Management
          </h3>
        </a>
        <button
          type="button"
          class="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-110 transition-all duration-200"
          @click="closeMobileMenu"
        >
          <span class="sr-only">Close menu</span>
          <FAI icon="x" class="size-6" aria-hidden="true" />
        </button>
      </div>

      <!-- Mobile navigation links -->
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10 dark:divide-gray-400/10">
          <div class="space-y-2 py-6">
            <a
              v-for="(item, index) in navigation"
              :key="item.name"
              :href="'#' + item.section"
              @click.prevent="scrollToSectionAndClose(item.section)"
              class="-mx-3 flex items-center gap-3 rounded-lg px-3 py-3 text-base/7 font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-300 group cursor-pointer"
              :class="{
                'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400':
                  activeSection === item.section,
              }"
              :style="{ animationDelay: `${index * 100}ms` }"
            >
              <FAI
                :icon="item.icon"
                class="h-5 w-5 text-gray-700 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:rotate-12 transition-all duration-300"
                :class="{
                  'text-indigo-600 dark:text-indigo-400':
                    activeSection === item.section,
                }"
              />
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import ThemeToggle from "@/components/ThemeToggle.vue";
import { ref, onMounted, onUnmounted } from "vue";

const navigation = [
  { name: "Home", section: "home", icon: "house" },
  { name: "Services", section: "services", icon: "screwdriver-wrench" },
  { name: "About", section: "about", icon: "building" },
  { name: "Contact", section: "contact", icon: "envelope" },
];

const mobileMenuOpen = ref(false);
const activeSection = ref("home");

// Debug function to check mobile menu state
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;

  // Prevent body scroll when mobile menu is open
  if (mobileMenuOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

// Close mobile menu
const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
  // Re-enable body scroll
  document.body.style.overflow = "";
};

// Scroll to section and close mobile menu
const scrollToSectionAndClose = (sectionId) => {
  scrollToSection(sectionId);
  closeMobileMenu();
};

// Smooth scroll to section
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = 80; // Account for fixed header
    const elementPosition = element.offsetTop - headerHeight;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }
};

// Track active section based on scroll position
const updateActiveSection = () => {
  const sections = navigation.map((item) => item.section);
  const scrollPosition = window.scrollY + 150; // Offset for header

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i]);
    if (section && section.offsetTop <= scrollPosition) {
      activeSection.value = sections[i];
      break;
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", updateActiveSection);
  updateActiveSection(); // Set initial active section
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateActiveSection);
  // Cleanup body overflow style when component unmounts
  document.body.style.overflow = "";
});
</script>

<template>
  <button
    @click="toggleTheme"
    class="relative inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 transition-colors duration-200"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <Transition name="fade" mode="out-in">
      <FAI
        icon="moon"
        v-if="isDark"
        key="sun"
        class="h-5 w-5"
        aria-hidden="true"
      />
      <FAI icon="sun" v-else key="moon" class="h-5 w-5" aria-hidden="true" />
    </Transition>
  </button>
</template>

<script setup>
import { useTheme } from "@/composables/useTheme";

const { isDark, toggleTheme } = useTheme();
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

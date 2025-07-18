<template>
  <div
    class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 w-full"
  >
    <MenuBar />
    <main class="flex-1">
      <router-view />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import MenuBar from "@/components/MenuBar.vue";
import FooterSection from "@/components/FooterSection.vue";
</script>

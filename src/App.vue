<template>
  <MenuBar />
  <router-view />
  <FooterSection />
</template>

<script setup>
import MenuBar from "@/components/MenuBar.vue";
import FooterSection from "@/components/FooterSection.vue";
</script>

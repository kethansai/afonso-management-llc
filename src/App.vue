<template>
  <div
    class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 w-full"
  >
    <MenuBar />
    <main class="flex-1 relative" style="z-index: 0 !important">
      <!-- Hero Section -->
      <section id="home" class="section">
        <CeoIntroSection />
        <HeroSection />
      </section>

      <!-- Services Section -->
      <section id="services" class="section">
        <ServicesSection />
      </section>

      <!-- Projects Section -->
      <section id="projects" class="section">
        <ProjectsSection />
      </section>

      <!-- About Section -->
      <section id="about" class="section">
        <TeamSection />
      </section>

      <!-- Testimonials Section -->
      <section id="testimonials" class="section">
        <TestimonialsSection />
      </section>

      <!-- Contact Section -->
      <section id="contact" class="section">
        <ContactSection />
      </section>
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import MenuBar from "@/components/MenuBar.vue";
import FooterSection from "@/components/FooterSection.vue";

// Import all sections
import HeroSection from "@/sections/home/HeroSection.vue";
import ServicesSection from "@/sections/home/ServicesSection.vue";
import TeamSection from "@/sections/about/TeamSection.vue";
import ProjectsSection from "@/sections/ProjectsSection.vue";
import TestimonialsSection from "@/sections/home/TestimonialsSection.vue";
import ContactSection from "@/sections/ContactSection.vue";
import CeoIntroSection from "@/sections/about/CeoIntroSection.vue";
</script>

<style scoped>
/* Page transition container */
main {
  overflow: hidden;
}

/* Ensure smooth transitions */
* {
  transition-property: transform, opacity, background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>

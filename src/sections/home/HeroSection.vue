<template>
  <main>
    <div class="relative isolate overflow-hidden">
      <!-- Main content -->
      <div class="overflow-hidden">
        <div class="mx-auto px-6 pt-10 pb-12 sm:pt-24 lg:px-8 lg:pt-20">
          <div
            class="mx-auto gap-14 flex-root lg:flex lg:items-center max-w-7xl"
          >
            <!-- Left content section -->
            <div
              ref="leftContent"
              class="relative mx-auto w-full md:w-2/3"
              v-motion
              :initial="{ opacity: 0, x: -100, rotateY: -15 }"
              :enter="{
                opacity: 1,
                x: 0,
                rotateY: 0,
                transition: { duration: 1000, delay: 500, ease: 'backOut' },
              }"
            >
              <!-- Title with typewriter effect -->
              <h3
                ref="heroTitle"
                class="text-4xl text-center md:text-left md:text-5xl font-semibold mb-2 tracking-tight dark:text-transparent dark:bg-gradient-to-r dark:from-blue-600 dark:to-purple-600 bg-clip-text"
                v-motion
                :initial="{ opacity: 0, y: 50, scale: 0.9 }"
                :enter="{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 800, delay: 700, ease: 'backOut' },
                }"
              >
                Afonso Management
              </h3>

              <!-- Description with stagger animation -->
              <p
                ref="heroDescription"
                class="mt-8 text-center md:text-left text-lg leading-8 text-gray-600 dark:text-gray-300"
                v-motion
                :initial="{ opacity: 0, y: 30 }"
                :enter="{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 600, delay: 900 },
                }"
              >
                We are a premier sports facility management company dedicated to
                delivering excellence, innovation, and outstanding performance.
                Our experienced team excels at streamlining operations,
                enhancing athlete and guest experiences, and fostering
                sustainable growth for multi-sport venues. With an emphasis on
                quality, efficiency, and long-term success, we transform sports
                facilities into vibrant, high-performance environments.
              </p>

              <!-- Call-to-action buttons -->
              <div
                ref="ctaButtons"
                class="mt-10 flex items-center justify-center md:justify-start gap-x-6"
                v-motion
                :initial="{ opacity: 0, y: 30 }"
                :enter="{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 600, delay: 1100 },
                }"
              >
                <a
                  href="#services"
                  class="group relative overflow-hidden rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  v-motion
                  :initial="{ scale: 0 }"
                  :enter="{
                    scale: 1,
                    transition: { duration: 500, delay: 1300, ease: 'backOut' },
                  }"
                >
                  <span class="relative z-10">Our Services</span>
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></div>
                </a>
                <a
                  href="#about"
                  class="text-sm/6 font-semibold text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:translate-x-1"
                  v-motion
                  :initial="{ opacity: 0, x: -20 }"
                  :enter="{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 500, delay: 1500 },
                  }"
                >
                  About us
                  <span
                    class="inline-block transition-transform duration-300 hover:translate-x-1"
                    aria-hidden="true"
                    >→</span
                  >
                </a>
              </div>

              <!-- Floating elements -->
              <div
                class="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full opacity-60"
                v-motion
                :initial="{ scale: 0, rotate: 0 }"
                :enter="{
                  scale: 1,
                  rotate: 360,
                  transition: { duration: 1000, delay: 1600, ease: 'backOut' },
                }"
              ></div>
              <div
                class="absolute top-1/4 -left-8 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-40"
                v-motion
                :initial="{ scale: 0, rotate: 0 }"
                :enter="{
                  scale: 1,
                  rotate: -180,
                  transition: { duration: 800, delay: 1800, ease: 'backOut' },
                }"
              ></div>
            </div>

            <!-- Right image collage -->
            <div
              ref="imageCollage"
              class="relative mx-auto w-full md:w-1/3 mt-20 lg:mt-0"
              v-motion
              :initial="{ opacity: 0, x: 100, rotateY: 15 }"
              :enter="{
                opacity: 1,
                x: 0,
                rotateY: 0,
                transition: { duration: 1000, delay: 600, ease: 'backOut' },
              }"
            >
              <!-- Grid container for collage layout -->
              <div
                class="grid grid-cols-6 grid-rows-5 gap-2 h-96 lg:h-[28rem] relative"
              >
                <!-- Image 1 -->
                <img
                  ref="img1"
                  class="col-span-3 row-span-3 object-cover w-full h-full rounded-xl bg-gray-900/5 shadow-xl transform hover:scale-110 hover:rotate-2 transition-all duration-500 hover:z-10 relative"
                  src="@/assets/images/services/badminton.jpg"
                  alt="Sports facility"
                  v-motion
                  :initial="{ opacity: 0, scale: 0.5, rotate: -10 }"
                  :enter="{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    transition: { duration: 800, delay: 1000, ease: 'backOut' },
                  }"
                />

                <!-- Image 2 -->
                <img
                  ref="img2"
                  class="col-span-3 row-span-3 object-cover w-full h-full rounded-xl bg-gray-900/5 shadow-xl transform hover:scale-110 hover:-rotate-2 transition-all duration-500 hover:z-10 relative"
                  src="@/assets/images/services/coaching.jpg"
                  alt="Team meeting"
                  v-motion
                  :initial="{ opacity: 0, scale: 0.5, rotate: 10 }"
                  :enter="{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    transition: { duration: 800, delay: 1200, ease: 'backOut' },
                  }"
                />

                <!-- Image 3 -->
                <img
                  ref="img3"
                  class="col-span-4 row-span-2 object-cover w-full h-full rounded-xl bg-gray-900/5 shadow-xl transform hover:scale-110 hover:rotate-1 transition-all duration-500 hover:z-10 relative"
                  src="@/assets/images/services/table-tennis.jpg"
                  alt="Training session"
                  v-motion
                  :initial="{ opacity: 0, scale: 0.5, y: 50 }"
                  :enter="{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { duration: 800, delay: 1400, ease: 'backOut' },
                  }"
                />

                <!-- Image 4 -->
                <img
                  ref="img4"
                  class="col-span-2 row-span-3 object-cover w-full h-full rounded-xl bg-gray-900/5 shadow-xl transform hover:scale-110 hover:-rotate-3 transition-all duration-500 hover:z-10 relative"
                  src="@/assets/images/services/fitness-centre.jpg"
                  alt="Fitness equipment"
                  v-motion
                  :initial="{ opacity: 0, scale: 0.5, rotate: -15 }"
                  :enter="{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    transition: { duration: 800, delay: 1600, ease: 'backOut' },
                  }"
                />

                <!-- Decorative floating elements -->
                <div
                  class="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-70 animate-bounce"
                  v-motion
                  :initial="{ scale: 0, y: -20 }"
                  :enter="{
                    scale: 1,
                    y: 0,
                    transition: { duration: 600, delay: 1800 },
                  }"
                ></div>
                <div
                  class="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-60 animate-pulse"
                  v-motion
                  :initial="{ scale: 0, x: -20 }"
                  :enter="{
                    scale: 1,
                    x: 0,
                    transition: { duration: 600, delay: 2000 },
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAnimations } from "@/composables/useAnimations";

const { createStaggerAnimation, typeWriter } = useAnimations();

// Template refs
const heroTitle = ref(null);
const heroDescription = ref(null);
const leftContent = ref(null);
const imageCollage = ref(null);

onMounted(() => {
  // Add typewriter effect to title after initial animation
  setTimeout(() => {
    if (heroTitle.value) {
      const titleText = heroTitle.value.textContent;
      typeWriter(heroTitle.value, titleText, 30);
    }
  }, 1500);

  // Create floating animation for background elements
  if (typeof window !== "undefined") {
    const floatingElements = document.querySelectorAll(
      ".animate-bounce, .animate-pulse"
    );
    floatingElements.forEach((el, index) => {
      setTimeout(() => {
        el.style.animationDelay = `${index * 0.5}s`;
      }, 2000);
    });
  }
});
</script>

<style scoped>
/* Custom animations */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-10px) rotate(1deg);
  }
  66% {
    transform: translateY(-5px) rotate(-1deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Gradient text animation */
@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}

/* Image hover effects */
.grid img:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>

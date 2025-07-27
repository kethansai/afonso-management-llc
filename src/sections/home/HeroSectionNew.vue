<template>
  <main>
    <div class="relative isolate overflow-hidden mb-16">
      <!-- Animated background -->
      <div
        ref="bgPattern"
        class="absolute inset-0 -z-20"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { duration: 1000 } }"
      >
        <svg
          class="absolute inset-x-0 top-0 h-256 w-full mask-[radial-gradient(32rem_32rem_at_center,white,transparent)] stroke-gray-200 dark:stroke-gray-700"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="hero-pattern"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg
            x="50%"
            y="-1"
            class="overflow-visible fill-gray-50 dark:fill-gray-800"
          >
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              stroke-width="0"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#hero-pattern)"
          />
        </svg>
      </div>

      <!-- Floating gradient blur -->
      <div
        ref="floatingBlur"
        class="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        aria-hidden="true"
        v-motion
        :initial="{ opacity: 0, scale: 0.8, rotate: -10 }"
        :enter="{
          opacity: 1,
          scale: 1,
          rotate: 0,
          transition: { duration: 1500, delay: 300 },
        }"
      >
        <div
          class="aspect-801/1036 w-200.25 bg-gradient-to-tr from-[#ff80b5] via-[#9089fc] to-[#10b981] opacity-30"
          style="
            clip-path: polygon(
              63.1% 29.5%,
              100% 17.1%,
              76.6% 3%,
              48.4% 0%,
              44.6% 4.7%,
              54.5% 25.3%,
              59.8% 49%,
              55.2% 57.8%,
              44.4% 57.2%,
              27.8% 47.9%,
              35.1% 81.5%,
              0% 97.7%,
              39.2% 100%,
              35.2% 81.4%,
              97.2% 52.8%,
              63.1% 29.5%
            );
          "
        />
      </div>

      <!-- Main content -->
      <div class="overflow-hidden">
        <div class="mx-auto px-6 pt-10 pb-32 sm:pt-24 lg:px-8 lg:pt-20">
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
              <h1
                ref="heroTitle"
                class="text-3xl font-semibold tracking-tight text-pretty text-center md:text-left text-gray-900 dark:text-white md:text-6xl lg:text-7xl"
                v-motion
                :initial="{ opacity: 0, y: 50, scale: 0.9 }"
                :enter="{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 800, delay: 700, ease: 'backOut' },
                }"
              >
                <span
                  class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                >
                  Hi, I'm Oscar Afonso
                </span>
              </h1>

              <!-- Description with stagger animation -->
              <p
                ref="heroDescription"
                class="mt-8 text-lg font-medium text-pretty text-gray-500 dark:text-gray-300 sm:text-xl/8"
                v-motion
                :initial="{ opacity: 0, y: 30 }"
                :enter="{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 600, delay: 900 },
                }"
              >
                We are a leading sports facility management company committed to
                excellence, innovation, and performance. Our expert team
                specializes in optimizing operations, elevating athlete and
                guest experiences, and driving sustainable growth for
                multi-sport venues. With a focus on quality, efficiency, and
                long-term success, we turn sports facilities into thriving,
                high-performance environments.
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
                <router-link
                  to="/services"
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
                </router-link>
                <router-link
                  to="/about"
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
                </router-link>
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
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
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
                  src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
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
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
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
                  src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
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

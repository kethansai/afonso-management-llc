`
<template>
  <main>
    <div class="relative isolate overflow-hidden">
      <div
        class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 px-4 sm:px-6 py-8 md:py-12"
      >
        <!-- CEO Image with enhanced styling -->
        <div
          class="w-full md:w-2/5 relative group"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: { duration: 800, delay: 200 },
          }"
        >
          <div
            class="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
          >
            <img
              src="@/assets/images/team/ceo.jpg"
              alt="Oscar Afonso - CEO"
              class="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover object-[center_top]"
            />
            <!-- Overlay gradient -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-80"
            ></div>

            <!-- Blur effect on edges -->
            <div class="absolute -inset-4 opacity-40 bg-blur">
              <div
                class="absolute inset-0"
                style="
                  background-image: url(@/assets/images/team/ceo.jpg);
                  background-size: cover;
                  background-position: center;
                  filter: blur(20px);
                "
              ></div>
            </div>
          </div>
          <!-- Decorative elements -->
          <div
            class="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"
          ></div>
          <div
            class="absolute -top-4 -left-4 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl"
          ></div>
        </div>

        <!-- CEO Introduction Text -->
        <div
          class="w-full md:w-3/5"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: { duration: 800, delay: 400 },
          }"
        >
          <div class="space-y-6">
            <h2
              class="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 tracking-tight dark:text-transparent dark:bg-gradient-to-r dark:from-blue-600 dark:to-purple-600 bg-clip-text font-playfair"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{
                opacity: 1,
                y: 0,
                transition: { duration: 600, delay: 600 },
              }"
            >
              Hi, I'm Oscar Afonso <br />
              <span class="text-3xl">Welcome to my business.</span>
            </h2>
            <!-- <div
              class="w-40 h-1 mx-auto dark:bg-gradient-to-r dark:from-blue-600 dark:to-purple-600 rounded-full"
              v-motion
              :initial="{ scaleX: 0 }"
              :enter="{ scaleX: 1, transition: { duration: 600, delay: 800 } }"
            ></div> -->
            <!-- <p
              class="text-center text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 dark:text-gray-300"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{
                opacity: 1,
                y: 0,
                transition: { duration: 600, delay: 1000 },
              }"
            >
              We are a leading sports facility management company committed to
              <span class="font-medium text-blue-600 dark:text-blue-400"
                >excellence</span
              >,
              <span class="font-medium text-purple-600 dark:text-purple-400"
                >innovation</span
              >, and
              <span class="font-medium text-indigo-600 dark:text-indigo-400"
                >performance</span
              >. Our expert team specializes in optimizing operations, elevating
              athlete and guest experiences, and driving sustainable growth for
              multi-sport venues. With a focus on quality, efficiency, and
              long-term success, we turn sports facilities into thriving,
              high-performance environments.
            </p> -->
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
// Component logic
</script>

<style scoped>
.font-playfair {
  font-family: "Playfair Display", serif;
}

.font-poppins {
  font-family: "Poppins", sans-serif;
}

.spacing-wide {
  letter-spacing: 0.015em;
}

.bg-blur {
  pointer-events: none;
  z-index: -1;
}

/* Smooth transition effects */
.group:hover .bg-blur {
  opacity: 0.5;
  transition: opacity 0.5s ease;
}

/* Gradient text animation */
@keyframes gradient {
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

h2 {
  background-size: 200% auto;
  animation: gradient 8s ease infinite;
}
</style>
`

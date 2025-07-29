<template>
  <div class="bg-white dark:bg-gray-900">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Header Section -->
      <div
        class="text-center mb-16"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
      >
        <h2
          class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
        >
          <span
            class="dark:bg-gradient-to-r dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600 dark:bg-clip-text dark:text-transparent"
          >
            Our Projects
          </span>
        </h2>
        <p
          class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Discover our current achievements and exciting upcoming ventures that
          continue to elevate the sports and wellness industry.
        </p>
      </div>

      <!-- Current Projects -->
      <div class="mb-20">
        <div
          class="flex items-center justify-center mb-12"
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: { duration: 600, delay: 400 },
          }"
        >
          <div
            class="flex-grow h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
          ></div>
          <h3
            class="mx-6 text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-3"
          >
            <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            Current Projects
          </h3>
          <div
            class="flex-grow h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
          ></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(project, index) in currentProjects"
            :key="project.id"
            class="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700/20 hover:shadow-2xl dark:hover:shadow-gray-700/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
            v-motion
            :initial="{ opacity: 0, y: 60, rotateX: -15 }"
            :enter="{
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: {
                duration: 700,
                delay: 600 + index * 200,
                ease: 'backOut',
              },
            }"
          >
            <!-- Project Image -->
            <div class="relative overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <!-- Status Badge -->
              <div
                class="absolute top-4 left-4 px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full shadow-lg"
              >
                <div class="flex items-center gap-2">
                  <div
                    class="w-2 h-2 bg-white rounded-full animate-pulse"
                  ></div>
                  Active
                </div>
              </div>
              <!-- Overlay gradient -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </div>

            <!-- Project Content -->
            <div class="p-6">
              <h4
                class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300"
              >
                {{ project.title }}
              </h4>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {{ project.description }}
              </p>
              <!-- Project Stats -->
              <div class="flex items-center justify-between text-sm">
                <span
                  class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full font-medium"
                >
                  {{ project.category }}
                </span>
                <div
                  class="flex items-center gap-2 text-gray-500 dark:text-gray-400"
                >
                  <FAI icon="calendar" class="h-4 w-4" />
                  <span>{{ project.year }}</span>
                </div>
              </div>
            </div>

            <!-- Decorative elements -->
            <div
              class="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div
              class="absolute bottom-2 right-2 w-2 h-2 bg-indigo-400 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"
            ></div>
          </div>
        </div>
      </div>

      <!-- Upcoming Projects -->
      <div>
        <div
          class="flex items-center justify-center mb-12"
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: { duration: 600, delay: 1000 },
          }"
        >
          <div
            class="flex-grow h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          ></div>
          <h3
            class="mx-6 text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-3"
          >
            <div class="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            Upcoming Projects
          </h3>
          <div
            class="flex-grow h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          ></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(project, index) in upcomingProjects"
            :key="project.id"
            class="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700/20 hover:shadow-2xl dark:hover:shadow-gray-700/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
            v-motion
            :initial="{ opacity: 0, y: 60, rotateX: 15 }"
            :enter="{
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: {
                duration: 700,
                delay: 1200 + index * 200,
                ease: 'backOut',
              },
            }"
          >
            <!-- Project Image -->
            <div class="relative overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <!-- Status Badge -->
              <div
                class="absolute top-4 left-4 px-3 py-1 bg-purple-500 text-white text-sm font-semibold rounded-full shadow-lg"
              >
                <div class="flex items-center gap-2">
                  <div
                    class="w-2 h-2 bg-white rounded-full animate-pulse"
                  ></div>
                  Coming Soon
                </div>
              </div>
              <!-- Overlay gradient -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <!-- Coming Soon Overlay -->
              <div
                class="absolute inset-0 bg-purple-500/10 dark:bg-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </div>

            <!-- Project Content -->
            <div class="p-6">
              <h4
                class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300"
              >
                {{ project.title }}
              </h4>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {{ project.description }}
              </p>
              <!-- Project Stats -->
              <div class="flex items-center justify-between text-sm">
                <span
                  class="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-medium"
                >
                  {{ project.category }}
                </span>
                <div
                  class="flex items-center gap-2 text-gray-500 dark:text-gray-400"
                >
                  <FAI icon="clock" class="h-4 w-4" />
                  <span>{{ project.timeline }}</span>
                </div>
              </div>
            </div>

            <!-- Decorative elements -->
            <div
              class="absolute top-2 right-2 w-3 h-3 bg-purple-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div
              class="absolute bottom-2 right-2 w-2 h-2 bg-pink-400 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"
            ></div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA Section -->
      <div
        class="mt-20 text-center"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: { duration: 600, delay: 1800 },
        }"
      >
        <div
          class="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl border border-indigo-200 dark:border-indigo-700/50"
        >
          <div class="flex -space-x-2">
            <div
              class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <FAI icon="check" class="h-4 w-4 text-white" />
            </div>
            <div
              class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <FAI icon="rocket" class="h-4 w-4 text-white" />
            </div>
          </div>
          <div class="text-left">
            <p class="text-sm font-semibold text-gray-900 dark:text-white">
              Ready to Partner With Us?
            </p>
            <p class="text-xs text-gray-600 dark:text-gray-300">
              Let's discuss your next project
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import project images
import PanAmImage from "@/assets/images/projects/pan-am-championship.jpg";
import YonexStoreImage from "@/assets/images/projects/yonex-store.jpg";
import OlympicsImage from "@/assets/images/projects/olympics-LA-2028.webp";
import PickleballImage from "@/assets/images/projects/pickle-ball.jpg";
import NewLocationImage from "@/assets/images/projects/new-badminton-location.png";

// Note: Arena Badminton doesn't have a specific image, so we'll use the badminton service image
import ArenaBadmintonImage from "@/assets/images/services/badminton.jpg";

const currentProjects = [
  {
    id: 1,
    title: "Arena Badminton",
    description:
      "Premier badminton facility management with world-class courts and professional training programs. Serving the badminton community with excellence.",
    image: ArenaBadmintonImage,
    category: "Facility Management",
    year: "2023-Present",
  },
  {
    id: 2,
    title: "Pan Am Championship",
    description:
      "Managing logistics and operations for the prestigious Pan American Badminton Championships, ensuring world-class tournament experiences.",
    image: PanAmImage,
    category: "Tournament Management",
    year: "2024",
  },
  {
    id: 3,
    title: "Yonex Store",
    description:
      "Strategic partnership and retail operations management for premium badminton equipment and accessories distribution.",
    image: YonexStoreImage,
    category: "Retail Partnership",
    year: "2023-Present",
  },
];

const upcomingProjects = [
  {
    id: 4,
    title: "Olympics LA 2028",
    description:
      "Preparing for the 2028 Los Angeles Olympics with comprehensive facility planning and athlete preparation programs for badminton events.",
    image: OlympicsImage,
    category: "Olympic Preparation",
    timeline: "2025-2028",
  },
  {
    id: 5,
    title: "Pickleball Expansion",
    description:
      "Launching state-of-the-art pickleball facilities to meet the growing demand for this exciting racquet sport in our community.",
    image: PickleballImage,
    category: "Facility Expansion",
    timeline: "Q2 2025",
  },
  {
    id: 6,
    title: "New Badminton & Wellness Center",
    description:
      "Developing a new multi-purpose facility combining badminton courts with comprehensive wellness and fitness amenities.",
    image: NewLocationImage,
    category: "New Development",
    timeline: "Q4 2025",
  },
];
</script>

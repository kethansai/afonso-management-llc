<template>
  <div class="relative isolate">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Header Section -->
      <div
        class="text-center mb-16"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
      >
        <h1
          class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
        >
          <span
            class="dark:bg-gradient-to-r dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600 dark:bg-clip-text dark:text-transparent"
          >
            Our Services
          </span>
        </h1>
        <p
          class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Your premier destination for badminton, fitness, and wellness.
          Experience world-class facilities and professional coaching in a
          vibrant community setting.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="flex flex-wrap justify-center gap-8">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="group rounded-xl shadow-lg bg-white dark:bg-gray-800 w-92 dark:shadow-gray-700/20 hover:shadow-2xl dark:hover:shadow-gray-700/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden"
          v-motion
          :initial="{ opacity: 0, y: 60, rotateX: -15 }"
          :enter="{
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
              duration: 700,
              delay: 400 + index * 150,
              ease: 'backOut',
            },
          }"
        >
          <!-- Image with parallax effect -->
          <div class="relative overflow-hidden">
            <img
              class="rounded-t-lg object-cover aspect-3/2 h-48 w-full transform group-hover:scale-110 transition-transform duration-700 group-hover:rotate-1"
              :src="service.image"
              :alt="service.title"
            />
            <!-- Overlay gradient on hover -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>

            <!-- Floating icon -->
            <div
              class="absolute top-4 right-4 w-12 h-12 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
            >
              <FAI
                :icon="service.icon"
                class="w-6 h-6 text-xl"
                :class="service.mainIconClass"
              />
            </div>
          </div>

          <!-- Card content -->
          <div class="rounded-xl p-8">
            <div class="flex items-center gap-2 mb-6 -ml-1">
              <div
                class="p-2 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                :class="service.iconBgClass"
              >
                <FAI
                  :icon="service.icon"
                  class="w-6 h-6 text-xl"
                  :class="service.mainIconClass"
                />
              </div>
              <h2
                class="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300"
              >
                {{ service.title }}
              </h2>
            </div>

            <ul class="space-y-3 text-gray-600 dark:text-gray-300">
              <li
                v-for="(feature, featureIndex) in service.features"
                :key="feature"
                class="flex items-start transform transition-all duration-300"
                :style="{ transitionDelay: `${featureIndex * 50}ms` }"
                v-motion
                :initial="{ opacity: 0, x: -20 }"
                :enter="{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 400,
                    delay: 600 + index * 150 + featureIndex * 100,
                  },
                }"
              >
                <div class="relative">
                  <FAI
                    icon="circle-check"
                    :class="service.checkIconClass"
                    class="w-5 h-5 mr-3 mt-0.5 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <span
                  class="group-hover:translate-x-1 transition-transform duration-300"
                >
                  {{ feature }}
                </span>
              </li>
            </ul>
          </div>

          <!-- Decorative elements -->
          <div
            class="absolute top-2 left-2 w-3 h-3 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
            :class="service.decorClass"
          ></div>
          <div
            class="absolute bottom-2 right-2 w-2 h-2 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"
            :class="service.decorClass"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BadmintonImage from "@/assets/images/services/badminton.jpg";
import YogaImage from "@/assets/images/services/yoga.jpg";
import FitnessImage from "@/assets/images/services/fitness-centre.jpg";
import CoachingImage from "@/assets/images/services/coaching.jpg";
import CommunityImage from "@/assets/images/services/community.jpg";
import TableTennisImage from "@/assets/images/services/table-tennis.jpg";
const services = [
  {
    title: "Badminton Courts",
    icon: "building",
    mainIconClass: "text-green-600 dark:text-green-400",
    checkIconClass: "text-green-500",
    iconBgClass: "bg-green-100 dark:bg-green-900/30",
    decorClass: "bg-green-400",
    image: BadmintonImage,
    features: [
      "24 Professional Badminton Courts",
      "World-Class Facilities for All Levels",
      "Court Rentals & Walk-ins",
    ],
  },
  {
    title: "Yoga & Wellness",
    icon: "user",
    mainIconClass: "text-purple-600 dark:text-purple-400",
    checkIconClass: "text-purple-500",
    iconBgClass: "bg-purple-100 dark:bg-purple-900/30",
    decorClass: "bg-purple-400",
    image: YogaImage,
    features: [
      "Yoga for Body & Mind",
      "Daily Classes for All Levels",
      "Relax & Recover in Our Sauna",
    ],
  },
  {
    title: "Fitness Center",
    icon: "bolt",
    mainIconClass: "text-red-600 dark:text-red-400",
    checkIconClass: "text-red-500",
    iconBgClass: "bg-red-100 dark:bg-red-900/30",
    decorClass: "bg-red-400",
    image: FitnessImage,
    features: [
      "Fully Equipped Gym Room",
      "Train, Strengthen, Perform",
      "Accessible for All Members",
    ],
  },
  {
    title: "Coaching & Training",
    icon: "book-open",
    mainIconClass: "text-blue-600 dark:text-blue-400",
    checkIconClass: "text-blue-500",
    iconBgClass: "bg-blue-100 dark:bg-blue-900/30",
    decorClass: "bg-blue-400",
    image: CoachingImage,
    features: [
      "Elite Coaching Programs",
      "Group & Private Lessons",
      "Junior Development Academy",
    ],
  },
  {
    title: "Events & Community",
    icon: "users",
    mainIconClass: "text-orange-600 dark:text-orange-400",
    checkIconClass: "text-orange-500",
    iconBgClass: "bg-orange-100 dark:bg-orange-900/30",
    decorClass: "bg-orange-400",
    image: CommunityImage,
    features: [
      "Tournaments, Leagues & Private Events",
      "Book Your Next Birthday or Team Event",
      "A Vibrant Sports Community",
    ],
  },
  {
    title: "Table Tennis",
    icon: "table-tennis-paddle-ball",
    mainIconClass: "text-cyan-600 dark:text-cyan-400",
    checkIconClass: "text-cyan-500",
    iconBgClass: "bg-cyan-100 dark:bg-cyan-900/30",
    decorClass: "bg-cyan-400",
    image: TableTennisImage,
    features: [
      "Professional Table Tennis Tables",
      "Coaching for All Skill Levels",
      "Join Our Weekly Tournaments",
    ],
  },
];
</script>

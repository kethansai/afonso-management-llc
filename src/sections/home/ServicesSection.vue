<template>
  <div class="relative isolate py-16">
    <svg
      class="absolute inset-x-0 top-0 -z-10 h-256 w-full mask-[radial-gradient(32rem_32rem_at_center,white,transparent)] stroke-gray-200 dark:stroke-gray-700"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="arena-badminton-pattern"
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
        fill="url(#arena-badminton-pattern)"
      />
    </svg>
    <div
      class="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
      aria-hidden="true"
    >
      <div
        class="aspect-801/1036 w-200.25 bg-linear-to-tr from-[#10b981] to-[#3b82f6] opacity-30"
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
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h1
          class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
        >
          Our Services
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
        <!-- Badminton Courts -->
        <div
          class="rounded-xl shadow-lg bg-white dark:bg-gray-800 w-92 dark:shadow-gray-700/20 hover:shadow-xl dark:hover:shadow-gray-700/30 transition-shadow duration-300"
          v-for="service in services"
          :key="service.title"
        >
          <img
            class="rounded-t-lg object-cover aspect-3/2 h-48 w-full"
            :src="service.image"
            :alt="service.title"
          />
          <div class="rounded-xl p-8">
            <div class="flex items-center gap-2 mb-6 -ml-1">
              <FAI
                :icon="service.icon"
                class="w-8 h-8 text-xl"
                :class="`text-${service.color}-600 dark:text-${service.color}-400`"
              />
              <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
                {{ service.title }}
              </h2>
            </div>
            <ul class="space-y-3 text-gray-600 dark:text-gray-300">
              <li
                class="flex items-start"
                v-for="feature in service.features"
                :key="feature"
              >
                <FAI
                  icon="circle-check"
                  :class="`text-${service.color}-500`"
                  class="w-5 h-5 mr-2 mt-0.5"
                />
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BadmintonImage from "@/assets/images/badminton.jpg";
import YogaImage from "@/assets/images/yoga.jpg";
import FitnessImage from "@/assets/images/fitness.jpg";
import CoachingImage from "@/assets/images/coaching.jpg";
import CommunityImage from "@/assets/images/community.jpg";
const services = [
  {
    title: "Badminton Courts",
    icon: "building",
    color: "green",
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
    color: "purple",
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
    color: "red",
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
    color: "blue",
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
    color: "orange",
    image: CommunityImage,
    features: [
      "Tournaments, Leagues & Private Events",
      "Book Your Next Birthday or Team Event",
      "A Vibrant Sports Community",
    ],
  },
];
</script>

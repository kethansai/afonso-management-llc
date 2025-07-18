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
          Arena Badminton & Sports Club
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
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Badminton Courts -->
        <div
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-700/20 p-8 hover:shadow-xl dark:hover:shadow-gray-700/30 transition-shadow duration-300 border-l-4 border-green-500"
        >
          <div class="flex items-center mb-6">
            <div
              class="bg-green-100 dark:bg-green-900/30 rounded-full p-3 mr-4"
            >
              <FAI
                icon="building"
                class="w-8 h-8 text-xl text-green-600 dark:text-green-400"
              />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Badminton Courts
            </h3>
          </div>
          <ul class="space-y-3 text-gray-600 dark:text-gray-300">
            <li class="flex items-start">
              <FAI
                icon="circle-check"
                class="w-5 h-5 text-green-500 mr-2 mt-0.5"
              />
              24 Professional Badminton Courts
            </li>
            <li class="flex items-start">
              <FAI
                icon="circle-check"
                class="w-5 h-5 text-green-500 mr-2 mt-0.5"
              />
              World-Class Facilities for All Levels
            </li>
            <li class="flex items-start">
              <FAI
                icon="circle-check"
                class="w-5 h-5 text-green-500 mr-2 mt-0.5"
              />
              Court Rentals & Walk-ins
            </li>
          </ul>
        </div>

        <!-- Yoga & Wellness -->
        <div
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-700/20 p-8 hover:shadow-xl dark:hover:shadow-gray-700/30 transition-shadow duration-300 border-l-4 border-purple-500"
        >
          <div class="flex items-center mb-6">
            <div
              class="bg-purple-100 dark:bg-purple-900/30 rounded-full p-3 mr-4"
            >
              <FAI
                icon="user"
                class="w-8 h-8 text-xl text-purple-600 dark:text-purple-400"
              />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Yoga & Wellness
            </h3>
          </div>
          <ul class="space-y-3 text-gray-600 dark:text-gray-300">
            <li class="flex items-start">
              <FAI
                icon="circle-check"
                class="w-5 h-5 text-purple-500 mr-2 mt-0.5"
              />
              Yoga for Body & Mind
            </li>
            <li class="flex items-start">
              <FAI
                icon="circle-check"
                class="w-5 h-5 text-purple-500 mr-2 mt-0.5"
              />
              Daily Classes for All Levels
            </li>
            <li class="flex items-start">
              <FAI
                icon="circle-check"
                class="w-5 h-5 text-purple-500 mr-2 mt-0.5"
              />
              Relax & Recover in Our Sauna
            </li>
          </ul>
        </div>

        <!-- Fitness Center -->
        <div
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-700/20 p-8 hover:shadow-xl dark:hover:shadow-gray-700/30 transition-shadow duration-300 border-l-4 border-red-500"
        >
          <div class="flex items-center mb-6">
            <div class="bg-red-100 dark:bg-red-900/30 rounded-full p-3 mr-4">
              <FAI
                icon="bolt"
                class="w-8 h-8 text-xl text-red-600 dark:text-red-400"
              />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Fitness Center
            </h3>
          </div>
          <ul class="space-y-3 text-gray-600 dark:text-gray-300">
            <li class="flex items-start">
              <FAI
                icon="circle-check"
                class="w-5 h-5 text-red-500 mr-2 mt-0.5"
              />
              Fully Equipped Gym Room
            </li>
            <li class="flex items-start">
              <FAI
                icon="circle-check"
                class="w-5 h-5 text-red-500 mr-2 mt-0.5"
              />
              Train, Strengthen, Perform
            </li>
            <li class="flex items-start">
              <FAI
                icon="circle-check"
                class="w-5 h-5 text-red-500 mr-2 mt-0.5"
              />
              Accessible for All Members
            </li>
          </ul>
        </div>

        <!-- Coaching & Training -->
        <div
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-700/20 p-8 hover:shadow-xl dark:hover:shadow-gray-700/30 transition-shadow duration-300 border-l-4 border-blue-500"
        >
          <div class="flex items-center mb-6">
            <div class="bg-blue-100 dark:bg-blue-900/30 rounded-full p-3 mr-4">
              <FAI
                icon="book-open"
                class="w-8 h-8 text-xl text-blue-600 dark:text-blue-400"
              />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Coaching & Training
            </h3>
          </div>
          <ul class="space-y-3 text-gray-600 dark:text-gray-300">
            <li class="flex items-start">
              <FAI
                icon="circle-check"
                class="w-5 h-5 text-blue-500 mr-2 mt-0.5"
              />
              Elite Coaching Programs
            </li>
            <li class="flex items-start">
              <FAI
                icon="circle-check"
                class="w-5 h-5 text-blue-500 mr-2 mt-0.5"
              />
              Group & Private Lessons
            </li>
            <li class="flex items-start">
              <FAI
                icon="circle-check"
                class="w-5 h-5 text-blue-500 mr-2 mt-0.5"
              />
              Junior Development Academy
            </li>
          </ul>
        </div>

        <!-- Events & Community -->
        <div
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-700/20 p-8 hover:shadow-xl dark:hover:shadow-gray-700/30 transition-shadow duration-300 border-l-4 border-orange-500 md:col-span-2 lg:col-span-1"
        >
          <div class="flex items-center mb-6">
            <div
              class="bg-orange-100 dark:bg-orange-900/30 rounded-full p-3 mr-4"
            >
              <FAI
                icon="users"
                class="w-8 h-8 text-xl text-orange-600 dark:text-orange-400"
              />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Events & Community
            </h3>
          </div>
          <ul class="space-y-3 text-gray-600 dark:text-gray-300">
            <li class="flex items-start">
              <FAI
                icon="circle-check"
                class="w-5 h-5 text-orange-500 mr-2 mt-0.5"
              />
              Tournaments, Leagues & Private Events
            </li>
            <li class="flex items-start">
              <FAI
                icon="circle-check"
                class="w-5 h-5 text-orange-500 mr-2 mt-0.5"
              />
              Book Your Next Birthday or Team Event
            </li>
            <li class="flex items-start">
              <FAI
                icon="circle-check"
                class="w-5 h-5 text-orange-500 mr-2 mt-0.5"
              />
              A Vibrant Sports Community
            </li>
          </ul>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="mt-16 text-center">
        <div
          class="bg-gradient-to-r from-green-500 to-blue-600 dark:from-green-600 dark:to-blue-700 rounded-2xl p-8 shadow-xl dark:shadow-gray-700/20"
        >
          <h2 class="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p class="text-green-100 dark:text-green-50 mb-6 text-lg">
            Join our vibrant community and experience the best in badminton and
            fitness facilities.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              class="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-50 transition-colors duration-200"
            >
              Book a Court
            </button>
            <button
              class="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 dark:hover:bg-gray-50 dark:hover:text-green-600 transition-colors duration-200"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// This component showcases Arena Badminton & Sports Club services
// No reactive data needed for this static content display
</script>

<template>
  <div class="bg-white dark:bg-gray-900 mb-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div
        class="text-center mb-16"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
      >
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Hi, I'm Oscar Afonso
        </h1>
        <div class="max-w-4xl mx-auto">
          <p
            class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { duration: 600, delay: 400 },
            }"
          >
            Afonso Management is a leading sports facility management company
            dedicated to excellence in operations and performance. With a team
            of seasoned professionals, we optimize facility efficiency, enhance
            athlete experiences, and ensure seamless day-to-day management.
          </p>
          <p
            class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { duration: 600, delay: 600 },
            }"
          >
            Our commitment to innovation and results-driven solutions makes us
            the trusted choice for top-tier sports venues. We are a leading
            sports facility management company dedicated to excellence in
            operations and performance, ensuring our clients receive the highest
            quality service and support.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script>

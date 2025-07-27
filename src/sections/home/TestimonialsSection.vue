<template>
  <section
    aria-labelledby="testimonial-heading"
    class="relative mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-20"
  >
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <h2
        id="testimonial-heading"
        class="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-gray-100"
      >
        What are people saying?
      </h2>

      <div class="relative mt-16">
        <!-- Carousel container -->
        <div
          class="overflow-hidden rounded-2xl"
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :enter="{
            opacity: 1,
            scale: 1,
            transition: { duration: 600, delay: 200 },
          }"
        >
          <div
            class="flex transition-transform duration-700 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
              v-for="(testimonial, index) in testimonials"
              :key="testimonial.id"
              class="w-full flex-shrink-0 px-12 md:px-4"
            >
              <blockquote
                class="mx-auto max-w-2xl sm:flex lg:block group"
                v-motion
                :initial="{ opacity: 0, y: 30 }"
                :enter="{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 500, delay: 300 + index * 100 },
                }"
              >
                <!-- Animated quote icon -->
                <div
                  class="relative"
                  v-motion
                  :initial="{ scale: 0, rotate: -45 }"
                  :enter="{
                    scale: 1,
                    rotate: 0,
                    transition: { duration: 800, delay: 400, ease: 'backOut' },
                  }"
                >
                  <FAI
                    icon="quote-left"
                    class="text-5xl text-gray-300 dark:text-gray-600 group-hover:text-indigo-400 transition-colors duration-500"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 scale-0 group-hover:scale-150 transition-all duration-500"
                  ></div>
                </div>

                <div class="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                  <!-- Animated star rating -->
                  <div
                    class="mb-6"
                    v-motion
                    :initial="{ opacity: 0, x: -30 }"
                    :enter="{
                      opacity: 1,
                      x: 0,
                      transition: { duration: 500, delay: 500 + index * 100 },
                    }"
                  >
                    <StarRating
                      class="-ml-3 transform group-hover:scale-110 transition-transform duration-300"
                      :value="testimonial.rating"
                    />
                  </div>

                  <!-- Testimonial text with typewriter effect -->
                  <p
                    class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300"
                    v-motion
                    :initial="{ opacity: 0, y: 20 }"
                    :enter="{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 600, delay: 600 + index * 100 },
                    }"
                  >
                    "{{ testimonial.quote }}"
                  </p>

                  <!-- Attribution with slide-in effect -->
                  <cite
                    class="mt-6 block font-semibold text-gray-900 italic dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all duration-300"
                    v-motion
                    :initial="{ opacity: 0, x: 30 }"
                    :enter="{
                      opacity: 1,
                      x: 0,
                      transition: { duration: 500, delay: 700 + index * 100 },
                    }"
                  >
                    — {{ testimonial.attribution }}
                  </cite>
                </div>
              </blockquote>
            </div>
          </div>
        </div>

        <!-- Enhanced navigation buttons -->
        <button
          class="absolute top-1/2 left-0 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-3 shadow-xl text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transform hover:scale-110 transition-all duration-300 group"
          @click="prevSlide"
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: { duration: 500, delay: 800 },
          }"
        >
          <FAI
            icon="chevron-left"
            class="h-5 w-5 group-hover:-translate-x-0.5 transition-transform duration-200"
          />
          <div
            class="absolute inset-0 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-200"
          ></div>
        </button>

        <button
          class="absolute top-1/2 right-0 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-3 shadow-xl text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transform hover:scale-110 transition-all duration-300 group"
          @click="nextSlide"
          v-motion
          :initial="{ opacity: 0, x: 20 }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: { duration: 500, delay: 800 },
          }"
        >
          <FAI
            icon="chevron-right"
            class="h-5 w-5 group-hover:translate-x-0.5 transition-transform duration-200"
          />
          <div
            class="absolute inset-0 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-200"
          ></div>
        </button>

        <!-- Enhanced pagination indicators -->
        <div
          class="flex justify-center mt-8 space-x-3"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { duration: 500, delay: 900 },
          }"
        >
          <button
            v-for="(_, index) in testimonials"
            :key="index"
            :class="[
              'h-3 rounded-full focus:outline-none transition-all duration-300 transform hover:scale-125',
              index === currentIndex
                ? 'w-8 bg-indigo-600 shadow-lg'
                : 'w-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500',
            ]"
            @click="goToSlide(index)"
            :aria-label="`Go to testimonial ${index + 1}`"
          >
            <div
              v-if="index === currentIndex"
              class="w-full h-full bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full animate-pulse"
            ></div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import StarRating from "@/components/StarRating.vue";

import { ref, onMounted, onBeforeUnmount } from "vue";

const testimonials = ref([
  {
    id: 1,
    quote:
      "Really great place to play badminton if you live anywhere east of Pomona. It is the closest one. The courts are well taken care of and the gym is nice and neat. Although the only draw back is the amount of people that show up. It is packed during the weekday after 6pm until 9pm.",
    attribution: "Trash Bandit",
    rating: 4,
  },
  {
    id: 2,
    quote:
      "Good price, good amount of courts, good players. And they sell cheap rackets. But things other than badminton are not working as supposed (i.e. sauna, gym, etc.).",
    attribution: "Matthew Li",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "World class courts with wooden flooring as a base which makes it better for the knees. We play there every weekend as part of the Arena Badminton meetup. Come on over and join us if you're looking for new players to play with",
    attribution: "Miten Bhatt",
    rating: 4,
  },
  {
    id: 4,
    quote:
      "I love the environment of this badminton court; the people are very friendly. Especially Instructor Nance, who takes great care of beginner players. If you're just starting, look for Nance.",
    attribution: "Lin Lu",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "I particularly love coach Nance's passionate, creative, revolutionary 1-on-3 training approach. Coach Nance has a great smile, seeing his smiley face while he plays with others, playing badminton will never feel the same again.❤️",
    attribution: "Kronos",
    rating: 5,
  },
]);

const currentIndex = ref(0);
let intervalId = null;

// Navigation functions
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
  resetInterval();
};

const prevSlide = () => {
  currentIndex.value =
    currentIndex.value === 0
      ? testimonials.value.length - 1
      : currentIndex.value - 1;
  resetInterval();
};

const goToSlide = (index) => {
  currentIndex.value = index;
  resetInterval();
};

// Start auto-sliding
const startInterval = () => {
  intervalId = setInterval(() => {
    nextSlide();
  }, 10000); // 10 seconds
};

// Reset the interval when user interacts
const resetInterval = () => {
  if (intervalId) {
    clearInterval(intervalId);
  }
  startInterval();
};

// Setup and cleanup
onMounted(() => {
  startInterval();
});

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

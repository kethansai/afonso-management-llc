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
        <div class="overflow-hidden">
          <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
              v-for="testimonial in testimonials"
              :key="testimonial.id"
              class="w-full flex-shrink-0 px-12 md:px-4"
            >
              <blockquote class="mx-auto max-w-2xl sm:flex lg:block">
                <FAI icon="quote-left" class="text-5xl text-gray-300" />
                <div class="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                  <p class="text-lg text-gray-600 dark:text-gray-400">
                    {{ testimonial.quote }}
                  </p>
                  <cite
                    class="mt-4 block font-semibold text-gray-900 not-italic dark:text-gray-200"
                    >{{ testimonial.attribution }}</cite
                  >
                </div>
              </blockquote>
            </div>
          </div>
        </div>

        <!-- Navigation buttons -->
        <button
          class="absolute top-1/2 left-0 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
          @click="prevSlide"
        >
          <FAI icon="chevron-left" class="h-5 w-5" />
        </button>
        <button
          class="absolute top-1/2 right-0 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
          @click="nextSlide"
        >
          <FAI icon="chevron-right" class="h-5 w-5" />
        </button>

        <!-- Pagination indicators -->
        <div class="flex justify-center mt-8 space-x-2">
          <button
            v-for="(_, index) in testimonials"
            :key="index"
            :class="[
              'w-2.5 h-2.5 rounded-full focus:outline-none transition-colors',
              index === currentIndex
                ? 'bg-gray-800 dark:bg-white'
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500',
            ]"
            @click="goToSlide(index)"
            :aria-label="`Go to testimonial ${index + 1}`"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const testimonials = ref([
  {
    id: 1,
    quote:
      "Really great place to play badminton if you live anywhere east of Pomona. It is the closest one. The courts are well taken care of and the gym is nice and neat. Although the only draw back is the amount of people that show up. It is packed during the weekday after 6pm until 9pm.",
    attribution: "Trash Bandit",
  },
  {
    id: 2,
    quote:
      "Good price, good amount of courts, good players. And they sell cheap rackets. But things other than badminton are not working as supposed (i.e. sauna, gym, etc.).",
    attribution: "Matthew Li",
  },
  {
    id: 3,
    quote:
      "World class courts with wooden flooring as a base which makes it better for the knees. We play there every weekend as part of the Arena Badminton meetup. Come on over and join us if you're looking for new players to play with",
    attribution: "Miten Bhatt",
  },
  {
    id: 4,
    quote:
      "I love the environment of this badminton court; the people are very friendly. Especially Instructor Nance, who takes great care of beginner players. If you're just starting, look for Nance.",
    attribution: "Lin Lu",
  },
  {
    id: 5,
    quote:
      "I particularly love coach Nance's passionate, creative, revolutionary 1-on-3 training approach. Coach Nance has a great smile, seeing his smiley face while he plays with others, playing badminton will never feel the same again.❤️",
    attribution: "Kronos",
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

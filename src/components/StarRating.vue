<template>
  <div class="flex items-center mb-5">
    <template v-for="star in stars" :key="star.id">
      <span
        :class="`${starSizeClasses[props.size]} ${
          star.filled ? 'text-yellow-300' : 'text-gray-300 dark:text-gray-500'
        }`"
        class="inline-block"
      >
        <FAI icon="star" />
      </span>
    </template>
  </div>
</template>
<script setup>
const props = defineProps({
  value: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    default: "medium",
  },
});

const starCount = 5;
const stars = Array.from({ length: starCount }, (_, index) => ({
  id: index + 1,
  filled: index < props.value,
}));

const starSizeClasses = {
  small: "w-4 h-4 ms-1",
  medium: "w-6 h-6 ms-2",
  large: "w-8 h-8 ms-3",
};
</script>

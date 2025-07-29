<template>
  <footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto max-w-7xl overflow-hidden px-6 pb-8 lg:px-8">
      <div class="mt-16 flex justify-center gap-x-10">
        <a
          v-for="item in navigation.social"
          :key="item.name"
          :href="item.href"
          class="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
        >
          <span class="sr-only">{{ item.name }}</span>
          <FAI :icon="item.icon" class="size-6" aria-hidden="true" />
        </a>
      </div>
      <p class="mt-10 text-center text-sm/6 text-gray-600 dark:text-gray-400">
        &copy; 2025 Afonso Management, Inc. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
const navigation = {
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: ["fab", "facebook"],
    },
    {
      name: "Instagram",
      href: "#",
      icon: ["fab", "instagram"],
    },
    {
      name: "YouTube",
      href: "#",
      icon: ["fab", "youtube"],
    },
    {
      name: "X",
      href: "#",
      icon: ["fab", "x-twitter"],
    },
    {
      name: "Discord",
      href: "#",
      icon: ["fab", "discord"],
    },
  ],
};
</script>

<template>
  <footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto max-w-7xl overflow-hidden px-6 py-14 sm:py-10 lg:px-8">
      <nav
        class="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
        aria-label="Footer"
      >
        <RouterLink
          v-for="item in navigation.main"
          :key="item.name"
          :to="item.to"
          class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          >{{ item.name }}</RouterLink
        >
      </nav>
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
  main: [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services" },
    { name: "About Us", to: "/about" },
    { name: "Contact Us", to: "/contact" },
  ],
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

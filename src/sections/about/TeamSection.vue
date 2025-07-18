<template>
  <div class="bg-white dark:bg-gray-900 w-full">
    <div class="mx-auto max-w-7xl px-6 text-center lg:px-8">
      <div class="mx-auto max-w-2xl">
        <h2
          class="text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl dark:text-white"
        >
          Meet our team
        </h2>
        <p class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
          We’re a dynamic group of individuals who are passionate about what we
          do and dedicated to delivering the best results for our clients.
        </p>
      </div>
      <ul
        class="mx-auto mt-20 flex flex-wrap gap-x-20 justify-center max-w-2xl gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none"
      >
        <li v-for="person in people" :key="person.name">
          <img
            class="mx-auto size-56 object-fill rounded-full outline-1 -outline-offset-1 outline-black/5"
            :src="person.imageUrl"
            alt=""
          />
          <h3
            class="mt-6 text-base/7 font-semibold tracking-tight text-gray-900"
          >
            {{ person.name }}
          </h3>
          <p class="text-sm/6 text-gray-600">{{ person.role }}</p>
          <ul class="mt-6 flex justify-center gap-x-6">
            <li v-for="social in person.social" :key="social.icon[1]">
              <a :href="social.url" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">{{ social.icon[1] }}</span>
                <FAI :icon="social.icon" class="size-5" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import AkshayAre from "@/assets/images/akshay-are.jpg";
import NeelPatel from "@/assets/images/neel-patel.jpg";
const people = [
  {
    name: "Akshay Are",
    role: "Program Manager",
    imageUrl: AkshayAre,
    social: [
      {
        icon: ["fab", "x-twitter"],
        url: "https://x.com/akshayare",
      },
      {
        icon: ["fab", "linkedin"],
        url: "https://www.linkedin.com/in/akshayare/",
      },
    ],
  },
  {
    name: "Neel Patel",
    role: "Data Analyst",
    imageUrl: NeelPatel,
    social: [
      {
        icon: ["fab", "x-twitter"],
        url: "https://x.com/neelpatel",
      },
      {
        icon: ["fab", "linkedin"],
        url: "https://www.linkedin.com/in/neel-patel/",
      },
    ],
  },
];
</script>

<template>
  <div class="relative isolate mb-16">
    <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <!-- Left column - Contact info -->
      <div
        class="relative px-6 lg:static lg:px-8 lg:py-24"
        v-motion
        :initial="{ opacity: 0, x: -50 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 200 } }"
      >
        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <h2
            class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-5xl"
            v-motion
            :initial="{ opacity: 0, y: 30, scale: 0.9 }"
            :enter="{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 600, delay: 400 },
            }"
          >
            <span
              class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              Get in touch
            </span>
          </h2>

          <!-- Description -->
          <p
            class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { duration: 600, delay: 600 },
            }"
          >
            Have questions or need more information? Reach out to us and our
            team will get back to you promptly. We're here to help with all your
            facility management needs.
          </p>

          <!-- Contact details -->
          <dl
            class="mt-10 space-y-6 text-base/7 text-gray-600 dark:text-gray-300"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { duration: 600, delay: 800 },
            }"
          >
            <!-- Address -->
            <div
              class="flex gap-x-4 group hover:scale-105 transition-all duration-300 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{
                opacity: 1,
                x: 0,
                transition: { duration: 500, delay: 900 },
              }"
            >
              <dt class="flex-none">
                <span class="sr-only">Address</span>
                <div
                  class="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/50 transition-colors duration-300"
                >
                  <FAI
                    icon="building"
                    class="h-5 w-5 text-indigo-600 dark:text-indigo-400"
                  />
                </div>
              </dt>
              <dd
                class="group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300"
              >
                348 Robinson dr<br />Tustin, CA , 92782
              </dd>
            </div>

            <!-- Phone -->
            <div
              class="flex gap-x-4 group hover:scale-105 transition-all duration-300 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{
                opacity: 1,
                x: 0,
                transition: { duration: 500, delay: 1000 },
              }"
            >
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <div
                  class="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors duration-300"
                >
                  <FAI
                    icon="phone"
                    class="h-5 w-5 text-green-600 dark:text-green-400"
                  />
                </div>
              </dt>
              <dd>
                <a
                  class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 hover:underline"
                  href="tel:719-465-9614"
                  >719-465-9614</a
                >
              </dd>
            </div>

            <!-- Email -->
            <div
              class="flex gap-x-4 group hover:scale-105 transition-all duration-300 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{
                opacity: 1,
                x: 0,
                transition: { duration: 500, delay: 1100 },
              }"
            >
              <dt class="flex-none">
                <span class="sr-only">Email</span>
                <div
                  class="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors duration-300"
                >
                  <FAI
                    icon="envelope"
                    class="h-5 w-5 text-purple-600 dark:text-purple-400"
                  />
                </div>
              </dt>
              <dd>
                <a
                  class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 hover:underline"
                  href="mailto:aquinoafonso68@gmail.com"
                  >aquinoafonso68@gmail.com</a
                >
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <!-- Right column - Contact form -->
      <form
        ref="form"
        @submit.prevent="sendEmail"
        class="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-24"
        v-motion
        :initial="{ opacity: 0, x: 50 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 400 } }"
      >
        <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <!-- First name -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{
                opacity: 1,
                y: 0,
                transition: { duration: 400, delay: 600 },
              }"
            >
              <label
                for="first-name"
                class="block text-sm/6 font-semibold text-gray-900 dark:text-gray-100"
                >First name</label
              >
              <div class="mt-2.5">
                <input
                  type="text"
                  name="first_name"
                  id="first-name"
                  autocomplete="given-name"
                  class="block w-full rounded-md bg-white dark:bg-gray-800 px-3.5 py-2 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:focus:outline-indigo-500 focus:scale-105 transition-all duration-300"
                />
              </div>
            </div>

            <!-- Last name -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{
                opacity: 1,
                y: 0,
                transition: { duration: 400, delay: 700 },
              }"
            >
              <label
                for="last-name"
                class="block text-sm/6 font-semibold text-gray-900 dark:text-gray-100"
                >Last name</label
              >
              <div class="mt-2.5">
                <input
                  type="text"
                  name="last_name"
                  id="last-name"
                  autocomplete="family-name"
                  class="block w-full rounded-md bg-white dark:bg-gray-800 px-3.5 py-2 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:focus:outline-indigo-500 focus:scale-105 transition-all duration-300"
                />
              </div>
            </div>

            <!-- Email -->
            <div
              class="sm:col-span-2"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{
                opacity: 1,
                y: 0,
                transition: { duration: 400, delay: 800 },
              }"
            >
              <label
                for="email"
                class="block text-sm/6 font-semibold text-gray-900 dark:text-gray-100"
                >Email</label
              >
              <div class="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="email"
                  class="block w-full rounded-md bg-white dark:bg-gray-800 px-3.5 py-2 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:focus:outline-indigo-500 focus:scale-105 transition-all duration-300"
                />
              </div>
            </div>

            <!-- Phone -->
            <div
              class="sm:col-span-2"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{
                opacity: 1,
                y: 0,
                transition: { duration: 400, delay: 900 },
              }"
            >
              <label
                for="phone-number"
                class="block text-sm/6 font-semibold text-gray-900 dark:text-gray-100"
                >Phone number</label
              >
              <div class="mt-2.5">
                <input
                  type="tel"
                  name="phone_number"
                  id="phone-number"
                  autocomplete="tel"
                  class="block w-full rounded-md bg-white dark:bg-gray-800 px-3.5 py-2 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:focus:outline-indigo-500 focus:scale-105 transition-all duration-300"
                />
              </div>
            </div>

            <!-- Message -->
            <div
              class="sm:col-span-2"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{
                opacity: 1,
                y: 0,
                transition: { duration: 400, delay: 1000 },
              }"
            >
              <label
                for="message"
                class="block text-sm/6 font-semibold text-gray-900 dark:text-gray-100"
                >Message</label
              >
              <div class="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  class="block w-full rounded-md bg-white dark:bg-gray-800 px-3.5 py-2 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:focus:outline-indigo-500 focus:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          </div>

          <!-- Submit button -->
          <div
            class="mt-8 flex justify-end"
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{
              opacity: 1,
              scale: 1,
              transition: { duration: 500, delay: 1100, ease: 'backOut' },
            }"
          >
            <button
              type="submit"
              :disabled="isLoading"
              class="group relative overflow-hidden rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span class="relative z-10 flex items-center gap-2">
                <FAI
                  v-if="isLoading"
                  icon="spinner"
                  class="w-4 h-4 animate-spin"
                />
                {{ isLoading ? "Sending..." : "Send message" }}
              </span>
              <div
                class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </button>
          </div>
        </div>
      </form>
    </div>

    <!-- Google Maps Location -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 1200 } }"
    >
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { duration: 600, delay: 1400 },
            }"
          >
            Visit Our Office
          </h2>
          <p
            class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { duration: 600, delay: 1500 },
            }"
          >
            Located in the heart of Orlando, our office is easily accessible and
            we welcome scheduled visits to discuss your facility management
            needs in person.
          </p>
        </div>
        <div
          class="mt-10 h-96 w-full rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{
            opacity: 1,
            scale: 1,
            transition: { duration: 800, delay: 1600 },
          }"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23738.69237834149!2d-117.72446535172205!3d34.03289070865674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c333b1ebaecb01%3A0x61a5b96610fbfa2c!2sArena%20Badminton%20%26%20Sports%20Club!5e0!3m2!1sen!2sin!4v1752415406632!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Afonso Management LLC Office Location"
            class="hover:brightness-110 transition-all duration-300"
          ></iframe>
        </div>
      </div>
    </div>

    <!-- Notification Toast -->
    <div
      v-if="showNotification"
      class="fixed top-20 right-4 z-[10000] max-w-sm w-full"
      v-motion
      :initial="{ opacity: 0, x: 100, scale: 0.9 }"
      :enter="{ opacity: 1, x: 0, scale: 1, transition: { duration: 400 } }"
      :leave="{ opacity: 0, x: 100, scale: 0.9, transition: { duration: 300 } }"
    >
      <div
        :class="[
          'rounded-lg shadow-lg p-4 border-l-4 flex items-start gap-3',
          notificationType === 'success'
            ? 'bg-green-50 dark:bg-green-900/20 border-green-500 text-green-800 dark:text-green-200'
            : 'bg-red-50 dark:bg-red-900/20 border-red-500 text-red-800 dark:text-red-200',
        ]"
      >
        <!-- Icon -->
        <div class="flex-shrink-0">
          <FAI
            :icon="notificationType === 'success' ? 'circle-check' : 'circle-x'"
            :class="[
              'w-5 h-5',
              notificationType === 'success'
                ? 'text-green-500'
                : 'text-red-500',
            ]"
          />
        </div>

        <!-- Message -->
        <div class="flex-1">
          <p class="text-sm font-medium">
            {{ notificationMessage }}
          </p>
        </div>

        <!-- Close button -->
        <button @click="closeNotification" class="flex-shrink-0 ml-2">
          <FAI
            icon="x"
            :class="[
              'w-4 h-4',
              notificationType === 'success'
                ? 'text-green-500 hover:text-green-700'
                : 'text-red-500 hover:text-red-700',
            ]"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import emailjs from "@emailjs/browser";
import { ref } from "vue";

const form = ref(null);
const showNotification = ref(false);
const notificationType = ref("success");
const notificationMessage = ref("");
const isLoading = ref(false);

const sendEmail = () => {
  isLoading.value = true;

  emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.value,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    )
    .then(
      () => {
        console.log("SUCCESS!");
        form.value.reset();
        showSuccessNotification();
        isLoading.value = false;
      },
      (error) => {
        console.log("FAILED...", error.text);
        showErrorNotification();
        isLoading.value = false;
      }
    );
};

const showSuccessNotification = () => {
  notificationType.value = "success";
  notificationMessage.value =
    "Email sent successfully! We'll get back to you soon.";
  showNotification.value = true;

  // Hide notification after 5 seconds
  setTimeout(() => {
    showNotification.value = false;
  }, 5000);
};

const showErrorNotification = () => {
  notificationType.value = "error";
  notificationMessage.value =
    "Failed to send email. Please try again or contact us directly.";
  showNotification.value = true;

  // Hide notification after 5 seconds
  setTimeout(() => {
    showNotification.value = false;
  }, 5000);
};

const closeNotification = () => {
  showNotification.value = false;
};
</script>

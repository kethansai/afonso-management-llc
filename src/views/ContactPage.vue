<template>
  <div class="relative isolate bg-white dark:bg-gray-700">
    <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <div
        class="relative px-6 pt-24 pb-20 sm:pt-24 lg:static lg:px-8 lg:py-24"
      >
        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <div
            class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 dark:bg-gray-800 ring-1 ring-gray-900/10 dark:ring-gray-100/10 lg:w-1/2"
          >
            <svg
              class="absolute inset-0 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200 dark:stroke-gray-700"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                  width="200"
                  height="200"
                  x="100%"
                  y="-1"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M130 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" stroke-width="0" fill="white" />
              <svg
                x="100%"
                y="-1"
                class="overflow-visible fill-gray-50 dark:fill-gray-800"
              >
                <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
              </svg>
              <rect
                width="100%"
                height="100%"
                stroke-width="0"
                fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
              />
            </svg>
          </div>
          <h2
            class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-5xl"
          >
            Get in touch
          </h2>
          <p class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
            Have questions or need more information? Reach out to us and our
            team will get back to you promptly. We’re here to help with all your
            facility management needs.
          </p>
          <dl
            class="mt-10 space-y-4 text-base/7 text-gray-600 dark:text-gray-300"
          >
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Address</span>
                <FAI
                  icon="building"
                  class="h-7 w-6 text-gray-400 dark:text-gray-200"
                />
              </dt>
              <dd>348 Robinson dr<br />Tustin, CA , 92782</dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <FAI
                  icon="phone"
                  class="h-7 w-6 text-gray-400 dark:text-gray-200"
                />
              </dt>
              <dd>
                <a
                  class="hover:text-gray-900 dark:hover:text-gray-100"
                  href="tel:719-465-9614"
                  >719-465-9614</a
                >
              </dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Email</span>
                <FAI
                  icon="envelope"
                  class="h-7 w-6 text-gray-400 dark:text-gray-200"
                />
              </dt>
              <dd>
                <a
                  class="hover:text-gray-900 dark:hover:text-gray-100"
                  href="mailto:aquinoafonso68@gmail.com"
                  >aquinoafonso68@gmail.com</a
                >
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <form
        action="#"
        method="POST"
        class="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-24"
      >
        <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                for="first-name"
                class="block text-sm/6 font-semibold text-gray-900 dark:text-gray-100"
                >First name</label
              >
              <div class="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  class="block w-full rounded-md bg-white dark:bg-gray-800 px-3.5 py-2 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:focus:outline-indigo-500"
                />
              </div>
            </div>
            <div>
              <label
                for="last-name"
                class="block text-sm/6 font-semibold text-gray-900 dark:text-gray-100"
                >Last name</label
              >
              <div class="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  class="block w-full rounded-md bg-white dark:bg-gray-800 px-3.5 py-2 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:focus:outline-indigo-500"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
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
                  class="block w-full rounded-md bg-white dark:bg-gray-800 px-3.5 py-2 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:focus:outline-indigo-500"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="phone-number"
                class="block text-sm/6 font-semibold text-gray-900 dark:text-gray-100"
                >Phone number</label
              >
              <div class="mt-2.5">
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autocomplete="tel"
                  class="block w-full rounded-md bg-white dark:bg-gray-800 px-3.5 py-2 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:focus:outline-indigo-500"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
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
                  class="block w-full rounded-md bg-white dark:bg-gray-800 px-3.5 py-2 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:focus:outline-indigo-500"
                />
              </div>
            </div>
          </div>
          <div class="mt-8 flex justify-end">
            <button
              type="submit"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send message
            </button>
          </div>
        </div>
      </form>
    </div>

    <!-- Google Maps Location -->

    <div class="bg-gray-50 dark:bg-gray-800">
      <div class="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Visit Our Office
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Located in the heart of Orlando, our office is easily accessible and
            we welcome scheduled visits to discuss your facility management
            needs in person.
          </p>
        </div>
        <div class="mt-10 h-96 w-full rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23738.69237834149!2d-117.72446535172205!3d34.03289070865674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c333b1ebaecb01%3A0x61a5b96610fbfa2c!2sArena%20Badminton%20%26%20Sports%20Club!5e0!3m2!1sen!2sin!4v1752415406632!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Afonso Management LLC Office Location"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

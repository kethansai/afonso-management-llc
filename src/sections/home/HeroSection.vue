<template>
  <main>
    <div class="relative isolate">
      <svg
        class="absolute inset-x-0 top-0 -z-10 h-256 w-full mask-[radial-gradient(32rem_32rem_at_center,white,transparent)] stroke-gray-200 dark:stroke-gray-700"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
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
          fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
        />
      </svg>
      <div
        class="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        aria-hidden="true"
      >
        <div
          class="aspect-801/1036 w-200.25 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
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
      <div class="overflow-hidden">
        <div class="mx-auto px-6 pt-10 pb-32 sm:pt-24 lg:px-8 lg:pt-20">
          <div
            class="mx-auto gap-14 flex-root lg:flex lg:items-center max-w-7xl"
          >
            <div class="relative mx-auto w-full md:w-2/3">
              <h1
                class="text-3xl font-semibold tracking-tight text-pretty text-center md:text-left text-gray-900 dark:text-white md:text-6xl lg:text-7xl"
              >
                Hi, I'm Oscar Afonso
              </h1>
              <p
                class="mt-8 text-lg font-medium text-pretty text-gray-500 dark:text-gray-300 sm:text-xl/8"
              >
                Afonso Management is a leading sports facility management
                company dedicated to excellence in operations and performance.
                With our team of seasoned professionals, we optimize facility
                efficiency, enhance athlete experiences, and ensure seamless
                day-to-day management. Our commitment to innovation and
                results-driven solutions makes us the trusted choice for
                top-tier sports venues. We deliver comprehensive facility
                management that transforms athletic experiences and operational
                excellence.
              </p>
              <div
                class="mt-10 flex items-center justify-center md:justify-start gap-x-6"
              >
                <router-link
                  to="/services"
                  class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >Our Services</router-link
                >
                <router-link
                  to="/about"
                  class="text-sm/6 font-semibold text-gray-900 dark:text-gray-100"
                  >About us <span aria-hidden="true">→</span></router-link
                >
              </div>
            </div>
            <div class="relative mx-auto w-full md:w-1/3 mt-20 lg:mt-0">
              <!-- Grid container for collage layout -->
              <div class="grid grid-cols-6 grid-rows-5 gap-2 h-96 lg:h-[28rem]">
                <!-- Large featured image - top left -->
                <img
                  class="col-span-3 row-span-3 object-cover w-full h-full rounded-xl bg-gray-900/5 shadow-lg"
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                  alt=""
                />

                <!-- Top right - tall narrow image -->
                <img
                  class="col-span-3 row-span-3 object-cover w-full h-full rounded-xl bg-gray-900/5 shadow-lg"
                  src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                  alt=""
                />

                <!-- Bottom left - wide image -->
                <img
                  class="col-span-4 row-span-2 object-cover w-full h-full rounded-xl bg-gray-900/5 shadow-lg"
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                  alt=""
                />

                <!-- Small accent image - bottom right -->
                <img
                  class="col-span-2 row-span-3 object-cover w-full h-full rounded-xl bg-gray-900/5 shadow-lg"
                  src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>

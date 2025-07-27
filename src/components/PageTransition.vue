<template>
  <transition
    name="page"
    mode="out-in"
    @enter="onEnter"
    @leave="onLeave"
    @before-enter="onBeforeEnter"
  >
    <slot />
  </transition>
</template>

<script setup>
import { gsap } from "gsap";

const props = defineProps({
  animation: {
    type: String,
    default: "slide", // slide, fade, scale, rotate
  },
  duration: {
    type: Number,
    default: 0.5,
  },
});

const onBeforeEnter = (el) => {
  // Set initial state based on animation type
  switch (props.animation) {
    case "slide":
      gsap.set(el, { x: 100, opacity: 0 });
      break;
    case "fade":
      gsap.set(el, { opacity: 0 });
      break;
    case "scale":
      gsap.set(el, { scale: 0.8, opacity: 0 });
      break;
    case "rotate":
      gsap.set(el, {
        rotation: 10,
        opacity: 0,
        transformOrigin: "center center",
      });
      break;
    default:
      gsap.set(el, { y: 50, opacity: 0 });
  }
};

const onEnter = (el, done) => {
  const animations = {
    slide: () =>
      gsap.to(el, {
        x: 0,
        opacity: 1,
        duration: props.duration,
        ease: "power2.out",
        onComplete: done,
      }),
    fade: () =>
      gsap.to(el, {
        opacity: 1,
        duration: props.duration,
        ease: "power2.out",
        onComplete: done,
      }),
    scale: () =>
      gsap.to(el, {
        scale: 1,
        opacity: 1,
        duration: props.duration,
        ease: "back.out(1.7)",
        onComplete: done,
      }),
    rotate: () =>
      gsap.to(el, {
        rotation: 0,
        opacity: 1,
        duration: props.duration,
        ease: "power2.out",
        onComplete: done,
      }),
    default: () =>
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: props.duration,
        ease: "power2.out",
        onComplete: done,
      }),
  };

  const animationFn = animations[props.animation] || animations.default;
  animationFn();
};

const onLeave = (el, done) => {
  switch (props.animation) {
    case "slide":
      gsap.to(el, {
        x: -100,
        opacity: 0,
        duration: props.duration * 0.6,
        ease: "power2.in",
        onComplete: done,
      });
      break;
    case "fade":
      gsap.to(el, {
        opacity: 0,
        duration: props.duration * 0.6,
        ease: "power2.in",
        onComplete: done,
      });
      break;
    case "scale":
      gsap.to(el, {
        scale: 1.1,
        opacity: 0,
        duration: props.duration * 0.6,
        ease: "power2.in",
        onComplete: done,
      });
      break;
    case "rotate":
      gsap.to(el, {
        rotation: -10,
        opacity: 0,
        duration: props.duration * 0.6,
        ease: "power2.in",
        onComplete: done,
      });
      break;
    default:
      gsap.to(el, {
        y: -50,
        opacity: 0,
        duration: props.duration * 0.6,
        ease: "power2.in",
        onComplete: done,
      });
  }
};
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  position: absolute;
  width: 100%;
}
</style>

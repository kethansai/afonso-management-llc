import { ref, onMounted } from "vue";
import { gsap } from "gsap";

export const useAnimations = () => {
  const isVisible = ref(false);

  // Common animation variants (similar to Framer Motion)
  const animations = {
    fadeInUp: {
      initial: { opacity: 0, y: 30 },
      enter: {
        opacity: 1,
        y: 0,
        transition: { duration: 600, ease: "easeOut" },
      },
    },
    fadeInDown: {
      initial: { opacity: 0, y: -30 },
      enter: {
        opacity: 1,
        y: 0,
        transition: { duration: 600, ease: "easeOut" },
      },
    },
    fadeInLeft: {
      initial: { opacity: 0, x: -50 },
      enter: {
        opacity: 1,
        x: 0,
        transition: { duration: 600, ease: "easeOut" },
      },
    },
    fadeInRight: {
      initial: { opacity: 0, x: 50 },
      enter: {
        opacity: 1,
        x: 0,
        transition: { duration: 600, ease: "easeOut" },
      },
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.8 },
      enter: {
        opacity: 1,
        scale: 1,
        transition: { duration: 500, ease: "backOut" },
      },
    },
    slideInBottom: {
      initial: { opacity: 0, y: 100 },
      enter: {
        opacity: 1,
        y: 0,
        transition: { duration: 800, ease: "easeOut" },
      },
    },
    staggerChildren: (delay = 100) => ({
      initial: { opacity: 0, y: 20 },
      enter: { opacity: 1, y: 0, transition: { duration: 500, delay } },
    }),
  };

  // GSAP Timeline animations for complex sequences
  const createStaggerAnimation = (selector, options = {}) => {
    const tl = gsap.timeline();

    tl.fromTo(
      selector,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
        ...options.from,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        ...options.to,
      }
    );

    return tl;
  };

  const createParallaxEffect = (element, speed = 0.5) => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * speed;
      element.style.transform = `translateY(${parallax}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  };

  const bounceIn = (element) => {
    gsap.fromTo(
      element,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "bounce.out",
      }
    );
  };

  const slideInFromSide = (element, direction = "left") => {
    const x = direction === "left" ? -100 : 100;

    gsap.fromTo(
      element,
      {
        x: x,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      }
    );
  };

  const typeWriter = (element, text, speed = 50) => {
    element.textContent = "";
    let i = 0;

    const timer = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return timer;
  };

  const morphCard = (element) => {
    const tl = gsap.timeline();

    tl.to(element, {
      scale: 1.05,
      rotationY: 5,
      duration: 0.3,
      ease: "power2.out",
    });

    return tl;
  };

  onMounted(() => {
    isVisible.value = true;
  });

  return {
    animations,
    isVisible,
    createStaggerAnimation,
    createParallaxEffect,
    bounceIn,
    slideInFromSide,
    typeWriter,
    morphCard,
  };
};

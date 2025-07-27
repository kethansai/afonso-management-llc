import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";

export const useScrollAnimations = () => {
  const scrollY = ref(0);
  const isScrolling = ref(false);

  // Scroll-triggered animations
  const animateOnScroll = (elements, options = {}) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            const animationType = target.dataset.animation || "fadeInUp";

            switch (animationType) {
              case "fadeInUp":
                gsap.fromTo(
                  target,
                  { opacity: 0, y: 50 },
                  { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
                );
                break;
              case "slideInLeft":
                gsap.fromTo(
                  target,
                  { opacity: 0, x: -100 },
                  { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
                );
                break;
              case "slideInRight":
                gsap.fromTo(
                  target,
                  { opacity: 0, x: 100 },
                  { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
                );
                break;
              case "scaleIn":
                gsap.fromTo(
                  target,
                  { opacity: 0, scale: 0.5 },
                  { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }
                );
                break;
              case "rotateIn":
                gsap.fromTo(
                  target,
                  { opacity: 0, rotation: -45, scale: 0.5 },
                  {
                    opacity: 1,
                    rotation: 0,
                    scale: 1,
                    duration: 1,
                    ease: "back.out(1.7)",
                  }
                );
                break;
            }

            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
        ...options,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return observer;
  };

  // Parallax scroll effect
  const parallaxScroll = (element, speed = 0.5) => {
    const updateParallax = () => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;

      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        gsap.set(element, { y: rate });
      }
    };

    window.addEventListener("scroll", updateParallax);
    return () => window.removeEventListener("scroll", updateParallax);
  };

  // Smooth scroll to element
  const scrollToElement = (target, duration = 1000) => {
    const element =
      typeof target === "string" ? document.querySelector(target) : target;

    if (element) {
      gsap.to(window, {
        duration: duration / 1000,
        scrollTo: { y: element, offsetY: 80 },
        ease: "power2.inOut",
      });
    }
  };

  // Mouse-follow animation
  const createMouseFollower = (element, intensity = 0.1) => {
    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * intensity;
      const deltaY = (e.clientY - centerY) * intensity;

      gsap.to(element, {
        x: deltaX,
        y: deltaY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  };

  // Stagger animation for lists
  const staggerElements = (selector, options = {}) => {
    const elements = document.querySelectorAll(selector);

    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: 30,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        ...options,
      }
    );
  };

  // Update scroll position
  const updateScrollY = () => {
    scrollY.value = window.pageYOffset;
    isScrolling.value = true;

    clearTimeout(updateScrollY.timeout);
    updateScrollY.timeout = setTimeout(() => {
      isScrolling.value = false;
    }, 150);
  };

  onMounted(() => {
    window.addEventListener("scroll", updateScrollY);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", updateScrollY);
  });

  return {
    scrollY,
    isScrolling,
    animateOnScroll,
    parallaxScroll,
    scrollToElement,
    createMouseFollower,
    staggerElements,
  };
};

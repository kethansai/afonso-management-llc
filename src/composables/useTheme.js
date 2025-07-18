import { ref, watch, onMounted } from "vue";

const isDark = ref(false);

// Check if user has a theme preference stored in localStorage
const initializeTheme = () => {
  const stored = localStorage.getItem("theme");

  if (stored) {
    isDark.value = stored === "dark";
  } else {
    // Check system preference
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    isDark.value = systemPrefersDark;
  }
  // Apply theme to document
  applyTheme();
};

const applyTheme = () => {
  // Remove both classes first
  document.documentElement.classList.remove("dark", "light");

  if (isDark.value) {
    document.documentElement.classList.add("dark");
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.add("light");
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
};

const toggleTheme = () => {
  isDark.value = !isDark.value;
  applyTheme();
};

// Watch for theme changes
watch(isDark, (newValue) => {
  applyTheme();
});

// Listen for system theme changes
if (typeof window !== "undefined") {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        isDark.value = e.matches;
      }
    });
}

export const useTheme = () => {
  return {
    isDark,
    toggleTheme,
    initializeTheme,
  };
};

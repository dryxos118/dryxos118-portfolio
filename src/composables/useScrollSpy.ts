import { onBeforeUnmount, onMounted, ref } from "vue";

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const activeSection = ref(sectionIds[0] ?? "");
  let ticking = false;

  const updateActiveSection = () => {
    const doc = document.documentElement;
    const isAtBottom =
      window.scrollY + window.innerHeight >= doc.scrollHeight - 2;

    if (isAtBottom && sectionIds.length > 0) {
      activeSection.value = sectionIds[sectionIds.length - 1];
      return;
    }

    let currentId = sectionIds[0] ?? "";
    let bestDelta = Number.POSITIVE_INFINITY;

    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (!element) continue;

      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (!isVisible) continue;

      const delta = Math.abs(rect.top - offset);

      if (delta < bestDelta) {
        bestDelta = delta;
        currentId = id;
      }
    }

    activeSection.value = currentId;
  };

  const handleScroll = () => {
    if (ticking) return;

    ticking = true;

    requestAnimationFrame(() => {
      updateActiveSection();
      ticking = false;
    });
  };

  onMounted(() => {
    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    window.addEventListener("orientationchange", handleScroll);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleScroll);
    window.removeEventListener("orientationchange", handleScroll);
  });

  return {
    activeSection,
  };
}

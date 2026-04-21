<script setup lang="ts">
import { useScrollSpy } from "@/composables/useScrollSpy";
import { useSmoothScroll } from "@/composables/useSmoothScroll";

import AppDesktopNav from "./AppDesktopNav.vue";
import AppMobileNav from "./AppMobileNav.vue";

const links = [
  { id: "hero", label: "Accueil", icon: "i-lucide-house" },
  { id: "skills", label: "Skills", icon: "i-lucide-code-2" },
  { id: "experience", label: "Expérience", icon: "i-lucide-briefcase" },
  { id: "projects", label: "Projets", icon: "i-lucide-folder-kanban" },
  { id: "contact", label: "Contact", icon: "i-lucide-mail" },
];

const { activeSection } = useScrollSpy(links.map((l) => l.id));
const { scrollToSection } = useSmoothScroll();

const handleNavigation = (id: string) => {
  scrollToSection(id);
};
</script>

<template>
  <AppDesktopNav
    :links="links"
    :active-section="activeSection"
    :on-navigate="handleNavigation"
  />

  <AppMobileNav
    :links="links"
    :active-section="activeSection"
    :on-navigate="handleNavigation"
  />
</template>

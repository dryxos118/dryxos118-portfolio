<template>
  <main class="mt-4">
    <HeroSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <ContactSection />
    <BackToTopButton />
  </main>
</template>

<script setup lang="ts">
import HeroSection from "@/components/sections/hero/HeroSection.vue";
import SkillsSection from "@/components/sections/skills/SkillsSection.vue";
import ExperienceSection from "@/components/sections/experiences/ExperienceSection.vue";
import ProjectsSection from "@/components/sections/projects/ProjectsSection.vue";
import ContactSection from "@/components/sections/contacts/ContactSection.vue";
import BackToTopButton from "@/components/ui/BackToTopButton.vue";
</script>

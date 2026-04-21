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
import ExperienceSection from "@/components/sections/ExperienceSection.vue";
import ProjectsSection from "@/components/sections/ProjectsSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
import BackToTopButton from "@/components/sections/BackToTopButton.vue";
</script>

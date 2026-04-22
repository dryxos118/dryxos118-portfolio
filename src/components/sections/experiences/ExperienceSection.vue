<template>
  <SectionBlock
    id="experience"
    :eyebrow="currentEyebrow"
    title="Mon parcours"
    description="Mon parcours professionel et de formation."
  >
    <UTabs v-model="activeTab" :items="tabs" class="mb-8 custom-tabs" />

    <div class="grid gap-6">
      <ExperienceCard
        v-for="item in filteredItems"
        :key="item.id"
        :title="item.title"
        :subtitle="item.subtitle"
        :period="item.period"
        :description="item.description"
        :type="item.type"
        :techs="item.techs ?? []"
        :is-phantom="item.id === 'exp-phantom'"
      />
    </div>
  </SectionBlock>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import SectionBlock from "@/components/ui/SectionBlock.vue";
import { TIMELINE_ITEMS } from "@/data/experience";

const activeTab = ref<"experience" | "education">("experience");

const tabs = [
  { label: "Expériences", value: "experience", icon: "i-lucide-briefcase" },
  { label: "Formations", value: "education", icon: "i-lucide-graduation-cap" },
];

const filteredItems = computed(() =>
  TIMELINE_ITEMS.filter((item) => item.type === activeTab.value),
);

const currentEyebrow = computed(() =>
  activeTab.value === "experience" ? "Expérience" : "Formation",
);
</script>

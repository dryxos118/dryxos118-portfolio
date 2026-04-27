<template>
  <UModal
    v-model:open="isOpen"
    :title="project.title"
    class="border border-accented"
  >
    <template #body>
      <div class="space-y-6">
        <img
          v-if="project.image"
          :src="project.image"
          :alt="project.title"
          class="max-h-80 w-full rounded-md object-cover border border-accented"
        />

        <p class="text-sm leading-7 text-toned">
          {{ project.description }}
        </p>

        <div class="flex flex-wrap gap-2">
          <BaseBadge
            v-for="tag in project.tags"
            :key="tag.name"
            :name="tag.name"
            :icon="tag.icon"
            :icon-color="tag.color"
          />
        </div>
      </div>
    </template>

    <template #footer>
      <div class="flex flex-wrap gap-3 w-full">
        <UButton
          v-if="project.link"
          :to="project.link"
          target="_blank"
          class="flex-1 min-w-50 justify-center"
          trailing-icon="i-lucide-external-link"
        >
          Voir le projet
        </UButton>

        <UButton
          v-if="project.repoUrl"
          :to="project.repoUrl"
          target="_blank"
          color="neutral"
          variant="soft"
          icon="i-lucide-github"
          class="flex-1 min-w-50 justify-center"
        >
          GitHub
        </UButton>

        <UButton
          v-if="project.repoFront"
          :to="project.repoFront"
          target="_blank"
          color="neutral"
          variant="soft"
          icon="i-lucide-github"
          class="flex-1 min-w-50 justify-center"
        >
          Front
        </UButton>

        <UButton
          v-if="project.repoBack"
          :to="project.repoBack"
          color="neutral"
          variant="soft"
          icon="i-lucide-github"
          target="_blank"
          class="flex-1 min-w-50 justify-center"
        >
          Back
        </UButton>
      </div>
    </template>
  </UModal>
</template>

<script setup lang="ts">
import type { Project } from "@/data/projects";
import { computed } from "vue";

const props = defineProps<{
  open: boolean;
  project: Project;
}>();

const emit = defineEmits<{
  (e: "update:open", value: boolean): void;
}>();

const isOpen = computed({
  get() {
    return props.open;
  },
  set(value: boolean) {
    emit("update:open", value);
  },
});
</script>

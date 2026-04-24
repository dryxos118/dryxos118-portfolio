<template>
  <UModal v-model:open="isOpen" class="border border-accented">
    <template #content>
      <div class="space-y-6 p-6">
        <img
          v-if="project.image"
          :src="project.image"
          :alt="project.title"
          class="max-h-80 w-full rounded-md object-cover border border-accented"
        />

        <div>
          <h3 class="text-2xl font-bold text-highlighted">
            {{ project.title }}
          </h3>

          <p class="mt-4 text-sm leading-7 text-toned">
            {{ project.description }}
          </p>
        </div>

        <div class="flex flex-wrap gap-2">
          <UBadge
            v-for="tag in project.tags"
            :key="tag"
            color="neutral"
            variant="soft"
            class="rounded-full"
          >
            {{ tag }}
          </UBadge>
        </div>

        <div class="flex flex-wrap gap-3">
          <UButton
            v-if="project.link"
            :to="project.link"
            target="_blank"
            class="rounded-full"
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
            class="rounded-full"
            icon="i-lucide-github"
          >
            GitHub
          </UButton>

          <UButton
            v-if="project.repoFront"
            :to="project.repoFront"
            target="_blank"
            color="neutral"
            variant="soft"
            class="rounded-full"
          >
            Front
          </UButton>

          <UButton
            v-if="project.repoBack"
            :to="project.repoBack"
            target="_blank"
            color="neutral"
            variant="soft"
            class="rounded-full"
          >
            Back
          </UButton>
        </div>
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

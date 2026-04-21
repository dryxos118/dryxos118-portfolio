<script setup lang="ts">
import { ref } from "vue";

const open = ref(false);

defineProps<{
  links: {
    id: string;
    label: string;
    icon: string;
  }[];
  activeSection: string;
  onNavigate: (id: string) => void;
}>();
</script>

<template>
  <div class="sm:hidden">
    <div class="fixed left-6 top-2 z-50">
      <UButton
        icon="i-lucide-menu"
        color="neutral"
        variant="soft"
        class="shadow-lg"
        @click="open = true"
      />
    </div>

    <div class="fixed right-6 top-2 z-50">
      <AppColorModeButton />
    </div>

    <USlideover v-model:open="open" side="left">
      <template #content>
        <div class="p-4">
          <div class="flex items-center justify-between">
            <p class="text-sm font-semibold text-default">Navigation</p>

            <UButton
              icon="i-lucide-x"
              color="neutral"
              variant="ghost"
              @click="open = false"
            />
          </div>

          <div class="mt-4 flex flex-col gap-3">
            <UButton
              v-for="link in links"
              :key="link.id"
              size="lg"
              :variant="activeSection === link.id ? 'soft' : 'ghost'"
              :color="activeSection === link.id ? 'primary' : 'neutral'"
              class="justify-start"
              :icon="link.icon"
              @click="
                onNavigate(link.id);
                open = false;
              "
            >
              {{ link.label }}
            </UButton>
          </div>
        </div>
      </template>
    </USlideover>
  </div>
</template>

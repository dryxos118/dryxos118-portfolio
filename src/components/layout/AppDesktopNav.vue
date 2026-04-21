<script setup lang="ts">
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
  <header
    class="fixed left-1/2 top-2 z-50 hidden -translate-x-1/2 sm:block sm:top-4"
  >
    <div class="flex items-center gap-2">
      <nav
        class="flex items-center gap-3 bg-muted/80 backdrop-blur-md rounded-md p-2.5 border border-muted/50 shadow-lg shadow-neutral-950/5"
      >
        <UButton
          v-for="link in links"
          :key="link.id"
          :variant="activeSection === link.id ? 'solid' : 'soft'"
          :color="activeSection === link.id ? 'primary' : 'neutral'"
          :icon="link.icon"
          @click="onNavigate(link.id)"
        >
          {{ link.label }}
        </UButton>

        <AppColorModeButton />
      </nav>
    </div>
  </header>
</template>

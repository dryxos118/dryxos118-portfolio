<template>
  <UBadge
    :color="props.color"
    :variant="props.variant"
    :size="props.size"
    class="text-sm font-medium inline-flex items-center"
    :class="props.icon ? 'px-3.5 py-1.5' : 'px-3 py-1'"
  >
    <UIcon
      v-if="props.icon"
      :name="props.icon"
      class="size-4 mr-1.5"
      :style="{ color: props.iconColor }"
    />

    <span>{{ props.name }}</span>
  </UBadge>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name: string;
    icon?: string;
    iconColor?: string;
    color?: "primary" | "neutral" | "success" | "warning" | "error";
    variant?: "solid" | "soft" | "subtle" | "outline";
    size?: "xs" | "sm" | "md" | "lg";
  }>(),
  {
    color: "neutral",
    variant: "soft",
    size: "md",
  },
);
</script>

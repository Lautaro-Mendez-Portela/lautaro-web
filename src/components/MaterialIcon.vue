<script setup lang="ts">
import { computed } from 'vue'
import { materialIcons } from '../assets/material-icons'

const props = defineProps<{ name: string }>()
const icon = computed(() => materialIcons[props.name])
</script>

<template>
  <span class="material-symbols-outlined" aria-hidden="true">
    <svg v-if="icon" :viewBox="icon.viewBox" focusable="false" aria-hidden="true">
      <path v-for="(path, index) in icon.paths" :key="index" :d="path.d" :fill-rule="path.fillRule" />
    </svg>
  </span>
</template>

<template>
  <div class="iconStyle">
    <i :class="iconSelected.name" :style="{color: iconSelected.color}"></i>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { getStyleByScore } from "./getStyleByScore";

const { score } = defineProps({
  score: {
    type: Number,
    required: true,
  },
});

const iconSelected = computed(()=> getStyleByScore(score));

</script>

<style>
.iconStyle {
  font-size: 30px;
}
</style>

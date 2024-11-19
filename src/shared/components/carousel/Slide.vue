<template>
  <div class="slideClass" :style="slideStyle" v-show="!isLoaded">
    <LoadingCircle />
  </div>

  <div class="slideClass" :style="slideStyle" v-show="isLoaded">
    <img :src="props.src" alt="" :onload="loaded" :style="imgStyle" />
    <h2 class="titleStyle carousel-title-color">{{ title }}</h2>
    <div class="slide-ornaments">
      <slot name="score"></slot>
      <slot name="icon"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LoadingCircle from "../loading-cicle/LoadingCircle.vue";
const isLoaded = ref(false);

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  src: {
    type: String,
    required: true,
  },
});

const slideStyle = {
  background: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "100%",
};

const imgStyle = {
  width: "100%",
  height: "100%",
};

function loaded() {
  isLoaded.value = true;
}
</script>

<style>
img {
  border-radius: 20px;
}
.slideClass {
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  object-fit: fill;
  border-radius: 20px;
}

.slide-ornaments{
  position: absolute;
  top: 5px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;
}

.titleStyle {
  position: absolute;
  bottom: 5px;
  font-style: italic;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>

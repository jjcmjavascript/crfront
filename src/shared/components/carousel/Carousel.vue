<template>
  <div class="carousel-main" :style="carouselContainerStyle">
    <div :style="carouselContainerStyle" class="carousel-container" id="slideConitanerRef">
      <Slide v-for="d in data" :src="d.url" :title="d.title" :key="d.name">
        <template #icon>
          <RankIcon :score="d.score" />
        </template>
        <template #score>
          <i class="carousel-text-score" :style="{ color: getStyleByScore(d.score).color }"
            >Score: {{ d.score }}</i
          >
        </template>
      </Slide>
    </div>

    <div class="carousel-buttons-container">
      <button class="carousel-button" @click="left">
        <i class="bi bi-arrow-left"></i>
      </button>
      <button class="carousel-button" @click="right">
        <i class="bi bi-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Slide from './Slide.vue'
import RankIcon from './RankIcon.vue'
import { getStyleByScore } from './util/getStyleByScore.js'

const props = defineProps(['width', 'height', 'data'])

const carouselContainerStyle = {
  display: 'flex',
  width: props.width,
  height: props.height,
}

const position = ref(0)

function left() {
  const item = document.querySelector('#slideConitanerRef')

  if (item) {
    if (item.scrollLeft === 0) {
      position.value = props.data.length - 1
      item.scrollLeft = item.clientWidth * (props.data.length - 1)
    } else {
      item.scrollLeft -= item.clientWidth
      position.value--
    }
  }
}

function right() {
  const item = document.querySelector('#slideConitanerRef')

  if (item) {
    if (item.scrollLeft === item.clientWidth * (props.data.length - 1)) {
      position.value = 0
      item.scrollLeft = 0
    } else {
      item.scrollLeft += item.clientWidth
      position.value++
    }
  }
}
</script>

<style>
.carousel-title-color {
  color: rgb(0, 105, 92);
}

.carousel-main {
  position: relative;
  border-radius: 20px;
  box-shadow: 0 0 5px 5px rgb(224, 224, 224, 0.8);
}

.carousel-container {
  overflow: hidden;
  position: relative;
  padding: 0;
  margin: 0;
  border-radius: 20px;
  /* overflow-y: hidden;
  overflow-x: scroll; */
}

.carousel-button {
  border: 0;
  background: rgb(224, 224, 224, 0.1);
  border-radius: 2px;
  color: rgb(102, 187, 106);
  font-size: 30px;
  font-weight: bolder;
}

.carousel-button:hover {
  cursor: pointer;
  background: rgb(224, 224, 224, 0.6);
}

.carousel-buttons-container {
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 50%;
}

.carousel-text-score {
  font-weight: bold;
  font-size: 14px;
}
</style>

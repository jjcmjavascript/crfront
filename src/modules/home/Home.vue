<template>
  <MyHeader />

  <SearchInput />

  <section name="carousel section" alt="mas buscados" class="carousel-section">
    <h2 class="mas-buscado-text">Más buscados de la semana</h2>
    <Carousel width="80vw" height="400px" :data="data" />
  </section>

  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, eum mollitia dolores culpa
    aut sit vel natus deleniti praesentium voluptatibus necessitatibus deserunt repellendus odit
    iusto assumenda nisi optio dolor excepturi?
  </p>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Carousel from '@/shared/components/carousel/Carousel.vue'
import MyHeader from '@/shared/components/header/Header.vue'
import SearchInput from './components/SearchSection.vue'
import fakedata from '../../../fakedata.js'

const data = ref(fakedata)
</script>

<style>
.carousel-section {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.mas-buscado-text {
  font-size: 3em;
  font-weight: bold;
  background: linear-gradient(90deg, rgb(2, 65, 35), rgb(43, 69, 238));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  text-align: center;
  text-shadow: white 4px 4px 0px;
}

@media (max-width: 768px) {
  .gradient-text {
    font-size: 1.5em;
  }
  .search-input {
    width: 80%;
    height: 2rem;
  }
  .search-button {
    height: 3.4rem;
    width: 20%;
    font-size: 1rem;
  }
}
</style>

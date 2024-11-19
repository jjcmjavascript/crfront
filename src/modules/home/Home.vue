<template>
  <MyHeader />

  <SearchInput />

  <section name="carousel section" alt="mas buscados">
    <h2 class="mas-buscado-text">Más buscados de la semana</h2>
    <div class="cards-section-container">
      <CompanyCard v-for="n in 5" />
    </div>
  </section>

  <footer class="footer">Repositorio: jjcmjavascript</footer>
</template>

<script setup>
import { ref } from 'vue'
import Carousel from '@/shared/components/carousel/Carousel.vue'
import MyHeader from '@/shared/components/header/Header.vue'
import SearchInput from './components/SearchSection.vue'
import fakedata from '../../../fakedata'
import CompanyCard from './components/CompanyCard.vue'

const data = ref(fakedata)
</script>

<style>
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

.footer {
  background-color: blueviolet;

  margin-top: 100px;
  height: 100px;
}

.cards-section-container {
  margin-left: 10%;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .mas-buscado-text {
    font-size: 2em;
  }
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

  .cards-section-container {
    grid-template-columns: 1fr;
  }
}
</style>

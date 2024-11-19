<template>
  <MyHeader />

  <SearchInput />

  <section name="carousel section" alt="mas buscados">
    <h2 class="mas-buscado-text">Más buscados de la semana</h2>

    <div class="carousel-section">
      <div class="card-container">
        <div>
          <img
            width="200rem"
            height="200rem"
            src="https://startupslatam.com/wp-content/uploads/2021/05/Lemontech.png"
          />
        </div>
        <div class="companyCard-text-container">
          <div class="companyCard-text">
            <h5>Empresa:</h5>
          </div>
          <div class="companyCard-text">
            <h5>Puntuacion:</h5>
            <span>4.5 <i class="bi bi-star-fill"></i> </span>
          </div>
        </div>
      </div>

      <div class="card-container">
        <div>
          <img
            width="200rem"
            height="200rem"
            src="https://startupslatam.com/wp-content/uploads/2021/05/Lemontech.png"
          />
        </div>
        <div class="companyCard-text-container">
          <div class="companyCard-text">
            <h5>Empresa:</h5>
          </div>
          <div class="companyCard-text">
            <h5>Puntuacion:</h5>
            <span>4.5 <i class="bi bi-star-fill"></i> </span>
          </div>
        </div>
      </div>

      <div class="card-container">
        <div>
          <img
            width="200rem"
            height="200rem"
            src="https://startupslatam.com/wp-content/uploads/2021/05/Lemontech.png"
          />
        </div>
        <div class="companyCard-text-container">
          <div class="companyCard-text">
            <h5>Empresa:</h5>
          </div>
          <div class="companyCard-text">
            <h5>Puntuacion:</h5>
            <span>4.5 <i class="bi bi-star-fill"></i> </span>
          </div>
        </div>
      </div>
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

const data = ref(fakedata)
</script>

<style>
.carousel-section {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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

.footer {
  background-color: blueviolet;

  margin-top: 100px;
  height: 100px;
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

.card-container {
  margin-left: 1rem;
}

.companyCard-text {
  padding: 0px;
  margin: 0px;
  display: flex;
  align-items: center;
}
.companyCard-text h5 {
  margin-left: 1rem;
  padding: 0;
  margin: 0;
  font-size: 1rem;
}

.companyCard-text span {
  margin-left: 0.8rem;
}

.companyCard-text span i {
  color: yellow;
}
</style>

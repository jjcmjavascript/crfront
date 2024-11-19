<template>
  <section name="seccion buscar empleado" class="search-input-main-container">
    <div class="search-input-container-secondary">
      <h1 class="gradient-text">Encuentra tu empresa favorita!</h1>
      <div class="search-input-container">
        <input placeholder="Nombre de la empresa" class="search-input" />
        <button class="search-button">
          <i class="bi bi-search-heart"></i>
        </button>
      </div>
      <h1 class="">O reportala 😈</h1>
    </div>
  </section>
</template>

<script setup></script>

<style>
.search-input-main-container {
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-input-container-secondary {
  width: 80%;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 60%;
  border-radius: 1rem;
}

.search-input-container {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
}

.search-input {
  border: none;
  padding: 10px;
  height: 3rem;
  width: 90%;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  box-shadow: 0px 0px 10px 2px white;
}

.search-button {
  height: 4.3rem;
  width: 10%;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: rgb(0, 77, 64);
  color: rgb(178, 223, 219);
  font-size: 1.5rem;
}

.search-input:active,
.search-input:hover,
.search-input:focus {
  text-decoration: none;
  border: none;
  outline: none;
  box-shadow: 0px 0px 8px 1px white;
}

.gradient-text {
  font-size: 3em;
  font-weight: bold;
  background: linear-gradient(90deg, rgb(2, 65, 35), rgb(43, 69, 238));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  text-align: center;
}
</style>

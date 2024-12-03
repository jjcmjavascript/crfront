<template>
  <div class="grid-container">
    <div class="grid-item item-1">
      <img
        src="https://www.flaticon.com/media/dist/min/img/logos/flaticon-color-negative.svg"
        alt="company"
      />
    </div>
    <div class="grid-item item-2">
      <ul>
        <li><Ico />Salario<i class="bi bi-star-fill" v-for="i in 5" :key="i"></i></li>
        <li>Tecnologías<i class="bi bi-star-fill" v-for="i in 5" :key="i"></i></li>
        <li>Ambiente laboral<i class="bi bi-star-fill" v-for="i in 5" :key="i"></i></li>
        <li>Posibilidad de crecimiento<i class="bi bi-star-fill" v-for="i in 5" :key="i"></i></li>
      </ul>
    </div>
    <div class="grid-item item-3">
      <div class="flex-container">
        <Textbox />
      </div>
    </div>
    <div class="grid-item item-4">
      <div class="flex-container">
        <form @submit.prevent="agregarPregunta">
      <input
        type="text"
        v-model="nuevaPregunta"
        placeholder="Inserte comentarios............"
        required
      />

    </form>
      </div>
    </div>
  </div>
</template>

<script>
import Textbox from './Texbox.vue'

export default {
  name: 'Company',
  components: {
    Textbox,

  },
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 10px; /* Puedes ajustar el valor del espacio entre celdas */
}

.grid-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3153af5e; /* Color de fondo de los elementos */
  padding: 5 px; /* Espaciado interno de los elementos */
}

.item-1 {
  grid-column: span 3;
  grid-row: span 3;
}

.item-2 {
  grid-column: 4 / span 2;
  grid-row: span 3;
}

.item-3 {
  grid-column: span 5;
  grid-row-start: 4;
  align-items: center;
}
.item-4 {
  grid-column: span 5;
  grid-row-start: 5;

}

.flex-container {
  display: flex;
  gap: 4px; /* Ajusta el espacio entre el Textbox y el botón */
  align-items: center;
}

.my-button:hover {
  background-color: #45a049;
}
</style>

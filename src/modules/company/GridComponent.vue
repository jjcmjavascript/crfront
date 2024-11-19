<template>

  <div class="grid-container">
    <div class="grid-item item-1">
      <img src="https://www.flaticon.com/media/dist/min/img/logos/flaticon-color-negative.svg" alt="company">
    </div>
    <div class="grid-item item-2">
      <ul>
        <li><ico/>Salario</li>
        <li>Tecnologías</li>
        <li>Ambiente laboral<i class="bi bi-star-fill"></i></li>
        <li>Posibilidad de crecimiento</li>
      </ul>
      <button class="my-button">VTAR</button>
    </div>
  </div>
</template>

<script>


</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 16px; /* Puedes ajustar el valor del espacio entre celdas */
}

.grid-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #685252; /* Color de fondo de los elementos */
  padding: 16px; /* Espaciado interno de los elementos */
}

.item-1 {
  grid-column: span 3;
  grid-row: span 4;
}

.item-2 {
  grid-column: 4 / span 2;
  grid-row: span 4;
}
.my-button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.my-button:hover {
  background-color: #45a049;
}

.my-button:active {
  background-color: #3e8e41;
}
</style>

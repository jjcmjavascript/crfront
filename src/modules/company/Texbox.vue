
<template>
  <div class="preguntas-container">
    <h2>Deja tu comentario</h2>
    <form @submit.prevent="agregarPregunta">
      <input
        type="text"
        v-model="nuevaPregunta"
        placeholder="Escribe tu comentario aquí..."
        required
      />
      <button type="submit">Comentar</button>
    </form>
    <ul>
      <li v-for="pregunta in preguntas" :key="pregunta.id">
        {{ pregunta.texto }}
      </li>
    </ul>
  </div>
</template>

<script>

</script>

<style scoped>


form {

  display: flex;
  margin-bottom: 20px;
}

input[type="text"] {
  flex-grow: 1;
  width: 100%; /* Abarca todo el ancho del contenedor */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
  font-size: 16px;

}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 16px;

}

button:hover {
  background-color: #45a049;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background-color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #eee;
  font-size: 16px;
}
</style>


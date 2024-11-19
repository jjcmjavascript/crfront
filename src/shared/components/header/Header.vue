<template>
  <nav class="desktop-menu">
    <ul>
      <li><a href=""> Ver todas </a></li>
      <li><a href=""> Reportar </a></li>
      <li><a href=""> Iniciar </a></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  width: 100%;
  justify-content: right;
}
ul {
  display: flex;
  width: 100%;
  justify-content: right;
}
ul > li {
  list-style-type: none;
  text-decoration: none;
  margin-right: 1rem;
}

.desktop-menu a, .desktop-menu a:active,.desktop-menu a:visited {
  color: white;
  font-weight: bold;
  text-decoration: none;
  font-size: 0.85rem;
  background: linear-gradient(90deg,rgba(43, 69, 238, 0.8),  rgba(2, 65, 35, 0.9));
  padding: 10px;
  border-radius: 20px;
}

.desktop-menu a:hover {
  background: linear-gradient(90deg,rgba(43, 69, 238, 0.9),  rgba(2, 65, 35, 1));
}

@media (max-width: 768px) {
  nav.desktop-menu {
    display: none;
  }
}
</style>

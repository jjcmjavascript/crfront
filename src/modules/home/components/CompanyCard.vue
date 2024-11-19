<template>
  <div class="card-container">
    <div>
      <img src="https://startupslatam.com/wp-content/uploads/2021/05/Lemontech.png" />
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
</template>

<style scoped>
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

.card-container {
  width: 100%;
  margin-bottom: 1rem;
  box-sizing: border-box;
  padding: 5px;
}

img {
  width: 100% !important;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .card-container {
    width: 100%;
    margin-bottom: 1rem;
  }

  img {
    width: 100%;
    height: 10rem;
  }
}
</style>

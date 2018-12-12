<template>
  <section id="what-we-do">
    <b-container fluid>
      <h2 class="section-title mb-2 h1">
          Coches disponibles <b>({{ filteredCars.length }})</b>
      </h2>
      <b-row
          v-for="row in Math.ceil(filteredCars.length / numberOfColumns)"
          :key="row"
      >
        <b-col
            v-for="car in filteredCars.slice((row - 1) * numberOfColumns, row * numberOfColumns)"
            :key="car.id"
        >
          <b-card :title="carModel(car.car_model)">
            <div :class="'card-block ' + blockRandom()">
              <h3 class="card-title">
                Año: {{ car.car_model_year }}
              </h3>
              <p class="card-text">
                Precio final: {{ car.price }}<br />
                Disponibe: {{ available(car.available) }}
              </p>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<style lang="stylus">
  @import "../../assets/search.styl"
  // ll
</style>


<script setup>

  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'; 
</script>

<script>

  export default {
    name: 'Basic',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation
    }
  }

</script>

<template>

    <carousel :items-to-show="1" :wrapAround="true">

        <slide v-for="slide in 10" :key="slide">
          <div class="carouselItem">
            <img src="../assets/img/graphoreme.png" alt="graphoreme" />
            <img src="../assets/img/elc.png" alt="elc" />
          </div>
        </slide>

        <template #addons>
            <Navigation />
            <Pagination />
        </template>


    </carousel>

</template>

<style scoped>

.carouselItem{
  min-height: 200px;
  width: 100%;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>

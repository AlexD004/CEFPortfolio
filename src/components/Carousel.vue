<script setup>
</script>

<script>

export default {

  props: ['gallery'],

  data() {
    return {

        /* Firsts declarations */
        isCurrent: false,
        currentSlide: 0,

        /* Slides List */
        items: this.$props.gallery
    }
  },

  computed: {
    /* Get quantity of slides in slider */
    maxSlides: function(){
        return this.items.length;
    }
  },

  methods: {

    /* Display the current slide in the slider */
    updateSlide: function(e) {
        this.$data.items[e].isCurrent = true;
    },

    /* Actions when click on next button */
    nextSlide: function() {

        /* Set data 'isCurrent' of the current slide to false : remove the slide from the slider */
        this.$data.items[this.currentSlide].isCurrent = false;
        /* Define the next slide as the 'current slide' */
        this.currentSlide = this.currentSlide + 1;

        /* If the current slide is the last one in the list, the next slide is the first of the list to loop the slider */
        if ( this.currentSlide > this.maxSlides - 1 ){
            this.currentSlide = 0;
        }
        /* Call updateSlide to display the new currentSlide */
        this.updateSlide(this.currentSlide);
    },

    /* Actions when click on previous button */
    prevSlide: function() {

        /* Set data 'isCurrent' of the current slide to false : remove the slide from the slider */
        this.$data.items[this.currentSlide].isCurrent = false;
        /* Define the previous slide as the 'current slide' */
        this.currentSlide = this.currentSlide - 1;

        /* If the current slide is the first one in the list, the previous slide is the last of the list to loop the slider */
        if ( this.currentSlide < 0 ){
            this.currentSlide = this.maxSlides - 1;
        }
        /* Call updateSlide to display the new currentSlide */
        this.updateSlide(this.currentSlide);
    }
    
  },

  mounted() {
    
    /* Call the updateSlide with the first slide in the list to setup the first display */
    this.updateSlide(this.currentSlide);

  }

}

</script>

<template>

        <div id="slider">
            
            <!-- Slides -->
            <div class="slide" v-for="item in items" :class="{ current: item.isCurrent }">
                <img class="contentSlide" :src="`${ item.url }`" :alt="`${ item.alt }`">
            </div>

            <!-- Buttons -->
            <button class="btn previous" data-button="previous" v-on:click="prevSlide">
                <img src="../assets/icon/arrow.svg" alt="Flèche tournée vers la gauche" />
            </button>
            <button class="btn next" data-button="next" v-on:click="nextSlide">
                <img src="../assets/icon/arrow.svg" alt="Flèche tournée vers la droite" />
            </button>

        </div>

</template>


<style scoped>

#slider{
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: var(--c-beige);
    border-radius: 20px 20px 0 0;
    overflow: hidden;
}
.slide{
    display: none;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    
    background: #fff;
    color:var(--c-dark-blue);
    font-weight: 700;
    border-radius: inherit;
}
.slide.current {
    display: flex;
}
.slide img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.btn{
    position: absolute;
    top:50%;
    border:none;
    background: var(--c-yellow);
    height: 35px;
    width: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    transition: .3s;
}
.btn:hover{
    background: var(--c-beige);
    transition: .3s;
}

.previous{
    left:0;
    border-radius: 0 10px 10px 0;
}
.next{
    right:0;
    border-radius: 10px 0 0 10px;
}

.next img{
    transform: rotate(180deg);
}

@media (min-width: 1024px) {

    #slider{
        border-radius: 20px 0 0 20px;
    }

}

</style>

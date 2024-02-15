<script setup>

  import ContactButton from '@/components/contactButton.vue';

  /* --- FUNCTIONS --- */

    /* Toggle responsive menu on clik on open/close buttons */
    function toggleResponsiveMenu() {
        const navList = document.querySelector("nav");
        navList.classList.toggle("open");
        
    }

    /* Close responsive menu on click on navigation items to see the result and not have to close in a second time...*/
    /* I don't use toggleResponsiveMenu because it open the responsive Nav on desktop...*/
    function removeResponsiveMenu() {
        const navList = document.querySelector("nav");
        if(navList.classList.contains("open")){
            navList.classList.remove("open");
        }
    }

 
</script>

<template>

  <header>

    <div class="wrapper">

        <!-- Site logo -->
        <a href="/"><img id="logo" src="../assets/img/logo-alexEI.svg" alt="Logo d'Alexandre Dupré EI, un carré bleu dans lequel est écrit Alexandre en rose et jaune" /></a>
      
        <!-- Smartphone : icon to open navigation -->
        <img id="menuBurger" src="../assets/icon/menuBurger.svg" alt="Pictogramme d'ouverture du menu" v-on:click="toggleResponsiveMenu" />

        <nav>

            <!-- Smartphone : icon to close navigation -->
            <img id="close" src="../assets/icon/close.svg" alt="Pictogramme de fermeture du menu" v-on:click="toggleResponsiveMenu" />

            <!-- Navigation -->
            <ul>
                <li><a href="#services" v-on:click="removeResponsiveMenu">Services</a></li>
                <li><a href="#portfolio" v-on:click="removeResponsiveMenu">Créations</a></li>
                <li class="onlyResponsive" v-on:click="removeResponsiveMenu"><a href="#contact" v-on:click="removeResponsiveMenu"><ContactButton /></a></li>
            </ul>
        </nav>
        
        <span class="onlyDesktop"><a href="#contact" v-on:click="removeResponsiveMenu"><ContactButton /></a></span>

    </div>

  </header>

</template>

<style scoped>


/* HEADER STYLES */
header{
    position: fixed;
    z-index: 99;
    top: 0;
    width: 100%;
    background: #FFF;
}
header div.wrapper{
  position: relative;
  z-index: 20;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
  height: 50px;

  background: #FFF;
}
/* Using :before to create a little custom dropshadow */
header:before{
  content:"";
  position:absolute;
  z-index: 1;
  bottom: 0;
  left:50%;
  transform: translate(-50%,-30%);

  width: 45%;
  height: 10px;

  background: #202020;
  border-radius: 50%;
  filter: blur(5px);
}
header #logo{
  position: relative;
  z-index:500;
  transform: translate(0,40%);
  width: 60%;
  height: auto;
}

/* -- STYLING LIST = Navigation -- */
ul{
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
li{
    margin: 0 25px;
    position: relative;
}
li a{
    font-weight: 500;
    text-decoration: none;
    color: var(--c-text-dark);
}

li a::before{
    content:"";
    position:absolute;
    bottom: -2px;

    width: 100%;
    height: 2px;
    border-radius: 5px;

    background: var(--c-pink);
    transform: scaleX(0);
    transition: .4s ease;
}
li a:hover::before{
    transform: scaleX(1);
}

/* -- STYLING RESPONSIVE -- */

/* Buttons Open/close */
#menuBurger{
    display: block;
    cursor: pointer;
}
#close{
    position: absolute;
    right: 20px;
    width: 25px;
    height: auto;
    cursor: pointer;
}
/* Styles and states of navigation list */
nav{
    display: none;
}
nav.open{
    display: block;

    position: fixed;
    left:0;
    top:0;
    z-index: 50;

    background: var(--c-beige);
    width: 100%;
    height: 100%;;
    display: flex;
    justify-content: center;
    padding-top: 20px;
}
nav.open ul{
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
}
nav.open li{
    margin: 15px 0;
}


@media (min-width: 1024px) {

header #logo{
  width: 100%;
  height: auto;
}
#menuBurger,
#close{
    display: none;
}
nav{
    display: block;
}

}

</style>

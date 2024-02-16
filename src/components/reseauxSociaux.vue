<script setup>

</script>

<template>

<ul id="reseauxSociaux">
    <a href="https://www.linkedin.com/in/alexdupre-graphoreme/" target="_blank"><li><img src="../assets/icon/icon-linkedin.svg" alt="Icone de LinkedIn" /></li></a>
    <a href="https://github.com/AlexD004" target="_blank"><li><img src="../assets/icon/icon-github.svg" alt="Icone de GitHub" /></li></a> 
</ul>

</template>

<style scoped>

ul#reseauxSociaux {
    list-style: none;
}
ul#reseauxSociaux li{
    cursor: pointer;
}
ul#reseauxSociaux li img{
    transform: scale(100%);
    transition:.3s;
}
ul#reseauxSociaux li:hover img{
    filter: drop-shadow(4px 3px 0 var(--c-pink));
    transform: scale(110%);
    transition:.3s; 
}


</style>

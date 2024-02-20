<script setup>

  import IconesReseauxSociaux from '@/components/reseauxSociaux.vue';

</script>

<template>

  <header>

    <div class="wrapper">
      
        <div id="footerLinks">
            <div id="footerNavigation">
                <h3>Navigation</h3>
                <nav>
                    <ul>
                        <li><a href="/">Présentation</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Créations</a></li>
                        <li><a href="/mentions-legales">Mentions Légales</a></li>
                    </ul>
                </nav>
            </div>
            <div id="footerSociaux">
                <h3>Réseaux</h3>
                <IconesReseauxSociaux :inFooter="true" />
            </div>
        </div>
        <div id="copyright">Alexandre Dupré - Tous droits réservés - Dernière mise à jour le XX/XX/2024</div>
    </div>

  </header>

</template>

<style scoped>

/* -- LAYOUT -- */
.wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#footerLinks{
    display: flex;
    flex-direction: column;
   justify-content: center;
   align-items: center;

    width: 100%;
    padding: 30px 0;
}
#footerNavigation,
#footerSociaux{
    min-width: 200px;
}

/* -- STYLING LIST -- */
ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0;
}
li a{
    font-weight: 500;
    text-decoration: none;
    color: var(--c-text-dark);
    border-bottom:0 solid var(--c-pink);
}
li a:hover{
    border-bottom: 2px solid var(--c-pink);
}
ul#reseauxSociaux{
    flex-direction: row;
}


@media (min-width: 1024px) {

#footerLinks{
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
}

}

</style>

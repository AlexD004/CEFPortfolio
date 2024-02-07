<script setup>
  import ContactButton from '@/components/contactButton.vue';
  import IconesReseauxSociaux from '@/components/reseauxSociaux.vue';
</script>

<template>
    <div class="wrapper">
        <div class="identity">
            <div id="identityAccroche">
                <h1>Soyez fort de votre présence digitale !</h1>
                <div id="identityPresentation">
                    Je m'appelle <strong>Alexandre Dupré</strong> et grâce à ma formation en <strong>direction artistique</strong> et <strong>développement web</strong>, je vous accompagne dans chacun de vos projets digitaux, pour vous garantir
                    <strong class="yellowUnderline">qualité, expertise et créativité !</strong>
                </div>
            </div>
            <div id="identityPhoto">
                <div id="identityPhotoWrap">
                    <img src="../assets/photoAlexandre.png" alt="Photographie de Alexandre Dupré - Homme avec des lunettes et un polo noir, sur fond jaune" />
                    <div id="identityReseauxSociaux">
                        <IconesReseauxSociaux />
                    </div>
                </div>
            </div>
            <div id="identityCTAContact">
                <ContactButton />
                <span class="minify">En plus, le devis est gratuit !</span>
            </div>
        </div>
    </div>

</template>

<style scoped>

.wrapper{
    padding: 50px 0;
    position: relative;
    z-index:10;
}

/* ------------------- */
/* Zone about Identity */
/* ------------------- */

/* LAYOUT with GRID */
.identity{
    width: 60%;
    margin:0 auto;

    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}
#identityAccroche{
    grid-area: 1 / 1 / 2 / 2;
    margin: 40px auto 0;
}
#identityPhoto{
    grid-area: 2 / 1 / 3 / 2;
    display: flex;
    justify-content: center;
}
#identityCTAContact{
    grid-area: 3 / 1 / 4 / 2;
    text-align: center;
    margin-top:25px;
}

/* Some precisions about elements layout */
.identity #identityPhoto img{
    width: 100%;
    max-width:300px;
    height: auto;
}
/* Using Wrap as reference for absolute position of social medias icons */
.identity #identityPhoto #identityPhotoWrap{
    position: relative;
    max-width: 300px;
}
.identity #identityPhoto #identityReseauxSociaux{
    position: absolute;
    top:90px;
    right: -29px;
}
.identity #identityAccroche #identityPresentation{
    font-size: 20px;
    font-weight: 400;
    line-height: 1;
    margin: 20px 0;
}
.identity #identityAccroche #identityPresentation strong{
    font-weight: 700;
}

@media (min-width: 1024px) {

    .identity{
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 2fr 1fr;}
    #identityAccroche{
        grid-area: 1 / 1 / 2 / 2;
        max-width: 400px;
        margin:60px 0 0 0;}
    #identityPhoto{
        grid-area: 1 / 2 / 3 / 3; 
        justify-content: flex-end;}
    #identityCTAContact{
        grid-area: 2 / 1 / 3 / 2;
        max-width: 400px;}

}
</style>

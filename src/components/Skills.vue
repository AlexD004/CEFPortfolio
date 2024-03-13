<script setup>
</script>

<template>
    <div class="wrapper">
        <div id="skills">

            <!-- List of Web langages I can use -->
            <div id="langages">
                <ul>
                    <li>
                        <img src="../assets/icon/icon-html.svg" alt="Icone HTML 5">
                        <p>HTML</p>
                    </li>
                    <li class="separator"><img src="../assets/icon/spark-white.svg" alt="Etoile blanche"></li>
                    <li>
                        <img src="../assets/icon/icon-css.svg" alt="Icone CSS 3">
                        <p>CSS</p>
                    </li>
                    <li class="separator"><img src="../assets/icon/spark-white.svg" alt="Etoile blanche"></li>
                    <li>
                        <img src="../assets/icon/icon-js.svg" alt="Icone JavaScript">
                        <p>JAVASCRIPT</p>
                    </li>
                    <li class="separator"><img src="../assets/icon/spark-white.svg" alt="Etoile blanche"></li>
                    <li>
                        <img src="../assets/icon/icon-php.svg" alt="Icone PHP">
                        <p>PHP</p>
                    </li>
                    <li class="separator"><img src="../assets/icon/spark-white.svg" alt="Etoile blanche"></li>
                    <li>
                        <img src="../assets/icon/icon-vue.svg" alt="Icone Vue.js">
                        <p>VUE.JS</p>
                    </li>
                </ul>
            </div>

            <!-- List of services I can provide -->
            <div id="prestations">
                <div id="prestationsTexte">
                    <div id="wrapTexte">
                        <h2 class="yellowUnderline">ÊTRE A SON COMPTE<br>N’EST PAS CHOSE AISÉE. </h2>
                        <p>
                            Il faut se faire une place, se constituer une clientèle, prouver sa valeur, etc. D’autant que l’entrepreneur est souvent accompagné du syndrome de l’imposteur… Bref un véritable parcours du combattant.
                            Ce parcours je l’ai expérimenté et je l’expérimente encore aujourd’hui. Et je peux affirmer une chose, les obstacles paraissent beaucoup moins imposants lorsque l’on est entouré et accompagné. C’est pourquoi je mets un point d’honneur à qualifier mon travail comme une collaboration. 
                            Je rejoins votre équipe, même si nous ne sommes que deux, pour vous apporter mon soutien. Vous recevez mon aide en graphisme grâce à mes études de direction artistique, ainsi que dans le développement de votre support de communication digital grâce à ma formation en développement web. 
                            À la fin de notre collaboration, votre entreprise sera forte d’une identité assumée, qui vous ressemble et d’une communication établie dans les règles de l’art. Mais je ne disparais pas, je reste joignable et à votre écoute, toujours dans l’esprit d’un accompagnement au sein d’une équipe.
                        </p>
                    </div>
                </div>
                <div class="blocService">
                    <img src="../assets/icon/icon-webdesign.svg" alt="Icone Webdesign - écran d'ordinateur contenant des blocs"/>
                    <h4>Webdesign</h4>
                    <p><strong>J'ai besoin d'une présence digitale</strong><br>
                    Plus qu'une vitrine, votre présence sur internet est un gage de confiance, de notoriété. Ensemble, concevons votre site ou votre application mobile à votre image, dont les fonctionnalités correspondent à vos besoins.</p>
                </div>
                <div class="blocService">
                    <img src="../assets/icon/icon-developpement.svg" alt="Icone Développement - écran d'ordinateur contenant une balise HTML auto-fermante"/>
                    <h4>Développement</h4>
                    <p><strong>J'ai besoin d'augmenter mon CA</strong><br>
                    Internet est le meilleur moyen de communiquer avec ses prospects et agrandir sa clientèle. Construisons côtes à côtes vos projets digitaux comme un site vitrine ou e-commerce, une application ou encore une API…</p>
                </div>
                <div class="blocService">
                    <img src="../assets/icon/icon-optimisation.svg" alt="Icone Optimisation - écran d'ordinateur contenant une courbe de graphique montante"/>
                    <h4>Optimisation</h4>
                    <p><strong>J'ai besoin de booster mon SEO</strong><br>
                    Saviez-vous que la sémantique de votre code, ou le temps de chargement de vos pages, peuvent impacter votre référencement ? Revoyons votre SEO, mettons en place un plug-in sur mesure, afin que votre site soit au top ! </p>
                </div>
            </div>

        </div>
    </div>

</template>

<style scoped>

.wrapper{
    position: relative;
    z-index:10;
    margin-top:-40px;
    width:90%;
}

/* ------------------- */
/*  Zone about Skills  */
/* ------------------- */
#langages{
    background: var(--c-dark-blue);
    padding: 10px;
    border-radius: 15px 15px 0 0;
}
#langages ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0;
}
#langages ul li {
    text-align: center;
}
#langages ul li p {
    font-size: 12px;
    font-weight: 700;
    color:var(--c-text-light);
}
#langages ul li img{
    transform: scale(80%);
}

/* ------------------------ */
/*  Zone about Prestations  */
/* ------------------------ */
#prestations{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    padding: 50px 40px 40px;
    border-radius:0 0 15px 15px;

    background: rgba(16,40,85,.1);
}

#prestationsTexte{
    margin: 20px 0 20px;
    text-align: left;
    width:100%;
}

#wrapTexte{
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
}
#prestationsTexte h2{
    width:100%;
    margin-bottom: 30px;
    text-align: center;
}
#prestationsTexte p{
    width: 100%;
    text-align: justify;
}
#prestations .blocService{
    display: flex;
    flex-direction: column;
    align-items: center;

    background: #fff;
    width: 100%;
    padding: 25px;
    border-radius: 15px;

    margin-right: 0;
    margin-top:40px;
}
#prestations .blocService img{
    margin: -40px 0 20px 0;
}
#prestations .blocService p{
    line-height: 1.3;
}
#prestations .blocService p strong{
    font-weight: 700;
}
#prestations .blocService p::before{
    content:"";
    display: block;
    width:100%;
    height: 1px;

    margin: 10px 0;

    background: var(--c-dark-blue);
}

@media (min-width: 1024px) {

    #langages ul li p {
        font-size: 15px;
    }
    #langages ul li img{
        transform: scale(100%);
    }
    #prestations{
        flex-direction: row;
        align-items: flex-start;
    }
    #prestationsTexte{
        margin: 0;
    }

    #prestationsTexte{
        margin: 20px 0 80px;
        width:100%;
    }
    #wrapTexte{
        flex-direction: column;
        width: 80%;
    }

    #prestations .blocService{
        width: 30%;
        height:100%;
        padding: 15px;

        margin-right: 10px;
        margin-top:0;
    }
    #prestations .blocService:last-child{
        margin: 0;
    }

}
</style>

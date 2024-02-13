<script setup>

    import ContactButton from '@/components/contactButton.vue';
    import { ref } from 'vue';


</script>
<script>

export default {

  data() {
    return { 
        modalIsOpen: false,
        workTitle: "",
        workContext: "",
        workDescription: "",
        workLinkText: "",

        work1: {
            title: 'Graphoreme',
            context: 'Portfolio freelance',
            outils: [
                'html',
                'css',
                'js',
                'php'
            ],
            description: 'bla bla',
            linkText: 'Visiter le site',
            linkURL: 'https://graphoreme.com',

            featuredImage: '../assets/graphoreme.png'
        },
         work2: {
            title: 'Élodie Lemoine Conseil',
            context: 'Site vitrine',
            outils: [
                'html',
                'css',
                'js',
                'php'
            ],
            description: 'bla bla',
            linkText: 'Visiter le site (intégration par un tiers)',
            linkURL: 'https://www.elodielemoineconseil.com/',

            featuredImage: '../assets/elc.png'
        },
         work3: {
            title: 'AssurEuro',
            context: 'Landing Page',
            outils: [
                'html',
                'css',
                'js',
                'php'
            ],
            description: 'bla bla',
            linkText: 'Visiter le site',
            linkURL: 'https://www.assureuro.offres-selectionnees.fr/',

            featuredImage: '../assets/assureuro.png'
        },
         work4: {
            title: 'La Socketterie',
            context: 'Cahier des charges',
            outils: [
                'Indesign',
                'Illustrator',
                'Copywritting'
            ],
            description: 'bla bla',
            linkText: 'Voir le pdf',
            linkURL: '#',

            featuredImage: '../assets/cahierDesCharges.png'
        },
         work5: {
            title: 'Energie Travaux France',
            context: 'Landing Page',
            outils: [
                'html',
                'css',
                'js',
                'php'
            ],
            description: 'bla bla',
            linkText: 'Visiter le site',
            linkURL: 'https://www.energie-travaux-france.fr/',

            featuredImage: '../assets/etf.png'
        }
    }
  },

  methods: {
    openModal: function(e) {
        this.modalIsOpen = true;

        this.workTitle = e.title;
        this.workContext = e.context;
        this.workOutils = e.outils;
        this.workDescription = e.description;
        this.workLinkText = e.linkText;
        this.workLinkURL = e.linkURL;

    },
    closeModal: function() {
        this.modalIsOpen = false;
    },
    display : function(){
        console.log('ok')
        this.modalIsOpen = true;
    }

    
  }

}


</script>


<template>
    <div class="wrapper">

        <h2 class="yellowUnderline">Titre "Portfolio"</h2>
        <p class="sousTitre">Bla bla bla</p>

        <div id="portfolioGallery">
            <div id="featuredWork" class="work" v-on:click="openModal(work1);">
                <div class="workInfos">
                    <h3>{{ work1.title }}</h3>
                    <p class="contextWork">{{ work1.context }}</p>
                    <p>{{ work1.description }}</p>
                </div>
                <div class="workImage">
                    <img src="../assets/graphoreme.png" alt="Capture d'écran de la page d'accueil du site graphoreme.com" />
                </div>
            </div>

            <div class="work" v-on:click="openModal(work2)">
                <div class="workInfos">
                    <h3>{{ work2.title }}</h3>
                    <p class="contextWork">{{ work2.context }}</p>
                </div>
                <div class="workImage">
                    <img src="../assets/elc.png" alt="Capture d'écran de la page d'accueil du site elodielemoineconseil.com" />
                </div>
            </div>

            <div class="work" v-on:click="openModal(work3)">
                <div class="workInfos">
                    <h3>{{ work3.title }}</h3>
                    <p class="contextWork">{{ work3.context }}</p>
                </div>
                <div class="workImage">
                    <img src="../assets/assureuro.png" alt="Capture d'écran de la landing page du site assureuro.offres-selectionnees.fr" />
                </div>
            </div>

            <div class="work" v-on:click="openModal(work4)">
                <div class="workInfos">
                    <h3>{{ work4.title }}</h3>
                    <p class="contextWork">{{ work4.context }}</p>
                </div>
                <div class="workImage">
                    <img src="../assets/cahierDesCharges.png" alt="Charte graphique de la socketterie, page extraite du cahier des charges" />
                </div>
            </div>

            <div class="work" v-on:click="openModal(work5)">
                <div class="workInfos">
                    <h3>{{ work5.title }}</h3>
                    <p class="contextWork">{{ work5.context }}</p>
                </div>
                <div class="workImage">
                    <img src="../assets/etf.png" alt="Capture d'écran de la landing page du site energietravauxfrance.fr" />
                </div>
            </div>
        </div>

    </div>

    <div id="modalBase" :class="{ open: modalIsOpen }">
        <div id="modal">
            <img id="closeModal" src="../assets/close.svg" alt="Pictogramme de fermeture du modal"  v-on:click="closeModal" />
            <div id="modalContent">

                <div id="carrousel">
                </div>

                <div id="modalInfos">
                    <h3>{{ workTitle }}</h3>
                    <p class="contextWork">{{ workContext }}</p>
                    <p class="descriptionWork">{{ workDescription }}</p>
                    <p class="linkWork">{{ workLinkText }}</p>
                    <a href="#contact" v-on:click="closeModal"><ContactButton /></a>
                </div>
                
            </div>
        </div>
    </div>

</template>

<style scoped>

.wrapper{
    padding: 50px 0;
    position: relative;
    z-index:10;

    text-align: center;
}

p.contextWork{
    margin:-10px 0 20px;
}

/* MODAL */

#test{
    width: 75px;
    height: 75px;
    background: var(--c-pink);
}

#modalBase.open{
    display: flex;
}

#modalBase{
    display: none;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 99;
    top:0;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 100%;

    backdrop-filter: blur(10px);
}
#modal{
    position: fixed;
    width: 90%;
    height: 90%;

    background: white;
    border-radius: 20px;
    border:1px solid var(--c-dark-blue)
}
#closeModal{
    position: absolute;
    z-index: 200;
    top:20px;
    right:20px;
    cursor: pointer;
    transform: scale(100%);
    transition:.3s;
}
#closeModal:hover{
    transform: scale(125%);
    transition:.3s;
}


/* LAYOUT */

#portfolioGallery{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}



#featuredWork{
    display: flex;
    flex-direction: column-reverse;
    width: 90%;
}
#featuredWork .workInfos{
    width: 100%;
    height: 100%;
    padding: 10px;

    border-radius: 0 0 15px 15px;
    text-align: left;

}
#featuredWork .workImage{
    width: 100%;
    height: 300px;

    border: 1px solid var(--c-dark-blue);
    border-bottom: none;

    border-radius: 15px 15px 0 0;
    overflow: hidden;
}
#featuredWork .workImage img{
    width: 100%;
    object-fit: contain;
}


.work{
    display: flex;
    flex-direction: column-reverse;
    width: 90%;
    height: 300px;

    margin: 15px 0;
    
    filter: drop-shadow(0px 0px 0 var(--c-dark-blue));
    transition: .5s ease;

    cursor: pointer;
}
.workInfos{
    height: 25%;
    padding: 10px;
    background: var(--c-yellow);
    border-radius: 0 0 15px 15px;
    text-align: left;
}
.workImage{
    height: 75%;
    border:1px solid var(--c-dark-blue);
    border-bottom: none;

    border-radius: 15px 15px 0 0;
    overflow: hidden;
}
.workImage img{
    object-fit: contain;
    width: 100%;
    margin: 0 auto;
}

.work:hover{
    filter: drop-shadow(4px 4px 0 var(--c-dark-blue));
    transition: .3s;
}

@media (min-width: 1024px) {

#portfolioGallery{
    flex-direction: row;
}
#featuredWork{
    width: 100%;
    flex-direction: row;
    margin-bottom: 20px;
}
#featuredWork .workInfos{
    width: 25%;
    height: 100%;
    padding: 20px;

    border-radius: 15px 0 0 15px;
    text-align: left;

}
#featuredWork .workImage{
    width: 75%;
    height: 300px;

    border: 1px solid var(--c-dark-blue);
    border-left: none;

    border-radius: 0 15px 15px 0;
    overflow: hidden;
}
.work{
    width: 24%;
}

}

</style>

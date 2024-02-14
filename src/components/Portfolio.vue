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
        featuredImage: "",

        works: [{
            id: '0',
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

            featuredImage: '/src/assets/graphoreme.png'
        },
        {
            id: '1',
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

            featuredImage: '/src/assets/elc.png'
        },
        {
            id: '2',
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

            featuredImage: '/src/assets/assureuro.png'
        },
        {
            id: '3',
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

            featuredImage: '/src/assets/cahierDesCharges.png'
        },
        {
            id: '4',
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

            featuredImage: '/src/assets/etf.png'
        }]
    }
  },

  methods: {
    openModal: function(e) {
        this.modalIsOpen = true;

        this.workTitle = this.$data.works[e].title;
        this.workContext =this.$data.works[e].context;
        this.workOutils = this.$data.works[e].outils;
        this.workDescription = this.$data.works[e].description;
        this.workLinkText = this.$data.works[e].linkText;
        this.workLinkURL = this.$data.works[e].linkURL;

    },
    closeModal: function() {
        this.modalIsOpen = false;
    }

    
  }

}


</script>


<template>
    <div class="wrapper">

        <h2 class="yellowUnderline">Titre "Portfolio"</h2>
        <p class="sousTitre">Bla bla bla</p>

        <div id="portfolioGallery">
            <div 
                v-for="({id, title, context, featuredImage}, index) in works"
                class="work"
                v-on:click="openModal( id );"
            >
                <div class="workInfos">
                    <h3>{{ title }}</h3>
                    <p class="contextWork">{{ context }}</p>
                </div>
                <div class="workImage">
                    <img :src="`${ featuredImage }`" alt="Capture d'écran de la page d'accueil du site graphoreme.com" />
                </div>
            </div>
        </div>

       <!-- <div id="portfolioGallery">
            <div id="featuredWork" class="work" v-on:click="openModal(work1);">
                <div class="workInfos">
                    <h3>{{ work1.title }}</h3>
                    <p class="contextWork">{{ work1.context }}</p>
                    <p>{{ work1.description }}</p>
                </div>
                <div class="workImage">
                    <img :src="`${ work1.featuredImage }`" alt="Capture d'écran de la page d'accueil du site graphoreme.com" />
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
        </div>-->

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



.work:first-child{
    display: flex;
    flex-direction: column-reverse;
    width: 90%;
}
.work:first-child .workInfos{
    width: 100%;
    height: 100%;
    padding: 10px;

    border-radius: 0 0 15px 15px;
    text-align: left;

}
.work:first-child .workImage{
    width: 100%;
    height: 300px;

    border: 1px solid var(--c-dark-blue);
    border-bottom: none;

    border-radius: 15px 15px 0 0;
    overflow: hidden;
}
.work:first-child .workImage img{
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
.work:first-child{
    width: 100%;
    flex-direction: row;
    margin-bottom: 20px;
}
.work:first-child .workInfos{
    width: 25%;
    height: 100%;
    padding: 20px;

    border-radius: 15px 0 0 15px;
    text-align: left;

}
.work:first-child .workImage{
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

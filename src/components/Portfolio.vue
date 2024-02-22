<script setup>

    import ContactButton from '@/components/contactButton.vue';
    import Carousel from '@/components/Carousel.vue';
    import {  ref } from 'vue';


</script>
<script>

export default {

  data() {
    return { 
 
        /* Variables declarations */
        modalIsOpen: false,
        workTitle: "",
        workContext: "",
        workDate: "",
        workTools: "",
        tools:"",
        html: false,
        css: false,
        js: false,
        php: false,
        indesign: false,
        illustrator: false,
        copywritting: false,
        workDescription: "",
        workLinkText: "",
        workLinkURL: "",
        featuredImage: "",
        galleryItems: [],

        /* Works List : 'id' is used to target a specific work in array, id = position in array */
        works: [{
            id: '0',
            title: 'Graphoreme',
            context: 'Portfolio freelance',
            date: "2017",
            tools: {
                html: true,
                css: true,
                js: true,
                php: true,
                indesign: false,
                illustrator: false,
                copywritting: false
            },
            description: 'bla bla',
            linkText: 'Visiter le site',
            linkURL: 'https://graphoreme.com',

            featuredImage: {
                url: "/src/portfolio/graphoreme/graphoreme-01.png",
                alt: "Capture d'écran de la page d'accueil du site graphoreme.com"
            },

            gallery: [
                {
                    url: "/src/portfolio/graphoreme/graphoreme-01.png",
                    alt: "Capture d'écran de la page d'accueil du site graphoreme.com",
                    isCurrent: false
                },
                {
                    url: "/src/portfolio/graphoreme/graphoreme-02.png",
                    alt: "Capture d'écran de la section portfolio du site graphoreme.com",
                    isCurrent: false
                },
                {
                    url: "/src/portfolio/graphoreme/graphoreme-03.png",
                    alt: "Capture d'écran d'une page de présentation de projet sur le site graphoreme.com",
                    isCurrent: false
                },
                {
                    url: "/src/portfolio/graphoreme/graphoreme-04.png",
                    alt: "Capture d'écran du pied de page sur le site graphoreme.com",
                    isCurrent: false
                }
            ]
        },
        {
            id: '1',
            title: 'Élodie Lemoine Conseil',
            context: 'Site vitrine',
            date: "2022",
            tools:{
                html: true,
                css: true,
                js: true,
                php: true,
                indesign: false,
                illustrator: false,
                copywritting: false
            },
            description: 'bla bla',
            linkText: 'Visiter le site (intégration par un tiers)',
            linkURL: 'https://www.elodielemoineconseil.com/',

            featuredImage: {
                url: "/src/portfolio/elc/elc01.png",
                alt: "Maquette de la page d'accueil du site elodielemoineconseil.com"
            },

            gallery: [
                {
                    url: "/src/portfolio/elc/elc01.png",
                    alt: "Maquette de la page d'accueil du site elodielemoineconseil.com",
                    isCurrent: false
                },
                {
                    url: "/src/portfolio/elc/elc02.png",
                    alt: "Maquette d'une page classique du site elodielemoineconseil.com",
                    isCurrent: false
                },
                {
                    url: "/src/portfolio/elc/elc03.png",
                    alt: "Maquette d'une page FAQ du site elodielemoineconseil.com",
                    isCurrent: false
                },
                {
                    url: "/src/portfolio/elc/elc04.png",
                    alt: "Maquette de la page type catalogue du blog sur le site elodielemoineconseil.com",
                    isCurrent: false
                }
            ]
        },
        {
            id: '2',
            title: 'AssurEuro',
            context: 'Landing Page',
            date: "2023",
            tools: {
                html: true,
                css: true,
                js: true,
                php: true,
                indesign: false,
                illustrator: false,
                copywritting: false
            },
            description: 'bla bla',
            linkText: 'Visiter le site',
            linkURL: 'https://www.assureuro.offres-selectionnees.fr/',

            featuredImage: {
                url: "/src/portfolio/assureuro/assureuro01.png",
                alt: "Capture d'écran de la page d'accueil du site assureuro.offres-selectionnees.fr"
            },

            gallery: [
                {
                    url: "/src/portfolio/assureuro/assureuro01.png",
                    alt: "Capture d'écran de la page d'accueil du site assureuro.offres-selectionnees.fr",
                    isCurrent: false
                },
                {
                    url: "/src/portfolio/assureuro/assureuro02.png",
                    alt: "Capture d'écran du formulaire du site assureuro.offres-selectionnees.fr",
                    isCurrent: false
                },
                {
                    url: "/src/portfolio/assureuro/assureuro03.png",
                    alt: "Capture d'écran de la section 'services' du site assureuro.offres-selectionnees.fr",
                    isCurrent: false
                },
                {
                    url: "/src/portfolio/assureuro/assureuro04.png",
                    alt: "Capture d'écran de la section 'avantages' du site assureuro.offres-selectionnees.fr",
                    isCurrent: false
                }
            ]
        },
        {
            id: '3',
            title: 'La Socketterie',
            context: 'Cahier des charges',
            date: "2023",
            tools: {
                html: false,
                css: false,
                js: false,
                php: false,
                indesign: true,
                illustrator: true,
                copywritting: true
            },
            description: 'bla bla',
            linkText: 'Voir le pdf',
            linkURL: '/src/portfolio/socketterie/SOCKETTERIE_CahierDesCharges.pdf',

            featuredImage: {
                url: "/src/portfolio/socketterie/socketterie01.png",
                alt: "Charte graphique, extraite du cahier des charges du site internet de la Socketterie"
            },

            gallery: [
                {
                    url: "/src/portfolio/socketterie/socketterie01.png",
                    alt: "Charte graphique, extraite du cahier des charges du site internet de la Socketterie",
                    isCurrent: false
                },
                {
                    url: "/src/portfolio/socketterie/socketterie02.png",
                    alt: "Exemple de wireframe, extrait du cahier des charges du site internet de la Socketterie",
                    isCurrent: false
                },
                {
                    url: "/src/portfolio/socketterie/socketterie03.png",
                    alt: "Exemple de tableau de détails techniques, extrait du cahier des charges du site internet de la Socketterie",
                    isCurrent: false
                },
                {
                    url: "/src/portfolio/socketterie/socketterie04.png",
                    alt: "Exemple de planning de production, extrait du cahier des charges du site internet de la Socketterie",
                    isCurrent: false
                }
            ]
        },
        {
            id: '4',
            title: 'Energie Travaux France',
            context: 'Landing Page',
            date: "2023",
            tools: {
                html: true,
                css: true,
                js: true,
                php: true,
                indesign: false,
                illustrator: false,
                copywritting: false
            },
            description: 'bla bla',
            linkText: 'Visiter le site',
            linkURL: 'https://www.energie-travaux-france.fr/',

            featuredImage: {
                url: "/src/portfolio/etf/etf01.png",
                alt: "Capture d'écran de la page d'accueil du site energie-travaux-france.fr"
            },

            gallery: [
                {
                    url: "/src/portfolio/etf/etf01.png",
                    alt: "Capture d'écran de la page d'accueil du site energie-travaux-france.fr",
                    isCurrent: false
                },
                {
                    url: "/src/portfolio/etf/etf02.png",
                    alt: "Capture d'écran de la partie engagements du site energie-travaux-france.fr",
                    isCurrent: false
                },
                {
                    url: "/src/portfolio/etf/etf03.png",
                    alt: "Capture d'écran de la partie bénéfices du site energie-travaux-france.fr",
                    isCurrent: false
                },
                {
                    url: "/src/portfolio/etf/etf04.png",
                    alt: "Image de visuel pour réseaux sociaux",
                    isCurrent: false
                }
            ]
        }]
    }
  },

  methods: {
    openModal: function(e) {

        this.modalIsOpen = true;

        /* Build custom variables to call in the modal */
        /* ------------------------------------------- */

        /* Basic Data */
        this.workTitle = this.$data.works[e].title;
        this.workContext =this.$data.works[e].context;
        this.workDate =this.$data.works[e].date;
        this.workDescription = this.$data.works[e].description;
        /* Datas about tools and langages used in project */
        this.workTools = this.$data.works[e].tools;
        this.html = this.workTools.html;
        this.css = this.workTools.css;
        this.js = this.workTools.js;
        this.php = this.workTools.php;
        this.indesign = this.workTools.indesign;
        this.illustrator = this.workTools.illustrator;
        this.copywritting = this.workTools.copywritting;
        /* Datas about link to online project or pdf */
        this.workLinkText = this.$data.works[e].linkText;
        this.workLinkURL = this.$data.works[e].linkURL;
        /* Datas about gallery */
        this.galleryItems = this.$data.works[e].gallery;

        /* Function to center the modal in the window */
        centerModal();

    },
    closeModal: function() {
        this.modalIsOpen = false;
    }

    
  }

}

/* Put 'Modal' in larger div to center it with flexbox works but I can't have an 'outside click' without click the parent...
/* Use 'click-outside-vue3' ( a package to create outside click event ) doesn't work... I don't know why...
/* So I center my modal with a function to set top and left values */

const centerModal = () => {
    
    const modal = document.getElementById('modal');

    /* Get the value to have on right and left */
    let screenWidth = window.innerWidth;
    let offsetWidth = (screenWidth - (screenWidth * .9)) / 2 ;

    /* Get the value to have on top and bottom */
    let screenHeight = window.innerHeight;
    let offsetHeight = (screenHeight - (screenHeight * .9)) / 2 ;

    /* Set values to center */
    modal.style.left = offsetWidth + 'px';
    modal.style.top = offsetHeight + 'px';

}

/* Center the modal, even if the window is resized */
window.onresize = centerModal;

</script>


<template>
    <div class="wrapper">

        <!-- Section Title -->
        <h2 class="yellowUnderline">Titre "Portfolio"</h2>
        <p class="sousTitre">Bla bla bla</p>

        <!-- Works Section -->
        <div id="portfolioGallery">

            <!-- Works Template : use datas to build each work card -->
            <div 
                v-for="({id, title, context, date, description, featuredImage}, index) in works"
                class="work"
                v-on:click=" openModal( id ); "
            >
                <div class="workInfos">
                    <h3>{{ title }}</h3>
                    <p class="contextWork">{{ context }} - {{ date }}</p>
                    <p class="descriptionWork">{{ description }}</p>
                </div>
                <div class="workImage">
                    <img :src="`${ featuredImage.url }`" :alt="`${ featuredImage.alt }`" />
                </div>
            </div>
        </div>
    </div>
     

    <!-- Modal Template : use datas to display informations -->
    <div id="backgroundBlur" :class="{ open: modalIsOpen }" v-on:click="closeModal">&nbsp;</div>
    <div id="modal" :class="{ open: modalIsOpen }">

        <img id="closeModal" src="../assets/icon/close.svg" alt="Pictogramme de fermeture du modal"  v-on:click="closeModal" />

        <div id="modalContent">

            <div id="carrousel">
                <Carousel v-if="modalIsOpen" :gallery="galleryItems" /> 
            </div>

            <div id="modalInfos">
                <h3>{{ workTitle }}</h3>
                <p class="contextWork">{{ workContext }} - {{ workDate }}</p>

                <div id="tools" >
                    <img src="../assets/icon/icon-html-bleu.svg" alt="Icone HTML" :class="{ tool: html }" />
                    <img src="../assets/icon/icon-css-bleu.svg" alt="Icone CSS" :class="{ tool: css }" />
                    <img src="../assets/icon/icon-js-bleu.svg" alt="Icone Javascript" :class="{ tool: js }" />
                    <img src="../assets/icon/icon-php-bleu.svg" alt="Icone PHP" :class="{ tool: php }" />
                    <p :class="{ tool: indesign }" >Indesign</p>
                    <p :class="{ tool: illustrator }" >Illustrator</p>
                    <p :class="{ tool: copywritting }" >Copywriting</p>
                </div>

                <p class="descriptionWork">{{ workDescription }}</p>
                <p class="linkWork"><a :href="`${ workLinkURL }`" target="_blank">{{ workLinkText }}</a></p>
                <p class="contactWork" ><a href="#contact" v-on:click="closeModal"><ContactButton /></a></p>
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

/* DISPLAY MODAL */

#backgroundBlur.open{
    display: flex;
}
#backgroundBlur{
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
#modal.open{display: block;}
#modal{
    display: none;
    position: fixed;
    z-index: 990;
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
    filter: drop-shadow(0 0 7px #fff);
}
#closeModal:hover{
    transform: scale(125%);
    transition:.3s;
}

/* MODAL CONTENT */

#modalContent{
    display: flex;
    flex-direction: column;
    height: 100%;
}
#carrousel {
    display: flex;
    justify-content: center;
    width:100%;
    height: 100%;
    background: #fff;
    border-radius: 20px 20px 0 0;
    overflow: hidden;
}
#carrousel img{
    object-fit:contain;
    width: 100%;
    height: 100%;
    border-radius: 20px 20px 0 0;
}
#modalInfos {
    width:100%;
    height: 100%;
    border-radius: 0 20px 20px 0;
    padding: 50px;
    overflow-y: scroll;
    scrollbar-width: none;
}
#tools{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-top: 1px solid var(--c-dark-blue);
    border-bottom: 1px solid var(--c-dark-blue);
    padding: 5px 0;
}
.descriptionWork{
    margin: 40px 0;
}
p.linkWork{
    margin-bottom: 40px;
}
p.linkWork a{
    font-weight: 700;
    color: var(--c-dark-blue);
}
p.linkWork a:hover{
    color: var(--c-pink);
}
p.contactWork{
    align-self: flex-end;
}

/* Display tools or not */
#tools img,
#tools p{
    display: none;
    margin:5px 25px 5px 0;
}
#tools img.tool,
#tools p.tool{
    display: block;
    font-weight: 700;
}

/* LAYOUT & Works Design */

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
.work:first-child .workInfos .descriptionWork{
    display: inline;
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
.workInfos .descriptionWork{
    display: none;
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
p.contextWork{
    margin:-10px 0 20px;
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

#modalContent{
    flex-direction: row;
}
#carrousel,
#modalInfos {
    width:50%;
}
#carrousel,
#carrousel img {
    border-radius: 20px 0 0 20px;
}

}

</style>

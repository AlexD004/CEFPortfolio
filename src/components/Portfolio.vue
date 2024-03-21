<script setup>

    import ContactButton from '@/components/contactButton.vue';
    import Carousel from '@/components/Carousel.vue';
    import {  ref } from 'vue';

    // Imports images and pdf for works

    // Work 01
    import work01Img01 from "@/assets/img/graphoreme-01.png";
    import work01Img02 from "@/assets/img/graphoreme-02.png";
    import work01Img03 from "@/assets/img/graphoreme-03.png";
    import work01Img04 from "@/assets/img/graphoreme-04.png";

    // Work 02
    import work02Img01 from "@/assets/img/elc01.png";
    import work02Img02 from "@/assets/img/elc02.png";
    import work02Img03 from "@/assets/img/elc03.png";
    import work02Img04 from "@/assets/img/elc04.png";

    // Work 03
    import work03Img01 from "@/assets/img/assureuro01.png";
    import work03Img02 from "@/assets/img/assureuro02.png";
    import work03Img03 from "@/assets/img/assureuro03.png";
    import work03Img04 from "@/assets/img/assureuro04.png";

    // Work 04
    import work04Img01 from "@/assets/img/socketterie01.png";
    import work04Img02 from "@/assets/img/socketterie02.png";
    import work04Img03 from "@/assets/img/socketterie03.png";
    import work04Img04 from "@/assets/img/socketterie04.png";
    /* PDF */ import work04Pdf01 from "@/assets/img/SOCKETTERIE_CahierDesCharges.pdf";

    // Work 05
    import work05Img01 from "@/assets/img/etf01.png";
    import work05Img02 from "@/assets/img/etf02.png";
    import work05Img03 from "@/assets/img/etf03.png";
    import work05Img04 from "@/assets/img/etf04.png";



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
        extrait: "",

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
            description: 'La grande difficulté graphique d’un site internet réside dans l’équilibre entre le design de la marque et la mise en valeur du portfolio. L’un ne doit pas gêner l’autre, altérer sa lecture, entrer en conflit. Pourtant, il est essentiel d’avoir une image de marque forte pour être reconnu au premier coup d’œil. Et le portfolio est primordial pour gagner la confiance des prospects. Grâce à mon expérience dans la direction artistique, nous avons trouvé une voie graphique cohérente et harmonieuse, qui sait mettre en avant le portfolio du client. La seconde question auquel un site internet de ce type fait face est la simplicité d’utilisation. Il y a en effet plusieurs sections à prendre en compte pour les prospects intéressés par une performance particulière. Mais pouvoir également afficher l’ensemble des travaux pour une vue d’ensemble. Le tout en limitant le nombre de clics pour une navigation optimisé. De part ma formation en développement web, ces interrogations sont mon quotidien. Nous avons également trouvé les meilleures solutions pour que l’expérience utilisateur soit optimale.',
            linkText: 'Visiter le site',
            linkURL: 'https://graphoreme.com',

            featuredImage: {
                url: work01Img01,
                alt: "Capture d'écran de la page d'accueil du site graphoreme.com"
            },

            gallery: [
                {
                    url: work01Img01,
                    alt: "Capture d'écran de la page d'accueil du site graphoreme.com",
                    isCurrent: false
                },
                {
                    url: work01Img02,
                    alt: "Capture d'écran de la section portfolio du site graphoreme.com",
                    isCurrent: false
                },
                {
                    url: work01Img03,
                    alt: "Capture d'écran d'une page de présentation de projet sur le site graphoreme.com",
                    isCurrent: false
                },
                {
                    url: work01Img04,
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
            description: 'Dans les métiers de l’accompagnement à la personne, il est important que le visage du conseiller apparaisse. Le capital sympathique et la confiance des prospects se mets en place plus aisément. Mais il est important de ne pas tomber dans le narcissisme, la priorité est justement, à ces prospects qui ont besoin d’aide. L’identité graphique et le webdesign sont là pour répondre à ces demandes. Comment faire pour que l’utilisateur vous voit, vous reconnaisse, et surtout, se sente écouté ? Pour gagner sa confiance, le prospect doit se sentir compris, avoir la sensation que son problème est déjà identifié et votre site, votre métier, vous-même, savez répondre exactement à ses besoins. Il y a donc un travail de webdesign pour que le portrait apparaisse tout en laissant la place au contenu. Les mots sont importants, ils doivent être mis en valeur. Sans pour autant noyer la page. J’ai pu, avec Elodie, travailler sur cet équilibre et livrer une maquette conforme à sa personnalité, son métier et ses souhaits.',
            linkText: 'Visiter le site (intégration par un tiers)',
            linkURL: 'https://www.elodielemoineconseil.com/',

            featuredImage: {
                url: work02Img01,
                alt: "Maquette de la page d'accueil du site elodielemoineconseil.com"
            },

            gallery: [
                {
                    url: work02Img01,
                    alt: "Maquette de la page d'accueil du site elodielemoineconseil.com",
                    isCurrent: false
                },
                {
                    url: work02Img02,
                    alt: "Maquette d'une page classique du site elodielemoineconseil.com",
                    isCurrent: false
                },
                {
                    url: work02Img03,
                    alt: "Maquette d'une page FAQ du site elodielemoineconseil.com",
                    isCurrent: false
                },
                {
                    url: work02Img04,
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
            description: 'Il y a plusieurs fonctionnalités à un site internet : prospecter, vente, vitrine, recolleter des données… Il faut avant tout définir le but premier de la présence digital. Pour Assur’Euro, c’est le recueil de données pour la mise en place d’un call center. Ce procédé nécessite des fonctionnalités précises, ici l’utilisation d’une API. Il s’agit de mécanismes qui permettent à deux composants logiciels de communiquer entre eux à l’aide d’un ensemble de définitions et de protocoles. Ainsi dans le cas d’Assur’Euro, les données confidentielles sont maintenues privées et stockées en toute sécurité. Connaître et respecter le RGPD ainsi que d’autres lois du web fait partie des performances du developper. Mon rôle est de vous en tenir informé, vous mettre en garde si certains de vos souhaits ne les respectent pas, et trouver les solutions pour répondre à la fonctionnalité souhaitée. S’articulent ensuite la direction artistique et le développement de la page. Nous avons pu créer le logo ainsi que la charte graphique en adéquation avec le domaine du service. Et enfin le développement de la page, pour que les données soit répertoriées proprement et utilisable aisément.',
            linkText: 'Visiter le site',
            linkURL: 'https://www.assureuro.offres-selectionnees.fr/',

            featuredImage: {
                url: work03Img01,
                alt: "Capture d'écran de la page d'accueil du site assureuro.offres-selectionnees.fr"
            },

            gallery: [
                {
                    url: work03Img01,
                    alt: "Capture d'écran de la page d'accueil du site assureuro.offres-selectionnees.fr",
                    isCurrent: false
                },
                {
                    url: work03Img02,
                    alt: "Capture d'écran du formulaire du site assureuro.offres-selectionnees.fr",
                    isCurrent: false
                },
                {
                    url: work03Img03,
                    alt: "Capture d'écran de la section 'services' du site assureuro.offres-selectionnees.fr",
                    isCurrent: false
                },
                {
                    url: work03Img04,
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
            description: 'La socketterie souhaite dans un premier temps, mettre en place le cahier des charges de son site internet. Il s’agit de la synthétisation de l’ensemble des fonctions qu’aura le projet final. On y prend en compte les spécifications techniques auxquels la page web répond, ainsi que les besoins qu’elle doit combler. Ici, La Socketterie vend des chaussettes dépareillées, symbole de la trisomie 21, et reverse un pourcentage de son bénéfice à des associations soutenant la trisomie 21. De plus, les chaussettes sont faites main. Ces caractéristiques permettent à la firme de se démarquer des autres. Ce sont les points à mettre en avant sur la page d’accueil. Pour la suite, il s’agit d’un site de vente. Il faut donc définir tous les aspects que celui-ci nécessite. Faut-il un espace client ou pas, où l’utilisateur peut voir ses commandes, ses factures, faire des réclamations, des retours… Il est nécessaire de maquetter la page vitrine : est-il possible, voir recommandé, de pouvoir classer l’affichage des articles ? À quoi ressemble une page d’article, quelles informations doit-on mettre en avant ? Des interrogations classiques pour un site de vente.  Enfin, le cahier des charges contient également la charte graphique et les aspects business.',
            linkText: 'Voir le pdf',
            linkURL: work04Pdf01,

            featuredImage: {
                url: work04Img01,
                alt: "Charte graphique, extraite du cahier des charges du site internet de la Socketterie"
            },

            gallery: [
                {
                    url: work04Img01,
                    alt: "Charte graphique, extraite du cahier des charges du site internet de la Socketterie",
                    isCurrent: false
                },
                {
                    url: work04Img02,
                    alt: "Exemple de wireframe, extrait du cahier des charges du site internet de la Socketterie",
                    isCurrent: false
                },
                {
                    url: work04Img03,
                    alt: "Exemple de tableau de détails techniques, extrait du cahier des charges du site internet de la Socketterie",
                    isCurrent: false
                },
                {
                    url: work04Img04,
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
            description: 'Energie Travaux France est une page internet qui a pour but de recolleter les données d’utilisateurs pour la mise en place d’un call center. La fonctionnalité première de la page est donc ciblée et identifiée. Il est important de bien réfléchir à ce but premier de la présence digital, car une page internet de vente, d’un site vitrine ou de prospection n’aura pas le même design ni les mêmes contraintes d’expérience utilisateur. Réunir les données utilisateurs est un procédé nécessitant des fonctionnalités précises, ici l’utilisation d’une API. Il s’agit de mécanismes qui permettent à deux composants logiciels de communiquer entre eux à l’aide d’un ensemble de définitions et de protocoles. Ainsi, les données confidentielles sont maintenues privées et stockées en toute sécurité. Connaître et respecter le RGPD ainsi que d’autres lois du web fait partie des performances du developper. Mon rôle est de vous en tenir informé, vous mettre en garde si certains de vos souhaits ne les respectent pas, et trouver les solutions pour répondre à la fonctionnalité souhaitée. La suite de la mission implique la création du logo, de la charte graphique et du développement de la page internet.',
            linkText: 'Visiter le site',
            linkURL: 'https://www.energie-travaux-france.fr/',

            featuredImage: {
                url: work05Img01,
                alt: "Capture d'écran de la page d'accueil du site energie-travaux-france.fr"
            },

            gallery: [
                {
                    url: work05Img01,
                    alt: "Capture d'écran de la page d'accueil du site energie-travaux-france.fr",
                    isCurrent: false
                },
                {
                    url: work05Img02,
                    alt: "Capture d'écran de la partie engagements du site energie-travaux-france.fr",
                    isCurrent: false
                },
                {
                    url: work05Img03,
                    alt: "Capture d'écran de la partie bénéfices du site energie-travaux-france.fr",
                    isCurrent: false
                },
                {
                    url: work05Img04,
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
  
  },

  mounted: function mounted () {
        let textSrc = this.$data.works[0].description;
        let excerpt = textSrc.substring(0,209);

        this.extrait = excerpt;
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
        <h2 class="yellowUnderline">MES COLLABORATIONS</h2>
        <p class="sousTitre"> </p>

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
                    <p class="descriptionWork extrait">{{ extrait }}<strong class="readMore"> Lire la suite...</strong></p>
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
    padding: 50px;
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
    transform: scale(80%);
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
    margin: 15px 0;
}
p.linkWork{
    margin-bottom: 20px;
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
.work:first-child .workInfos .descriptionWork .readMore{
    font-weight: 700;
    display: block;
}
.work:first-child .workInfos .descriptionWork .readMore:hover{
    color:var(--c-pink);
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
#modalInfos{
    max-width: 800px;
}
#carrousel,
#carrousel img {
    border-radius: 20px 0 0 20px;
}

}

</style>

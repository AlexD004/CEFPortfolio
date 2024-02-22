<script setup>

  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';

</script>

<template>

  <Header />

  <main>

    <div class="wrapper">

        <h1>Mentions Légales</h1>

        <h2>Contact</h2>
        <p>Vous pouvez contacter les administrateurs de ce site aux coordonnées suivants.</p>
        <h3>Par courrier</h3>
        <address>[Adresse Postale]</address>
        <h3>Par email</h3>
        <p><a href="mailto:mail@adresse.com">[Email]</a></p>
        <h3>Par téléphone</h3>
        <p><a href="tel:0123456789">[Téléphone]</a></p>

        <h2>Édition</h2>
        <p>Ce site est hébergé par [Prénom] [NOM] en qualité de [Rôle]</p>

        <h2>Contenu du site</h2>
        <p>Explication sur les types de contenu et leur provenance.</p>

        <h2>Loi informatique, fichiers et libertés</h2>
        <p>Lois RGPD.</p>

    </div>
    
  </main>

  <Footer />


</template>

<style scoped>

main{
    background:var(--c-beige);
    text-align: center;
    padding: 100px 0 50px;
}
h1{
    margin-bottom: 40px;
}
h2{
    margin: 40px 0 10px;
}
h3{
    margin: 20px 0 0 0;
}
a{
    color:var(--c-dark-blue);
}

</style>
<script setup>

  import Header from '@/components/Header.vue';
  import Presentation from '@/components/Presentation.vue';
  import Skills from '@/components/Skills.vue';
  import Portfolio from '@/components/Portfolio.vue';
  import ContactForm from '@/components/Contact.vue';
  import Footer from '@/components/Footer.vue';

</script>


<template>

  <Header />

  <main>

    <section id="presentation">
      <Presentation />
    </section>
    
    <section id="services">
      <Skills />
    </section>

    <section id="portfolio">
      <Portfolio />
    </section>

    <section id="contact">
      <ContactForm />
    </section>

  </main>

  <Footer />

</template>

<style scoped>

#presentation,
#contact{
  background: var(--c-beige);
  position: relative;
}

/* Using ':before' to put a pattern above color */
#presentation:before,
#contact:before{
  content:'';
  display: block;
  width: 100%;
  height: 100%;

  position: absolute;
  z-index: 1;
  top:0;
  left: 0;

  background-image: url('../assets/icon/pattern-sparks.svg');
  background-size: 50px;
  opacity: 15%;
}

#portfolio{
  padding: 50px 0;
}

</style>

<script setup>

</script>

<template>
  <main>

    <!-- Composition on the middle : 404 with moon and clouds -->
    <div id="pictureNotFound">

      <div class="clouds back"><img src="../assets/img/clouds-back.svg" alt="Nuages derrière le texte" /></div>

      <div id="quatreCentquatre">
          <span>4</span>
          <div id="moon">
              <div class="shadow">&nbsp;</div>
              <img src="../assets/img/moon.svg" alt="Le zéro de 404 en forme de Lune" /> 
          </div>
          <span>4</span> 
      </div>

      <div class="clouds front"><img src="../assets/img/clouds-front.svg" alt="Nuages devant le texte" /></div>

    </div>

    <!-- Text below the picture -->
    <div id="contentNotFound">
      <p>Oups...</p>
      <a href="/" id="btnRetour">Retournons sur le site !</a>
    </div>
  </main>
</template>

<style scoped>

main{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
  background: var(--c-dark-blue);

  background-image: url("../assets/img/stars.svg");
  background-size: 30% auto;
  background-repeat: space;
}

#pictureNotFound{
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(50%);
  height: 50%;
  max-height: 330px;
  min-height: 300px;
  position: relative;
}

#quatreCentquatre{
  position: relative;
  z-index:50;
  display: flex;
  justify-content: center;
  align-items: center;
}
#moon {
  display: flex;
  justify-content: center;
  align-items: center;
}
#moon img{
  filter: drop-shadow(0 0 90px rgba(255,255,255,.7));
  margin: 0 -25px;
}
#moon .shadow {
  display: block;
  position: absolute;
  width: 330px;
  height: 200px;
  background: var(--c-dark-blue);
  filter: blur(5px);
}

#quatreCentquatre span{
  font-size: 350px;
  color:#DCDCDC;
  font-weight: 700;
}

.clouds.back{
  position: absolute;
  transform: scale(80%);
  top:-50%;
}
.clouds.front{
  position: absolute;
  z-index: 75;
  bottom:-50%;
}

#contentNotFound{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#contentNotFound p{
  color:#DCDCDC;
  font-weight: 700;
  font-size: 60px;
}

#contentNotFound #btnRetour{
    position: relative;
    z-index:500;

    background: var(--c-pink);
    color: var(--c-text-light);
    font-weight: 600;
    border-radius: 10px;
    padding: 5px 20px;
    font-size:20px;

    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;

    cursor: pointer;

    transition:.3s;
}  

#contentNotFound #btnRetour:hover{
    box-shadow: 3px 3px 0 #DCDCDC;
    transition:.3s;
}

@media (min-width: 1024px) {

#pictureNotFound{
  transform: scale(65%);
}

}

</style>
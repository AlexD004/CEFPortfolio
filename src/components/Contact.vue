<script setup>

import ContactButton from "../components/contactButton.vue";
import { ref } from 'vue';

</script>
<script>

/* ------- Functions for AUTO HEIGHT TEXTAREA ---- */
/*-------------------------------------------------*/

//  Calculate Textarea Height Value
function calcHeight(value) {
    let numberOfLineBreaks = (value.match(/\n/g) || []).length;
    // min-height + lines x line-height + padding + border
    let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
    return newHeight;
} 

function autoHeightTextArea(){
    const messageBox = document.getElementById('message');
    const contentValue = document.getElementById('message').value;
    const heightToSet = calcHeight(contentValue);
    messageBox.style.height = heightToSet + 'px';
}

// Setup variables to check if form is not empty
const lastnameValue = ref("");
const firstnameValue = ref("");
const emailValue = ref("");
const objectValue = ref("");
const messageValue = ref("");

const submitOnce = ref(false);


</script>

<template>
  <div class="wrapper">
    <h2 class="yellowUnderline">Titre "Contact"</h2>
    <p class="sousTitre">bla bla bla</p>
  </div>

  <form v-on:submit.prevent>
    <div class="formItem demiItem">
      <label for="lastname">Votre NOM*<span :class="{ invalidMessage: lastnameValue.length < 1 && submitOnce == true }"> - Ce champs est obligatoire</span></label>
      <input type="text" id="lastname" name="lastname" v-model="lastnameValue" :class="{ invalid: lastnameValue.length < 1  && submitOnce == true }" />
    </div>

    <div class="formItem demiItem">
      <label for="firstname">Votre PRÉNOM *<span :class="{ invalidMessage: firstnameValue.length < 1  && submitOnce == true }"> - Ce champs est obligatoire</span></label>
      <input type="text" id="firstname" name="firstname" v-model="firstnameValue" :class="{ invalid: firstnameValue.length < 1  && submitOnce == true }" />
    </div>

    <div class="formItem">
      <label for="email">Votre EMAIL *<span :class="{ invalidMessage: emailValue.length < 1  && submitOnce == true }"> - Ce champs est obligatoire</span></label>
      <input type="email" id="email" name="email" v-model="emailValue" :class="{ invalid: emailValue.length < 1  && submitOnce == true }" />
    </div>

    <div class="formItem">
      <label for="object">SUJET *<span :class="{ invalidMessage: objectValue.length < 1  && submitOnce == true }"> - Ce champs est obligatoire</span></label>
      <input type="text" id="object" name="object" v-model="objectValue" :class="{ invalid: objectValue.length < 1  && submitOnce == true }" />
    </div>

    <div class="formItem">
      <label for="message">MESSAGE *<span :class="{ invalidMessage: messageValue.length < 1  && submitOnce == true }"> - Ce champs est obligatoire</span></label>
      <textarea id="message" name="message" v-on:keyup="autoHeightTextArea" v-model="messageValue" :class="{ invalid: messageValue.length < 1  && submitOnce == true }" />
    </div>

    <button type="submit" v-on:click="submitOnce=true">
      <ContactButton />
    </button>
  </form>
</template>

<style scoped>
.bind {
  color: green;
}
.bind.activeBind {
  color: blue;
}

/* LAYOUT */
.wrapper {
  padding: 50px 0 0;
  position: relative;
  z-index: 10;

  text-align: center;
}
form {
  position: relative;
  z-index: 10;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 90%;
  max-width: 960px;
  margin: 0 auto;
}
.formItem {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 5px 0;
}
.formItem.demiItem {
  width: 100%;
}

/* GLOBAL DESIGN */
.formItem label {
  font-weight: 700;
}
.formItem input,
.formItem textarea {
  border: none;
  border-radius: 15px;
  height: 50px;
  padding: 20px;
  font-size: 14px;
  color: var(--c-dark-blue);
}
.formItem textarea {
  min-height: 100px;
}
button[type="submit"] {
  outline: 0;
  border: 0;

  margin: 30px 0 50px;
  width: 100%;

  display: flex;
  justify-content: center;
  background: none;

  cursor: pointer;
}

/* FOCUS DESIGN */
.formItem input:focus-visible,
.formItem input:focus,
.formItem textarea:focus-visible,
.formItem textarea:focus {
  outline: 1px solid var(--c-dark-blue);
}

/* INVALID DESIGN */
.formItem input.invalid,
.formItem textarea.invalid {
  outline: 3px dotted var(--c-pink);
}
label span {
  display: none;
}
span.invalidMessage {
  color: var(--c-pink);
  font-weight: 700;
  display: inline;
}


@media (min-width: 1024px) {

  .formItem.demiItem {
    width: 49%;
  }
  button[type="submit"] {
    justify-content: flex-end;
  }

}

</style>

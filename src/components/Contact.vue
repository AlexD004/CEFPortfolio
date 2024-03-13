<script setup>

import ContactButton from "../components/contactButton.vue";
import { ref } from 'vue';

</script>

<script>

/* ------- Functions for AUTO HEIGHT TEXTAREA ---- */
/*-------------------------------------------------*/

/*  Calculate Textarea Height Value */
function calcHeight(value) {

    let numberOfLineBreaks = (value.match(/\n/g) || []).length;
    /* min-height + lines x line-height + padding + border */
    let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
    return newHeight;
} 

function autoHeightTextArea(){
    const messageBox = document.getElementById('message');
    const contentValue = document.getElementById('message').value;
    const heightToSet = calcHeight(contentValue);
    messageBox.style.height = heightToSet + 'px';
}

/* |||||||||||||||||||||||||||||||||||| */
/* ----------- SENDING MAIL ----------- */
/* |||||||||||||||||||||||||||||||||||| */

const userMail = import.meta.env.VITE_USER_MAIL;

/* Set variables to : 1.check if form is not empty + 2.build the mail */
const lastnameValue = ref("");
const firstnameValue = ref("");
const objectValue = ref("");
const messageValue = ref("");

/* Set a variable to know if user already clicked on submit button */
const submitOnce = ref(false);
/* Set a content for all error message */
const errMessage = ' - Ce champs est obligatoire';


function sendEmail() {

  try {

      if ( firstnameValue.value.length < 1 || lastnameValue.value.length < 1 || objectValue.value.length < 1 || messageValue.value.length < 1 ) {
        throw new Error("All fields are required !");
      }

      let bodyMail = "Bonjour,%0D%0AJe suis " + firstnameValue.value + " " + lastnameValue.value + ".%0D%0A%0D%0A" + messageValue.value; // Layout of mail content
      let buildMail = "mailto:" + userMail + "?subject=" +  objectValue.value + "&body=" + bodyMail; // Build of the link with all infos

      window.location.href = buildMail; // It's just like a click on a link...

    } catch (err){

      showError(err);

    } 
    
}

let showError = (err) => {
    console.log(err.message); // Message for devs
    submitOnce.value = true; // Declare that form was submit, so we can display error styles
}

</script>

<template>
  <div class="wrapper">
    <h2 class="yellowUnderline">Titre "Contact"</h2>
    <p class="sousTitre">bla bla bla</p>
  </div>

  <form v-on:submit.prevent >

    <!-- LASTNAME : half column on desktop -->
    <div class="formItem demiItem">
      <label for="lastname">Votre NOM*<span :class="{ invalidMessage: lastnameValue.length < 1 && submitOnce == true }">{{ errMessage }}</span></label>
      <input type="text" id="lastname" name="lastname" v-model="lastnameValue" :class="{ invalid: lastnameValue.length < 1  && submitOnce == true }" />
    </div>

    <!-- FIRSTNAME : half column on desktop -->
    <div class="formItem demiItem">
      <label for="firstname">Votre PRÉNOM *<span :class="{ invalidMessage: firstnameValue.length < 1  && submitOnce == true }">{{ errMessage }}</span></label>
      <input type="text" id="firstname" name="firstname" v-model="firstnameValue" :class="{ invalid: firstnameValue.length < 1  && submitOnce == true }" />
    </div>

    <!-- OBJECT -->
    <div class="formItem">
      <label for="object">SUJET *<span :class="{ invalidMessage: objectValue.length < 1  && submitOnce == true }">{{ errMessage }}e</span></label>
      <input type="text" id="object" name="object" v-model="objectValue" :class="{ invalid: objectValue.length < 1  && submitOnce == true }" />
    </div>

    <!-- MESSAGE -->
    <div class="formItem">
      <label for="message">MESSAGE *<span :class="{ invalidMessage: messageValue.length < 1  && submitOnce == true }">{{ errMessage }}</span></label>
      <textarea id="message" name="message" v-on:keyup="autoHeightTextArea" v-model="messageValue" :class="{ invalid: messageValue.length < 1  && submitOnce == true }" />
    </div>

   <!-- SUBMIT -->
    <button type="submit" v-on:click="sendEmail();">
      <ContactButton />
    </button>

  </form>

</template>

<style scoped>

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
  font-family:'Barlow', sans-serif;
}
.formItem textarea {
  min-height: 100px;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
/* Hide scrollbar for Chrome, Safari and Opera */
.formItem textarea::-webkit-scrollbar{
  display: none;
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

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


// CONTROL //
/* Set variables to check if form is not empty */
const lastnameValue = ref("");
const firstnameValue = ref("");
const mailAddressValue = ref("");
const objectValue = ref("");
const messageValue = ref("");

/* Set a variable to know if user already clicked on submit button */
const submitOnce = ref(false);

// ERROR //
/* Set a content for all error message */
const errMessage = ' - Ce champs est obligatoire';

// SUCCESS //
/* Set a variable to show success message */
const isSuccessed = ref(false);


function sendEmail() {

  try {

      if ( firstnameValue.value.length < 1 || lastnameValue.value.length < 1 || mailAddressValue.value.length < 1 || objectValue.value.length < 1 || messageValue.value.length < 1 ) {
        throw new Error("All fields are required !");
      }

      /* Function to send email with EmailJS */
      emailjs.sendForm('service_klixwok', 'template_ed0w7eu', 'form').then(
        (response) => {

          console.log('SUCCESS!', response.status, response.text);

          document.getElementById('contactForm').reset(); // Clean the form
          isSuccessed.value = true; // Show success message
          setTimeout( fadeOut , 3000 );

        },
        (error) => {
          console.log('FAILED...', error);
        },
      );

    } catch (err){

      showError(err);

    } 
    
}

let showError = (err) => {
    console.log(err.message); // Message for devs
    submitOnce.value = true; // Declare that form was submit, so we can display error styles
}

let fadeOut = () => {
  var fadeTarget = document.getElementById("successMessage");
  var fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1;
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.01;
    } else {
      clearInterval(fadeEffect);
      isSuccessed.value = false;
    }
  }, 10);
}

</script>

<template>
  <div class="wrapper">
    <h2 class="yellowUnderline">JE ME LAISSE TENTER</h2>
    <p class="sousTitre"> </p>

    <form id="contactForm" v-on:submit.prevent >

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

      <!-- MAIL -->
      <div class="formItem">
        <label for="object">EMAIL *<span :class="{ invalidMessage: mailAddressValue.length < 1  && submitOnce == true }">{{ errMessage }}</span></label>
        <input type="text" id="mailAddress" name="mailAddress" v-model="mailAddressValue" :class="{ invalid: mailAddressValue.length < 1  && submitOnce == true }" />
      </div>

      <!-- OBJECT -->
      <div class="formItem">
        <label for="object">SUJET *<span :class="{ invalidMessage: objectValue.length < 1  && submitOnce == true }">{{ errMessage }}</span></label>
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

    <div id="successMessage" :class="{ show: isSuccessed }">
      Merci pour votre message !
    </div>

  </div>
</template>

<style scoped>

/* LAYOUT */
.wrapper {
  padding: 50px 0 30px;
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
  text-align: left;
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

  margin-top: 30px;
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

/* SUCCESS */
#successMessage {
    width: 90%;
    max-width: 960px;
    height: 50px;
    
    display: none;
    justify-content: center;
    align-items: center;
    
    border: 2px solid var(--c-success);
    border-radius: 15px;
    margin: 40px auto 0;

    font-weight: 700;
    color:var(--c-success);
}

#successMessage.show{
  display: flex;
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

<script setup>

import ContactButton from '@/components/contactButton.vue';

import { ref } from 'vue';


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

/* ------- Functions for CHECK THE FORM SUBMIT ---- */
/*-------------------------------------------------*/

// Set up global variables (needed in several functions or in the first level of function)
const form = document.querySelector('form');
const invalidMessage = ref(false);
/*
function formSubmit(e) {
    // Set up variables with values submited
    const lastName = document.getElementById('lastname').value;

    try {

        if ( lastName.length < 1 ) {
            throw new Error("Last Name is required !");
        }

        console.log(lastName);

    } catch (err){

        showError(err);

    } finally {

        e.preventDefault(); // Block refresh when submit form

    }
}


function showError(err) {

    console.log(err.message); // Message for devs
}*/

let bind = ref(true);
const toggleBind = (e) => {
    bind = ref(false);
}

</script>

<template>
    <div class="wrapper">
        <h2 class="yellowUnderline">Titre "Contact"</h2>
        <div v-on:click="toggleBind()"><span class="bind" :class="{ activeBind: bind }">Binding class test</span></div>
    </div>

    <form v-on:submit.prenvent>
        <div class="formItem demiItem">
            <label for="lastname">Votre NOM *</label>
            <input type="text" id="lastname" name="lastname"/>
        </div>

        <div class="formItem demiItem">
            <label for="firstname">Votre PRÉNOM *</label>
            <input type="text" id="firstname" name="firstname"/>
        </div>

        <div class="formItem">
            <label for="email">Votre EMAIL *</label>
            <input type="email" id="email" name="email"/>
        </div>

        <div class="formItem">
            <label for="object">SUJET *<span :class="{invalidMessage: invalidMessage}"> - Ce champs est obligatoire</span></label>
            <input type="text" id="object" name="object"/>
        </div>

        <div class="formItem">
            <label for="message">MESSAGE *<span> - Ce champs est obligatoire</span></label>
            <textarea id="message" name="message" v-on:keyup="autoHeightTextArea"/>
        </div>

        <button type="submit" v-on:click="formSubmit">
            <ContactButton />
        </button>

    </form>

</template>

<style scoped>

.bind{color:green;}
.bind.activeBind{color:red;}

/* LAYOUT */
.wrapper{
    padding: 50px 0;
    position: relative;
    z-index:10;

    text-align: center;
}
form{
    position: relative;
    z-index:10;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    width: 90%;
    max-width: 960px;
    margin: 0 auto;
}
.formItem{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 5px 0;
}
.formItem.demiItem{
    width: 49%;
}

/* GLOBAL DESIGN */
.formItem label{
    font-weight: 700;
}
.formItem input,
.formItem textarea{
    border:none;
    border-radius:15px;
    height: 50px;
    padding: 20px;
    font-size:14px;
    color:var(--c-dark-blue);
}
.formItem textarea{
    min-height: 100px;
}
button[type="submit"]{
    outline: 0;
    border: 0;

    margin: 30px 0 50px;
    width: 100%;

    display: flex;
    justify-content: flex-end;
    background: none;
}

/* FOCUS DESIGN */
.formItem input:focus-visible,
.formItem input:focus,
.formItem textarea:focus-visible,
.formItem textarea:focus{
    outline:1px solid var(--c-dark-blue);
}

/* INVALID DESIGN */
.formItem input.invalid,
.formItem textarea.invalid{
    outline:3px dotted var(--c-pink);
}
label span{
    display: none;
}
span.invalidMessage{
    color:var(--c-pink);
    font-weight: 700;
    display: inline;
}

</style>

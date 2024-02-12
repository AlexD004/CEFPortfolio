<script setup>

</script>

<template>

    
        <div class="contactButton">
            Waouh, faisons connaissance !
        </div>

</template>


<style scoped>

    .contactButton{
        position: relative;
        z-index:500;

        background: var(--c-pink);
        color: var(--c-text-light);
        font-weight: 600;
        border-radius: 10px;
        padding: 10px;
        max-height: 30px;
        max-width:350px;

        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;

        transition:.3s;
    }  

    .contactButton:hover{
        box-shadow: 3px 3px 0 var(--c-dark-blue);
        padding: 15px;
        transition:.3s;
    }

</style>

<script setup lang="ts">
function getImgUrl(path: string) {
  return `https:/d1wfumw2cntqgw.cloudfront.net/portfolio/${path}.jpeg`;
}
</script>
<template>
    <div id="contact-wrapper">
        <h1>Let's connect!</h1>
        <div class="contact-body">
            <p>Drop me an email at: <a href="mailto:chuaxwxsarah@gmail.com">chuaxwxsarah@gmail.com</a></p>
            <p>Or find me on <a href="https://www.linkedin.com/in/sarah-chuawx/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </div>
    </div>
</template>
<style scoped>
a {
    color: #7E87D9;
}
#contact-wrapper {
    width: 90vw;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5%;
    background-color: #FFF9CE;
}

#img-profile {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
}

h1 {
    font-family: SarahBlock, sans-serif;
    font-size: 3rem;
    font-weight: 400;
    margin: 0;
    text-align: center;
}

p.subheading {
    font-family: SarahScript, sans-serif;
    font-size: 1.5rem;
    line-height: 1.5rem;
    margin: 0rem 0px 1rem 0px;
    text-align: center;
}

p {
    font-family: "Inconsolata", monospace;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings: "wdth" 100;
    font-size: 1rem;
}

.contact-body {
    padding: 0px 5%;
}

@media only screen and (min-width: 480px) {
    h1 {
        font-size: 5rem;
    }
    p.subheading {
        font-size: 2.3rem;
        line-height: 2.3rem;
        margin: 0rem 0px 2rem 0px;
    }
    p {
        font-size: 1.5rem;
    }
}

@media only screen and (min-width: 1440px) {
    #contact-wrapper {
        width: 40%;
        padding: 5% 30%;
    }
}
</style>
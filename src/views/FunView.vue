<script setup lang="ts">
function getImgUrl(path: string) {
    return `https:/d1wfumw2cntqgw.cloudfront.net/portfolio/${path}.jpeg`;
}
</script>
<template>
    <div id="fun-wrapper">
        <h1>The fun stuff</h1>
        <div class="fun-body">
            <p>In my free time, I occupy myself by keeping my hands busy.</p>
            <p>
                A jack of all trades and master of some, I dabble in various crafts and DIY projects. From drawing to crochet to rubber stamp carving, I find
                that engaging in a creative activity helps me relax after a day of intense coding. Recently, I have also
                been learning photography!
            </p>
            <p>
                I also occasionally help design and build wedding invite and RSVP websites for friends and family.
            </p>
            <p>I periodically share some of these hobbies on Instagram:</p>
            <iframe class="instagram-media instagram-media-rendered" id="instagram-embed-1"
                src="https://www.instagram.com/adventuresofrah/embed/?cr=1&v=14&wp=108"
                allowtransparency="true" allowfullscreen="true" frameborder="0" height="581"
                data-instgrm-payload-id="instagram-media-payload-1" scrolling="no"
                style="background: white; max-width: 540px; width: calc(100% - 2px); border-radius: 3px; border: 1px solid rgb(219, 219, 219); box-shadow: none; display: block; margin: 0px 0px 12px; min-width: 326px; padding: 0px;"></iframe>
        </div>
    </div>
</template>
<style scoped>
#fun-wrapper {
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

.fun-body {
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
    #fun-wrapper {
        width: 40%;
        padding: 5% 30%;
    }
}
</style>
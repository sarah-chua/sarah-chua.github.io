<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import { computed } from 'vue';

const { width } = useWindowSize();
const prefix = computed(() => {
	return width.value < 768 ? "mobile" : "desktop";
})

function getImgUrl(path: string) {
  return `https:/d1wfumw2cntqgw.cloudfront.net/portfolio/${path}.png`;
}
</script>
<template>
<div id="home-wrapper">
    <div id="home-background">
        <img id="img-background" :src="getImgUrl(`${prefix}-bg`)" alt="">
        <div class="home-icon" id="about-icon">
            <img :src="getImgUrl('about')">
        </div>
        <div class="home-icon" id="tech-icon">
            <img :src="getImgUrl('tech')">
        </div>
        <div class="home-icon" id="other-icon">
            <img :src="getImgUrl('other')">
        </div>
        <div class="home-icon" id="contact-icon">
            <img :src="getImgUrl('contact')">
        </div>
        <div class="home-icon" id="hobbies-icon">
            <img :src="getImgUrl('hobbies')">
        </div>
    </div>
</div>
</template>
<style scoped>
#home-wrapper {
    width: 90vw;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5%;
    background-color: #FFF9CE;
}

#home-background {
    position: relative;
}

#img-background {
  width: 100%;
  height: auto;
}

.home-icon {
    position: absolute;
    img {
        height: 100%;
    }
}

#about-icon {
  position: absolute;
  top: calc(443px * var(--mobile-background-scale));
  left: calc(49px * var(--mobile-background-scale));
  height: calc(992px * var(--mobile-background-scale));
  width: auto;
}

#tech-icon {
  position: absolute;
  top: calc(348px * var(--mobile-background-scale));
  left: calc(481px * var(--mobile-background-scale));
  height: calc(365px * var(--mobile-background-scale));
  width: auto;
}

#other-icon {
  position: absolute;
  top: calc(789px * var(--mobile-background-scale));
  left: calc(491px * var(--mobile-background-scale));
  height: calc(256px * var(--mobile-background-scale));
  width: auto;
}

#contact-icon {
  position: absolute;
  top: calc(1143px * var(--mobile-background-scale));
  left: calc(485px * var(--mobile-background-scale));
  height: calc(295px * var(--mobile-background-scale));
  width: auto;
}

#hobbies-icon {
  position: absolute;
  top: calc(1142px * var(--mobile-background-scale));
  left: calc(741px * var(--mobile-background-scale));
  height: calc(306px * var(--mobile-background-scale));
  width: auto;
}

@media only screen and (min-width: 768px) {
  #about-icon {
    top: calc(46px * var(--desktop-background-scale));
    left: calc(47px * var(--desktop-background-scale));
    height: calc(992px * var(--desktop-background-scale));
  }

  #tech-icon {
    position: absolute;
    top: calc(344px * var(--desktop-background-scale));
    left: calc(480px * var(--desktop-background-scale));
    height: calc(365px * var(--desktop-background-scale));
    width: auto;
  }

  #other-icon {
    position: absolute;
    top: calc(785px * var(--desktop-background-scale));
    left: calc(489px * var(--desktop-background-scale));
    height: calc(256px * var(--desktop-background-scale));
    width: auto;
  }

  #contact-icon {
    position: absolute;
    top: calc(351px * var(--desktop-background-scale));
    left: calc(1028px * var(--desktop-background-scale));
    height: calc(295px * var(--desktop-background-scale));
    width: auto;
  }

  #hobbies-icon {
    position: absolute;
    top: calc(723px * var(--desktop-background-scale));
    left: calc(1008px * var(--desktop-background-scale));
    height: calc(306px * var(--desktop-background-scale));
    width: auto;
  }
}

@media only screen and (min-width: 1200px) {
   #home-wrapper {
    width: 60vw;
    height: 100vh;
    padding: 0px 20%;
   }
}
</style>
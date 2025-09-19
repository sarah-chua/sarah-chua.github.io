<script setup lang="ts">
import { useImgUrl } from '@/composables/useImgUrl';

const { getImgUrl } = useImgUrl();
</script>
<template>
    <div id="about-wrapper" class="view-wrapper">
        <img id="img-profile" :src="getImgUrl('profile.jpeg')" alt="">
        <h1>Sarah Chua</h1>
        <p class="subheading">A software developer with a creative side.</p>
        <div class="view-body">
            <p>I am passionate about building software that serves a purpose and makes a difference.
                From improving process by introducing automation to creating fun user experiences, I strive to make an
                impact through my work.</p>
            <p>I enjoy learning new things and experimenting. When I'm not coding, you can find me reading, making zines or picking up photography.</p>
            <p>Feel free to reach out to me for collaboration or just to say hi!</p>
        </div>
    </div>
</template>
<style scoped>
#about-wrapper {
    background-color: #FFF9CE;
}

#img-profile {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
}
</style>
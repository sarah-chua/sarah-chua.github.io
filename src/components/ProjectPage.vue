<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import { computed } from 'vue';

const props = defineProps<{
    title: string
    imgUrl?: string
    liveUrl?: string
    demoUrl?: string
}>()


const { width } = useWindowSize();
const prefix = computed(() => {
    return width.value < 768 ? "mobile" : "desktop";
})
</script>
<template>
    <div class="project-page">
        <div class="proj-img" v-if="imgUrl"><img :src="imgUrl" alt="Project Image"></div>
        <div class="project-wrapper">
            <div class="proj-header">
                <h1>{{ title }}</h1>
            </div>
            <div class="proj-links">
                <a v-if="liveUrl" :href="liveUrl" target="_blank">Live Site</a>
                <a v-if="demoUrl" :href="demoUrl" target="_blank">Recorded Demo</a>
            </div>
            <div class="view-body">
                <slot name="proj-info"></slot>
            </div>
        </div>
    </div>
</template>
<style scoped>
.project-page {
    background-color: #FFF9CE;
}
.project-wrapper {
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 5% 5% 5%;
}

.proj-img {
    text-align: center;
}

@media only screen and (min-width: 1024px) {
    .proj-img img {
        width: 40%;
    }
}

@media only screen and (min-width: 1440px) {
    .project-wrapper {
        width: 40%;
        padding: 2rem 30% 5% 30%;
    }
}
</style>
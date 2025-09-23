<script setup lang="ts">
import ProjectPage from '@/components/ProjectPage.vue';
</script>
<template>
    <ProjectPage title="Loti Christmas Card" img-url="https://d1wfumw2cntqgw.cloudfront.net/portfolio/loti-christmas.png" live-url="https://christmas2023.odb.sg">
        <template #proj-info>
            <p>Inspired by Zendesk's Thank You Machine, I pitched the idea of a customisable e-card for our 2023 Christmas campaign.</p>
            <p>With the help of the Creative Design team and Content Marketing team, we launched this microsite to allow users to create their own e-cards to send to their friends and family.</p>
            <p>The microsite was fully implemented using Vue.js for reactivity, providing real-time previews of the e-cards as users customise them.</p>
            <p>The cards created are stored in an AWS S3 bucket and a shareable link is generated for users to share their customised card through messaging platforms.</p>
            <p>This campaign was a success, driving strong engagement with over 6,000 cards created in December 2023.</p>
        </template>
    </ProjectPage>
</template>
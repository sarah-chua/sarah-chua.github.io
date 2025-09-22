<script setup lang="ts">
import ProjectPage from '@/components/ProjectPage.vue';
</script>
<template>
    <ProjectPage title="Conference Registration Web App" imgUrl="https:/d1wfumw2cntqgw.cloudfront.net/portfolio/conference.png">
        <template #proj-info>
            <p>To facilitate participant management for an annual conference, my team was tasked to build a solution for quick registration on the day of the conference.</p>
            <p>Using AWS Amplify, I built a web application with Vue that allowed conference attendees to be quickly marked as present through the scanning of QR codes sent via email when they signed up.</p>
            <p>All staff members logged in to the web app through their mobile phones on the day of the event. They were able spread out and easily check in attendees within seconds. Some participants were even checked-in the moment they arrived at the carpark.</p>
            <p>This helped to quickly move participants into the event hall and prevent crowding at the entrance area. The web app also displayed a real-time count of the number of attendees to ensure the venue capacity is not exceeded.</p>
            <p>The app accommodated at least 1000 participants for each year's conference and received positive feedback from attendees and staff alike.</p>
        </template>
    </ProjectPage>
</template>
<style scoped>
.prod-img, li {
    margin: 1rem 0;
}
</style>
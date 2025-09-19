<script setup lang="ts">
import ProjectPage from '@/components/ProjectPage.vue';
</script>
<template>
    <ProjectPage :title="'Digital Concierge'" :img-url="'https:/d1wfumw2cntqgw.cloudfront.net/portfolio/digital-concierge.png'" :live-url="'https://odb.sg'">
        <template #proj-info>
            <p>In hopes to automate and reduce the labour of our customer-facing teams, we developed a Digital Concierge to answer some FAQs and automate collection of information for follow-up tasks.</p>
            <p>Working closely with the customer-facing teams, we identified common queries and tasks that could be streamlined. For its first iteration, the Concierge was configured for the following purposes:
                <ul>
                    <li>Directing users to subscription forms</li>
                    <li>Unsubscribing users from mailing lists</li>
                    <li>Updating users' mailing addresses</li>
                    <li>Updating the quantity of subscriptions</li>
                    <li>Providing information about donation methods</li>
                    <li>Searching and recommending resources</li>
                </ul>
            </p>
            <p>The chatbot is built using AWS Lex and Lambda, and is integrated with the Trello API to create follow-up tasks automatically.</p>
            <p>I had the privilege of being involved in this project from start to end. From liaising with stakeholders to gather requirements, to coding the solution, I ensured that the final product met the needs of the users.</p>
        </template>
    </ProjectPage>
</template>
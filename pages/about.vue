<template>
    <div class="about">
        <ContentRenderer class="markdown-body" :value="doc" />
    </div>
</template>
<script setup>
const { data: doc } = await useAsyncData(() => queryContent("about").findOne());
</script>
<style scoped>
.about {
    padding: 0.5rem 2rem;
    .markdown-body {
        font-size: 0.8rem;
    }
}
</style>

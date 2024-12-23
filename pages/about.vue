<template>
    <div class="about">
        <ContentRenderer class="markdown-body" :value="doc" />
    </div>
</template>
<script setup>
useHead({
  title: '关于-耶温-个人主页',
})
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

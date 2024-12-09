<template>
    <div v-if="isLoading" class="loading-overlay">
        <div class="loading-spinner">
            <p>HomePage Loading...</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    isLoading: {
        type: Boolean,
        default: false,
    },
});
</script>

<style scoped>
.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--bg-color-2);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.loading-spinner {
    font-size: 1rem;
    color: var(--font-color-2);
}
</style>

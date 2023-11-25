<script setup>
const props = defineProps({
    hoverable: Boolean,
    header: Boolean,
})
</script>

<template>
    <div class="cell" :class="props">
        <slot />
    </div>
</template>
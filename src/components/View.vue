<script setup>
const { itemsCount } = defineProps({
    itemsCount: {
        type: Number,
        default: 3
    }
})
</script>

<template>
    <div :style="{ '--cell-count': itemsCount }">
        <slot />
    </div>
</template>
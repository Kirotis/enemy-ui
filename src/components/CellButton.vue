<script setup>
const { hoverable, disabled } = defineProps({
    disabled: Boolean,
    hoverable: { type: Boolean, default: true },
})

const emit = defineEmits(['click'])

</script>

<template>
    <button class="cell" :class="{ hoverable }" :disabled="disabled" @click="emit('click')">
        <slot />
    </button>
</template>
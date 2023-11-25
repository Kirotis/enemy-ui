<script setup>
import Cell from './Cell.vue'
import CellButton from './CellButton.vue'
import View from './View.vue'
import { useRouter } from 'vue-router'
const { push } = useRouter()
</script>

<template>    
    <View>
        <Cell header>Not found</Cell>
        <Cell header>__XxXxXxXxXxX__</Cell>
        <CellButton @click="push({ name: 'home' })">To Home</CellButton>
    </View>
</template>

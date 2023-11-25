<script setup>
import Cell from '../components/Cell.vue'
import CellButton from '../components/CellButton.vue'
import View from '../components/View.vue'
import { useRouter } from 'vue-router'
const { push } = useRouter()
</script>

<template>
    <View>
        <Cell header hoverable>Todo APP</Cell>
        <CellButton @click="push({ name: 'todos' })">List</CellButton>
        <CellButton @click="push({ name: 'form' })">Create todo</CellButton>
    </View>
</template>
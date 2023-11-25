<script setup>
import Cell from '../components/Cell.vue'
import CellButton from '../components/CellButton.vue'
import View from '../components/View.vue'
import NotFoundView from '../components/NotFoundView.vue'
import { useRouter } from 'vue-router'
import { inject } from 'vue'

const router = useRouter()
const { todoList } = inject('store', {})
</script>

<template>
    <View v-if="todoList?.length" :items-count="1 + todoList.length">
        <Cell header>List</Cell>
        <CellButton v-for="todo in todoList" :key="todo.id" @click="router.push({ name: 'todo', params: { id: todo.id } })">
            {{ `[${todo.isComplited ? ' ' : 'X'}] ${todo.title}` }}
        </CellButton>
    </View>
    <NotFoundView v-else />
</template>
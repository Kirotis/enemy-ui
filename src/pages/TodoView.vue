<script setup>
import Cell from '../components/Cell.vue'
import CellButton from '../components/CellButton.vue'
import View from '../components/View.vue'
import NotFoundView from '../components/NotFoundView.vue'
import { useRoute, useRouter } from 'vue-router'
import { inject } from 'vue'

const store = inject('store', {})
const { params: { id } } = useRoute()
const { push, back } = useRouter()
const todo = store.todos?.[id]

const deleteTodo = () => {
    store.deleteTodo(todo.id)
    back()
}
</script>

<template>
    <View v-if="todo" :items-count="5">
        <Cell header>{{ todo.title }}</Cell>
        <Cell>Description: {{ todo.description }}</Cell>
        <CellButton @click="store.toggleTodo(todo.id)">{{ todo.isComplited ? "Done" : "NOT Done" }}</CellButton>
        <CellButton @click="push({ name: 'form', query: { edit: todo.id } })">Edit</CellButton>
        <CellButton @click="deleteTodo">Delete</CellButton>
    </View>
    <NotFoundView v-else />
</template>
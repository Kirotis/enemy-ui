<script setup>
import Cell from '../components/Cell.vue'
import CellButton from '../components/CellButton.vue'
import View from '../components/View.vue'
import { useRoute, useRouter } from 'vue-router'
import { inject, ref, computed } from 'vue'

const { query: { edit } } = useRoute()
const { back } = useRouter()
const store = inject('store', {})

const todo = store.todos?.[edit]
const description = ref(todo?.description ?? '')
const title = ref(todo?.title ?? '')
const disabled = computed(() => !description.value || !title.value)

const submit = () => {
    if (todo) store.editTodo({
        ...todo,
        description: description.value,
        title: title.value,
    })
    else store.addTodo(title.value, description.value)
    back()
}
</script>

<template>
    <View :items-count="4">
        <Cell header>{{ todo ? `ID: ${todo.id}` : "New" }}</Cell>
        <input placeholder="title" class="hoverable cell" v-model="title">
        <input placeholder="description" class="hoverable cell" v-model="description">
        <CellButton :disabled="disabled" @click="submit">
            {{ todo ? "Edit" : "Create" }}
        </CellButton>
    </View>
</template>
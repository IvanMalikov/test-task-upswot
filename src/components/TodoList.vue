<template>
    <div 
        class="todo-list"
    >
        <TodoCard 
            v-for="item in getTodoItems" 
            :key="item.id" 
            :item="item"
        />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TodoCard from '../components/TodoCard.vue';
    export default {
        components: {
            TodoCard
        },
        computed: {
            ...mapGetters({
                getTodoItems: 'getTodoItems'
            })
        }
    }
</script>

<style lang="scss" scoped>
.todo-list {
    width: 600px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

@media (max-width: 850px) {
    .todo-list {
        width: 400px;
    }
}

@media (max-width: 530px) {
    .todo-list {
        width: 320px;
    }
}
</style>
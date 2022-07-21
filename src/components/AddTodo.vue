<template>
    <div class="add-todo">
        <InputComponent v-model="todoItem.content"/>
        <button class="button" @click="addTodoItem">Add</button>
    </div>
</template>

<script>
import InputComponent from './InputComponent.vue'
    export default {
        components: { 
            InputComponent 
        },
        data() {
            return {
                todoItem: {
                    content: ''
                }
            }
        },
        methods: {
            addTodoItem() {
                this.$store.commit('addTodoItem', this.todoItem)
                this.todoItem = { content: '' }
            }
        }
    }
</script>

<style lang="scss" scoped>
.add-todo {


    .button {
        margin-left: 30px;
        font-family: 'Roboto';
        background: #0076C0;
        padding: 8px 28px;
        color: white;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        border: 2px solid #0076C0;
    }
    
    .button:hover {
        background: #fff;
        color: #0076C0;
        cursor: pointer;
    }
}

@media (max-width: 850px) {
    .add-todo {
        .button {
            margin-left: 0;
            margin-top: 10px;
        }
    }
}
</style>
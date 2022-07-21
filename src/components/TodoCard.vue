<template>
<div class="todo-card">
    <div class="todo-card-content">
        <span class="content">{{item.content}}</span>
        <div class="todo-card-content-buttons">
            <button class="button" @click="onEdit">Edit</button>
            <button class="button red" @click="deleteTodo(item)">Delete</button>
        </div>
    </div>
        <EditTodo 
            v-if="isEdit" 
            :item="item"
            @close="close"
        />
    </div>
</template>

<script>
import EditTodo from '../components/EditTodo.vue'
    export default {
        components: {
            EditTodo
        },
        props: {
            item: {
                type: Object,
                default: () => ({})
            }
        },
        data() {
            return {
                isEdit: false
            }
        },
        methods: {
            onEdit() {
                this.isEdit = !this.isEdit
            },
            close() {
                this.isEdit = false
            },
            deleteTodo(item) {
                this.$store.commit('removeTodoItem', item)
            }
        }
    }
</script>

<style lang="scss" scoped>
.todo-card {
    width: 100%;
    &-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
        font-family: 'Roboto';
        font-size: 18px;
        line-height: 21px;

        .content {
            width: 370px;
            font-size: 20px;
            font-weight: 400;
            text-overflow: ellipsis;
            cursor: pointer;
            word-break: break-all;
            overflow: hidden;
            white-space: nowrap;
        }
        .content:hover{
            overflow: visible; 
            white-space: normal;
        }


        .button {
            font-family: 'Roboto';
            background: #0076C0;
            padding: 8px 28px;
            color: white;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            border: 2px solid #0076C0;
        }

        .red {
            margin-left: 30px;
            background: red;
            border: 2px solid red;
        }

        
        .button:hover {
            background: #fff;
            color: #0076C0;
            cursor: pointer;
        }

        .red:hover {
            color: red;
        }
    }
}

@media (max-width: 850px) {
    .todo-card {
        &-content {
            .content {
                width: 170px;
            }
            .button {
                padding: 4px 14px;
            }
        }
    }
}

@media (max-width: 530px) {
    .todo-card {
        &-content {
            .content {
                width: 100px;
            }
        }
    }
}
</style>
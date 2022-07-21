<template>
    <div class="main">
        <div class="main-blue">
            <img src="../assets/logo.png" alt="">
        </div>
        <div class="main-todos">
            <h1>Thank you {{userName}}!</h1>
            <AddTodo />
            <TodoList/>
        </div>
    </div>
</template>

<script>
import AddTodo from '../components/AddTodo.vue'
import TodoList from '../components/TodoList.vue'
    export default {
        components: {
            AddTodo,
            TodoList
        },
        data() {
            return {
                userName: '',
            }
        },
        created() {
            this.userName = localStorage.getItem('username')
        }
    }
</script>

<style lang="scss" scoped>
.main {
    position: relative;
    min-height: 100vh;
    background-color: #E5E5E5;
    &-blue {
        height: 70vh;
        background: linear-gradient(180deg, #00AFED 0%, #00569A 100%);
        text-align: center;

        img {
            width: 186px;
            margin-top: 65px;
        }
    }
    &-todos {
        padding: 20px 0;
        position: absolute;
        top: 250px;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        max-height: 60vh;
        overflow: scroll;
        width: 1191px;
        background: #fff;
        text-align: center;
        h1 {
            font-size: 60px;
            line-height: 94px;
        }
    }
}

@media (max-width: 1250px) {
    .main {
        &-todos {
            width: 800px;
        }
    }
}

@media (max-width: 850px) {
    .main {
        &-blue {
            img {
                width: auto;
            }
        }
        &-todos {
            width: 500px;
            top: 200px;
            h1 {
                font-size: 40px;
                line-height: 64px;
            }
        }
    }
}

@media (max-width: 530px) {
    .main {
        &-todos {
            width: 350px;
            top: 200px;
            h1 {
                font-size: 40px;
                line-height: 64px;
            }
        }
    }
}
</style>
<template>
    <div class="edit-todo">
        <InputComponent v-model="localValue.content"/>
        <button class="button" @click="onSubmit">Submit</button>
    </div>
</template>

<script>
import InputComponent from "../components/InputComponent.vue"
    export default {
        components: {
            InputComponent
        },
        props: {
            item: {
                required: true,
                type: Object
            }
        },
        data() {
            return {
                localValue: { content: '' }
            }
        },
        watch: {
            item: {
                handler() {
                    this.localValue = { ...this.item }
                },
                immediate: true
            }
        },
        methods: {
            onSubmit() {
                this.$store.commit('editTodo', this.localValue)
                this.$emit('close')
            }
        }
    }
</script>

<style lang="scss" scoped>
.edit-todo {
    margin-top: 10px;
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
    .button {
        margin-top: 10px;
        margin-left: 30px;
        padding: 4px 14px;
    }
}
</style>
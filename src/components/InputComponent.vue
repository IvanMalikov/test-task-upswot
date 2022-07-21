<template>
    <input 
        v-bind="$attrs"
        :value="value"
        class="input-component"
        @input="onInput"
    >
</template>

<script>
    export default {
        inheritAttrs: true,
        props: {
            value: {
                required: true,
                type: [String, Number]
            }
        },
        methods: {
            onInput(event) {
                this.$emit('input', event.target.value)
            }
        }
    }
</script>

<style lang="scss" scoped>
.input-component {
    width: 398px;
    height: 53px;
    font-size: 18px;
    line-height: 21px;
    padding-left: 15px;
}

@media (max-width: 500px) {
    .input-component {
        width: 280px;
    }
}
</style>
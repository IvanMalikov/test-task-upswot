<template>
<div class="input-component">
    <input 
        v-bind="$attrs"
        :value="value"
        class="input-field"
        @input="onInput"
    >
    <span 
        class="error-message" 
        v-if="error"
    >
        <img src="../assets/error-icon.png" alt="">
        {{errorText}}
    </span>
</div>
</template>

<script>
    export default {
        inheritAttrs: true,
        props: {
            value: {
                required: true,
                type: [String, Number]
            },
            error: {
                type: Boolean,
                default: false
            },
            errorText: {
                type: String,
                default: ''
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
.input-field {
    width: 398px;
    height: 53px;
    font-size: 18px;
    line-height: 21px;
    padding-left: 15px;
}
.error-message {
    color: red;
    font-size: 16px;
    line-height: 19px;
}

@media (max-width: 500px) {
    .input-component {
        width: 280px;
    }
}
</style>
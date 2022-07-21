<template>
    <div class="log">
        <div class="log-inner">
            <div class="log-inner-inputs">
                <div class="name-input">
                    <p class="label">Name</p>
                    <InputComponent type="text" v-model="userName"/>
                </div>
                <div class="password-input">
                    <p class="label">Password</p>
                    <InputComponent type="text" v-model="password"/>
                </div>
                <div class="login-button">
                    <button class="button" @click="onSubmit">LOGIN</button>
                    <p>Forgot password</p>
                </div>
            </div>
            <p class="log-inner-register">Register now</p>
        </div>
    </div>
</template>

<script>
import InputComponent from '../components/InputComponent.vue'
    export default {
        components: { 
            InputComponent 
        },
        data() {
            return {
                userName: '',
                password: '',
            }
        },

        methods: {
            onSubmit() {
                if(this.userName === 'Admin' && this.password === '12345') {
                    localStorage.setItem('Auth', 'true')
                    localStorage.setItem('username', this.userName)
                    this.$router.push('/todo')
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.log {
    &-inner {
        &-inputs {
            width: 421px;
            height: 355px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 40px 30px 23px 30px;
            .label {
                font-size: 18px;
                line-height: 21px;
                margin-bottom: 7px;
                color: #333333;
            }
            .login-button {
                text-align: center;
                .button {
                    border: 2px solid #0076C0;
                    width: 100%;
                    height: 53px;
                    background-color: #0076C0;
                    font-family: 'Roboto';
                    font-size: 25px;
                    line-height: 29px;
                    font-weight: 400;
                    color: white;
                }

                .button:hover {
                    color: #0076C0;
                    background: #fff;
                    cursor: pointer;
                }

                p {
                    margin-top: 20px;
                    color: #0076C0;
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 23px;
                }
            }
        }

        &-register {
            text-align: center;
            background-color: #F6F6F6;
            font-size: 25px;
            line-height: 29px;
            padding: 17px 0;
        }
    }
}

@media (max-width: 500px) {
    .log {
        &-inner {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            &-inputs {
                width: 300px;
                padding: 30px 20px;
            }
            &-register {
                width: 100%;
            }
        }
        
    }
}
</style>
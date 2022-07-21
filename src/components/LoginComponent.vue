<template>
<div class="main">
    <div class="main-inner">
        <header class="header">
            <div class="header-black">

            </div>
            <div class="header-content">
                <img src="../assets/logo.png" alt="">
            </div>
        </header>
        <div class="title">
            <h1 class="title-content">
                <p>Welcome to</p>
                <p>Business Analytics Online</p>
            </h1>
        </div>
        <div class="about">
            <p class="about-title"><b>Business Analytics</b> — a new, convenient tool for managing and forecasting your business performance, which will help analyze your own finances and cash flows, visualize your reporting, business processes, KPI's</p>
            <ul class="about-list">
                <li class="about-list-item">
                    <p class="about-title"><b>Interactive Reporting</b></p>
                    <p class="about-list-item-content">In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM), 
                        E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems that reflect 
                        different aspects of business activities.</p>
                </li>
                <li class="about-list-item">
                    <p class="about-title"><b>Automated data updates</b></p>
                    <p class="about-list-item-content">The application automatically updates and structures the data in just 60 seconds, saving you time and money.</p>
                </li>
                <li class="about-list-item">
                    <p class="about-title"><b>Data Security</b></p>
                    <p class="about-list-item-content">The Bank guarantees the safety of your personal data, ensuring their integrity and confidentiality.</p>
                </li>
            </ul>
        </div>
        <div class="login">
            <LoginFields/>
        </div>
    </div>
    <footer class="footer">
        <div class="footer-inner">
            <div class="footer-inner-links">
                <div class="footer-inner-links-logo">
                    <img src="../assets/logo.png" alt="">
                </div>
                <ul class="footer-inner-links-list">
                    <li class="footer-inner-links-list-item">Terms & Conditions</li>
                    <li class="footer-inner-links-list-item">Privacy</li>
                    <li class="footer-inner-links-list-item">Notice at Collection</li>
                    <li class="footer-inner-links-list-item">CA Privacy Hub</li>
                    <li class="footer-inner-links-list-item">Contact Us</li>
                    <li class="footer-inner-links-list-item">Sitemap</li>
                </ul>
            </div>
            <div class="footer-inner-copyright">
                <p class="footer-inner-copyright-content">Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal Opportunity Lender.</p>
            </div>
        </div>
    </footer>
</div>
</template>

<script>
import LoginFields from '../components/LoginFieldsComponent.vue'
    export default {
        components: {
            LoginFields
        }
    }
</script>

<style lang="scss" scoped>
.main {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &-inner {
        .header {
            &-black {
                background-color: #000;
                height: 53px;  
            }
            &-content {
                height: 96px;
                background: linear-gradient(180deg, #00AFED 0%, #00569A 100%);
                display: flex;
                align-items: center;
                img {
                    margin-left: 377px;
                }
            }
        }

        .title {
            width: 100%;
            height: 457px;
            background-image: url('../assets/title.png');
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
                
            &-content {
                padding-top: 215px;
                margin-left: 371px;
                color: #fff;
                font-size: 55px;
                line-height: 86px;
                font-weight: 400; 
                width: 629px;
            }
        }

        .about {
            width: 654px;
            margin-left: 380px;
            margin-top: 40px;
            
            &-title {
                font-size: 16px;
                line-height: 25px;
                margin-bottom: 10px;
            }

            &-list {
                margin-top: 25px;
                margin-left: 30px;
                margin-bottom: 40px;
                list-style: none;
                &-item {
                    list-style: url('../assets/list-mark.png');
                    &-content {
                        font-size: 14px;
                        line-height: 22px;
                    }
                    p {
                        margin-left: 5px;
                    }
                }

                li:not(:last-child) {
                    margin-bottom: 15px;
                }
            }
        }

        .login {
            position: absolute;
            top: 424px;
            right: 372px;
            width: 481px;
            background-color: #fff;
            box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
        }
    }

    .footer {
        margin-top: 10px;
        height: 175px;
        background-color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
        &-inner {
            display: flex;
            flex-direction: column;
            justify-content: center;
            &-links {
                width: 1164px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding-bottom: 30px;
                border-bottom: 1px solid #fff;
                &-logo {
                    img {
                        width: 56px;
                        height: 35px;
                    }
                }
                &-list {
                    list-style: none;
                    display: flex;

                    li:not(:last-child) {
                        margin-right: 20px;
                    }
                    &-item {
                        font-size: 16px;
                        line-height: 25px;
                        font-weight: 500;
                        color: white;
                    }
                }
            }
            &-copyright {
                margin-top: 30px;
                &-content{
                    color: white;
                }
            }
        }
        
    }
}

@media (max-width: 1875px) {
    .main {
        &-inner {
            .login {
                right: 120px;
            }
        }
    }
}

@media (max-width: 1630px) {
    .main{
        &-inner {
            .header {
                &-content {
                    img {
                        margin-left: 120px;

                    }
                }
            }

            .title {
                &-content {
                    margin-left: 120px;
                }
            }

            .about {
                margin-left: 120px;
            }
        }
    }
}

@media (max-width: 1375px) {
    .main {
        position: static;
        &-inner {
            .login {
                position: static;
                margin: 0 auto;
            }

            .about {
                margin: 0 auto;
                margin-top: 40px;
            }
        }

        .footer {
            &-inner {
                &-links {
                    width: 800px;
                }
            }
        }
    }
}

@media (max-width: 850px) {
    .main{
        &-inner {
            .header {
                &-content {
                    img {
                        margin-left: 50px;
                    }
                }
            }

            .title {
                &-content {
                    width: auto;
                    margin: 0 auto;
                    margin-left: 50px;
                    padding-top: 256px;
                    font-size: 35px;
                    line-height: 50px;
                }
            }

            .about {
                width: 421px;
                margin: 0 auto;
                margin-top: 40px;
            }
        }

        .footer {
            &-inner {
                &-links {
                    width: 400px;
                    &-list {
                        text-align: center;
                        width: 300px;
                        flex-wrap: wrap;
                    }
                }

                &-copyright {
                    font-size: 10px;
                }
            }
        }
    }
}

@media (max-width: 500px) {
    .main {
        &-inner {
            .header {
                &-black {
                    height: 20px;
                }
                &-content {
                    height: 50px;
                    img {
                        height: 30px;
                    }
                }
            }

            .title {
                height: 200px;
                &-content {
                    padding-top: 100px;
                    font-size: 20px;
                    line-height: 30px;
                }
            }

            .about {
                width: 350px;
            }

            .login {
                width: 350px;
            }
        }

        .footer {
            height: 230px;
            &-inner {
                &-links {
                    width: 300px;
                    &-list {
                        text-align: center;
                        width: 200px;
                        flex-wrap: wrap;
                    }
                }

                &-copyright {
                    font-size: 7px;
                }
            }
        }
    }
}
</style>
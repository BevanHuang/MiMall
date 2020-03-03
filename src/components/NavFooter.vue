<template>
    <div class="footer">
        <div class="container">
            <div class="footer-logo">
                <img src="/imgs/logo-footer.png" alt="">
            </div>
            <div class="footer-link">
                <a href="">小米商城</a><span>|</span>
                <a href="">MIUI</a><span>|</span>
                <a href="">米家</a><span>|</span>
                <a href="">政企服务</a><span>|</span>
                <a href="">小米天猫店</a><span>|</span>
                <a href="">小米集团隐私政策</a><span>|</span>
                <a href="">小米公司儿童信息保护规则</a><span>|</span>
                <a href="">小米商城隐私政策</a><span>|</span>
                <a href="">小米商城用户协议</a><span>|</span>
                <a href="">问题反馈</a>
            </div>
            <div class="copyright">
                Copyright © mi.com
            </div>
            <img src="/imgs/slogan2016.png" id="footerImg">
        </div>
    </div>
</template>
<script>
    export default {
        name: 'nav-footer'
    }
</script>

<style lang="scss" scoped>
    @import './../assets/scss/config.scss';
    .footer {
        height: 234px;
        border-top: 4px solid $colorA;
        background-color: #fafafa;
        color: $colorD;
        font-size: $fontI;
        text-align: center;
        .container {
            height: 234px;
            .footer-logo {
                margin-top: 46px;
                margin-bottom: 31px;
                float: left;
            }
            .footer-link {
                margin-left: 30px;
                margin-top: 65px;
                display: inline-block;
                a{
                    color: #757575;
                }
                span {
                    margin: 0 10px;
                }
            }
            .copyright {
                color: #B0B0B0;
                margin-top: 100px;
            }
            img#footerImg {
                margin-top: 20px;
            }
        }
        
    }
</style>
<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" v-if="username">{{username}}</a>
                    <a href="javascript:;" v-else @click="goLogin">登录</a>
                    <a href="javascript:;" v-if="username">我的订单</a>
                    <a href="javascript:;" class="my-cart" @click="goToCart"><i class="iconfont">&#xe62b;</i>购物车</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li v-for="(item, index) in phoneList" class="product" :key="index">
                                    <a :href="'/#/product/' + item.id" target="_blank">
                                        <div class="pro-img">
                                            <img :src="item.imageURL" alt="">
                                        </div>
                                        <div class="pro-name">
                                            {{item.name}}
                                        </div>
                                        <div class="pro-price">
                                            {{item.price}}元起
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>Redmi 红米</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/redmiphone1.webp" alt="">
                                        </div>
                                        <div class="pro-name">
                                            Redmi K30
                                        </div>
                                        <div class="pro-price">
                                            1599元起
                                        </div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/redmiphone2.webp" alt="">
                                        </div>
                                        <div class="pro-name">
                                            Redmi K30 5G
                                        </div>
                                        <div class="pro-price">
                                            1999元起
                                        </div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/redmiphone3.webp" alt="">
                                        </div>
                                        <div class="pro-name">
                                            Redmi 8A
                                        </div>
                                        <div class="pro-price">
                                            599元起
                                        </div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/redmiphone4.webp" alt="">
                                        </div>
                                        <div class="pro-name">
                                            Redmi Note 8
                                        </div>
                                        <div class="pro-price">
                                            999元起
                                        </div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/redmiphone5.webp" alt="">
                                        </div>
                                        <div class="pro-name">
                                            Redmi Note 8 Pro
                                        </div>
                                        <div class="pro-price">
                                            1299元起
                                        </div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/redmiphone6.webp" alt="">
                                        </div>
                                        <div class="pro-name">
                                            Redmi 8
                                        </div>
                                        <div class="pro-price">
                                            749元起
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/redmitv.webp" alt="">
                                        </div>
                                        <div class="pro-name">
                                            Redmi 红米电视 70英寸 R70A
                                        </div>
                                        <div class="pro-price">
                                            3299元起
                                        </div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/arttv.webp" alt="">
                                        </div>
                                        <div class="pro-name">
                                            小米壁画电视 65英寸
                                        </div>
                                        <div class="pro-price">
                                            6999元起
                                        </div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/mitvallscreen.webp" alt="">
                                        </div>
                                        <div class="pro-name">
                                            小米全面屏电视E55A
                                        </div>
                                        <div class="pro-price">
                                            1799元起
                                        </div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/mitv4A32.webp" alt="">
                                        </div>
                                        <div class="pro-name">
                                            小米电视4A 32英寸
                                        </div>
                                        <div class="pro-price">
                                            699元起
                                        </div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/mitv4A55.webp" alt="">
                                        </div>
                                        <div class="pro-name">
                                            小米电视4A 55英寸
                                        </div>
                                        <div class="pro-price">
                                            1699元起
                                        </div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/mitv4A65.webp" alt="">
                                        </div>
                                        <div class="pro-name">
                                            小米电视4A 65英寸
                                        </div>
                                        <div class="pro-price">
                                            2599元起
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;">
                            <i class="iconfont">&#xe911;</i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'nav-header',
        data() {
            return {
                username: '',
                phoneList: []
            }
        },
        mounted() {
            this.getProductList();
        },
        methods: {
            getProductList() {
                // 教程视频中的接口不起作用了
                // 我使用的是自己的mock地址。图片是本地的图片，mock数据中的图片地址对应本地图片的地址。嗯是的。lower
                this.axios.get('/products').then((res) => {
                    console.log(res);
                    if(res.list.length > 6) {
                        this.phoneList = res.list.splice(0, 6);
                    } else {
                        this.phoneList = res.list;
                    }
                })
            },
            goToCart() {
                // this.$router.push('/cart');
                console.log(this.phoneList);
            },
            goLogin() {
                this.$router.push('/login')
            }
        }
    }
</script>

<style lang="scss">
    @import './../assets/scss/base.scss';
    @import './../assets/scss/mixin.scss';
    @import './../assets/scss/config.scss';
    
    .header {
        .nav-topbar {
            height: 39px;
            line-height: 39px;
            background-color: #333333;
            color: #B0B0B0;
            .container {
                @include flex();
                a {
                    display: inline-block;
                    color: #B0B0B0;
                    margin-right: 17px;
                }
                .my-cart {
                    height: 39px;
                    width: 110px;
                    background-color: #424242;
                    text-align: center;
                    color: #b0b0b0;
                    i {
                        margin-right: 5px;
                    }
                }
            }
        }
        .nav-header {
            .container {
                position: relative;
                height: 112px;
                @include flex();
                .header-logo {
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    background: #FF6600;
                    a {
                        display: inline-block;
                        width: 110px;
                        height: 55px;
                        &:before {
                            content: ' ';
                            display: inline-block;
                            width: 55px;
                            height: 55px;
                            background: url('/imgs/mi-logo.png') no-repeat center;
                            background-size: 55px;
                            transition: margin .2s;
                        }
                        &:after {
                            content: ' ';
                            display: inline-block;
                            width: 55px;
                            height: 55px;
                            background: url('/imgs/mi-home.png') no-repeat center;
                            background-size: 55px;
                        }
                        &:hover:before {
                            margin-left: -55px;
                            transition: margin .2s;
                        }
                    }
                }
                .header-menu {
                    display: inline-block;
                    width: 643px;
                    padding-left: 209px;
                    .item-menu {
                        display: inline-block;
                        color: #333333;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 112px;
                        margin-right: 20px;
                        span {
                            cursor: pointer;
                        }
                        &:hover {
                            color: $colorA;
                            .children {
                                height: 220px;
                                opacity: 1;
                            }
                        }
                        .children {
                            position: absolute;
                            top: 112px;
                            left: 0;
                            width: 1226px;
                            height: 0;
                            opacity: 0;
                            overflow: hidden;
                            border-top: 1px solid #e0e0e0;
                            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
                            transition: all .5s;
                            .product {
                                position: relative;
                                float: left;
                                width: 16.6%;
                                height: 220px;
                                font-size: 12px;
                                line-height: 12px;
                                text-align: center;
                                &:before {
                                    content: ' ';
                                    position: absolute;
                                    top: 28px;
                                    right: 0;
                                    border-left: 1px solid $colorF;
                                    height: 100px;
                                    width: 1px;
                                }
                                &:last-child:before {
                                    display: none;
                                }
                                a {
                                    display: inline-block;
                                }
                                img {
                                    width: auto;
                                    height: 111px;
                                    margin-top: 26px;
                                }
                                .pro-img {
                                    height: 137px;
                                }
                                .pro-name {
                                    font-weight: bold;
                                    margin-top: 19px;
                                    margin-bottom: 8px;
                                    color: $colorB;
                                }
                                .pro-price {
                                    color: $colorA;
                                }
                            }
                        }
                    }
                }
                .header-search {
                    width: 319px;
                    .wrapper {
                        height: 50px;
                        border: 1px solid #E0E0E0;
                        border-right: none;
                        display: flex;
                        align-items: center;
                        transition: all .1s;
                        input {
                            border: none;
                            width: 264px;
                            height: 48px;
                            padding-left: 14px;
                            outline: none;
                            box-sizing: border-box;
                            transition: all .1s;
                        }
                        a {
                            width: 55px;
                            height: 50px;
                            color: #616161;
                            border-left: 1px solid #E0E0E0;
                            border-right: 1px solid #E0E0E0;
                            transition: all .1s;
                            i {
                                display: inline-block;
                                margin-left: 15px;
                                margin-top: 13px;
                                font-size: 24px;
                            }
                            &:hover {
                                background-color: #FF6600;
                                color: #ffffff;
                                border-left: 1px solid #FF6600 !important;
                                border-right: 1px solid #FF6600 !important;
                            }
                        }
                        &:hover {
                            border: 1px solid #bbb;
                            border-right: none;
                            transition: all .1s;
                        }
                        &:hover a {
                            border-left: 1px solid #bbb;
                            border-right: 1px solid #bbb;
                            transition: all .1s;
                        }
                    }
                }
            }
        }
    }
</style>
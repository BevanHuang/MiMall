<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrapper">
                        <li class="menu-item">
                            <a href="javascript:;">手机 电话卡<i class="iconfont">&#xe605;</i></a>
                            <div class="children">
                                <ul v-for="(item, index) in menuList" :key="index">
                                    <li v-for="(sub, index) in item" :key="index">
                                        <a :href="sub ? '/#/product/' + sub.id : ''">
                                            <img :src="sub ? sub.img : '/imgs/menu/item-box-1.webp'" alt="">
                                            <span>{{(sub ? sub.name : '小米10')}}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电视 盒子<i class="iconfont">&#xe605;</i></a>
                            <div class="children">
                                <ul v-for="(item, index) in tvMenuList" :key="index">
                                    <li v-for="(sub, index) in item" :key="index">
                                        <a :href="sub ? '/#/product/' + sub.id : ''">
                                            <img :src="sub ? sub.img : '/imgs/menu/tv.webp'" alt="">
                                            <span>{{(sub ? sub.name : 'Redmi 红米电视 70英寸')}}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">笔记本 显示器 平板<i class="iconfont">&#xe605;</i></a>
                            <div class="children">
                                <ul v-for="(item, index) in redMiBookList" :key="index">
                                    <li v-for="(sub, index) in item" :key="index">
                                        <a :href="sub ? '/#/product/' + sub.id : ''">
                                            <img :src="sub ? sub.img : '/imgs/menu/RedMiBook13.webp'" alt="">
                                            <span>{{(sub ? sub.name : 'RedmiBook 13')}}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">家电 插线板<i class="iconfont">&#xe605;</i></a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">出行 穿戴<i class="iconfont">&#xe605;</i></a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">智能 路由器<i class="iconfont">&#xe605;</i></a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电源 配件<i class="iconfont">&#xe605;</i></a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">健康 儿童<i class="iconfont">&#xe605;</i></a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">耳机 音箱<i class="iconfont">&#xe605;</i></a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">生活 箱包<i class="iconfont">&#xe605;</i></a>
                        </li>
                    </ul>
                </div>
                <swiper :options="swiperOption">
                    <swiper-slide v-for="item in sliderList" :key="item.id">
                        <a :href="'/#/product/' + item.id"><img :src="item.img" alt=""></a>
                    </swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-pagination"  slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="ads-box">
                <a :href="'/#/product/' + item.id" v-for="item in adsList" :key="item.id" class="fullfill">
                    <img :src="item.img" alt="">
                </a>
            </div>
            <div class="banner">
                <a href="/#/product/30">
                    <img src="/imgs/banner-1.webp" alt="">
                </a>
            </div>
            <div class="product-box">
                <h2>手机</h2>
                <div class="wrapper">
                    <div class="banner-left">
                        <a href="/#/product/35">
                            <img src="/imgs/mix-alpha.webp" alt="">
                        </a>
                    </div>
                    <div class="list-box">
                        <div class="list" v-for="(arr, index) in phoneList" :key="index">
                            <div class="item" v-for="item in arr" :key="item.id">
                                <a href="">
                                    <div class="item-img">
                                        <img :src="item.imageURL" alt="">
                                    </div>
                                    <div class="item-info">
                                        <h3>{{item.name}}</h3>
                                        <p>{{item.subtitle}}</p>
                                        <span>{{item.price}}元起</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <service-bar></service-bar>
    </div>
</template>

<script>
    import ServiceBar from './../components/ServiceBar'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'
    export default {
        name: 'index',
        components: {
            swiper,
            swiperSlide,
            ServiceBar
        },
        data() {
            return {
                swiperOption: {
                    autoplay: true,
                    loop: true,
                    effect: 'cube',
                    cubeEffect: {
                        slideShadows: true,
                        shadow: true,
                        shadowOffset: 100,
                        shadowScale: 0.6
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }
                },
                sliderList: [
                    {
                        id: '42',
                        img: '/imgs/slider/slider1.jpg'
                    },
                    {
                        id: '43',
                        img: '/imgs/slider/slider2.jpg'
                    },
                    {
                        id: '44',
                        img: '/imgs/slider/slider3.jpg'
                    },
                    {
                        id: '45',
                        img: '/imgs/slider/slider4.jpg'
                    },
                    {
                        id: '46',
                        img: '/imgs/slider/slider5.jpg'
                    }
                ],
                menuList: [
                    // 第一个数组
                    [
                        {
                            id: 30,
                            img: '/imgs/menu/item-box-1.webp',
                            name: '小米10 Pro'
                        },
                        {
                            id: 30,
                            img: '/imgs/menu/item-box-1.webp',
                            name: '小米10 Pro'
                        },
                        {
                            id: 30,
                            img: '/imgs/menu/item-box-1.webp',
                            name: '小米10 Pro'
                        },
                        {
                            id: 30,
                            img: '/imgs/menu/item-box-1.webp',
                            name: '小米10 Pro'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/menu/item-box-1.webp',
                            name: '小米10 Pro'
                        },
                        {
                            id: 30,
                            img: '/imgs/menu/item-box-1.webp',
                            name: '小米10 Pro'
                        },
                        {
                            id: 30,
                            img: '/imgs/menu/item-box-1.webp',
                            name: '小米10 Pro'
                        },
                        {
                            id: 30,
                            img: '/imgs/menu/item-box-1.webp',
                            name: '小米10 Pro'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/menu/item-box-1.webp',
                            name: '小米10 Pro'
                        },
                        {
                            id: 30,
                            img: '/imgs/menu/item-box-1.webp',
                            name: '小米10 Pro'
                        },
                        {
                            id: 30,
                            img: '/imgs/menu/item-box-1.webp',
                            name: '小米10 Pro'
                        },
                        {
                            id: 30,
                            img: '/imgs/menu/item-box-1.webp',
                            name: '小米10 Pro'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/menu/item-box-1.webp',
                            name: '小米10 Pro'
                        },
                        {
                            id: 30,
                            img: '/imgs/menu/item-box-1.webp',
                            name: '小米10 Pro'
                        },
                        {
                            id: 30,
                            img: '/imgs/menu/item-box-1.webp',
                            name: '小米10 Pro'
                        },
                        {
                            id: 30,
                            img: '/imgs/menu/item-box-1.webp',
                            name: '小米10 Pro'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/menu/item-box-1.webp',
                            name: '小米10 Pro'
                        },
                        {
                            id: 30,
                            img: '/imgs/menu/item-box-1.webp',
                            name: '小米10 Pro'
                        },
                        {
                            id: 30,
                            img: '/imgs/menu/item-box-1.webp',
                            name: '小米10 Pro'
                        },
                        {
                            id: 30,
                            img: '/imgs/menu/item-box-1.webp',
                            name: '小米10 Pro'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/menu/item-box-1.webp',
                            name: '小米10 Pro'
                        },
                        {
                            id: 30,
                            img: '/imgs/menu/item-box-1.webp',
                            name: '小米10 Pro'
                        },
                        {
                            id: 30,
                            img: '/imgs/menu/item-box-1.webp',
                            name: '小米10 Pro'
                        },
                        {
                            id: 30,
                            img: '/imgs/menu/item-box-1.webp',
                            name: '小米10 Pro'
                        }
                    ]
                ],
                tvMenuList: [
                    [0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]
                ],
                redMiBookList: [
                    [0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]
                ],
                adsList: [
                    {
                        id: 33,
                        img: '/imgs/ads/ads-1.jpg'
                    },
                    {
                        id: 48,
                        img: '/imgs/ads/ads-2.jpg'
                    },
                    {
                        id: 45,
                        img: '/imgs/ads/ads-3.jpg'
                    }
                ],
                phoneList: []
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.axios.get('/products-phone')
                    .then((res) => {
                        this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)];
                    })
            }
        }
    }
</script>

<style lang="scss">
    @import './../assets/scss/config.scss';
    @import './../assets/scss/mixin.scss';
    .index {
        .swiper-box {
            position: relative;
            .nav-menu {
                width: 234px;
                height: 451px;
                position: absolute;
                left: 0;
                top: 0;
                z-index: 10;
                .menu-wrapper {
                    padding: 20px 0;
                    height: 451px;
                    display: flex;
                    justify-content: space-between;
                    align-items: left;
                    flex-direction: column;
                    background-color: rgba(105, 101, 101, .6);
                    .menu-item {
                        height: 41.1px;
                        a {
                            color: #fff;
                            display: inline-block;
                            width: 100%;
                            height: 100%;
                            line-height: 41.1px;
                            padding-left: 30px;
                            font-size: 14px;
                            padding-right: 30px;
                            i {
                                width: 16px;
                                height: 16px;
                                font-size: 12px;
                                float: right;
                            }
                        }
                        &:hover {
                            background-color: $colorA;
                            .children {
                                display: block;
                            }
                        }
                        .children {
                            display: none;
                            width: 992px;
                            height: 451px;
                            background-color: #fff;
                            top: 0;
                            left: 234px;
                            position: absolute;
                            border: 1px solid $colorH;
                            box-shadow: 0 8px 16px rgba(0, 0, 0, .18);
                            ul {
                                display: flex;
                                justify-content: space-between;
                                height: 75.1px;
                                li {
                                    height: 75.1px;
                                    line-height: 75.1px;
                                    flex: 1;
                                    padding-left: 23px;
                                    a {
                                        // height: 41px;
                                        // display: inline-block;
                                        padding: 20px 0;
                                        height: 74px;
                                        // background-color: red;
                                        img {
                                            vertical-align: middle;
                                        }
                                        span {
                                            color: $colorB;
                                            padding-left: 10px;
                                            font-size: 14px;
                                        }
                                        &:hover {
                                            span {
                                                color: $colorA;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    
                }
            }
            .swiper-container {
                height: 451px;
                .swiper-button-prev {
                    left: 248px;
                }
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .ads-box {
            @include flex();
            margin-top: 14px;
            margin-bottom: 31px;
            a {
                width: 400px;
            }
        }
        .banner {
            margin-bottom: 50px;
        }
        .product-box {
            padding: 30px 0 50px;
            h2 {
                font-size: $fontF;
                height: 21px;
                line-height: 21px;
                color: $colorB;
            }
            .wrapper {
                display: flex;
                .banner-left {
                    margin-right: 16px;
                    img {
                        width: 224px;
                        height: 619px;
                    }
                }
                .list-box {
                    .list {
                        display: flex;
                        @include flex();
                        width: 985px; 
                        &:first-child {
                            margin-bottom: 14px;
                        }
                        .item {
                            width: 236px;
                            height: 302px;
                            background-color: $colorG;
                            a {
                                text-align: center;
                                display: flex;
                                justify-content: center;
                                flex-direction: column;
                                align-items: center;
                                width: 100%;
                                height: 100%;
                                transition: all .2s linear;
                                .item-img {
                                    height: 160px;
                                    width: 160px;
                                    img {
                                        height: 160px;
                                        width: 160px;
                                    }
                                }
                                .item-info {
                                    h3 {
                                        color: $colorB;
                                        font-weight: 400;
                                        margin: 0 10px 2px;
                                        height: 21px;
                                    }
                                    p {
                                        margin: 0 10px 10px;
                                        height: 18px;
                                        color: #b0b0b0;
                                        font-size: 12px;
                                    }
                                    span {
                                        margin: 0 10px 14px;
                                        color: $colorA;
                                    }
                                }
                                &:hover {
                                    box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
                                    transform: translate3d(0, -2px, 0);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
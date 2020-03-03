<template>
    <div class="service">
        <div class="container">
            <ul>
                <li>
                    <a href="javascript:;">
                        <i class="iconfont">&#xe629;</i>预约维修服务
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <i class="iconfont">&#xe60e;</i>7天无理由退货
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <i class="iconfont">&#xe606;</i>15天免费换货
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <i class="iconfont">&#xe646;</i>满99元包邮
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <i class="iconfont">&#xe61a;</i>520余家售后网点
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'service-bar'
    }
</script>

<style lang="scss">
    @import './../assets/scss/config.scss';
    .service {
        padding: 33px 0;
        color: $colorC;
        font-size: 16px;
        border-top: 1px solid $colorE;
        background-color: #fff;
        li {
            display: inline-block;
            width:19.9%;
            text-align: center;
            border-right: 1px solid #e5e5e5;
            a {
                color: #616161;
                i {
                    display: inline-block;
                    margin-right: 8px;
                    // padding-top: 4px;
                    line-height: 20px;
                    font-size: 20px;
                }
            }
            &:last-child {
                border-right: none;
            }
        }
    }
</style>
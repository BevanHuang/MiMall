<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      res: {}
    }
  },
  mounted() {
    // 本地加载请求静态json文件的形式
    // this.axios.get('/mock/user/login.json').then((res) => {
    //   this.res = res;
    // });
    
    // 通过easy-mock平台实现数据mock
    // this.axios.get('/user/login').then((res) => {
    //   this.res = res;
    // });

    // 本地继承mockjs(插件)实现数据mock
    this.axios.get('/user/login').then((res) => {
      this.res = res;
      console.log(this.res);
    });
  }
}
</script>

<style>
@import './assets/scss/index.css';
@import './assets/scss/reset.scss';
body {
  background-color: #fafafa;
}
</style>
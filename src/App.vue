<template>
  <div class="hello">
    <mt-header fixed :title="title"></mt-header>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
    <div class="footer_placeholder"></div>
    <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="index">
        <img slot="icon" src="./assets/index.png"> 首頁
      </mt-tab-item>
      <mt-tab-item id="list">
        <img slot="icon" src="./assets/list.png"> 列表
      </mt-tab-item>
      <mt-tab-item id="classify">
        <img slot="icon" src="./assets/classify.png"> 分类
      </mt-tab-item>
      <mt-tab-item id="my">
        <img slot="icon" src="./assets/my.png"> 我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui';

export default {
  name: 'hello',
  components :{
    'mt-tabbar': Tabbar,
    'mt-tab-item': TabItem
  },
  data () {
    return {
      title: '首页',
      selected: 'index'
    }
  },
  watch: {
    selected: function(n, o){
      this.$router.push('/' + n);
      switch (n){
        case 'index':
        this.$data.title = '首页';
        break;
        case 'list':
        this.$data.title = '列表';
        break;
        case 'classify':
        this.$data.title = '分类';
        break;
        case 'my':
        this.$data.title = '我的';
        break;
      }
      return n;
    }
  }
}
</script>
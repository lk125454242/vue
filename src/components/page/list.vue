<template>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
            <li v-for="item in list">
                <mt-cell-swipe :title="item.name" :right="[
                        {
                        content: '删除',
                        style: { background: 'red', color: '#fff' },
                        handler: () => messageBox('确定删除','删除')
                        }
                    ]">
                </mt-cell-swipe>
            </li>
        </ul>
    </mt-loadmore>
</template>
<script>
import { CellSwipe,Loadmore,MessageBox,Indicator } from 'mint-ui';
import { mapState } from 'vuex';
import _ from 'lodash';
import store from '../../store';
export default {
    store,
    components: {
        'mt-loadmore': Loadmore,
        "mt-cell-swipe": CellSwipe
    },
    // created: function(){},
    methods: {
        messageBox: function($event,msg,title){
            MessageBox.confirm(msg, title).then( action => {
                if(action){
                    //TODO
                }
            })
        },
        loadTop(id) {
            this.$refs.loadmore.onTopLoaded(id);
        },
        loadBottom(id) {
            this.allLoaded = true;// if all data are loaded
            this.$refs.loadmore.onBottomLoaded(id);
        },
        loadMore() {
            Indicator.open();
            this.get_list();
        },
        get_list: _.throttle(function(){
                console.log('加载更多');
                this.$store.dispatch('GET_LIST',this.$http);//激活action
                var timer = setTimeout(function(){
                    Indicator.close();
                    clearTimeout(timer);
                },1000)
        },1000,{leading:true})
    },
    computed: mapState({
        list: state => state.list.data
    }),
    data(){
        return {
            allLoaded: false
        }
    }
}
</script>

<style scoped>
    ul{
        margin: 0;
        padding: 0;
    }
    li{
        list-style-type: none;
    }
</style>

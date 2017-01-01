<template>
    <mt-header fixed :title="title">
        <router-link to="/index" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
    </mt-header>
</template>

<script>
import { Header } from 'mint-ui';
export default {
    props: ['title'],
    data(){
        return {
            
        }
    },
    components:{
        'mt-header': Header
    }
}
</script>
<template>
    <div>
        <header_fixed title="注册"></header_fixed>
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username" :state="validated[0]? 'success' : 'error'"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" :state="validated[1]? 'success' : 'error'"></mt-field>
        <mt-field label="密码" placeholder="请再次输入密码" type="password" v-model="password_r" :state="validated[2]? 'success' : 'error'"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone" :state="validated[3]? 'success' : 'error'"></mt-field>
        <mt-button size="large" type="primary" :disabled="!(validated[0] && validated[1] && validated[2] && validated[3])" @click.native="login">注册</mt-button>
    </div>
</template>
<script>
// <mt-field label="网站" placeholder="请输入网址" type="url" v-model="url"></mt-field>
    import header_fixed from '../header/fixed.vue';
    import { username, password, phone } from '../../tool/form_validate';
    import { Field,Button } from 'mint-ui';
    import store from '../../store';
    export default {
        store,
        data(){
            return {
                username: '',
                password: '',
                password_r: '',
                phone: '',
                validated: []
            }
        },
        methods: {
            login:function(){
                var data = this.$data;
                this.$http.post('/api/users/create?123',data,{emulateJSON: true}).then(function name(response) {
                    commit('GET_LIST',response.body.result.list);
                });
            }
        },
        watch:{
            username: function(n, o){
                this.validated[0] = username(n);
                return n;
            },
            password: function(n, o){
                this.validated[1] = password(n);
                return n;
            },
            password_r: function(n, o){
                this.validated[2] = password(n);
                return n;
            },
            phone: function(n, o){
                this.validated[3] = phone(n);
                return n;
            }
        },
        computed:{
        },
        components:{
            header_fixed: header_fixed,
            'mt-field': Field
        }
    }
</script>
<style scoped>
    button {
        position: fixed;
        bottom: 50px;
        left: 5%;
        width: 90%;
    }
</style>
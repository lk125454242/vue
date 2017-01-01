<template>
	<div>
        <header_fixed title="注册"></header_fixed>
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-field label="密码" placeholder="请再次输入密码" type="password" v-model="password_r"></mt-field>
        <mt-field label="姓名" placeholder="请输入姓名" v-model="name"></mt-field>
        <mt-field label="昵称" placeholder="请输入昵称" v-model="name"></mt-field>

        <file-upload 
            post-action="/post.method" 
            multiple="false"
        ></file-upload>

        <mt-field label="QQ" placeholder="请输入您的QQ" type="number" v-model="QQ"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
        <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
        <mt-field label="城市" placeholder="请输入您所在的城市" v-model="city"></mt-field>
        <mt-field label="生日" placeholder="请输入生日" type="date" v-model="brithday"></mt-field>
        <mt-field label="自我介绍" placeholder="" type="textarea" rows="4" v-model="info"></mt-field>
    </div>
</template>
<script>
// <mt-field label="网站" placeholder="请输入网址" type="url" v-model="url"></mt-field>
    import header_fixed from '../header/fixed.vue';
    import { Field } from 'mint-ui';
    import FileUpload from 'vue-upload-component'
    import store from '../../store';
    export default {
        store,
        data(){
            return {
                username: '',
                password: '',
                password_r: '',
                name: '',
                email: '',
                city: '',
                phone: '',
                url: '',
                QQ: '',
                brithday: '2015-01-01',
                info: '',
                picture: ''
            }
        },
        methods:{
            file_change: function(){
                console.log(arguments);
            }
        },
        watch:{
            username: function(n, o){
                console.log(this.email)
                return n;
            }
        },
        computed:{

        },
        components:{
            header_fixed: header_fixed,
            'mt-field': Field,
            FileUpload
        }
    }
</script>
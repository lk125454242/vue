<template>
	<div>
        {{title}}
        <input v-model="title" placeholder="edit me">
        
    我的
    <router-view></router-view>
  </div>
</template>
<script>
    export default {
        data(){
            return {
                title: '456'
            }
        }
    }
</script>

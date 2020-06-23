<template>
    <div>
        <div>11标1122题99</div>
        <button @click="consway">按11钮</button>
        <p>{{message}}</p>
        <cpm></cpm>
    </div>
</template>
<script>
import cpm from './cpm.vue'
//最后将vue写成这种模块化 webpack需要下载两个组件才能编辑打包加载vue结尾的文件 写成cnpm install vue-loader vue-template-compiler --save-dev
//注意 vue-loader必须下载14及以上的版本
export default{
    name:'App',
    components:{
        cpm
    },
    data(){
        return {
            message:'hello webpack'
        }
    },
    methods:{
        consway(){
            console.log(1155223)
        }
    }
}
</script>
<style scoped>
.aa{
    color:green;
}
</style>
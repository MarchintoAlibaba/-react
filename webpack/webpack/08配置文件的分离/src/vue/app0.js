export default {
    template:`
    <div>
        <div>标题</div>
        <button @click="consway">按钮</button>
        <p>{{message}}</p>
    </div>
    `,
    data(){
        return {
            message:'hello webpack'
        }
    },
    methods:{
        consway(){
            console.log(111)
        }
    }
}
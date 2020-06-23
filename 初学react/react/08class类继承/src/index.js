import React from 'react' //导入react创建组件 虚拟dom元素 生命周期
import ReactDom from 'react-dom' //导入react-dom 吧创建好的组件和虚拟dom渲染到页面上
//导入一个组件
import Hello from '@/components/Hello' 
import '@/components/class'
const dog = {
    name:'大黄',
    age:'3',
    sex:'mail'
}

ReactDom.render(<div>
    {/* 在这里引用组件 并传递一个数据 */}
    <Hello name={dog.name} age={dog.age} sex={dog.sex}></Hello>
</div>,document.getElementById('app'))
import React from 'react' //导入react创建组件 虚拟dom元素 生命周期
import ReactDom from 'react-dom' //导入react-dom 吧创建好的组件和虚拟dom渲染到页面上
//创建一个组件
function Holle(props){
    //这是一个组件 props是组件的形参 接受数据 此数据在子组件里面是只读的
    console.log(props)
    return <div>111--{props.name}--{props.age}--{props.sex}-</div>;
}
const dog = {
    name:'大黄',
    age:'3',
    sex:'mail'
}

ReactDom.render(<div>
    {/* 在这里引用组件 并传递一个数据 */}
    <Holle name={dog.name} age={dog.age} sex={dog.sex}></Holle>
</div>,document.getElementById('app'))
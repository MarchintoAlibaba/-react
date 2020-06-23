import React from 'react';//导入react
//组件名必须首字母大写
export default function Hello(props){
    //这是一个组件 props是组件的形参 接受数据 此数据在子组件里面是只读的
    console.log(props)
    return <div>22288--{props.name}--{props.age}--{props.sex}-</div>;
}
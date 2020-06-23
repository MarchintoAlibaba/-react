import React from 'react';
//利用构造函数创建无状态组件
//在jsx中写样式也可以改变成这样
import style from '@/components/style';
import styleCss from '@/css/style.css';
export default function Comments2(props){
    // 在jsx中写行内样式要这样
return <div style={{color:'red'}}><div style={style.title}>评论人：{props.name}</div>
    <div className={styleCss.title}>评论语：{props.msg}</div>
</div>
}
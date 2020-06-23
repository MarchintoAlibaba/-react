import React from 'react';
import ReactDom from 'react-dom';

import App from './app';
import store from './redux/store';


function render(){
    ReactDom.render(<App store={store}></App>,document.getElementById('root'));
}
render()//初始化渲染 
store.subscribe(render);//订阅监听（store中的状态改变了，就会自动调用进行重绘）
import {counter} from './reducers';//引入一个方法名
import {createStore} from 'redux';//需要先下载插件 npm install redux --save 注意：redux不是react的插件 他是独立的一个集中式的数据管理库
//生成一个store对象
const store = createStore(counter);//内部会第一次调用reducers函数 得到初始state值为0
export default store;
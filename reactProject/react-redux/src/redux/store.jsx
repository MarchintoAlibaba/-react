//1.导入createStore
import {createStore} from 'redux';
//2.导入我们自己的reducer
import {loveReducer} from './reducer';
//3.通过create创建
export default createStore(loveReducer);
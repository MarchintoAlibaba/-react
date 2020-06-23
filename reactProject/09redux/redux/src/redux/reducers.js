//这里面写一个数据的增删改查函数
import {INCREMENT,DECREMENT} from './action-types'
export function counter(state = 0,action){
    switch(action.type){//这里写一个增加 一个减少的函数名
        case INCREMENT:
            return state + action.data;
        case DECREMENT:
            return state - action.data;
        default:
            return state;
    }
}
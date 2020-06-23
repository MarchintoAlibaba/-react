import {INCREMENT,DECREMENT} from './action-types';
//包含所有的action构造
export const increment = (number) => {return ({type:INCREMENT,data:number})}
export const decrement = (number) => {return ({type:DECREMENT,data:number})}
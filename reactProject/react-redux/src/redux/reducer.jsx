const initState = {//将初始状态设置为false
    status : 0,
    changeData:100
};
exports.loveReducer = (state=initState,action) => {
    console.log(state.status)
    switch(action.type){
        case "send_love":
            return {
                status:state.status + 1     
            }
        case "stop_love":
            return {
                status:state.status - 1
            }
        default:
            return state;
    }
}

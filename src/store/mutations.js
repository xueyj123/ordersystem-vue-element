import isExist from '../utils/isExist'
export default {
    // orderList
    orderAdd(state, info) {
        const obj = isExist(info.id, state.orderList);
        if (!obj.isExist) {
            info.count = 1;
            state.orderList.push(info);
        } else {
            state.orderList[obj.index].count++;
        }
    },
    orderDel(state, info) {
        let index = state.orderList.indexOf(info);
        state.orderList.splice(index, 1);
    },
    orderIncrement(state, info) {
        let index = state.orderList.indexOf(info);
        state.orderList[index].count++;
    },
    orderDecrement(state, info) {
        let index = state.orderList.indexOf(info);
        state.orderList[index].count--;
        if (state.orderList[index].count === 0) {
            state.orderList.splice(index, 1);
        }
    },

    // isLogin
    setLogin(state) {
        state.isLogin = true;
    }
}
import * as Types from '../action-types/userInfo';
//actionCreator是一个函数
export function update(data) { //update修改的动作
    return{
        type:Types.UPDATE_CITY,
        data
    }
}

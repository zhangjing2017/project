import {createStore} from 'redux';
import reducers from '../reducers';
export function configuerStore(initState) {//配置store
    return createStore(reducers,initState,window.devToolsExtension?window.devToolsExtension():undefined)
}
//redux-tools 插件  查看当前reducer的状态

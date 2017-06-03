import React from 'react';
import {render} from 'react-dom';
//App负责选择哪一个页面
import App from './containers/index';
import './assets/index.less';
import {Provider} from 'react-redux';
//导入store
import {configuerStore} from './store';
let store=configuerStore();//生成store,可以在configuerStore里面传入初始状态
render(
    <Provider store={store}>
    <App/>
    </Provider>,
    document.querySelector('#root')
)

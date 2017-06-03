import React,{Component} from 'react';
import './index.less';
export default class LoginComponent extends Component{
    constructor(){
        super();
        this.state={
            val:''
        }
    }
    render(){
        return (
            <div className="login-component">
                {/*ref 非受控组件    受控onChange+state*/}
                <input type="text" value={this.state.val} onChange={this.changeValue.bind(this)} placeholder="请输入用户名"/>
                <button className="back" onClick={this.login.bind(this)}>登录</button>
            </div>
        )
    }
    login(){
        //调用登录方法
       this.props.login(this.state.val);
    }
    changeValue(e){
        this.setState({
            val:e.target.value
        })
    }
}

import React,{Component} from 'react';
//postComment 提交评论
import {getOrderList,postComment} from '../../../fetch/orderList';
import OrderListComponent from "../../../components/OrderListComponent/index";
export default class OrderList extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    render(){
        return (
            <div>
                {this.state.data.length?<OrderListComponent data={this.state.data} commitComment={this.commitComment.bind(this)}/>:<div>正在加载</div>}
            </div>
        )
    }
    //提交评价内容到后台
    commitComment(id,comment,callback){   //内容，商户id，callback 更改评价状态的
      console.log(id,comment);

        postComment({id,comment}).then(res=>res.json()).then(data=>{
            callback();//修改状态
        });
    }
    componentDidMount(){
        getOrderList(this.props.username).then(res=>res.json()).then(data=>{  //拿到数据后，规定数据的格式json在把数据的状态改了，res是从fetch里面拿到的

            this.setState({
                data
            })
        });
    }
}


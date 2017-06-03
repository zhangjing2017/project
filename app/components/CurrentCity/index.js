import React,{Component} from 'react';
import './index.less';
export default class Home extends Component{
    render(){
        return (
            <div className="current-city">
                {this.props.cityName}
                <hr/>
            </div>
        )
    }
}


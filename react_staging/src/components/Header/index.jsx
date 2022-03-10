import React, {Component} from "react";

import './index.css';

export default class Header extends Component{
    render(){
        return(
            <div className="header_warpper">
                <input className="search_input" type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
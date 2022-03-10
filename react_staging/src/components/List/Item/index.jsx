import React, {Component} from "react";

import './index.css';

export default class Item extends Component{
    
    render() {
        const {name, done} = this.props;
        return(
            <>
                <div className="item">
                    <input type="checkbox" defaultChecked={done} />
                    <span>{name}</span>
                    <button className="delete_btn">删除</button>
                </div>
            </> 
        )
    }
}
import React, {Component} from "react";

import Item from './Item';

import './index.css';

export default class List extends Component{
    state = {
        todoList: [
            {id: 1, name: '吃饭', done: true},
            {id: 2, name: '睡觉', done: false},
            {id: 3, name: '敲代码', done: true},
        ]
    }
    render(){
        const {todoList} = this.state
        return(
            <div className="list_wrapper">
                <div className="item_wrapper">
                    {todoList.map(item => {
                        return(
                            <Item key={item.id} {...item}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}
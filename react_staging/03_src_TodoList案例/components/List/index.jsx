import React, {Component} from "react";
import PropTypes from 'prop-types';

import Item from './Item';

import './index.css';

export default class List extends Component{
    // 对接收的props进行：类型、必要性的限制
    static propTypes = {
        updateTodo: PropTypes.func.isRequired,
        todos: PropTypes.array.isRequired,
    }

    render(){
        const { todos, updateTodo, deleteTodo } = this.props;
        return(
            <div className="list_wrapper">
                <div className="item_wrapper">
                    {todos.map(item => {
                        return(
                            <Item updateTodo={updateTodo} deleteTodo={deleteTodo} key={item.id} {...item}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}
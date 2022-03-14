import React, {Component} from "react";
import PropTypes from "prop-types";

import './index.css';

export default class Item extends Component{
     // 对接收的props进行：类型、必要性的限制
    static propTypes = {
        updateTodo: PropTypes.func.isRequired
    }
    state = {
        mouse: false // 标识鼠标移入、移出的状态
    }

    // 鼠标移入、移出的回调
    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    }

    // 勾选、取消勾选某一个todo的回调
    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }
    }

    // 删除一个todo的回调
    handleDelete = (id) => {
        if (window.confirm('确定删除吗？')) {
            this.props.deleteTodo(id);
        }
    }
    
    render() {
        const {id, name, done} = this.props;
        const {mouse} = this.state;
        return(
            <>
                <div
                  style={{backgroundColor: mouse ? '#ddd' : ''}}
                  onMouseEnter={this.handleMouse(true)}
                  onMouseLeave={this.handleMouse(false)}
                  className="item"
                >
                    <input onChange={this.handleCheck(id)} type="checkbox" checked={done} />
                    <span>{name}</span>
                    <button onClick={() => this.handleDelete(id)} style={{display: mouse ? 'inline' : 'none'}} className="delete_btn">删除</button>
                </div>
            </> 
        )
    }
}
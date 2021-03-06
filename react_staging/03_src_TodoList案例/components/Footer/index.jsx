import React, {Component} from 'react';

import './index.css';

export default class Footer extends Component{
    handleCheckAll = (event)=> {
        this.props.checkAllTodo(event.target.checked)
    }

    handleClearAllDone = ()=> {
        this.props.clearAllDone()
    }

    render(){
        const {todos} = this.props;
        //已完成的个数
        const doneCount = todos.reduce((pre,todo) => pre + (todo.done ? 1 : 0), 0);
        //总数
        const total = todos.length;
        return(
            <div className='footer_wrapper'>
                <input onChange={this.handleCheckAll} type="checkbox" checked={doneCount === total && total !== 0 ? true : false} />
                <span>已完成{doneCount}</span>/<span>全部{total}</span>
                <button onClick={this.handleClearAllDone} className='deleteAllBtn'>清除已完成任务</button>
            </div>
        )
    }
}
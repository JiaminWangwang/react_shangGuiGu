import React, { Component } from 'react'

export default class Count extends Component {
    state={
        count: 0
    }

    add = ()=> {
        // 对象式setState
        // const {count} = this.state
        // this.setState({count: count + 1}, ()=>{
        //     console.log(this.state.count)
        // })

        // 函数式setState
        this.setState((state, props) => {
            return {count: state.count + 1}
        }, ()=> {
            console.log(this.state.count)
        })
    }

    render() {
        return (
        <div>
            <h2>当前求和为：{this.state.count}</h2>
            <button onClick={this.add}>点我+1</button>
        </div>
        )
    }
}

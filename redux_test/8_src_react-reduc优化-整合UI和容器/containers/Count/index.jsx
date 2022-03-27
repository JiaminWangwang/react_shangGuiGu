import React, { Component } from 'react'
// 引入action
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'

// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

class Count extends Component {

    increment = ()=> {
      const {value} = this.selectNumber
      this.props.jia(value*1)
    }
    decrement = ()=> {
      const {value} = this.selectNumber
      this.props.jian(value*1)
    }
    incrementIfOdd = ()=> {
      const {value} = this.selectNumber
      if (this.props.count % 2 !== 0) {
        this.props.jia(value*1)
      }
    }
    incrementAsync = ()=> {
      const {value} = this.selectNumber
      this.props.jiaAsync(value*1,500)
    }
    render() {
      console.log(this.props)
      return (
        <div>
            <h1>求和：{this.props.count}</h1>
            <select ref={c => this.selectNumber = c} >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>&nbsp;
            <button onClick={this.increment}>+</button>&nbsp;
            <button onClick={this.decrement}>-</button>&nbsp;
            <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
            <button onClick={this.incrementAsync}>异步加</button>
        </div>
      )
    }
  }
  

const mapStateToProps = state => ({count: state})

// mapDispatchToProps简写
const mapDispatchToProps = {
    jia:createIncrementAction,
    jian:createDecrementAction,
    jiaAsync:createIncrementAsyncAction
}

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps,mapDispatchToProps)(Count)
import React, { Component } from 'react'

import './index.css'

export default class Parent extends Component {
  render() {
    return (
      <div className='parent'>
          <h3>我是Parent组件</h3>
          <A render={(name)=><B name={name} />} />
      </div>
    )
  }
}

class A extends Component {
    state={
        name:'A-Tom'
    }
    render() {
        console.log(this.props)
        const {name} = this.state
      return (
        <div className='a'>
            <h3>我是A组件</h3>
            {this.props.render(name)}
        </div>
      )
    }
}

class B extends Component {
    render() {
      return (
        <div className='b'>
            <h3>我是B组件</h3>
            <h4>我接收A组件的名字：{this.props.name}</h4>
        </div>
      )
    }
}

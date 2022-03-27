import React, { Component } from 'react'

export default class Child extends Component {
    state={
        // students:[
        //     {id: '001', name: '王', age: 18},
        //     {id: '002', name: '孙', age: 19},
        //     {id: '003', name: '李', age: 20},
        // ]
        students:'123'
    }
  render() {
    return (
      <div>
          <h2>我是子组件</h2>
          <ul>
              {this.state.students.map(obj=>{
                  return (
                    <li key={obj.id}>
                        {obj.name}----{obj.age}
                    </li>
                  )
              })}
          </ul>
      </div>
    )
  }
}

import React, { Component } from 'react'

import './index.css'

const AContext = React.createContext()
const {Provider, Consumer} = AContext

export default class A extends Component {
    state={
        name: 'Tom',
        age: 19
    }
  render() {
      const {name} = this.state
    return (
      <div className='parrent'>
          <h2>A组件</h2>
          <div>我的名字是：{name}</div>
          <Provider value={this.state}>
            <B/>
          </Provider>
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className='children'>
          <h2>B组件</h2>
          <C/>
      </div>
    )
  }
}

// class C extends Component {
//     static contextType = AContext
//     render() {
//         console.log(this.context)
//         const {name, age} = this.context
//       return (
//         <div className='grand'>
//             <h2>C组件</h2>
//             <h4>我从A组件接收到的用户名：
//                 {name}, 年龄是：{age}
//             </h4>
//         </div>
//       )
//     }
// }

function C() {
    return (
      <div className='grand'>
          <h2>C组件</h2>
          <h4>我从A组件接收到的用户名：
              <Consumer>
                  {
                      value => {
                          return (
                            `${value.name}, 年龄是：${value.age}`
                          )
                      }
                  }
              </Consumer>
          </h4>
      </div>
    )
}

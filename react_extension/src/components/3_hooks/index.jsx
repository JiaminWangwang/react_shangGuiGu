import React from 'react'
import ReactDOM from 'react-dom'

// class Demo extends React.Component {
//     state={
//         count:0
//     }
//     add = ()=> {
//         this.setState(state=>({count: state.count+1}))
//     }
//     render() {
//         return (
//         <div>
//             <h2>当前求和为：{this.state.count}</h2>
//             <button onClick={this.add}>点我+1</button>
//         </div>
//         )
//     }
// }

function Demo() {
    const [count, setCount] = React.useState(0)
    const myRef = React.useRef()

    React.useEffect(()=>{
        let timer = setInterval(()=>{
            setCount(count => count+1)
        }, 1000)
        return ()=>{
            clearInterval(timer)
        }
    }, [])

    function add() {
        // setCount(count+1) // 第一种写法
        setCount(count => count + 1) // 第二种写法
    }

    // 卸载组件
    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    // 提示输入的回调
    function show() {
        alert(myRef.current.value)
    }

    return (
        <div>
            <h2>当前求和为:{count}</h2>
            <input type="text" ref={myRef} />
            <button onClick={add}>点我+1</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>提示输入</button>
        </div>
    )
}

export default Demo
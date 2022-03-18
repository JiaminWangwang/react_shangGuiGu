import React from "react";

import axios from "axios";

export default class App extends React.Component{
    getStudentsData = ()=> {
        axios.get('http://localhost:3000/users/students').then((res)=> {
            console.log('请求成功', res.data);
            return res.data;
        }, err => {console.log(err)})
    }
    
    render() {
        return(
            <div>
                <button onClick={this.getStudentsData}>点我获取学生数据</button>
            </div>
        )
    }
}
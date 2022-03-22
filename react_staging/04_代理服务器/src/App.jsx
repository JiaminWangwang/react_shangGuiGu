import React from "react";

import axios from "axios";

export default class App extends React.Component{
    getStudentsData = ()=> {
        axios.get('http://localhost:3000/api1/students').then((res)=> {
            console.log('请求成功', res.data);
            return res.data;
        }, err => {console.log(err)})
    }

    getCarsData = ()=> {
        axios.get('http://localhost:3000/api2/cars').then((res)=> {
            console.log('请求成功', res.data);
            return res.data;
        }, err => {console.log(err)})
    }
    
    render() {
        return(
            <div>
                <button onClick={this.getStudentsData}>点我获取学生数据</button>
                <button onClick={this.getCarsData}>点我获取汽车数据</button>
            </div>
        )
    }
}
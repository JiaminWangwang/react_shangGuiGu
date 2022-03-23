import React, { Component } from 'react'

import PubSub from 'pubsub-js'

// import axios from 'axios'

export default class Search extends Component {
    search = async()=> {
        // 获取用户输入
        const {keyWordElement: {value: keyWord}} = this;

        PubSub.publish('atguigu', {isFirst: false, isLoading: true})
        // this.props.updateAllState({isFirst: false, isLoading: true})

        //#region 
            /* // 使用axios发送网络请求
            axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(res => {
            const datas = res.data.items;
            PubSub.publish('atguigu', {isLoading: false, list: datas})
            // this.props.updateAllState({isLoading: false, list: datas})
        }).catch(err => {
            PubSub.publish('atguigu', {isLoading: false, errMessage: err.message})
            // this.props.updateAllState({isLoading: false, errMessage: err.message})
        }) */
        //#endregion

        // 使用fetch发送网络请求( 未优化 )
        /*fetch(`http://localhost:3000/api1/search/users2?q=${keyWord}`).then(
            response => {
                console.log('联系服务器成功了')
                return response.json()
            },
            // error => {
            //     console.log('联系服务器失败了', error)
            //     return new Promise(()=>{})
            // }
        ).then(
            response => {
                console.log('获取数据成功了', response)
            },
            // error => {
            //     console.log('获取数据失败了', error)
            // }
        ).catch(error => {console.log(error)})*/

        // 使用fetch发送网络请求( 优化 )
        try {
            const response = await fetch(`http://localhost:3000/api1/search/users2?q=${keyWord}`);
            const data = await response.json();
            console.log(data)
            PubSub.publish('atguigu', {isLoading: false, list: data.items})
        } catch (error) {
            console.log(error)
            PubSub.publish('atguigu', {isLoading: false, errMessage: error.errMessage})
        }

    }

    render() {
        return (
        <section className='jumbotron'>
            <h3 className='jumbotron-heading'>Search Github Users</h3>
            <div>
            <input ref={c => this.keyWordElement = c} type="text" placeholder='enter the name you search' />&nbsp;
            <button onClick={this.search}>搜索</button>
            </div>
        </section>
        )
    }
}

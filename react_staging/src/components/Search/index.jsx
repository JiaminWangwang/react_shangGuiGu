import React, { Component } from 'react'

import axios from 'axios'

export default class Search extends Component {
    search = ()=> {
        // 获取用户输入
        const {keyWordElement: {value: keyWord}} = this;

        this.props.updateAllState({isFirst: false, isLoading: true, list: [], errMessage: ''})

        axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(res => {
            
            console.log(res)
            const datas = res.data.items;
            this.props.updateAllState({isFirst: false, isLoading: false, list: datas, errMessage: ''})
        }).catch(err => {
            this.props.updateAllState({isFirst: false, isLoading: false, list: [], errMessage: err.message})
        })
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

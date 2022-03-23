import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import './index.css'

export default class List extends Component {
    state = {
        isFirst: true,
        isLoading: false,
        list: [],
        errMessage: ''
    }

    componentDidMount() {
        this.token = PubSub.subscribe('atguigu', (_, data)=> {
            console.log(data)
            this.setState(data)
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {isFirst, isLoading, list, errMessage} = this.state;
        return (
            <div className='row'>
                {
                    isFirst ? <h2>请输入搜索词条</h2> :
                    isLoading ? <h2>Loading......</h2> :
                    errMessage ? <h2>{errMessage}</h2> :
                    list.map(itemObj => {
                        return (
                            <div key={itemObj.id} className='card'>
                                <a href={itemObj.url} rel="noreferrer" target="_blank">
                                  <img src={itemObj.avatar_url} alt="" style={{width: '100px'}} />
                                </a>
                                <p className='card-text'>reactjs</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

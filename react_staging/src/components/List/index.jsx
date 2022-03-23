import React, { Component } from 'react'

import './index.css'

export default class List extends Component {
  render() {
      const {isFirst, isLoading, list, errMessage} = this.props.state;
    return (
        <div className='row'>
            {
                isFirst ? `请输入搜索词条` :
                isLoading ? `正在加载中...` :
                errMessage ? errMessage :
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

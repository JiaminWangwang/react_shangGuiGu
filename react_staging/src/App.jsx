import React, { Component } from 'react'

import List from './components/List'
import Search from './components/Search'

export default class App extends Component {
  state = {
    isFirst: true,
    isLoading: false,
    list: [],
    errMessage: ''
  }
  updateAllState = (allData)=> {
    console.log('App=========');
    console.log(allData);
    this.setState(allData)
  }

  render() {
    return (
      <div>
        <Search updateAllState={this.updateAllState} />
        <List state={this.state}/>
      </div>
    )
  }
}

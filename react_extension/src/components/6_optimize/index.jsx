import React, { Component } from 'react'

export default class Parent extends Component {
  render() {
    return (
      <div>Parent</div>
    )
  }
}

class Child extends Component {
    render() {
      return (
        <div>Child</div>
      )
    }
  }

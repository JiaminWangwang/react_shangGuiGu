import React, { Component } from 'react'
import {nanoid} from 'nanoid'

import {connect} from 'react-redux'
import {addPersonAction} from '../../redux/actions/person'

class Person extends Component {
    addPerson = ()=> {
        const name = this.nameNode.value
        const age = this.ageNode.value*1
        const id = nanoid()
        const personObj = {id, name, age}
        this.props.addPersonProps(personObj)
    }

    render() {
        return (
        <div>
            <h2>我是Person组件</h2>
            <h4>求和值为：{this.props.count}</h4>
            <input ref={c => this.nameNode = c} type="text" placeholder='请输入姓名' />
            <input ref={c => this.ageNode = c} type="text" placeholder='请输入年龄' />
            <button onClick={this.addPerson}>添加人</button>

            <ul>
                {this.props.persons.map(personObj => {
                    return (
                        <li key={personObj.id}>{personObj.name}----{personObj.age}</li>
                    )
                })}
            </ul>
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    persons: state.personReducer,
    count: state.countReducer
})

const mapDispatchToProps = {
    addPersonProps: addPersonAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Person)

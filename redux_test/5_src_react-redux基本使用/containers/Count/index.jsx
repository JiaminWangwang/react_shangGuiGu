// 引入Count的UI组件
import CountUI from '../../components/Count'

// 引入action
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'

// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

function mapStateToProps(state) {
    return {count: state}
}

function mapDispatchToProps(dispatch) {
    return {
        jia:(number)=>{dispatch(createIncrementAction(number))},
        jian:(number)=>{dispatch(createDecrementAction(number))},
        jiaAsync:(number, time)=>{dispatch(createIncrementAsyncAction(number, time))}
    }
}

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
import { ADD_PERSON } from "../constant";
import { nanoid } from "nanoid";

const initState = [{id: nanoid(), name: '小王', age: 19}]
export default function personReducer (preState = initState, action) {
    const {type, data} = action
    switch (type) {
        case ADD_PERSON:
            // preState.unshift(data) // 此处不可以这样写，会导致preState被改写，personReducer就不是纯函数了
            return (
                [data, ...preState]
            )
        default:
            return preState
    }
}
## 1. 求和案例_redux精简版
1. 去除Count组件自身的状态
2. src下建立：
    - redux
        - store.js
        - count_reducer.js
3. store.js
    - 引入redux中的createStore函数，创建一个store
    - createStore调用时要传入一个为其服务的reducer
    - 记得暴露store对象
4. count_reducer.js
    - reducer的本质是一个函数，接收：preState, action, 返回加工后的状态
    - reducer有两个作用：
        - 初始化状态
        - 加工状态
    - reducer被第一次调用时，时store自动触发的，
        - 传递的preState是undefined，
        - 传递的action是：{type: '@@REDUX/INIT_a.2.b.4'}
5. 在index.js中监测store中的状态的改变，一旦发生改变重新渲染<App/>
    - *注意*：当前案例使用的是局部监听，只监听了count组件，没有全局监听
    - 备注：redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠自己写。

## 2. 求和案例_redux完整版
- 新增文件：
    - count_action.js  专门用于创建action对象
    - constant.js 放置容易写错的type值

## 3. 求和案例_redux异步action版
- action类型为function时为异步action
    - 明确：延迟的动作不想交给组件自身，想交给action
    - 何时需要异步action: 想要对状态进行操作，但是具体的数据靠异步任务返回
    - 具体编码：
        - npm install redux-thunk, 并配置在store中
        - 创建action的函数不再返回一般对象，而是一个函数，该函数中写异步任务。
        - 异步任务有结果后，分发一个同步的action去真正操作数据。
    - 备注：异步action不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步action
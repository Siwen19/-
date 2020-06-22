## 高阶组件
高阶组件就是一个函数，传给它一个组件，它返回一个新的组件
为了组件之间的代码复用
高阶组件内部的包装组件和被包装组件之间通过 props 传递数据


# context 相当于一个全局变量 ！慎用
子组件都可以访问 context 组件里面的内容
打破了组件和组件之间通过 props 传递数据 -> 增强了组件之间的耦合性
context 里面的数据能被随意的修改

## getChildContext 设置 context ---太老了 可弃
一个组件的 context 只有它的子组件能够访问，它的父组件是不能访问到的
你可以理解每个组件的 context 就是瀑布的源头，只能往下流不能往上飞

## childContextTypes
验证 getChildContext 返回的对象
```js
static childContextTypes = {
    themeColor: PropTypes.string
  }
```

## contextTypes
声明和验证你需要获取的状态的类型，必写的
不写就无法获取 context 里面的状态
```js
static contextTypes = {
    themeColor: PropTypes.string
  }
```

## dispatch - 负责数据的修改
```js
function dispatch (action) {
  switch (action.type) {
    case xxx:
      break
    case xxx:
        break
    default:
      break
  }
}
```

## store - createStore 专门生产 state 和 dispatch 的集合
自己手动写一个 createStore  stateChanger(dispatch)  subscribe()
subscribe() 页面更改了 重新渲染

## 纯函数
返回结果只依赖于传进来的参数 && 执行过程里面没有副作用
参数变化
```js
const a = 1
const foo = (x, b) => x + b
foo(1, 2) // => 3
``` 

## 掌握 Redux 过程
1. 提高修改 数据 的门槛 dispatch
2. 抽象出一个 createStore (getState dispatch)
3. 手动渲染不方便 store.subscribe() -> 更新的时候自动渲染视图
4. 重新渲染视图(性能不佳) -> 引入 共享结构对象 (没有被修改的数据不重新渲染)
5. 优化 stateChanger -> reducer (纯函数)：初始化 state，计算新的 state
```js
function reducer(state, action) {...} 
function createStore(reducer) {...} 
const  store = createStore(reducer) 
store.subscribe(() => renderApp(store.getState()));
renderApp(store.getState());
store.dispatch(...)
```
## 为什么不直接从 JSX 直接渲染构造 DOM 结构，而是要经过中间这么一层呢？
1. 当我们拿到一个表示 UI 的结构和信息的对象以后，不一定会把元素渲染到浏览器的普通页面上，我们有可能把这个结构渲染到 canvas 上，或者是手机 App 上

2. 有了这样一个对象。当数据变化，需要更新组件的时候，就可以用比较快的算法操作这个 JavaScript 对象，而不用直接操作页面上的 DOM，这样可以尽量少的减少浏览器重排，极大地优化性能

## JSX 
- JavaScript 语言的一种语法扩展，长得像 HTML，但并不是 HTML
- React.js 可以用 JSX 来描述你的组件长什么样的
- JSX 在编译的时候会变成相应的 JavaScript 对象描述
- 负责把这个用来描述 UI 信息的 JavaScript 对象变成 DOM 元素，并且渲染到页面上

## render
一个组件类必须实现一个render方法 -> 返回一个JSX元素（必须有一个外层的JSX元素包住所有内容）

**添加属性className: class是javaScript的关键字**
**for: htmlFor**
```js
<label for='male'>Male</label> 
<label htmlFor='male'>Male</label>
```

## 条件返回JSX
```js
{isGoodWord
          ? <strong> is good</strong>
          : <span> is not good</span>
        }
```

## 自定义的组件必须要用大写字母开头，普通的 HTML 标签都用小写字母开头
组件可以和组件组合在一起，组件内部可以使用别的组件，这样的组合嵌套，最后构成一个所谓的组件树

## 事件处理
- React事件命名 -> 小驼峰式 onClick
- 不能通过返回 false 的方式阻止默认行为。必须显式的使用 preventDefault
- 这些 on* 的事件监听只能用在普通的 HTML 的标签上，而不能用在组件 <Header onClick={…} /> ❌ 标签上
- 事件监听函数会被自动传入一个 event 对象，它自己内部所构建的
```js
handleClickOnTitle (e) {
    console.log(e.target.innerHTML)
  }
```
## 改变state的状态，页面会重新渲染
setState 接受一个对象或者函数作为参数
- 对象
调用 setState 的时候，React.js 并不会马上修改 state
而是把这个**对象**放到一个更新队列里面，稍后才会从队列当中把新的状态提取出来合并到 state 当中，然后再触发组件更新
```js
handleClickOnLikeButton () {
    this.setState({ count: 0 }) // => this.state.count 还是 undefined
    this.setState({ count: this.state.count + 1}) // => undefined + 1 = NaN
    this.setState({ count: this.state.count + 2}) // => NaN + 2 = NaN
  }
```
- 函数
可以做到实时更新state React.js 会把上一个 setState 的结果传入这个函数
```js
handleClickOnLikeButton () {
    this.setState((prevState) => {
      return { count: 0 }
    })
    this.setState((prevState) => {
      return { count: prevState.count + 1 } // 上一个 setState 的返回是 count 为 0，当前返回 1
    })
    this.setState((prevState) => {
      return { count: prevState.count + 2 } // 上一个 setState 的返回是 count 为 1，当前返回 3
    })
    // 最后的结果是 this.state.count 为 3
  }
```

## props
- 在使用一个组件的时候，可以把参数放在标签的属性当中，所有的属性都会作为 props 对象的键值
- 就像你在用普通的 HTML 标签的属性一样，可以把参数放在表示组件的标签上，组件内部就可以通过 this.props 来访问到这些配置参数了
- props 不可变
- default props
```js
static defaultProps = {
    likedText: '取消',
    unlikedText: '点赞'
  }
```

## state vs props
- state 的主要作用是用于组件保存、控制、修改自己的可变状态
- state 局部的 只能被组件自身控制
- setState会导致组件重新渲染

- props 让使用该组件的父组件可以传入参数来配置该组件 
- props 固定的  不可变 
**state 是让组件控制自己的状态，props 是让外部对组件自己进行配置**

## 函数式组件
（stateless component）无法初始化state 只接受 props 和 render 方法
```js
const HelloWorld = (props) => {
  const sayHi = (event) => alert('Hello World')
  return (
    <div onClick={sayHi}>Hello World</div>
  )
}
```

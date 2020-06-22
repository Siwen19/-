## 状态提升
当某个状态被多个组件依赖或者影响 -> 就把该状态提升到这些组件的最近**公共父组件**中去管理，用 props 传递数据或者函数来管理这种依赖或着影响的行为
eg: 百分比换算器

## 组件的挂载
React.js 将组件渲染，并且构造 DOM 元素然后塞入页面的过程称为组件的挂载
1. React.createElement 中实例化一个 Header  new Header
2. React.createElement 中调用 header.render 方法渲染组件的内容 header.render()
3. ReactDOM 用渲染后的 JavaScript 对象来来构建真正的 DOM 元素   ceateDOMFromObject()
4. ReactDOM 把 DOM 元素塞到页面上   appendChild
挂载的时候，React.js 会在组件的 render 之前调用 componentWillMount，在 DOM 元素塞入页面以后调用 componentDidMount。

## 组件生命周期 更新
1. shouldComponentUpdate(nextProps, nextState)  非常有用
2. componentWillReceiveProps(nextProps)
3. componentWillUpdate()
4. componentDidUpdate()

## style
style 接受一个对象，这个对象里面是这个元素的 CSS 属性键值对，原来 CSS 属性中带 - 的元素都必须要去掉 - 换成驼峰命名
font-size   fontSize
text-align  textAlign

## PropTypes
给组件的参数做类型限制，可以在帮助我们迅速定位错误
PropTypes.array
PropTypes.bool
PropTypes.func
PropTypes.number
PropTypes.object
PropTypes.string
PropTypes.node
PropTypes.element 
- 所有私有方法都以 _ 开头 
- 所有事件监听的方法都用 handle 开头
- 把事件监听方法传给组件的时候，属性名用 on 开头
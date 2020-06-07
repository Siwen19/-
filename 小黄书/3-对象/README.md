## 对象
两种形式定义
1. 声明形式(文字形式)
```js
var myObj = {
    key: value
}
```
2. 构造形式
```js
var myObj = new Object();
myObj.key = value
```

## 类型
JavaScript中共有六种主要类型
- string
- number
- boolean
- null
- undefined
- object
简单基本类型(前5)   复杂数据类型 -> 对象子类型 -> (function array)

## 内置对象
- String
- Number
- Boolean
- Object
- Function
- Array
- Date
- RegExp
- Error
null 和 undefined 没有对应的构造形式，只有文字形式
Date只有构造形式，没有文字形式

## 内容
由一些存储在特定命名位置的值组成，称之为**属性**。
存储在对象内部的实际上是这些属性的名称，真正的值存在别的位置，通过**指针**引用被调用
```js
var myObject = {
    a: 2， 
}
myObject.a //2 -> 属性访问
myObject['a'] //2 -> 键访问
``` 

## 可计算属性名
myObject[prefix + name]
```js
var prefix = 'foo';
var myObject = {
    [prefix + 'bar']: 'hello'
}
```

## 属性与方法
属于对象的函数通常被称为“方法”，从技术角度来说，函数永远不会“属于”一个对象
foo();
someFoo();
myObject.someFoo();
只是对于相同函数对象的多个引用
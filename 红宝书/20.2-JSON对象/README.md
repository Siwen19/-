## JSON对象
把 JavaScript对象 序列化为 JSON字符串 stringfy() 
把 JSON字符串 解析为 原生JavaScript值 parse()
JSON.stringfy() 输出的JSON字符串不包含任何空格字符  或 缩进

## 序列化选项
JSON.stringfy() 可接受两个参数
1. 过滤器(数组 / 函数)  **过滤函数**
- **第二个参数**是数组，返回的结果字符串中，就只包含数组中的属性
```js
var book = {
    "title": a,
    "authors": b,
    "year": c
}
JSON.stringfy(book, ["title", "year"]);
// {"title": a, "year": c}
```
- **第二个参数**是函数，接受两个参数 -> 属性键 + 属性值
```js
var book = {
    "title": a,
    "authors": b,
    "year": c
}
JSON.stringfy(book, function(key, value) {
    switch(key) {
        case "title":
        return 10;
        case "authors":
        return undefined;
        default:
        return value;
    }
});
// {"title":10, "year": c} 
```
**如果函数返回了undefined，key-value 删除**
2. **第三个参数**控制缩进和空白符，最大为10，自动换行
```js
var jsonText = JSON.stringfy(book, null, 4);
// 缩进4个空格符
```
3. toJSON()

## 解析选项
1. **第二个参数**是一个函数，键值对 **还原函数**
undefined -> 删除相应键
插入到结果中
日期字符串转换为Date对象时，经常用到还原函数
```js
var bookCopy = JSON.parse(book, function(key, value) {
    if (key = = "releaseDate") {
        return new Date(value);
    } else {
        return value;
    }
})
```


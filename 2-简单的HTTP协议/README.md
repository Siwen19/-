## HTTP 协议 客户端 <-> 服务端
    请求 <-> 响应
    GET     /index.htm      HTTP/1.1        200         OK
    方法       请求URL        协议版本        状态码    状态码的原因短语

## HTTP 不保存状态

## HTTP可使用的方法 告知服务器意图的HTTP方法
- GET 获取资源
- POST 传输实体主体
- PUT 传输文件 **自身不带验证机制**
- HEAD 获取报文首部
- DELETE 删除文件   204 No Content
- OPTIONS 询问支持的方法  查询针对请求URL指定的资源支持的方法
- TRACE 追踪路径
- CONNECT 要求用隧道协议连接代理

## 持久连接(keep-alive / connection reuse)
只要任意一端没有明确提出断开连接，保持TCP连接状态
**管线化**异步

## 使用Cookie的状态管理
HTTP无状态协议，假设登录认证的Web页面不记录已登录的状态，每次跳转新页面就要重新登录
Cookie：
1. 根据服务器端发送的响应报文中的一个Set-Cookie首部字段信息，通知客户端保存Cookie
2. 下次客户端再往服务器端发送请求时，客户端会自动在请求报文中加入Cookie值发送出去
3. 服务器端发现客户端发送过来的Cookie后，对比之前的记录，得到之前的状态信息

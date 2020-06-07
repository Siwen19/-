## HTTP 状态码
表示客户端HTTP请求返回的结果，服务器端的处理是否正常，通知出现的错误

## 状态码的类别
1XX 接受的请求正在处理
2XX 请求正常处理完毕
3XX 需要进行附加操作以完成请求
4XX 服务器无法处理请求
5XX 服务器处理请求出错
- 200   第一位指定了响应类别，后两位无分类

## 具有代表性的14个状态码
1. 2XX 成功 (请求被正常处理了)
- 200 OK
- 204 No Content
- 206 Partial Content(Content-Range: bytes 5001-10000)

2. 3XX 重定向
- 301 Moved Permanently(永久性重定向)
- 302 Found(临时性重定向)
    *taobao.com -> Location: https://world.taobao.com*
    *baidu.com -> Location: https://www.baidu.com/*
- 303 See Other (请求的资源存在着另一个URL，应使用GET方法定向获取请求的资源)
    303 状态码明确表示客户端应该使用GET方法请求资源
- 304 Not Modified (服务器端资源未改变)
    taobao.com
    *if-none-match: W/"5f786-JJhy+5hK0HqG6AuG/8N3z9zrwRE"*
    客户端发送附带条件的请求时，服务器端允许请求访问资源，但是服务器没有找到符合请求的资源
    附带条件 -> 采用GET方法的请求报文中包含：
        - If-Match
        - If- Modified-Since
        - If-None-Match
        - If-Range
        - If-Unmodified-Since
- 307 Temporary Redirect(临时重定向)
 
3. 4XX 客户端错误
- 400 Bad Request (请求报文中存在语法错误)
- 401 Unauthorized (需要有 通过*HTTP*认证 的认证信息)
- 403 Forbidden (请求资源的访问被服务器拒绝)
- 404 Not Found (服务器上没有请求的资源)

4. 5XX 服务器错误
- 500 Internal Server Error (服务器内部错误)
- 503 Service Unavailable (服务器暂时处于超负载 或 正在进行停机维护)
    如果事先知道解除以上状态需要多少时间，可以在首部字段中写入*Retry-After*返回给客户端

## 域名
独一无二，不可重复，先注册先得
后缀: .com .cn .edu .net .xyz .top



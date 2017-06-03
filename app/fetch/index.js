import 'whatwg-fetch';
import 'es6-promise';


export function get(url) {
    return fetch(url,{Accept:'application/json'})//接收的格式
}
function toUrlencoded(obj) {
    let arr=[];
    for(let key in obj){
      arr.push(`${key}=${obj[key]}`);  //[id=1,comment=2]
    }
    return arr.join('&');
}
export function post(url,obj) {  //{id:1,comment:2}  => id=1&comment=2
    return fetch(url,{
        method:'POST',
        //手动写请求头
        herder:{
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body:toUrlencoded(obj)  //转成字符串传过去
    })
}
#1: 对象的变量名可以动态

var a='a'
var b={
  [a+'aaaa']:123
}

#2:es6 导入导出 通常做法
export default {a,b}
import ddd from 上面 
使用 ddd.a ddd.b


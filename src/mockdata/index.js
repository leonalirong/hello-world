import Mock from 'mockjs'

// let str=Mock.mock({
//   "code|1":[0,-1],
//   "msg":function(){
//     return this.code===0? "ok":'错了'
//   }
// })


// console.log (str);


let str = Mock.mock(/todos.json/, {
  "code|1": [0, -1],
  "msg": function () {
    return this.code === 0 ? "ok" : '错了'
  },
  "data|10-20": [
    {
      "name": "@cname",
      "id|+1": 1
    }
  ]
})
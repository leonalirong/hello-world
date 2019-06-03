<template>
  <div class="todo">
    <input
      v-model="inputVal"
      type="text"

      placeholder="请输入内容。。。"
    >
    <button @click="addTodo">ADD</button>

    <ul>
      <TodoItem

        v-for="(item ,index) in todos"
        :key="item.id"
        :todo="item.name"
        :index='index'
        :id="item.id"
        @abc="delTodo"
      />
    </ul>

  </div>
</template>

<script>
import axios from 'axios'
import TodoItem from './TodoItem.vue'
export default {
  data () {
    return {
      inputVal: '',
      todos: []
    }
  },
  components: {
    TodoItem
  },
  methods: {
    addTodo () {
      let obj={
        name:this.inputVal
      }
      axios.post('http://localhost:3000/todos',obj)
      .then(response=>{
        console.log('新增成功');
        let res=response.data;
        this.todos.push(res);
      })
      .catch(error=>{
        console.log('新增失败')
      })

    },
    delTodo (index,id) {
      //this.todos.splice(index, 1);
      axios.delete(`http://localhost:3000/todos/${id}`)
      .then(response=>{
        console.log(response.data);
         this.todos.splice(index, 1);
      })
      .catch(error=>{
        console.log('请求失败')
      })
    }
  },
  created() {
    axios.get("http://localhost:3000/todos")
    .then(Response=>{
        let res=Response.data;
        console.log(res);
        this.todos=res;    
    })
  },
}
</script>

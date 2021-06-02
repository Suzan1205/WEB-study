<template>
    <div class="todo-container">
      <div class="list-title">任务计划列表</div>
     

       <div class="todo-wrap">
       <b> 添加任务 </b>
        <Header :addTodo="addTodo"/>

         <!-- 导航区 -->
      <div class="navlist">
          <div navbtn>
              <button @click="todos">全部</button>
              <button @click="completeTodo">已完成</button>
              <button @click="todos - completeTodo">未完成</button>
          </div>
      </div>

        <List :todos="todos" :removeTodo="removeTodo" :completeTodo="completeTodo"/>
        <Footer :todos="todos" :selectAll="selectAll" :clearAllComplete="clearAllComplete"/>
        
       </div>
     </div>
</template>

<script type="text/ecmascript-6">
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'


export default {
  data () {
    return {
      // todos: [
      //   {id: Date.now(), title: 'A', complete: false},
      //   {id: Date.now() + 1, title: 'B', complete: true},
      //   {id: Date.now() + 2, title: 'C', complete: false},
      // ]
      todos: []
    }
  },

  mounted() {
    // 模拟异步读取todos数据
    setTimeout(() => {
     const todos = JSON.parse( localStorage.getItem('todos_key') || '[]')  
     this.todos = todos
    }, 1000);
  },

  watch: {
    todos: {
      deep: true, //深度监视
      handler (val) { //todos发生改变的监视回调函数
        //  保存最新的todos到local
        localStorage.setItem('todos_key', JSON.stringify(val))
      },
    }
  },

  methods: {
    // 添加todo
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    // 删除todo
    removeTodo (index) {
      this.todos.splice(index,1)
    },
    // 全选或全不选的参数
    selectAll (check) {
      this.todos.forEach(todo => todo.complete = check)
    },
    // 清除已完成的
    clearAllComplete () {
     this.todos = this.todos.filter(todo => !todo.complete)
    },
    // 选中/不选中指定todo
    completeTodo (check, todo) {
      todo.complete = check
    }
  },
  components: {//注册组件
    Header,
    List,
    Footer
  }
}
</script>

<style>
  .list-title {
    text-align: center;
    font-weight: bold;
    font-size: 30px;
  }
   .todo-container {
     width: 600px;
     margin: 0 auto;
     background-color: skyblue;
   }
   .todo-wrap {
     background-color: rgb(229, 235, 238);
   }
   .todo-container, .todo-wrap {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
   }
</style>


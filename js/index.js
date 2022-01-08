//引入组件
import pageHead from './pageHead.js'
import todo_list from './todo-list.js'

// 创建app组件
const app = Vue.createApp({})

// 组件注册
app.component('page-head', pageHead)
app.component('todo-list', todo_list)

// 挂载
app.mount('#app')
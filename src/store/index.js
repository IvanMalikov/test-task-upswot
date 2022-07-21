import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoItems: []
  },
  getters: {
    getTodoItems(state) {
      return state.todoItems
    }
  },
  mutations: {
    addTodoItem(state, payload) {
      state.todoItems.push({
        ...payload,
        id: JSON.stringify(new Date())
      })
    },

    removeTodoItem(state, payload) {
      const idx = state.todoItems.findIndex(item => item.id === payload.id)
      state.todoItems.splice(idx, 1)
    },

    editTodo(state, payload) {
      const idx = state.todoItems.findIndex(item => item.id === payload.id)
      state.todoItems[idx].content = payload.content
    }
  },
  actions: {
  },
  modules: {
  }
})

import List from './List'
import Task from '../task'
import TodoList from '../toDoList'

export default class Storage {
  static saveTodoList(data) {
    localStorage.setItem('todoList', JSON.stringify(data))
  }

  static getTodoList() {
    const todoList = Object.assign(
      new TodoList(),
      JSON.parse(localStorage.getItem('todoList'))
    )

    todoList.setLists(
      todoList
        .getLists()
        .map((list) => Object.assign(new List(), list))
    )

    todoList
      .getLists()
      .forEach((List) =>
        List.setTasks(
          List.getTasks().map((task) => Object.assign(new Task(), task))
        )
      )

    return todoList
  }

  static addList(list) {
    const todoList = Storage.getTodoList()
    todoList.addList(list)
    Storage.saveTodoList(todoList)
  }

  static deleteList(listName) {
    const todoList = Storage.getTodoList()
    todoList.deleteList(listName)
    Storage.saveTodoList(todoList)
  }

  static addTask(listName, task) {
    const todoList = Storage.getTodoList()
    todoList.getList(listName).addTask(task)
    Storage.saveTodoList(todoList)
  }

  static deleteTask(listName, taskName) {
    const todoList = Storage.getTodoList()
    todoList.getList(listName).deleteTask(taskName)
    Storage.saveTodoList(todoList)
  }

  static renameTask(listName, taskName, newTaskName) {
    const todoList = Storage.getTodoList()
    todoList.getList(listName).getTask(taskName).setName(newTaskName)
    Storage.saveTodoList(todoList)
  }

  static setTaskDate(listName, taskName, newDueDate) {
    const todoList = Storage.getTodoList()
    todoList.getList(listName).getTask(taskName).setDate(newDueDate)
    Storage.saveTodoList(todoList)
  }

  static updateTodayList() {
    const todoList = Storage.getTodoList()
    todoList.updateTodayList()
    Storage.saveTodoList(todoList)
  }

  static updateWeekList() {
    const todoList = Storage.getTodoList()
    todoList.updateWeekList()
    Storage.saveTodoList(todoList)
  }
}
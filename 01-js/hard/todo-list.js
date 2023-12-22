/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor(){
    this.todoList = [];
  }

  add(Todo){
    this.todoList.push(Todo)
  }

  remove(index){
    if(index > -1 && index<this.todoList.length){
      this.todoList.splice(index , 1)
    }
    return;
  }

  update(index , todo){
    if(index > -1 && index<this.todoList.length){
      this.todoList[index] = todo
    }
    return
  }

  getAll(){
    return this.todoList;
  }


  get(index){
    if(index > -1 && index<this.todoList.length){
     return this.todoList[index]
    }
    return null;
  }

  clear(){
    this.todoList = [];
  }
}

module.exports = Todo;

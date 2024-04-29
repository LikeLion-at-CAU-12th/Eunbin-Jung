import Todo from "../DOM/Todo.js";

class TodoController {
  constructor(todo){
    this.newTodo = new Todo(todo);
    this.delBtnNode = this.newTodo.getDelBtn();
    this.comBtnNode = this.newTodo.getCompleteBtn();
    this.innerNode = this.newTodo.getInnerText();

    this.delBtnNode.addEventListener('click',()=>{
      this.delTodo();
    });
    this.comBtnNode.addEventListener('click',()=>{
      this.doneTodo();
    });
  }
  addTodo(){
    const todoList = document.getElementById("to-do-list");
    const input = document.querySelector('input');
    todoList.appendChild(this.newTodo.addRow());
    input.value = '';
  }
  delTodo(){
    const todoList = document.getElementById("to-do-list");
    todoList.removeChild(this.newTodo.getRow());
  }
  doneTodo(){
    const todoList = document.getElementById("to-do-list");
    todoList.removeChild(this.newTodo.getRow()); //todo-list에서 완료된 task 삭제하기

    const completeList = document.getElementById("complete-list");
    completeList.appendChild(this.newTodo.getRow()); //todo-list의 완료된 task complete-list로 붙여넣기
  }
}

export default TodoController;
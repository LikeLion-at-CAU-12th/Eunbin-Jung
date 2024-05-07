import Todo from "../DOM/Todo.js";

class TodoController {
  constructor(todo){
    this.newTodo = new Todo(todo);
    this.delBtnNode = this.newTodo.getDelBtn();
    this.comBtnNode = this.newTodo.getCompleteBtn();
    this.innerNode = this.newTodo.getInnerText();


    this.delBtnNode.addEventListener('click',()=>{
      // newTodo의 부모 요소 ID를 가져옴
      const parentId = this.newTodo.getRow().parentNode.id;

      // 부모 요소의 ID에 따라 함수 실행
      if (parentId === 'to-do-list') {
        this.delTodo();
      } else if (parentId === 'complete-list') {
        this.delComplete();
      }
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
  delComplete(){
    const completeList = document.getElementById("complete-list");
    completeList.removeChild(this.newTodo.getRow());
  }
}

export default TodoController;
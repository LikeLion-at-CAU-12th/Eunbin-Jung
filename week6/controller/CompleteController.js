import Complete from './Complete.js';

class CompleteController{
  delComplete(){
    const completeList = document.getElementById("complete-list");
    completeList.removeChild(this.newTodo.getRow());
  }
}
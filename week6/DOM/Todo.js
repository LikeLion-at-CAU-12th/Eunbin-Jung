import Button from "./Button.js";
import Div from "./Div.js";

class Todo{
  constructor(todo){
    this.row = new Div('', 'row').node;
    this.textBox = new Div(todo, 'text-box');
    this.completeBtn = new Button('images/complete.png', 'complete-btn');
    this.delBtn = new Button('images/delete.png', 'del-Btn');
  }
  addRow(){
    [this.textBox, this.completeBtn, this.delBtn].forEach((dom)=>{
        this.row.appendChild(dom.node);
    })
    return this.row;
  }
  getRow(){
    return this.row;
  }
  getCompleteBtn(){
    return this.completeBtn.node;
  }
  getDelBtn(){
    return this.delBtn.node;
  }
  getInnerText(){
    return this.textBox.node;
  }
}

export default Todo;
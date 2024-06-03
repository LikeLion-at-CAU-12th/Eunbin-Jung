import Button from "./Button.js";
import Div from "./Div.js";

class Complete{
  constructor(todo) {
    this.row = new Div("", "row").node;
    this.textBox = new Div(todo, "text-box");
}
}

export default Complete;
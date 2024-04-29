import DOM from "./DOM.js";
import Img from "./Img.js";

class Button extends DOM {
  constructor(iconSrc, className) {
    super('button', '', className);
    if (iconSrc) {
      this.icon = new Img(iconSrc, 'Button icon', 'button-icon').node;
      this.node.appendChild(this.icon);
    }
  }
}

export default Button;
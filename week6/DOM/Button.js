import DOM from "./DOM.js";
import Image from "./Image.js";

class Button extends DOM {
  constructor(iconSrc, className) {
    super('button', '', className);
    if (iconSrc) {
      this.icon = new Image(iconSrc, 'Button icon', 'button-icon').node;
      this.node.appendChild(this.icon);
    }
  }
}

export default Button;
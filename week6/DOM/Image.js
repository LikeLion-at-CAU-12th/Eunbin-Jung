class Image {
  constructor(src, alt, className) {
    this.node = document.createElement('img');
    this.node.src = src;                     
    this.node.alt = alt;        
    if (className) this.node.classList.add(className);
  }
}

export default Image;

import React, { Component } from "react";

export class ResizableDiv extends Component {
  constructor(props) {
    super(props);
    // Access props in the constructor
    console.log('Value of prop "initialCount":', this.props.color);

    // Initializing state based on props
    this.state = {
      count: this.props.initialCount || 0
    };
  }
  
  render() {
    
    return (
      <div className={`resizable bg-${this.props.color}`}>
        <div className="resizers">
          <div className="resizer top-left" />
          <div className="resizer top-right" />
          <div className="resizer bottom-left" />
          <div className="resizer bottom-right" />
          <div className="innerContent">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export function makeResizableDiv(div) {
  const element = document.querySelector(div);
  const resizers = element.querySelectorAll(".resizer");
  const minimum_size = 20;
  let original_width = 0;
  let original_height = 0;
  let original_x = 0;
  let original_y = 0;
  let original_mouse_x = 0;
  let original_mouse_y = 0;

  let mouseMoveHandler = undefined;

  function onMouseDownWrapper(currentResizer) {
    return function onMouseDown(e) {
      e.preventDefault();
      original_width = parseFloat(
        getComputedStyle(element, null)
          .getPropertyValue("width")
          .replace("px", "")
      );
      original_height = parseFloat(
        getComputedStyle(element, null)
          .getPropertyValue("height")
          .replace("px", "")
      );
      original_x = element.getBoundingClientRect().left;
      original_y = element.getBoundingClientRect().top;
      original_mouse_x = e.pageX;
      original_mouse_y = e.pageY;
      mouseMoveHandler = resizeWrapper(currentResizer);
      window.addEventListener("mousemove", mouseMoveHandler);
      window.addEventListener("mouseup", stopResize);
    };
  }

  function resizeWrapper(currentResizer) {
    return function resize(e) {
      // Your resize logic
    };
  }

  function stopResize() {
    window.removeEventListener("mousemove", mouseMoveHandler);
    window.removeEventListener("mouseup", stopResize);
  }

  for (let i = 0; i < resizers.length; i++) {
    const currentResizer = resizers[i];
    currentResizer.addEventListener(
      "mousedown",
      onMouseDownWrapper(currentResizer)
    );
  }
}

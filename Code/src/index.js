/***** Basics *****/
import React from "react";
import ReactDOM from "react-dom";

/***** Libs & Frameworks *****/
import "bootstrap/dist/css/bootstrap.css";

/***** App *****/
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <svg
      className="svg-1"
      xmlns="http://www.w3.org/2000/svg"
      width="146"
      height="145"
    >
      <g fill="none" fill-rule="evenodd" stroke="#CFD8EF">
        <circle cx="63" cy="82" r="62.5" />
        <circle cx="105" cy="41" r="40.5" />
      </g>
    </svg>
    {/* <svg className="svg-2" xmlns="http://www.w3.org/2000/svg" width="1440" height="449"><path fill="#F1F5FE" fill-rule="evenodd" d="M0 0h1440v449H191.5C85.737 449 0 363.263 0 257.5V0z"/></svg> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Counter Script
class Slider {
  constructor(rangeElement, price, options) {
    this.rangeElement = rangeElement;
    this.price = price;
    this.options = options;

    // Attach a listener to "change" event
    this.rangeElement.addEventListener("input", this.updateSlider.bind(this));
  }

  // Initialize the slider
  init() {
    this.rangeElement.setAttribute("min", options.min);
    this.rangeElement.setAttribute("max", options.max);
    this.rangeElement.value = options.cur;

    this.updateSlider();
  }

  // Format the money
  asMoney(value) {
    return (
      "$" +
      parseFloat(value) +
      ".00".toLocaleString("en-US", { maximumFractionDigits: 2 })
    );
  }

  generateBackground(rangeElement) {
    if (this.rangeElement.value === this.options.min) {
      return;
    }

    let percentage =
      ((this.rangeElement.value - this.options.min) /
        (this.options.max - this.options.min)) *
      100;
    return (
      "background: linear-gradient(to right, #0de6d173, #0de6d173 " +
      percentage +
      "%, #dce4e8 " +
      percentage +
      "%, #dee1e2 100%)"
    );
  }

  updateSlider(newValue) {
    this.price.innerHTML = this.asMoney(this.rangeElement.value);
    this.rangeElement.style = this.generateBackground(this.rangeElement.value);
  }
}

let rangeElement = document.querySelector('.range [type="range"]');
let price = document.querySelector(".price");

let options = {
  min: 0,
  max: 100,
  cur: 25,
};

if (rangeElement) {
  let slider = new Slider(rangeElement, price, options);

  slider.init();
}

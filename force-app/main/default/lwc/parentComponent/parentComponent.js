import { LightningElement, track } from "lwc";

export default class ParentComponent extends LightningElement {
  @track input;
  @track list = Array();
  @track selected;

  constructor() {
    super();
    addEventListener("inputitemselect", this.handleSelect);
  }

  addInputToList = () => {
    let inputValue = this.template.querySelector("lightning-input").value;

    if (inputValue.length > 0) {
      this.list.push(inputValue);
      this.template.querySelector("lightning-input").value = "";
    }
  };

  handleSelect = (event) => {
    this.selected = true;
    this.input = event.detail;
  };
}

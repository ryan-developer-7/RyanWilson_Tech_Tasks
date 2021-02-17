import { LightningElement, track } from "lwc";

export default class ParentComponent extends LightningElement {
  //These below properties need the track decorator so that the template renders when they change.
  @track input;
  @track list = Array();
  @track selected;

  // We require this constructor for adding the event listener.
  constructor() {
    super();
    addEventListener("inputitemselect", this.handleSelect);
  }

  /* This method is used for adding items to the list. 
    It also sets the input value back to blank
  */
  addInputToList = () => {
    let inputValue = this.template.querySelector("lightning-input").value;

    if (inputValue.length > 0) {
      this.list.push(inputValue);
      this.template.querySelector("lightning-input").value = "";
    }
  };

  /* This method handles the event that bubbles up from the child component. 
   It allows the template to show the select input text.
  */
  handleSelect = (event) => {
    this.selected = true;
    this.input = event.detail;
  };
}

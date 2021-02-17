import { LightningElement, api } from "lwc";

export default class ChildComponent extends LightningElement {
  @api inputitem;

  fireSelectEvent = () => {
    const selectedEvent = new CustomEvent("inputitemselect", {
      detail: this.inputitem,
      bubbles: true
    });
    this.dispatchEvent(selectedEvent);
  };
}

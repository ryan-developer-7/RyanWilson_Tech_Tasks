import { LightningElement, api } from "lwc";

export default class ChildComponent extends LightningElement {
  /* We use the api decorator to make the property public 
  and important for the parentComponent to insert the inputItem text.
  */
  @api inputitem;

  /* This method fires an event up to the parent component. 
    When this iteration of the child component is selected.
    This is used for the hidden text in parent template. 
  */

  fireSelectEvent = () => {
    const selectedEvent = new CustomEvent("inputitemselect", {
      detail: this.inputitem,
      bubbles: true
    });
    this.dispatchEvent(selectedEvent);
  };
}

/* eslint-disable jest/expect-expect */
import { createElement } from "lwc";
import MyWireComponent from "c/myWireComponent";

const mockGetContactList = require("./data/getContactList.json");
describe("c-my-wire-component", () => {
  let element, expected, result;
  beforeEach(() => {
    element = createElement("c-my-wire-component", {
      is: MyWireComponent
    });
    document.body.appendChild(element);
  });

  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it("should render the contacts", () => {
    element = document.querySelector("c-my-wire-component");
  });
});

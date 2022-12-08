/* eslint-disable @lwc/lwc/no-document-query */
/* eslint-disable jest/expect-expect */
import { createElement } from "lwc";
import MyWireComponent from "c/myWireComponent";
import getContactList from "@salesforce/apex/ContactController.getContactList";

const mockGetContactList = require("./data/getContactList.json");
jest.mock(
  "@salesforce/apex/ContactController.getContactList",
  () => {
    const { createApexTestWireAdapter } = require("@salesforce/sfdx-lwc-jest");
    return {
      default: createApexTestWireAdapter(jest.fn())
    };
  },
  { virtual: true }
);

describe("c-my-wire-component", () => {
  let element, expected, result;
  beforeEach(() => {
    element = createElement("c-my-wire-component", {
      is: MyWireComponent
    });
    document.body.appendChild(element);
  });

  afterEach(() => {
    jest.clearAllMocks();
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it("should render the contacts", () => {
    const testElement = document.querySelector("c-my-wire-component");
    getContactList.emit(mockGetContactList);
    return Promise.resolve().then(() => {
      const pElements = testElement.shadowRoot.querySelectorAll("p");
      expected = [mockGetContactList.length, mockGetContactList[0].Name];
      result = [pElements.length, pElements[0].textContent];
      expect(result).toEqual(expected);
    });
  });
});

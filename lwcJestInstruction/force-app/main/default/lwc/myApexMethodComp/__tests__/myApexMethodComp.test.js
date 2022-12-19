/* eslint-disable @lwc/lwc/no-document-query */
/**
 * @jest-environment jsdom
 */

import { setImmediate } from "timers";
import { createElement } from "lwc";
import MyApexMethodComp from "c/myApexMethodComp";
import getAccountList from "@salesforce/apex/AccountController.getAccountList";

const APEX_ACCOUNTLIST_ERROR = require("./data/accountsError.json");
const APEX_ACCOUNTLIST_SUCCESS = require("./data/accountsList.json");

// jest.mock(moduleName, factory, options)
jest.mock(
  "@salesforce/apex/AccountController.getAccountList",
  () => ({
    default: jest.fn()
  }),
  { virtual: true }
);
describe("c-my-apex-method-comp", () => {
  beforeEach(() => {
    // Arrange
    const element = createElement("c-my-apex-method-comp", {
      is: MyApexMethodComp
    });

    // Act
    document.body.appendChild(element);
  });

  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it("should render accounts returned from imperative apex call", () => {
    // Arrange
    getAccountList.mockResolvedValue(APEX_ACCOUNTLIST_SUCCESS);

    // Act
    const element = document.querySelector("c-my-apex-method-comp");
    const button = element.shadowRoot.querySelector("lightning-button");
    button.click();

    return new Promise(setImmediate).then(() => {
      const detailElements =
        element.shadowRoot.querySelectorAll("p.accountName");
      expect(detailElements.length).toBe(APEX_ACCOUNTLIST_SUCCESS.length);
      expect(detailElements[0].textContent).toBe(
        APEX_ACCOUNTLIST_SUCCESS[0].Name
      );
      expect(detailElements[1].textContent).toBe(
        APEX_ACCOUNTLIST_SUCCESS[1].Name
      );
    });
  });

  test("It should render an error when apex returns an erro", () => {
    // Arrange
    getAccountList.mockRejectedValue(APEX_ACCOUNTLIST_ERROR);

    // Act
    const element = document.querySelector("c-my-apex-method-comp");
    const button = element.shadowRoot.querySelector("lightning-button");
    button.click();

    // Assert
    return new Promise(setImmediate).then(() => {
      const errorElement = element.shadowRoot.querySelectorAll("p.error");
      expect(errorElement).not.toBeNull();
    });
  });
});

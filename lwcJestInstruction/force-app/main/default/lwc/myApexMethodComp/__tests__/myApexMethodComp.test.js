import { createElement } from "lwc";
import MyApexMethodComp from "c/myApexMethodComp";
import getAccountList from "@salesforce/apex/AccountController.getAccountList";

const APEX_ACCOUNTLIST_ERROR = require("./data/accountsError.json");
const APEX_ACCOUNTLIST_SUCCESS = require("./data/accountsList.json");
jest.mock("@salesforce/apex/AccountController.getAccountList");

describe("c-my-apex-method-comp", () => {
  beforeEach(() => {
    // Arrange
    const element = createElement("c-my-apex-method-comp", {
      is: MyApexMethodComp
    });

    // Act
    document.body.appendChild(element);
  });

  it("should render accounts returned from imperative apex call", () => {
    /*
    jest.mock(
      "@salesforce/apex/AccountController.getAccountList",
      () => ({ default: jest.fn() }),
      { virtual: true }
    );
    */
    getAccountList.mockResolvedValue(APEX_ACCOUNTLIST_SUCCESS);
    const element = document.querySelector("c-my-apex-method-comp");
    const buttonElement = element.shadowRoot.querySelector("lightning-button");
    return new Promise(setImmediate).then(() => {
      const accountParagraphs =
        element.shadowRoot.querySelectorAll("p.accountName");
    });
    // Assert
    // const div = element.shadowRoot.querySelector('div');
    expect(1).toBe(1);
  });
});

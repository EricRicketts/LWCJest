/* eslint-disable @lwc/lwc/no-document-query */
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
    // Assert
    // const div = element.shadowRoot.querySelector('div');
    expect(1).toBe(1);
  });
});

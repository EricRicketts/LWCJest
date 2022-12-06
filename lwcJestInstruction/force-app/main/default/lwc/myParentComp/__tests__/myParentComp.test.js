/* eslint-disable @lwc/lwc/no-document-query */
import { createElement } from "lwc";
import MyParentComp from "c/myParentComp";

describe("c-my-parent-comp", () => {
  const USER_DATA = { Id: "1", Name: "Nikhil" };
  let expected, results;
  beforeEach(() => {
    // Arrange
    const element = createElement("c-my-parent-comp", {
      is: MyParentComp
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

  it("should only be one child component", () => {
    const element = document.querySelector("c-my-parent-comp");
    const childElements =
      element.shadowRoot.querySelectorAll("c-my-child-comp");

    // Assert
    expect(childElements.length).toBe(1);
  });

  it("should render child component", () => {
    // Act
    const element = document.querySelector("c-my-parent-comp");
    const childElement = element.shadowRoot.querySelector("c-my-child-comp");

    // Assert
    expect(childElement.userDetail.Name).toBe(USER_DATA.Name);
  });
});

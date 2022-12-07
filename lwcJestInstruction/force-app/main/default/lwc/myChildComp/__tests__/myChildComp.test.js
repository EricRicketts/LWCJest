/* eslint-disable @lwc/lwc/no-document-query */
import { createElement } from "lwc";
import MyChildComp from "c/myChildComp";

describe("c-my-child-comp", () => {
  const USER_DATA = { Id: "1", Name: "Nikhil" };
  let element, expected, results;
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it("I should render the default text", () => {
    element = createElement("c-my-child-comp", {
      is: MyChildComp
    });
    expected = "No user data available.";

    // Act
    document.body.appendChild(element);
    const p = element.shadowRoot.querySelector("p");
    results = p.textContent;

    const childComponent = document.querySelector("c-my-child-comp");
    const defaultParagraph = childComponent.shadowRoot.querySelector("p");
    results = defaultParagraph.textContent;

    // Assert
    expect(results).toBe(expected);
  });

  it("should render the proper text if child component is given data", () => {
    // Arrange
    element = createElement("c-my-child-comp", {
      is: MyChildComp
    });
    element.userDetail = USER_DATA;
    expected = USER_DATA.Name;

    // Act
    document.body.appendChild(element);
    element = document.querySelector("c-my-child-comp");
    element.userDetail = USER_DATA;
    const div = element.shadowRoot.querySelector("div.userName");
    results = div.textContent;

    // Assert
    expect(results).toBe(expected);
  });
});

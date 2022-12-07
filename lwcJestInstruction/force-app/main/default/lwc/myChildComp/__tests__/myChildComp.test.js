import { createElement } from "lwc";
import MyChildComp from "c/myChildComp";

describe("c-my-child-comp", () => {
  const USER_DATA = { Id: "1", Name: "Nikhil" };
  let element, expected, results;
  beforeEach(() => {
    // Arrange
    element = createElement("c-my-child-comp", {
      is: MyChildComp
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

  it("I should render the default text", () => {
    // Arrange
    expected = "No user data available.";

    // Act
    const p = element.shadowRoot.querySelector("p");
    results = p.textContent;

    // Assert
    expect(results).toBe(expected);
  });

  it("should render the text when the userDetail Object is present", () => {
    // Arrange
    expected = "Nikhil";

    // Act
    element.userDetails = USER_DATA;
    const div = element.shadowRoot.querySelector("div");
    results = div.textContent;

    // Assert
    expect(results).toBe(expected);
  });
});

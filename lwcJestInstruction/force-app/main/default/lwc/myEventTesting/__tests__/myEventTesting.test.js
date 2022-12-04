import { createElement } from "lwc";
import MyEventTesting from "c/myEventTesting";

describe("c-my-event-testing", () => {
  let element;
  beforeEach(() => {
    // Arrange
    element = createElement("c-my-event-testing", {
      is: MyEventTesting
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

  it("should render the default text", () => {
    // Act
    const p = element.shadowRoot.querySelector("div").firstElementChild;

    // Assert
    expect(p.textContent).toBe("Hello, World!");
  });

  it("should not render the default text as 'Hello, Nikhil'", () => {
    // Act
    const p = element.shadowRoot.querySelector("div").firstElementChild;

    // Assert
    expect(p.textContent).not.toBe("Hello, Nikhil!");
  });

  it("should change the rendered text as the input element changes", () => {
    const inputElement = element.shadowRoot.querySelector("lightning-input");
    inputElement.value = "Salesforce";

    inputElement.dispatchEvent(new CustomEvent("change"));
    const p = element.shadowRoot.querySelector("p");

    return Promise.resolve().then(() => {
      expect(p.textContent).toBe("Hello, Salesforce!");
    });
  });
});

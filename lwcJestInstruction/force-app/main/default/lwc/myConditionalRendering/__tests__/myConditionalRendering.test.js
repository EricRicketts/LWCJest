import { createElement } from "lwc";
import MyConditionalRendering from "c/myConditionalRendering";

describe("c-hello-conditional-rendering", () => {
  let element;
  const defaultText = "My password is ************";
  const revealedText = "My password is ElmerFudd";
  beforeEach(() => {
    // Arrange
    element = createElement("c-hello-conditional-rendering", {
      is: MyConditionalRendering
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
    const p = element.shadowRoot.querySelector("p");

    // Assert
    expect(p.textContent).toBe(defaultText);
  });

  it("should switch the password text based on the checkbox status", () => {
    // Act
    const checkBox = element.shadowRoot.querySelector("lightning-input");

    checkBox.checked = true;
    checkBox.dispatchEvent(new CustomEvent("change"));

    return Promise.resolve().then(() => {
      // Assert
      const p = element.shadowRoot.querySelector("p");
      expect(p.textContent).toBe(revealedText);
    });
  });

  it("should switch back to the default text after a second toggle", () => {
    // Act
    const checkBox = element.shadowRoot.querySelector("lightning-input");

    checkBox.checked = true;
    checkBox.dispatchEvent(new CustomEvent("change"));
    checkBox.checked = false;
    checkBox.dispatchEvent(new CustomEvent("change"));

    return Promise.resolve().then(() => {
      // Assert
      const p = element.shadowRoot.querySelector("p");
      expect(p.textContent).toBe(defaultText);
    });
  });
});

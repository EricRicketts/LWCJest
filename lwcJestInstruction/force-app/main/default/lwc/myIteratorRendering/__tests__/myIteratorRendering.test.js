import { createElement } from "lwc";
import MyIteratorRendering from "c/myIteratorRendering";

describe("c-my-iterator-rendering", () => {
  let element, expected, results;
  beforeEach(() => {
    // Arrange
    element = createElement("c-my-iterator-rendering", {
      is: MyIteratorRendering
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

  it("should render using a template for:each", () => {
    // Arrange
    expected = ["Nikhil", "Yosemite", "Foghorn"];

    // Act
    const firstList = element.shadowRoot.querySelector("ul.forEachList");
    const firstListChildren = Array.from(firstList.children);
    results = [
      firstListChildren[0].textContent,
      firstListChildren[1].textContent,
      firstListChildren[2].textContent
    ];

    // Assert
    expect(results).toEqual(expected);
  });
});

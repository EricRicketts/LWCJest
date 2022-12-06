import { createElement } from "lwc";
import MyIteratorRendering from "c/myIteratorRendering";

describe("c-my-iterator-rendering", () => {
  let element, expected, results, firstList, secondList;
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

  it("should render the approprite number of children using a for:each", () => {
    // Act
    firstList = element.shadowRoot.querySelector("ul.forEachList");

    // Assert
    expect(firstList.children.length).toBe(3);
  });

  it("should render using a for:each", () => {
    // Arrange
    expected = ["Nikhil", "Yosemite", "Foghorn"];

    // Act
    firstList = element.shadowRoot.querySelector("ul.forEachList");
    const firstListChildren = Array.from(firstList.children);
    results = [
      firstListChildren[0].textContent,
      firstListChildren[1].textContent,
      firstListChildren[2].textContent
    ];

    // Assert
    expect(results).toEqual(expected);
  });

  it("should render the approprite number of children using an iterator:name", () => {
    // Arrange
    expected = [3, 2, 1, 2];

    // Act
    secondList = element.shadowRoot.querySelector("ul.iteratorList");
    results = [
      secondList.children.length,
      secondList.children.item(0).children.length,
      secondList.children.item(1).children.length,
      secondList.children.item(2).children.length
    ];

    // Assert
    expect(results).toEqual(expected);
  });

  it("should render using an iterator:name", () => {
    // Arrange
    expected = [
      "Start Of List",
      "Nikhil",
      "Yosemite",
      "Foghorn",
      "End Of List"
    ];

    // Act
    secondList = element.shadowRoot.querySelector("ul.iteratorList");
    results = [
      secondList.children.item(0).children.item(0).textContent,
      secondList.children.item(0).children.item(1).textContent,
      secondList.children.item(1).children.item(0).textContent,
      secondList.children.item(2).children.item(0).textContent,
      secondList.children.item(2).children.item(1).textContent
    ];

    expect(results).toEqual(expected);
  });
});

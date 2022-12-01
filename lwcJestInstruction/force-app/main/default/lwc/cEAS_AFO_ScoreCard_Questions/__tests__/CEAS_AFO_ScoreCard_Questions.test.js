import getInspectionQuestions from "@salesforce/apex/InspectionQuestionsLWCController.getInspectionQuestions";
import CEAS_AFO_ScoreCard_Questions from "c/cEAS_AFO_ScoreCard_Questions";
import { createElement } from "lwc";

const SCORE_CARD_DATA = require("./data/scorecarddata.json");
const CHANGE_EVENT_NO = new CustomEvent("change", {
  detail: {
    value: "No"
  }
});

const CHANGE_EVENT_YES = new CustomEvent("change", {
  detail: {
    value: "Yes"
  }
});

jest.mock(
  "@salesforce/apex/InspectionQuestionsLWCController.getInspectionQuestions",
  () => {
    return {
      default: jest.fn()
    };
  },
  { virtual: true }
);

async function flushPromises() {
  return Promise.resolve();
}

describe("c-cEAS_AFO_ScoreCard_Questions", () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
    jest.clearAllMocks();
  });

  beforeEach(() => {
    //prevent console.logs only use if you are not asserting against log statements or not debugging
    //jest.spyOn(console, 'log').mockImplementation(() => { });
  });

  test("render data in lwc", async () => {
    //Arrange
    jest.useFakeTimers();
    const element = createElement("c--c-e-a-s_-a-f-o_-score-card_-questions", {
      is: CEAS_AFO_ScoreCard_Questions
    });
    element.recordId = 4;
    getInspectionQuestions.mockResolvedValue(SCORE_CARD_DATA);
    document.body.appendChild(element);
    jest.runAllTimers(); //runs all setTimeout methods

    //Act
    await flushPromises();

    //Assert
    const accordion =
      element.shadowRoot.querySelectorAll(`lightning-accordion`);
    expect(accordion).toHaveLength(1);
  });

  //after looking at your code... this is an example of testing multiple scenarios
  test.each([
    [2, "Question"],
    [6, "Question"],
    [20, "Question"],
    [26, "Question"],
    [31, "Question"],
    [41, "Question"],
    [46, "Question"],
    [53, "Question"],
    [60, "Question"],
    [68, "Question"],
    [72, "Question"],
    [79, "Question"],
    [83, "Question"],
    [88, "Question"],
    [96, "Question"],
    [101, "Question"]
  ])("handleChange", async (indexValue, expectedClass) => {
    //Arrange
    jest.useFakeTimers();
    const element = createElement("c--c-e-a-s_-a-f-o_-score-card_-questions", {
      is: CEAS_AFO_ScoreCard_Questions
    });
    element.recordId = 4;
    getInspectionQuestions.mockResolvedValue(SCORE_CARD_DATA);
    document.body.appendChild(element);
    jest.runAllTimers(); //runs all setTimeout methods

    //Act
    await flushPromises(); //wait for the component to finish rendering
    const radioGroup = element.shadowRoot.querySelectorAll(
      `lightning-radio-group`
    );
    radioGroup[indexValue].dispatchEvent(CHANGE_EVENT_NO);
    await flushPromises(); //wait for event to finish

    //Assert
    const x = element.shadowRoot.querySelector('[data-id="0"]');
    expect(x).toHaveClass(expectedClass);
  });

  //after looking at your code... this is an example of testing multiple scenarios
  test.each([
    [6, "Question"],
    [12, "Question"]
  ])("handleSection2Change", async (indexValue, expectedClass) => {
    //Arrange
    jest.useFakeTimers();
    const element = createElement("c--c-e-a-s_-a-f-o_-score-card_-questions", {
      is: CEAS_AFO_ScoreCard_Questions
    });
    element.recordId = 4;
    getInspectionQuestions.mockResolvedValue(SCORE_CARD_DATA);
    document.body.appendChild(element);
    jest.runAllTimers(); //runs all setTimeout methods

    //Act
    await flushPromises(); //wait for the component to finish rendering
    const questionId = element.section2Questions[indexValue].Id;
    const radioGroup = element.shadowRoot.querySelector(
      `[data-item="${questionId}"]`
    );
    radioGroup.dispatchEvent(CHANGE_EVENT_NO);
    await flushPromises(); //wait for event to finish

    //Assert
    const x = element.shadowRoot.querySelector('[data-id="0"]');
    expect(x).toHaveClass(expectedClass);
  });

  //after looking at your code... this is an example of testing multiple scenarios
  test.each([
    [0, "Question"],
    [11, "Question"],
    [24, "Question"]
  ])("handleSection3Change", async (indexValue, expectedClass) => {
    //Arrange
    jest.useFakeTimers();
    const element = createElement("c--c-e-a-s_-a-f-o_-score-card_-questions", {
      is: CEAS_AFO_ScoreCard_Questions
    });
    element.recordId = 4;
    getInspectionQuestions.mockResolvedValue(SCORE_CARD_DATA);
    document.body.appendChild(element);
    jest.runAllTimers(); //runs all setTimeout methods

    //Act
    await flushPromises(); //wait for the component to finish rendering
    const questionId = element.section3Questions[indexValue].Id;
    const radioGroup = element.shadowRoot.querySelector(
      `[data-item="${questionId}"]`
    );
    radioGroup.dispatchEvent(CHANGE_EVENT_NO);
    await flushPromises(); //wait for event to finish

    //Assert
    const x = element.shadowRoot.querySelector('[data-id="0"]');
    expect(x).toHaveClass(expectedClass);
  });

  //after looking at your code... this is an example of testing multiple scenarios
  test.each([
    [0, "Question"],
    [6, "Question"],
    [9, "Question"],
    [14, "Question"]
  ])("handleSection4Change", async (indexValue, expectedClass) => {
    //Arrange
    jest.useFakeTimers();
    const element = createElement("c--c-e-a-s_-a-f-o_-score-card_-questions", {
      is: CEAS_AFO_ScoreCard_Questions
    });
    element.recordId = 4;
    getInspectionQuestions.mockResolvedValue(SCORE_CARD_DATA);
    document.body.appendChild(element);
    jest.runAllTimers(); //runs all setTimeout methods

    //Act
    await flushPromises(); //wait for the component to finish rendering
    const questionId = element.section4Questions[indexValue].Id;
    const radioGroup = element.shadowRoot.querySelector(
      `[data-item="${questionId}"]`
    );
    radioGroup.dispatchEvent(CHANGE_EVENT_NO);
    await flushPromises(); //wait for event to finish

    //Assert
    const x = element.shadowRoot.querySelector('[data-id="0"]');
    expect(x).toHaveClass(expectedClass);
  });

  //after looking at your code... this is an example of testing multiple scenarios
  test.each([
    [1, "Question"],
    [7, "Question"]
  ])("handleSection5Change", async (indexValue, expectedClass) => {
    //Arrange
    jest.useFakeTimers();
    const element = createElement("c--c-e-a-s_-a-f-o_-score-card_-questions", {
      is: CEAS_AFO_ScoreCard_Questions
    });
    element.recordId = 4;
    getInspectionQuestions.mockResolvedValue(SCORE_CARD_DATA);
    document.body.appendChild(element);
    jest.runAllTimers(); //runs all setTimeout methods

    //Act
    await flushPromises(); //wait for the component to finish rendering
    const questionId = element.section5Questions[indexValue].inspquestion.Id;
    const radioGroup = element.shadowRoot.querySelector(
      `[data-item="${questionId}"]`
    );
    radioGroup.dispatchEvent(CHANGE_EVENT_NO);
    await flushPromises(); //wait for event to finish

    //Assert
    const x = element.shadowRoot.querySelector('[data-id="0"]');
    expect(x).toHaveClass(expectedClass);
  });

  //after looking at your code... this is an example of testing multiple scenarios
  test.each([[0, "Question"]])(
    "handleSection6Change",
    async (indexValue, expectedClass) => {
      //Arrange
      jest.useFakeTimers();
      const element = createElement(
        "c--c-e-a-s_-a-f-o_-score-card_-questions",
        {
          is: CEAS_AFO_ScoreCard_Questions
        }
      );
      element.recordId = 4;
      getInspectionQuestions.mockResolvedValue(SCORE_CARD_DATA);
      document.body.appendChild(element);
      jest.runAllTimers(); //runs all setTimeout methods

      //Act
      await flushPromises(); //wait for the component to finish rendering
      const questionId = element.section6Questions[indexValue].Id;
      const radioGroup = element.shadowRoot.querySelector(
        `[data-item="${questionId}"]`
      );
      radioGroup.dispatchEvent(CHANGE_EVENT_NO);
      await flushPromises(); //wait for event to finish

      //Assert
      const x = element.shadowRoot.querySelector('[data-id="0"]');
      expect(x).toHaveClass(expectedClass);
    }
  );

  //after looking at your code... this is an example of testing multiple scenarios
  test.each([[0, "Question"]])(
    "handleSection7Change",
    async (indexValue, expectedClass) => {
      //Arrange
      jest.useFakeTimers();
      const element = createElement(
        "c--c-e-a-s_-a-f-o_-score-card_-questions",
        {
          is: CEAS_AFO_ScoreCard_Questions
        }
      );
      element.recordId = 4;
      getInspectionQuestions.mockResolvedValue(SCORE_CARD_DATA);
      document.body.appendChild(element);
      jest.runAllTimers(); //runs all setTimeout methods

      //Act
      await flushPromises(); //wait for the component to finish rendering
      const questionId = element.section7Questions[indexValue].Id;
      const radioGroup = element.shadowRoot.querySelector(
        `[data-item="${questionId}"]`
      );
      radioGroup.dispatchEvent(CHANGE_EVENT_NO);
      await flushPromises(); //wait for event to finish

      //Assert
      const x = element.shadowRoot.querySelector('[data-id="0"]');
      expect(x).toHaveClass(expectedClass);
    }
  );

  //after looking at your code... this is an example of testing multiple scenarios
  test.each([[0, "Question"]])(
    "handleSection8Change",
    async (indexValue, expectedClass) => {
      //Arrange
      jest.useFakeTimers();
      const element = createElement(
        "c--c-e-a-s_-a-f-o_-score-card_-questions",
        {
          is: CEAS_AFO_ScoreCard_Questions
        }
      );
      element.recordId = 4;
      getInspectionQuestions.mockResolvedValue(SCORE_CARD_DATA);
      document.body.appendChild(element);
      jest.runAllTimers(); //runs all setTimeout methods

      //Act
      await flushPromises(); //wait for the component to finish rendering
      const questionId = element.section8Questions[indexValue].Id;
      const radioGroup = element.shadowRoot.querySelector(
        `[data-item="${questionId}"]`
      );
      radioGroup.dispatchEvent(CHANGE_EVENT_NO);
      await flushPromises(); //wait for event to finish

      //Assert
      const x = element.shadowRoot.querySelector('[data-id="0"]');
      expect(x).toHaveClass(expectedClass);
    }
  );

  //after looking at your code... this is an example of testing multiple scenarios
  test.each([[0, "Question"]])(
    "handleSection9Change",
    async (indexValue, expectedClass) => {
      //Arrange
      jest.useFakeTimers();
      const element = createElement(
        "c--c-e-a-s_-a-f-o_-score-card_-questions",
        {
          is: CEAS_AFO_ScoreCard_Questions
        }
      );
      element.recordId = 4;
      getInspectionQuestions.mockResolvedValue(SCORE_CARD_DATA);
      document.body.appendChild(element);
      jest.runAllTimers(); //runs all setTimeout methods

      //Act
      await flushPromises(); //wait for the component to finish rendering
      const questionId = element.section9Questions[indexValue].Id;
      const radioGroup = element.shadowRoot.querySelector(
        `[data-item="${questionId}"]`
      );
      radioGroup.dispatchEvent(CHANGE_EVENT_NO);
      await flushPromises(); //wait for event to finish

      //Assert
      const x = element.shadowRoot.querySelector('[data-id="0"]');
      expect(x).toHaveClass(expectedClass);
    }
  );
});

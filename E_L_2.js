const MainScrptQues = [
  {
    id: 1,
    q: "Calculate Net income & EPS. ",
    options: [],
    answer: 4,
    notID: 1,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    timeValues: "https://drive.google.com/file/d/1Pub1iP9byprNvqcSSxS_b2L3RSoiD8AN/view?usp=sharing",
    essayScenario: "https://drive.google.com/file/d/1WwJdYYr9-jnz5HvxUQ9ypYOvoccScgMb/view?usp=sharing",
    ansExplain:
      '<div class="ExplnAns">Correct answer D.</div> The annual report to shareholders is prepared in accordance with generally accepted accounting principles and is designed to provide information that is pertinent to investors and other external users. Managers responsible for operating activities use internal reports designed to provide information about various aspects of internal functions that measure the effectiveness and efficiency of operations. ',
  },
  {
  id: 2,
  q: "Calculate Comprehensive income. ",
  options: [],
  answer: 4,
  notID: 2,
  yourAns: "",
  yourNote: "",
  yourChck: "",
  id2: 1,
  timeValues: "https://drive.google.com/file/d/1Pub1iP9byprNvqcSSxS_b2L3RSoiD8AN/view?usp=sharing",
  essayScenario: "https://drive.google.com/file/d/1WwJdYYr9-jnz5HvxUQ9ypYOvoccScgMb/view?usp=sharing",
  ansExplain:
    '<div class="ExplnAns">Correct answer D.</div> The annual report to shareholders is prepared in accordance with generally accepted accounting principles and is designed to provide information that is pertinent to investors and other external users. Managers responsible for operating activities use internal reports designed to provide information about various aspects of internal functions that measure the effectiveness and efficiency of operations. ',
  },
  {
    id: 3,
    q: "Mention 2 other comprehensive income. ",
    options: [],
    answer: 4,
    notID: 3,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    timeValues: "https://drive.google.com/file/d/1Pub1iP9byprNvqcSSxS_b2L3RSoiD8AN/view?usp=sharing",
    essayScenario: "https://drive.google.com/file/d/1WwJdYYr9-jnz5HvxUQ9ypYOvoccScgMb/view?usp=sharing",
    ansExplain:
      '<div class="ExplnAns">Correct answer D.</div> The annual report to shareholders is prepared in accordance with generally accepted accounting principles and is designed to provide information that is pertinent to investors and other external users. Managers responsible for operating activities use internal reports designed to provide information about various aspects of internal functions that measure the effectiveness and efficiency of operations. ',
    },
    {
      id: 4,
      q: "There are two format to prepare comprehensive income, Which format do you prefer? Discuss. ",
      options: [],
      answer: 4,
      notID: 4,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      timeValues: "https://drive.google.com/file/d/1Pub1iP9byprNvqcSSxS_b2L3RSoiD8AN/view?usp=sharing",
      essayScenario: "https://drive.google.com/file/d/1WwJdYYr9-jnz5HvxUQ9ypYOvoccScgMb/view?usp=sharing",
      ansExplain:
        '<div class="ExplnAns">Correct answer D.</div> The annual report to shareholders is prepared in accordance with generally accepted accounting principles and is designed to provide information that is pertinent to investors and other external users. Managers responsible for operating activities use internal reports designed to provide information about various aspects of internal functions that measure the effectiveness and efficiency of operations. ',
    },
    {
        id: 5,
        q: "What is the appropriate accounting treatment for changing in accounting methods and changing in accounting principles. ",
        options: [],
        answer: 4,
        notID: 5,
        yourAns: "",
        yourNote: "",
        yourChck: "",
        id2: 1,
        timeValues: "https://drive.google.com/file/d/1Pub1iP9byprNvqcSSxS_b2L3RSoiD8AN/view?usp=sharing",
        essayScenario: "https://drive.google.com/file/d/1WwJdYYr9-jnz5HvxUQ9ypYOvoccScgMb/view?usp=sharing",
        ansExplain:
          '<div class="ExplnAns">Correct answer D.</div> The annual report to shareholders is prepared in accordance with generally accepted accounting principles and is designed to provide information that is pertinent to investors and other external users. Managers responsible for operating activities use internal reports designed to provide information about various aspects of internal functions that measure the effectiveness and efficiency of operations. ',
    }

];
function updateElementWithArrayCount(array) {
  var count = array.length;

  // Multiply by 5
  var result = count * 5;

  if (result > 360) {
    result = 360;
  }

  var element = document.getElementById("timeinmins");

  if (element) {
    element.textContent = result;
  } else {
    console.error("Element not found");
  }
}
updateElementWithArrayCount(MainScrptQues);

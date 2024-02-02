const MainScrptQues = [
  {
    id: 1,
    q: "Explain the five key steps in the risk management process.",
    options: [],
    answer: 4,
    notID: 1,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    timeValues: "https://drive.google.com/file/d/1Pub1iP9byprNvqcSSxS_b2L3RSoiD8AN/view?usp=sharing",
    essayScenario: "https://drive.google.com/file/d/1N8MEU8EmtAXkTOeSTuWhcoRtntKWVObl/view?usp=sharing",
    ansExplain:
      '<div class="ExplnAns">Correct answer D.</div>',
  },
  {
  id: 2,
  q: "Use Paul’s case to describe and explain inherent risk and residual risk.",
  options: [],
  answer: 4,
  notID: 2,
  yourAns: "",
  yourNote: "",
  yourChck: "",
  id2: 1,
  timeValues: "https://drive.google.com/file/d/1Pub1iP9byprNvqcSSxS_b2L3RSoiD8AN/view?usp=sharing",
  essayScenario: "https://drive.google.com/file/d/1N8MEU8EmtAXkTOeSTuWhcoRtntKWVObl/view?usp=sharing",
  ansExplain:
    '<div class="ExplnAns">Correct answer D.</div>',
  },
  {
    id: 3,
    q: "List five factors that should be considered in selecting and implementing risk responses.",
    options: [],
    answer: 4,
    notID: 3,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    timeValues: "https://drive.google.com/file/d/1Pub1iP9byprNvqcSSxS_b2L3RSoiD8AN/view?usp=sharing",
    essayScenario: "https://drive.google.com/file/d/1N8MEU8EmtAXkTOeSTuWhcoRtntKWVObl/view?usp=sharing",
    ansExplain:
      '<div class="ExplnAns">Correct answer D.</div>',
    },
    {
      id: 4,
      q: "Determine the type(s) of risk response(s) reflected in Baldwin’s controls.",
      options: [],
      answer: 4,
      notID: 4,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      timeValues: "https://drive.google.com/file/d/1Pub1iP9byprNvqcSSxS_b2L3RSoiD8AN/view?usp=sharing",
      essayScenario: "https://drive.google.com/file/d/1N8MEU8EmtAXkTOeSTuWhcoRtntKWVObl/view?usp=sharing",
      ansExplain:
        '<div class="ExplnAns">Correct answer D.</div>',
    },
    {
        id: 5,
        q: "Assume that Paul changes to an electronic payment method, such as credit cards, for all transactions. What risk response(s) is (are) reflected in the new policy?",
        options: [],
        answer: 4,
        notID: 5,
        yourAns: "",
        yourNote: "",
        yourChck: "",
        id2: 1,
        timeValues: "https://drive.google.com/file/d/1Pub1iP9byprNvqcSSxS_b2L3RSoiD8AN/view?usp=sharing",
        essayScenario: "https://drive.google.com/file/d/1N8MEU8EmtAXkTOeSTuWhcoRtntKWVObl/view?usp=sharing",
        ansExplain:
          '<div class="ExplnAns">Correct answer D.</div>',
    },
    {
      id: 6,
      q: "Define risk profile?",
      options: [],
      answer: 4,
      notID: 5,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      timeValues: "https://drive.google.com/file/d/1Pub1iP9byprNvqcSSxS_b2L3RSoiD8AN/view?usp=sharing",
      essayScenario: "https://drive.google.com/file/d/1N8MEU8EmtAXkTOeSTuWhcoRtntKWVObl/view?usp=sharing",
      ansExplain:
        '<div class="ExplnAns">Correct answer D.</div>',
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

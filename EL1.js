const MainScrptQues = [
  {
    id: 1,
    q: "What is the primary objective of financial accounting, and who are the main users of financial statements? ",
    options: [],
    answer: 4,
    notID: 1,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    timeValues: "https://drive.google.com/file/d/1ouac4VuGglNCo6i3exVJM9BoYXpZsU5o/view?usp=sharing",
    essayScenario: "https://drive.google.com/file/d/1Pub1iP9byprNvqcSSxS_b2L3RSoiD8AN/view?usp=sharing",
    ansExplain:
      '<div class="ExplnAns">Correct answer D.</div> The annual report to shareholders is prepared in accordance with generally accepted accounting principles and is designed to provide information that is pertinent to investors and other external users. Managers responsible for operating activities use internal reports designed to provide information about various aspects of internal functions that measure the effectiveness and efficiency of operations. ',
  },
];
function updateElementWithArrayCount(array) {
  var count = array.length;

  // Multiply by 2
  var result = count * 2;

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

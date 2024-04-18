const MainScrptQues = [
  {
    id: 1,
    q: "Assume that the controller did not notify the CEO and CFO about inventory obsolescence and losses on purchase commitments. Explain the ethical implications of the controller’s apparent lack of action by discussing specific standards (competence, confidentiality, integrity, and credibility) of the IMA Statement of Ethical Professional Practice.",
    options: [],
    answer: 4,
    notID: 1,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    timeValues: "https://drive.google.com/file/d/1Pub1iP9byprNvqcSSxS_b2L3RSoiD8AN/view?usp=sharing",
    essayScenario: "https://drive.google.com/file/d/1it1S3q_87g8pL_TdH5AXFUMSLOkgB8V_/view?usp=sharing",
    ansExplain:
      '<div class="ExplnAns">Correct answer D.</div>',
  },
  {
  id: 2,
  q: "Assume Marian Nevins believes the controller has acted unethically and not notified the CEO and CFO of the findings. Describe the steps that she should take to resolve the matter. Use the Resolving Ethical Issues section of the IMA Statement of Ethical Professional Practice to support your answer.",
  options: [],
  answer: 4,
  notID: 2,
  yourAns: "",
  yourNote: "",
  yourChck: "",
  id2: 1,
  timeValues: "https://drive.google.com/file/d/1Pub1iP9byprNvqcSSxS_b2L3RSoiD8AN/view?usp=sharing",
  essayScenario: "https://drive.google.com/file/d/1it1S3q_87g8pL_TdH5AXFUMSLOkgB8V_/view?usp=sharing",
  ansExplain:
    '<div class="ExplnAns">Correct answer D.</div>',
  },
  {
    id: 3,
    q: "Describe actions that Heart Health Procedures can take to improve the ethical culture of the company.",
    options: [],
    answer: 4,
    notID: 3,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    timeValues: "https://drive.google.com/file/d/1Pub1iP9byprNvqcSSxS_b2L3RSoiD8AN/view?usp=sharing",
    essayScenario: "https://drive.google.com/file/d/1it1S3q_87g8pL_TdH5AXFUMSLOkgB8V_/view?usp=sharing",
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

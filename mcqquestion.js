const MainScrptQues = [
  {
    id: 1,
    q: "Which of the following events cannot be quantified into dollars and cents and recorded as an accounting transaction?",
    options: [
      "A. The appointment of a new CPA firm to perform an audit.",
      "B. The purchase of a new computer.",
      "C. The sale of store equipment.",
      "D. Payment of income taxes."
    ],
    answer: 1,
    notID: 1,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain:
      '<div class="ExplnAns">Correct answer: A</div>'
  },
  {
    id: 2,
    q: "The name given to entering transaction data in the journal is",
    options: [
      "A. chronicling.",
      "B. listing.",
      "C. posting.",
      "D. journalizing."
    ],
    answer: 4,
    notID: 2,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain:
      '<div class="ExplnAns">Correct answer: D</div>'
  },
  {
    id: 3,
    q: "The first step in the recording process is to",
    options: [
      "A. prepare financial statements.",
      "B. analyze each transaction for its effect on the accounts.",
      "C. post to a journal.",
      "D. prepare a trial balance."
    ],
    answer: 2,
    notID: 3,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain:
      '<div class="ExplnAns">Correct answer: B</div>'
  },
  {
    id: 4,
    q: "debits",
    options: [
      "A. decrease both assets and liabilities.",
      "B. decrease assets and increase liabilities.",
      "C. increase both assets and liabilities.",
      "D. increase assets and decrease liabilities."
    ],
    answer: 4,
    notID: 4,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain:
      '<div class="ExplnAns">Correct answer: D</div>'
  },
  {
    id: 5,
    q: "Credits",
    options: [
      "A. decrease both assets and liabilities.",
      "B. decrease assets and increase liabilities.",
      "C. increase both assets and liabilities.",
      "D. increase assets and decrease liabilities."
    ],
    answer: 2,
    notID: 5,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain:
      '<div class="ExplnAns">Correct answer: B</div>'
  },
];
  
  
  function updateElementWithArrayCount(array) {
    var count = array.length;
  
    // Multiply by 2
    var result = count * 1;
  
    if (result > 360) {
        result = 360;
    }
  
    var element = document.getElementById('timeinmins');
  
    if (element) {
        element.textContent = result;
    } else {
        console.error('Element not found');
    }
  }
  updateElementWithArrayCount(MainScrptQues);
  

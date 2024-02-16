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
  {
    id: 6,
    q: "A credit to a liability account",
    options: [
      "A. indicates an increase in the amount owed to creditors.",
      "B. indicates a decrease in the amount owed to creditors.",
      "C. is an error.",
      "D. must be accompanied by a debit to an asset account."
    ],
    answer: 1,
    notID: 6,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain:
      '<div class="ExplnAns">Correct answer: A</div>'
  },
  {
    id: 7,
    q: "A debit to an asset account indicates",
    options: [
      "A. an error.",
      "B. a credit was made to a liability account.",
      "C. a decrease in the asset.",
      "D. an increase in the asset."
    ],
    answer: 4,
    notID: 7,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain:
      '<div class="ExplnAns">Correct answer: D</div>'
  },
  {
    id: 8,
    q: "Which of the following statements is true?",
    options: [
      "A. Debits increase assets and increase liabilities.",
      "B. Credits decrease assets and decrease liabilities.",
      "C. Credits decrease assets and increase liabilities.",
      "D. Debits decrease liabilities and decrease assets."
    ],
    answer: 3,
    notID: 8,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain:
      '<div class="ExplnAns">Correct answer: C</div>'
  },
  {
    id: 9,
    q: "The normal balance of any account is the",
    options: [
      "A. left side.",
      "B. side which decreases that account.",
      "C. right side.",
      "D. side which increases that account."
    ],
    answer: 4,
    notID: 9,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain:
      '<div class="ExplnAns">Correct answer: D</div>'
  },
  {
    id: 10,
    q: "On 1/14, Aly purchased supplies of $500 on account. The entry to record the purchase will include",
    options: [
      "A. a Dr. to Supplies and a Cr. to AP.",
      "B. a Dr. to Supplies Expense and a Cr. to AR.",
      "C. a Dr. to Supplies and a Cr. to Cash.",
      "D. a Dr. to AR and a Cr. to Supplies."
    ],
    answer: 1,
    notID: 10,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain:
      '<div class="ExplnAns">Correct answer: A</div>'
  }
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
  

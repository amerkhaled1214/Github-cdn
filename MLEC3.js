const MainScrptQues = [
  {
    id: 1,
    q: "Liabilities of a company would not include",
    options: [
      "A. notes payable.",
      "B. accounts payable.",
      "C. wages payable.",
      "D. cash"
    ],
    answer: 4,
    notID: 1,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain:
      '<div class="ExplnAns">Correct answer: D</div>'
  },
  {
    id: 2,
    q: "Owner's equity can be described as",
    options: [
      "A. creditors claim on total assets.",
      "B. ownership claim on total assets.",
      "C. benefactor's claim on total assets.",
      "D. debtor claim on total assets."
    ],
    answer: 2,
    notID: 2,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain:
      '<div class="ExplnAns">Correct answer: B</div>'
  },
  {
    id: 3,
    q: "Owner's equity is best depicted by the following:",
    options: [
      "A. Assets = Liabilities.",
      "B. Liabilities + Assets.",
      "C. Residual equity + Assets.",
      "D. Assets – Liabilities."
    ],
    answer: 4,
    notID: 3,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain:
      '<div class="ExplnAns">Correct answer: D</div>'
  },
  {
    id: 4,
    q: "Capital is",
    options: [
      "A. an owner's permanent investment in the business.",
      "B. equal to liabilities minus owner's equity.",
      "C. equal to assets minus owner's equity.",
      "D. equal to liabilities plus drawings."
    ],
    answer: 1,
    notID: 4,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain:
      '<div class="ExplnAns">Correct answer: A</div>'
  },
  {
    id: 5,
    q: "The correct order to present current assets according to US GAAP is",
    options: [
      "A. cash, accounts receivable, prepaid items, inventories.",
      "B. inventories, receivables, prepaid items, cash.",
      "C. cash, inventories, accounts receivable, prepaid items.",
      "D. inventories, prepaid items, accounts receivable, cash."
    ],
    answer: 1,
    notID: 5,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain:
      '<div class="ExplnAns">Correct answer: A</div>'
  },
  {
    id: 6,
    q: "The basis for classifying assets as current or noncurrent is conversion to cash within",
    options: [
      "A. the accounting cycle or one year, whichever is shorter.",
      "B. the operating cycle or one year, whichever is longer.",
      "C. the accounting cycle or one year, whichever is longer.",
      "D. the operating cycle or one year, whichever is shorter."
    ],
    answer: 2,
    notID: 6,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain:
      '<div class="ExplnAns">Correct answer: B</div>'
  },
  {
    id: 7,
    q: "The current assets section of the statement of financial position should include",
    options: [
      "A. machinery.",
      "B. patents.",
      "C. goodwill.",
      "D. inventory."
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
    q: "Each of the following are an intangible asset except",
    options: [
      "A. copyrights.",
      "B. goodwill.",
      "C. plant expansion fund.",
      "D. trademarks."
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
    q: "Which of the following is not an acceptable major asset classification?",
    options: [
      "A. Current assets",
      "B. Investments",
      "C. Property, plant, and equipment",
      "D. Deferred charges"
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
    q: "Within the statement of financial position where should the account non-controlling interest (minority interest) be reported?",
    options: [
      "A. Non-current assets.",
      "B. Non-current liabilities.",
      "C. Equity.",
      "D. Current liabilities."
    ],
    answer: 3,
    notID: 10,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain:
      '<div class="ExplnAns">Correct answer: C</div>'
  }
];
  
  
  function updateElementWithArrayCount(array) {
    var count = array.length;
  
    // Multiply by 2
    var result = count * 2;
  
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
  

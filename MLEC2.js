  const MainScrptQues = [
    {
      id: 1,
      q: "All of the following are defined as elements of an income statement except",
      options: [
        "A. Expenses.",
        "B. Shareholders’ equity.",
        "C. Gains and losses.",
        "D. Revenues."
      ],
      answer: 2,
      notID: 1,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      ansExplain:
        '<div class="ExplnAns">Correct answer: B. Shareholders’ equity.</div>',
    },
  
    {
      id: 2,
      q: "Which of the following equations expresses the definition of 'income'?",
      options: [
        "A. Income = Revenues – Expenses",
        "B. Income = (Revenues + Gains) – (Expenses + Losses)",
        "C. Income = Revenues + Gains",
        "D. Income = Gains – Losses"
      ],
      answer: 3,
      notID: 2,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      ansExplain:
        '<div class="ExplnAns">Correct answer: C. Income = Revenues + Gains </div>',
    },
  
    {
      id: 3,
      q: "Which of the following is not required to be presented on the income statement under IFRS?",
      options: [
        "A. Revenue.",
        "B. Other gains/losses.",
        "C. Finance costs.",
        "D. Tax expense."
      ],
      answer: 2,
      notID: 3,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      ansExplain:
        '<div class="ExplnAns">Correct answer: B. Other gains/losses </div>',
    },
  
    {
      id: 4,
      q: "Revenues are",
      options: [
        "A. The cost of assets consumed during the period.",
        "B. Gross increases in owner's equity resulting from business activities.",
        "C. The cost of services used during the period.",
        "D. Actual or expected cash outflows."
      ],
      answer: 2,
      notID: 4,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      ansExplain:
        '<div class="ExplnAns">Correct answer: B. Gross increases in owner\'s equity resulting from business activities.</div>',
    },
  
    {
      id: 5,
      q: "The definition of expenses includes",
      options: [
        "A. Losses only.",
        "B. Expenses and losses.",
        "C. Expenses only.",
        "D. Expenses, losses and unrealized losses on available-for-sale securities."
      ],
      answer: 2,
      notID: 5,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      ansExplain:
        '<div class="ExplnAns">Correct answer: B. Expenses and losses.</div>',
    },
  
    {
      id: 6,
      q: "If services are rendered for credit, then",
      options: [
        "A. Assets will decrease.",
        "B. Liabilities will increase.",
        "C. Owner's equity will increase.",
        "D. Liabilities will decrease."
      ],
      answer: 3,
      notID: 6,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      ansExplain:
        '<div class="ExplnAns">Correct answer: C. Owner\'s equity will increase.</div>',
    },
  
    {
      id: 7,
      q: "Which of the following is not a selling expense?",
      options: [
        "A. Advertising expense.",
        "B. Office salaries expense.",
        "C. Freight-out.",
        "D. Store supplies consumed."
      ],
      answer: 2,
      notID: 7,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      ansExplain:
        '<div class="ExplnAns">Correct answer: B. Office salaries expense.</div>',
    },
  
    {
      id: 8,
      q: "Which of the following is included in comprehensive income?",
      options: [
        "A. Investments by owners.",
        "B. Unrealized gains on non-trading equity securities.",
        "C. Distributions to owners.",
        "D. Changes in accounting principles."
      ],
      answer: 2,
      notID: 8,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      ansExplain:
        '<div class="ExplnAns">Correct answer: B. Unrealized gains on non-trading equity securities.</div>',
    },
  
    {
      id: 9,
      q: "Comprehensive income includes all of the following except",
      options: [
        "A. Dividend revenue.",
        "B. Losses on disposal of assets.",
        "C. Investments by owners.",
        "D. Unrealized holding gains."
      ],
      answer: 3,
      notID: 9,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      ansExplain:
        '<div class="ExplnAns">Correct answer: "C. Investments by owners."</div>',
    },
  
    {
      id: 10,
      q: "Comprehensive income includes all of the following, except",
      options: [
        "A. Revenues and gains.",
        "B. Expenses and losses.",
        "C. Preference share dividends.",
        "D. Unrealized gains and losses on non-trading equity securities."
      ],
      answer: 3,
      notID: 10,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      ansExplain:
        '<div class="ExplnAns">Correct answer: C. Preference share dividends.</div>',
    },
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
  

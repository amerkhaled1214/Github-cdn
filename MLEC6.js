const MainScrptQues = [
  {
    id: 1,
    q: "Which of the following is not considered cash for financial reporting purposes?",
    options: [
      "A. Petty cash funds and change funds",
      "B. Money orders, certified checks, and personal checks",
      "C. Coin, currency, and available funds",
      "D. Postdated checks and I.O.U.’s"
    ],
    answer: 4,
    notID: 1,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain: '<div class="ExplnAns">Correct answer: D (Postdated checks and I.O.U.’s)</div>'
  },
  {
    id: 2,
    q: "All of the following may be included under the heading of “cash” except",
    options: [
      "A. currency.",
      "B. money market funds.",
      "C. checking account balance.",
      "D. savings account balance."
    ],
    answer: 4,
    notID: 2,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain: '<div class="ExplnAns">Correct answer: D (savings account balance.)</div>'
  },
  {
    id: 3,
    q: "In which account are post-dated checks received classified?",
    options: [
      "A. Receivables",
      "B. Prepaid expenses",
      "C. Cash",
      "D. Payables"
    ],
    answer: 1,
    notID: 3,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain: '<div class="ExplnAns">Correct answer: A (Receivables)</div>'
  },
  {
    id: 4,
    q: "In which account are postage stamps classified?",
    options: [
      "A. Cash",
      "B. Supplies",
      "C. Receivables",
      "D. Inventory"
    ],
    answer: 2,
    notID: 4,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain: '<div class="ExplnAns">Correct answer: B (Supplies)</div>'
  },
  {
    id: 5,
    q: "Consider the following: Cash in Bank – checking account of €13,500, Cash on hand of $500, Post-dated checks received totaling €3,500, and Certificates of deposit totaling $124,000. How much should be reported as cash in the statement of financial position?",
    options: [
      "A. €13,500.",
      "B. €14,000.",
      "C. €17,500.",
      "D. €131,500."
    ],
    answer: 2,
    notID: 5,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain: '<div class="ExplnAns">Correct answer: B (€14,000.)</div>'
  },
  {
    id: 6,
    q: "If a petty cash fund is established in the amount of $250, and contains $150 in cash and $95 in receipts for disbursements when it is replenished, the journal entry to record replenishment should include credits to the following accounts",
    options: [
      "A. Petty Cash, $75.",
      "B. Petty Cash, $100.",
      "C. Cash, $95; Cash Over and Short, $5.",
      "D. Cash, $100."
    ],
    answer: 4,
    notID: 6,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain: '<div class="ExplnAns">Correct answer: D (Cash, $100)</div>'
  },
  {
    id: 7,
    q: "Under which section of the statement of financial position is “cash restricted for plant expansion” reported?",
    options: [
      "A. Current assets",
      "B. Non-current assets",
      "C. Current liabilities",
      "D. Equity"
    ],
    answer: 2,
    notID: 7,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain: '<div class="ExplnAns">Correct answer: B (Non-current assets)</div>'
  },
  {
    id: 8,
    q: "Bank overdrafts generally should be",
    options: [
      "A. reported as a deduction from the current asset section.",
      "B. reported as a deduction from cash.",
      "C. netted against cash and a net cash amount reported.",
      "D. reported as a current liability."
    ],
    answer: 4,
    notID: 8,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain: '<div class="ExplnAns">Correct answer: D (reported as a current liability)</div>'
  },
  {
    id: 9,
    q: "What is the normal journal entry for recording bad debt expense under the allowance method?",
    options: [
      "A. Debit Allowance for Doubtful Accounts, credit Accounts Receivable",
      "B. Debit Allowance for Doubtful Accounts, credit Bad Debt Expense",
      "C. Debit Bad Debt Expense, credit Allowance for Doubtful Accounts",
      "D. Debit Accounts Receivable, credit Allowance for Doubtful Accounts"
    ],
    answer: 3,
    notID: 9,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain: '<div class="ExplnAns">Correct answer: C (Debit Bad Debt Expense, credit Allowance for Doubtful Accounts)</div>'
  },
  {
    id: 10,
    q: "What is the normal journal entry when writing-off an account as uncollectible under the allowance method?",
    options: [
      "A. Debit Allowance for Doubtful Accounts, credit Accounts Receivable",
      "B. Debit Allowance for Doubtful Accounts, credit Bad Debt Expense",
      "C. Debit Bad Debt Expense, credit Allowance for Doubtful Accounts",
      "D. Debit Accounts Receivable, credit Allowance for Doubtful Accounts"
    ],
    answer: 1,
    notID: 10,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain: '<div class="ExplnAns">Correct answer: A (Debit Allowance for Doubtful Accounts, credit Accounts Receivable)</div>'
  }
];
  
  
  function updateElementWithArrayCount(array) {
    var count = array.length;
  
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
  

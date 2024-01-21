const MainScrptQues = [
    {
      id: 1,
      q: "Accountants refer to an economic event as a:",
      options: [
        "A. purchase.",
        "B. sale.",
        "C. transaction.",
        "D. changes in ownership."
      ],
      answer: 3,
      notID: 1,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      ansExplain:
        '<div class="ExplnAns">Correct answer: C. transaction.</div>',
    },
  
    {
      id: 2,
      q: "The financial statement that provides a summary of the firm’s operations for a period of time is the:",
      options: [
        "A. Income statement.",
        "B. Statement of financial position.",
        "C. Statement of shareholders’ equity.",
        "D. Statement of retained earnings."
      ],
      answer: 1,
      notID: 2,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      ansExplain:
        '<div class="ExplnAns">Correct answer: A. Income statement.</div>',
    },
  
    {
      id: 3,
      q: "Net income results when:",
      options: [
        "A. Assets > Liabilities.",
        "B. Revenues = Expenses.",
        "C. Revenues > Expenses.",
        "D. Revenues < Expenses."
      ],
      answer: 3,
      notID: 3,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      ansExplain:
        '<div class="ExplnAns">Correct answer: C. Revenues > Expenses.</div>',
    },
  
    {
      id: 4,
      q: "A net loss will result during a time period when:",
      options: [
        "A. Liabilities exceed assets.",
        "B. Drawings exceed investments.",
        "C. Expenses exceed revenues.",
        "D. Revenues exceed expenses."
      ],
      answer: 3,
      notID: 4,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      ansExplain:
        '<div class="ExplnAns">Correct answer: C. Expenses exceed revenues.</div>',
    },
  
    {
      id: 5,
      q: "When total revenues = total expense:",
      options: [
        "A. There is net income.",
        "B. There is net loss.",
        "C. There isn’t any result.",
        "D. Total assets > total equities."
      ],
      answer: 3,
      notID: 5,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      ansExplain:
        '<div class="ExplnAns">Correct answer: C. There isn’t any result.</div>',
    },
  
    {
      id: 6,
      q: "A balance sheet shows:",
      options: [
        "A. Revenues, liabilities, and owner's equity.",
        "B. Expenses, drawings, and owner's equity.",
        "C. Revenues, expenses, and drawings.",
        "D. Assets, liabilities, and owner's equity."
      ],
      answer: 4,
      notID: 6,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      ansExplain:
        '<div class="ExplnAns">Correct answer: D. Assets, liabilities, and owner's equity.</div>',
    },
  
    {
      id: 7,
      q: "The balance sheet is frequently referred to as:",
      options: [
        "A. An operating statement.",
        "B. The statement of financial position.",
        "C. The statement of cash flows.",
        "D. The statement of owner's equity."
      ],
      answer: 2,
      notID: 7,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      ansExplain:
        '<div class="ExplnAns">Correct answer: B. The statement of financial position.</div>',
    },
  
    {
      id: 8,
      q: "GAAP stands for:",
      options: [
        "A. Generally Accepted Auditing Procedures.",
        "B. Generally Accepted Accounting Principles.",
        "C. Generally Accepted Auditing Principles.",
        "D. Generally Accepted Accounting Procedures."
      ],
      answer: 2,
      notID: 8,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      ansExplain:
        '<div class="ExplnAns">Correct answer: B. Generally Accepted Accounting Principles.</div>',
    },
  
    {
      id: 9,
      q: "An objective of financial reporting is:",
      options: [
        "A. Providing information useful to investors, creditors, donors, and other users for decision making.",
        "B. Assessing the adequacy of internal control.",
        "C. Evaluating management results compared with standards.",
        "D. Providing information on compliance with established procedures."
      ],
      answer: 1,
      notID: 9,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      ansExplain:
        '<div class="ExplnAns">Correct answer: A. Providing information useful to investors, creditors, donors, and other users for decision making.</div>',
    },
  
    {
      id: 10,
      q: "Which basis of accounting is most likely to provide the best assessment of an entity’s past and future ability to generate net cash inflows?",
      options: [
        "A. Cash basis of accounting.",
        "B. Modified cash basis of accounting.",
        "C. Accrual basis of accounting.",
        "D. Tax basis of accounting."
      ],
      answer: 3,
      notID: 10,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      ansExplain:
        '<div class="ExplnAns">Correct answer: C. Accrual basis of accounting.</div>',
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
  
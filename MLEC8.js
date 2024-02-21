const MainScrptQues = [
  {
    id: 1,
    q: "Which of the following is not a major characteristic of a plant asset?",
    options: [
      "A. Possesses physical substance",
      "B. Acquired for resale",
      "C. Acquired for use",
      "D. Long-term in nature"
    ],
    answer: 2,
    notID: 1,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain: '<div class="ExplnAns">Correct answer: B (Acquired for resale)</div>'
  },
  {
    id: 2,
    q: "Which of these is not a major characteristic of a plant asset?",
    options: [
      "A. Possesses physical substance",
      "B. Acquired for use in operations",
      "C. Long-term in nature",
      "D. All of these are major characteristics of a plant asset."
    ],
    answer: 4,
    notID: 2,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain: '<div class="ExplnAns">Correct answer: D (All of these are major characteristics of a plant asset.)</div>'
  },
  {
    id: 3,
    q: "The cost of land does not include",
    options: [
      "A. Costs of grading, filling, draining, and clearing.",
      "B. Costs of removing old buildings.",
      "C. Costs of improvements with limited lives.",
      "D. Special assessments."
    ],
    answer: 3,
    notID: 3,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain: '<div class="ExplnAns">Correct answer: C (Costs of improvements with limited lives.)</div>'
  },
  {
    id: 4,
    q: "Fences and parking lots are reported on the statement of financial position as",
    options: [
      "A. Current assets.",
      "B. Land improvements.",
      "C. Land.",
      "D. Property and equipment."
    ],
    answer: 2,
    notID: 4,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain: '<div class="ExplnAns">Correct answer: B (Land improvements.)</div>'
  },
  {
    id: 5,
    q: "Which of the following costs are capitalized for self-constructed assets?",
    options: [
      "A. Materials and labor only",
      "B. Labor and overhead only",
      "C. Materials and overhead only",
      "D. Materials, labor, and overhead"
    ],
    answer: 4,
    notID: 5,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain: '<div class="ExplnAns">Correct answer: D (Materials, labor, and overhead)</div>'
  },
  {
    id: 6,
    q: "Which of the following is not a capital expenditure?",
    options: [
      "A. Repairs that maintain an asset in operating condition",
      "B. An addition",
      "C. A betterment",
      "D. A replacement"
    ],
    answer: 1,
    notID: 6,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain: '<div class="ExplnAns">Correct answer: A (Repairs that maintain an asset in operating condition)</div>'
  },
  {
    id: 7,
    q: "The sale of a depreciable asset resulting in a loss indicates that the proceeds from the sale were",
    options: [
      "A. Less than current fair value.",
      "B. Greater than cost.",
      "C. Greater than book value.",
      "D. Less than book value."
    ],
    answer: 3,
    notID: 7,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain: '<div class="ExplnAns">Correct answer: C (Greater than book value.)</div>'
  },
  {
    id: 8,
    q: "The activity method of depreciation",
    options: [
      "A. Is a variable charge approach.",
      "B. Assumes that depreciation is a function of the passage of time.",
      "C. Conceptually associates cost in terms of input measures.",
      "D. All of these answer choices are correct."
    ],
    answer: 1,
    notID: 8,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain: '<div class="ExplnAns">Correct answer: A (All of these answer choices are correct.)</div>'
  },
  {
    id: 9,
    q: "Use of the sum-of-the-years'-digits method",
    options: [
      "A. Results in residual value being ignored.",
      "B. Means the denominator is the years remaining at the beginning of the year.",
      "C. Means the book value should not be reduced below residual value.",
      "D. All of these answer choices are correct."
    ],
    answer: 3,
    notID: 9,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain: '<div class="ExplnAns">Correct answer: C (Means the book value should not be reduced below residual value.)</div>'
  },
  {
    id: 10,
    q: "Worthington Chandler Company purchased equipment for $10,000. Sales tax on the purchase was $500. Other costs incurred were freight charges of $200, repairs of $350 for damage during installation, and installation costs of $225. What is the cost of the equipment?",
    options: [
      "A. $10,000",
      "B. $10,500",
      "C. $10,925",
      "D. $11,275"
    ],
    answer: 3,
    notID: 10,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain: '<div class="ExplnAns">Correct answer: C ($10,925)</div>'
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
  

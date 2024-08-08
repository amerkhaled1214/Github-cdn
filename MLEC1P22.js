const MainScrptQues = [
  {
      "id": 1,
      "q": "Management accounting differs from financial accounting in that financial accounting is",
      "options": [
          "A. More oriented toward the future.",
          "B. Primarily concerned with external financial reporting.",
          "C. Primarily concerned with nonquantitative information.",
          "D. Heavily involved with decision analysis and implementation of decisions."
      ],
      "answer": 2,
      "notID": 1,
      "yourAns": "",
      "yourNote": "",
      "yourChck": "",
      "id2": 1,
      "ansExplain": '<div class="ExplnAns">Correct answer: B. Primarily concerned with external financial reporting.</div>'
  },
  {
      "id": 2,
      "q": "Which of the following is true regarding the comparison of managerial and financial accounting?",
      "options": [
          "A. Managerial accounting is generally more precise.",
          "B. Managerial accounting has a past focus, and financial accounting has a future focus.",
          "C. The emphasis on managerial accounting is relevance, and the emphasis on financial accounting is timeliness.",
          "D. Managerial accounting need not follow generally accepted accounting principles (GAAP), while financial accounting must follow them."
      ],
      "answer": 4,
      "notID": 2,
      "yourAns": "",
      "yourNote": "",
      "yourChck": "",
      "id2": 1,
      "ansExplain": '<div class="ExplnAns">Correct answer: D. Managerial accounting need not follow generally accepted accounting principles (GAAP), while financial accounting must follow them.</div>'
  },
  {
      "id": 3,
      "q": "Which one of the following costs should NOT be considered an indirect cost of serving a particular customer at a Dairy Queen fast food outlet?",
      "options": [
          "A. the cost of the hamburger patty in the burger they ordered.",
          "B. the wages of the employee who takes the customer's order.",
          "C. the cost of heating and lighting the kitchen.",
          "D. the salary of the outlet's manager."
      ],
      "answer": 1,
      "notID": 3,
      "yourAns": "",
      "yourNote": "",
      "yourChck": "",
      "id2": 1,
      "ansExplain": '<div class="ExplnAns">Correct answer: A. the cost of the hamburger patty in the burger they ordered.</div>'
  },
  {
      "id": 4,
      "q": "An example of a nonmanufacturing cost is:",
      "options": [
          "A. fire insurance on a factory building.",
          "B. salary of a factory supervisor.",
          "C. direct materials.",
          "D. rent on a headquarters building."
      ],
      "answer": 4,
      "notID": 4,
      "yourAns": "",
      "yourNote": "",
      "yourChck": "",
      "id2": 1,
      "ansExplain": '<div class="ExplnAns">Correct answer: D. rent on a headquarters building.</div>'
  },
  {
      "id": 5,
      "q": "Prime cost consists of direct materials combined with:",
      "options": [
          "A. direct labor.",
          "B. manufacturing overhead.",
          "C. indirect materials.",
          "D. COGM."
      ],
      "answer": 1,
      "notID": 5,
      "yourAns": "",
      "yourNote": "",
      "yourChck": "",
      "id2": 1,
      "ansExplain": '<div class="ExplnAns">Correct answer: A. direct labor.</div>'
  },
  {
      "id": 6,
      "q": "Cost drivers are",
      "options": [
          "A. Activities that cause costs to increase as the activity increases.",
          "B. Accounting techniques used to control costs.",
          "C. Accounting measurements used to evaluate whether or not performance is proceeding according to plan.",
          "D. A mechanical basis, such as machine hours, computer time, size of equipment, or square footage offactory, used to assign costs to activities."
      ],
      "answer": 1,
      "notID": 6,
      "yourAns": "",
      "yourNote": "",
      "yourChck": "",
      "id2": 1,
      "ansExplain": '<div class="ExplnAns">Correct answer: A. Activities that cause costs to increase as the activity increases.</div>'
  },
  {
      "id": 7,
      "q": "Which one of the following items would not be considered a manufacturing cost?",
      "options": [
          "A. Cream for an ice cream maker.",
          "B. Sales commissions for a car manufacturer.",
          "C. Plant property taxes for an ice cream maker.",
          "D. Tires for an automobile manufacturer."
      ],
      "answer": 2,
      "notID": 7,
      "yourAns": "",
      "yourNote": "",
      "yourChck": "",
      "id2": 1,
      "ansExplain": '<div class="ExplnAns">Correct answer: B. Sales commissions for a car manufacturer.</div>'
  },
  {
      "id": 8,
      "q": "A cost that always can be directly traced to a cost object is",
      "options": [
          "A. A variable cost.",
          "B. An indirect cost.",
          "C. A conversion cost.",
          "D. A prime cost."
      ],
      "answer": 4,
      "notID": 8,
      "yourAns": "",
      "yourNote": "",
      "yourChck": "",
      "id2": 1,
      "ansExplain": '<div class="ExplnAns">Correct answer: D. A prime cost.</div>'
  },
  {
      "id": 9,
      "q": "Conversion costs are",
      "options": [
          "A. Manufacturing costs incurred to produce units of output.",
          "B. All costs associated with manufacturing other than direct labor costs and raw material costs.",
          "C. The sum of direct labor costs and all factory overhead costs.",
          "D. The sum of raw materials costs and direct labor costs."
      ],
      "answer": 3,
      "notID": 9,
      "yourAns": "",
      "yourNote": "",
      "yourChck": "",
      "id2": 1,
      "ansExplain": '<div class="ExplnAns">Correct answer: C. The sum of direct labor costs and all factory overhead costs.</div>'
  },
  {
      "id": 10,
      "q": "In cost terminology, conversion costs consist of",
      "options": [
          "A. Direct and indirect labor.",
          "B. Direct labor and direct materials.",
          "C. Direct labor and factory overhead.",
          "D. Indirect labor and variable factory overhead."
      ],
      "answer": 3,
      "notID": 10,
      "yourAns": "",
      "yourNote": "",
      "yourChck": "",
      "id2": 10,
      "ansExplain": '<div class="ExplnAns">Correct answer: C. Direct labor and factory overhead.</div>'
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
  
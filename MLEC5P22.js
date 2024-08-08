const MainScrptQues = [
    {
        "id": 1,
        "q": "An imputed cost is",
        "options": [
            "A. The difference in total costs that results from selecting one alternative instead of another.",
            "B. A cost that cannot be avoided because it has already been incurred.",
            "C. A cost that does not entail any dollar outlay but is relevant to the decision-making process.",
            "D. A cost that continues to be incurred even though there is no activity."
        ],
        "answer": 3,
        "notID": 1,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: C. A cost that does not entail any dollar outlay but is relevant to the decision-making process.</div>'
    },
    {
        "id": 2,
        "q": "The sum of the costs necessary to effect a one-unit increase in the activity level is a(n)",
        "options": [
            "A. Differential cost.",
            "B. Opportunity cost.",
            "C. Marginal cost.",
            "D. Incremental cost."
        ],
        "answer": 3,
        "notID": 2,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: C. Marginal cost.</div>'
    },
    {
        "id": 3,
        "q": "A cost that may be eliminated by performing an activity more efficiently is a(n)",
        "options": [
            "A. Opportunity cost.",
            "B. Avoidable cost.",
            "C. Cost driver.",
            "D. Indirect cost."
        ],
        "answer": 2,
        "notID": 3,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: B. Avoidable cost.</div>'
    },
    {
        "id": 4,
        "q": "Controllable costs are costs that",
        "options": [
            "A. Management decides to incur in the current period to enable the company to achieve objectives other than the filling of orders placed by customers.",
            "B. Are likely to respond to the amount of attention devoted to them by a specified manager.",
            "C. Fluctuate in total in response to small changes in the rate of utilization of capacity.",
            "D. Will be unaffected by current managerial decisions."
        ],
        "answer": 2,
        "notID": 4,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: B. Are likely to respond to the amount of attention devoted to them by a specified manager.</div>'
    },
    {
        "id": 5,
        "q": "Which of the following is a period cost rather than a product cost of a manufacturer?",
        "options": [
            "A. Direct materials.",
            "B. Variable overhead.",
            "C. Fixed overhead.",
            "D. Abnormal spoilage."
        ],
        "answer": 4,
        "notID": 5,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: D. Abnormal spoilage.</div>'
    },
    {
        "id": 6,
        "q": "Abnormal spoilage",
        "options": [
            "A. Cannot occur when perfection standards are used.",
            "B. Is not usually controllable by the production supervisor.",
            "C. Results from unrealistic production standards.",
            "D. Is not expected to occur under efficient operating conditions."
        ],
        "answer": 4,
        "notID": 6,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: D. Is not expected to occur under efficient operating conditions.</div>'
    },
    {
        "id": 7,
        "q": "Spoilage that is not expected to occur under normal, efficient operating conditions is considered",
        "options": [
            "A. Abnormal spoilage.",
            "B. Actual spoilage.",
            "C. Normal spoilage.",
            "D. Residual spoilage."
        ],
        "answer": 1,
        "notID": 7,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: A. Abnormal spoilage.</div>'
    },
    {
        "id": 8,
        "q": "The cost associated with abnormal spoilage ordinarily is charged to",
        "options": [
            "A. Inventory.",
            "B. A material variance account.",
            "C. Manufacturing overhead.",
            "D. A special loss account."
        ],
        "answer": 4,
        "notID": 8,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: D. A special loss account.</div>'
    },
    {
        "id": 9,
        "q": "When compared with normal spoilage, abnormal spoilage",
        "options": [
            "A. Arises more frequently from factors that are inherent in the manufacturing process.",
            "B. Is given the same accounting treatment as normal spoilage.",
            "C. Is generally thought to be more controllable by production management than normal spoilage.",
            "D. Is not typically influenced by the \u201ctightness\u201d of production standards."
        ],
        "answer": 3,
        "notID": 9,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: C. Is generally thought to be more controllable by production management than normal spoilage.</div>'
    },
    {
        "id": 10,
        "q": "The costs of quality that are incurred in detecting units of product that do not conform to product specifications are referred to as",
        "options": [
            "A. Preventive costs.",
            "B. Appraisal costs.",
            "C. Internal failure costs.",
            "D. External failure costs."
        ],
        "answer": 2,
        "notID": 10,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: B. Appraisal costs.</div>'
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
  
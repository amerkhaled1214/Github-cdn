const MainScrptQues = [
    {
        "id": 1,
        "q": "The master budget process usually begins with the",
        "options": [
            "A. Production budget.",
            "B. Operating budget.",
            "C. Financial budget.",
            "D. Sales budget."
        ],
        "answer": 4,  
        "notID": 1,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: D. Sales budget.</div>'
    },
    {
        "id": 2,
        "q": "The operating budget process usually begins with the",
        "options": [
            "A. Financial budget.",
            "B. Balance sheet.",
            "C. Income statement.",
            "D. Sales budget."
        ],
        "answer": 4,  
        "notID": 2,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: D. Sales budget.</div>'
    },
    {
        "id": 3,
        "q": "When preparing the series of annual operating budgets, management usually starts the process with the",
        "options": [
            "A. Cash budget.",
            "B. Balance sheet.",
            "C. Capital budget.",
            "D. Sales budget."
        ],
        "answer": 4,  
        "notID": 3,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: D. Sales budget.</div>'
    },
    {
        "id": 4,
        "q": "The foundation of a profit plan is the",
        "options": [
            "A. Capital budget.",
            "B. Sales forecast.",
            "C. Cost and expense budget.",
            "D. Production plan."
        ],
        "answer": 2,  
        "notID": 4,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: B. Sales forecast.</div>'
    },
    {
        "id": 5,
        "q": "Which one of following budgets is regarded as the foundation of the master budget?",
        "options": [
            "A. Production.",
            "B. Sales.",
            "C. Operating.",
            "D. Cash."
        ],
        "answer": 2,  
        "notID": 5,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: B. Sales.</div>'
    },
    {
        "id": 6,
        "q": "The budget that is usually the most difficult to forecast is the",
        "options": [
            "A. Production budget.",
            "B. Expense budget.",
            "C. Sales budget.",
            "D. Manufacturing overhead budget."
        ],
        "answer": 3,  
        "notID": 6,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: C. Sales budget.</div>'
    },
    {
        "id": 7,
        "q": "The production budget process usually begins with the",
        "options": [
            "A. Direct labor budget.",
            "B. Direct materials budget.",
            "C. Manufacturing overhead budget.",
            "D. Sales budget."
        ],
        "answer": 4,  
        "notID": 7,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: D. Sales budget.</div>'
    },
    {
        "id": 8,
        "q": "Which of the following is normally included in the operating budget?",
        "options": [
            "A. Capital budget.",
            "B. Cash budget.",
            "C. Selling expense budget.",
            "D. Budgeted balance sheet."
        ],
        "answer": 3,  
        "notID": 8,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: C. Selling expense budget.</div>'
    },
    {
        "id": 9,
        "q": "In preparing a corporate master budget, which one of the following is most likely to be prepared last?",
        "options": [
            "A. Sales budget.",
            "B. Cash budget.",
            "C. Production budget.",
            "D. Cost of goods sold budget."
        ],
        "answer": 2,  
        "notID": 9,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: B. Cash budget.</div>'
    },
    {
        "id": 10,
        "q": "The financial budget process includes",
        "options": [
            "A. The cash budget.",
            "B. The capital budget.",
            "C. The budgeted statement of cash flows.",
            "D. All of the answers are correct."
        ],
        "answer": 3,  
        "notID": 10,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: C. The budgeted statement of cash flows.</div>'
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
  
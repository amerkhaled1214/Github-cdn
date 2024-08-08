const MainScrptQues = [
    {
        "id": 1,
        "q": "In a responsibility accounting system, managers are accountable for",
        "options": [
            "A. Variable costs but not for fixed costs.",
            "B. Product costs but not for period costs.",
            "C. Incremental costs.",
            "D. Costs over which they have significant influence."
        ],
        "answer": 4,  
        "notID": 1,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: D. Costs over which they have significant influence.</div>'
    },
    {
        "id": 2,
        "q": "The maintenance department of a hotel would be considered a(n)",
        "options": [
            "A. Cost center.",
            "B. Revenue center.",
            "C. Profit center.",
            "D. Investment center."
        ],
        "answer": 1,  
        "notID": 2,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 2,
        "ansExplain": '<div class="ExplnAns">Correct answer: A. Cost center.</div>'
    },
    {
        "id": 3,
        "q": "Responsibility accounting defines an operating center that is responsible for revenue and costs as a(n)",
        "options": [
            "A. Profit center.",
            "B. Revenue center.",
            "C. Division.",
            "D. Operating unit."
        ],
        "answer": 1,  
        "notID": 3,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 3,
        "ansExplain": '<div class="ExplnAns">Correct answer: A. Profit center.</div>'
    },
    {
        "id": 4,
        "q": "Which one of the following best identifies a profit center?",
        "options": [
            "A. The Information Technology Department of a large consumer products company.",
            "B. A large toy company.",
            "C. The Production Operations Department of a small job-order machine shop company.",
            "D. A new car sales division for a large local auto agency."
        ],
        "answer": 4,  
        "notID": 4,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 4,
        "ansExplain": '<div class="ExplnAns">Correct answer: D. A new car sales division for a large local auto agency.</div>'
    },
    {
        "id": 5,
        "q": "A manager who is accountable for both income statement and balance sheet items is responsible for a(n)",
        "options": [
            "A. Cost center.",
            "B. Investment center.",
            "C. Profit center.",
            "D. Revenue center."
        ],
        "answer": 2,  
        "notID": 5,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 5,
        "ansExplain": '<div class="ExplnAns">Correct answer: B. Investment center.</div>'
    },
    {
        "id": 6,
        "q": "A plan that is created using budgeted revenue and costs but is based on the actual units of output is known as a",
        "options": [
            "A. Continuous budget.",
            "B. Flexible budget.",
            "C. Strategic plan.",
            "D. Static budget."
        ],
        "answer": 2,  
        "notID": 6,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 6,
        "ansExplain": '<div class="ExplnAns">Correct answer: B. Flexible budget.</div>'
    },
    {
        "id": 7,
        "q": "Making segment disclosures is an advantage to a company because it",
        "options": [
            "A. Facilitates evaluation of company management by providing data on particular segments.",
            "B. Eliminates the interdependence of segments.",
            "C. Masks the effect of intersegment transfers.",
            "D. Provides competitors with comparative information on the company’s performance."
        ],
        "answer": 1,  
        "notID": 7,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 7,
        "ansExplain": '<div class="ExplnAns">Correct answer: A. Facilitates evaluation of company management by providing data on particular segments.</div>'
    },
    {
        "id": 8,
        "q": "In evaluating an investment center, top management should concentrate on",
        "options": [
            "A. Dollar sales.",
            "B. Net income.",
            "C. Profit percentages.",
            "D. Return on investment."
        ],
        "answer": 4,  
        "notID": 8,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 8,
        "ansExplain": '<div class="ExplnAns">Correct answer: D. Return on investment.</div>'
    },
    {
        "id": 9,
        "q": "Using the balanced scorecard approach, an organization evaluates managerial performance based on",
        "options": [
            "A. A single ultimate measure of operating results, such as residual income.",
            "B. Multiple financial and nonfinancial measures.",
            "C. Multiple nonfinancial measures only.",
            "D. Multiple financial measures only."
        ],
        "answer": 2,  
        "notID": 9,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 9,
        "ansExplain": '<div class="ExplnAns">Correct answer: B. Multiple financial and nonfinancial measures.</div>'
    },
    {
        "id": 10,
        "q": "The balanced scorecard provides an action plan for achieving competitive success by focusing management attention on critical success factors. Which one of the following is not one of the perspectives on the business into which critical success factors are commonly grouped in the balanced scorecard?",
        "options": [
            "A. Competitor business strategies.",
            "B. Financial performance.",
            "C. Internal business processes.",
            "D. Employee innovation and learning."
        ],
        "answer": 1,  
        "notID": 10,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 10,
        "ansExplain": '<div class="ExplnAns">Correct answer: A. Competitor business strategies.</div>'
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
  
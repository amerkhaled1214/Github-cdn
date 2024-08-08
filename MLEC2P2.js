const MainScrptQues = [
    {
        "id": 1,
        "q": "Cost behavior refers to:",
        "options": [
            "A. how costs react to a change in the level of activity",
            "B. whether a cost is incurred in a manufacturing, merchandising, or service company",
            "C. classifying costs as either direct or indirect costs",
            "D. classifying costs as either manufacturing or nonmanufacturing costs"
        ],
        "answer": 1,
        "notID": 1,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: A. how costs react to a change in the level of activity.</div>'
    },
    {
        "id": 2,
        "q": "Variable costs:",
        "options": [
            "A. are always indirect costs",
            "B. increase in total when the actual level of activity increases",
            "C. include most personnel costs and depreciation on machinery",
            "D. can always be traced directly to the cost object"
        ],
        "answer": 2,
        "notID": 2,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 2,
        "ansExplain": '<div class="ExplnAns">Correct answer: B. increase in total when the actual level of activity increases.</div>'
    },
    {
        "id": 3,
        "q": "The VC per unit:",
        "options": [
            "A. remains constant as activity changes.",
            "B. increases as activity increases.",
            "C. decreases as activity increases.",
            "D. can increase or decrease as the activity changes."
        ],
        "answer": 1,
        "notID": 3,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 3,
        "ansExplain": '<div class="ExplnAns">Correct answer: A. remains constant as activity changes.</div>'
    },
    {
        "id": 4,
        "q": "Which one of the following is a variable cost for an insurance company?",
        "options": [
            "A. rent",
            "B. president's salary",
            "C. sales commissions",
            "D. property taxes"
        ],
        "answer": 3,
        "notID": 4,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 4,
        "ansExplain": '<div class="ExplnAns">Correct answer: C. sales commissions.</div>'
    },
    {
        "id": 5,
        "q": "Which of the following is a fixed cost for an automobile manufacturing plant?",
        "options": [
            "A. administrative salaries",
            "B. electricity used by assembly-line machines",
            "C. sales commissions",
            "D. windows for each car produced"
        ],
        "answer": 1,
        "notID": 5,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 5,
        "ansExplain": '<div class="ExplnAns">Correct answer: A. administrative salaries.</div>'
    },
    {
        "id": 6,
        "q": "If each car requires a driving wheel that costs $800 and 2,000 cars are produced for the month, the total cost for driving wheels is:",
        "options": [
            "A. considered to be a direct fixed cost",
            "B. considered to be a direct variable cost",
            "C. considered to be an indirect fixed cost",
            "D. considered to be an indirect variable cost"
        ],
        "answer": 2,
        "notID": 6,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 6,
        "ansExplain": '<div class="ExplnAns">Correct answer: B. considered to be a direct variable cost.</div>'
    },
    {
        "id": 7,
        "q": "Within the relevant range, if there is a change in the level of the cost driver, then",
        "options": [
            "A. fixed and variable costs per unit will change",
            "B. fixed and variable costs per unit will remain the same",
            "C. fixed costs per unit will remain the same and variable costs per unit will change",
            "D. fixed costs per unit will change and variable costs per unit will remain the same"
        ],
        "answer": 2,
        "notID": 7,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 7,
        "ansExplain": '<div class="ExplnAns">Correct answer: B. fixed and variable costs per unit will remain the same.</div>'
    },
    {
        "id": 8,
        "q": "The difference between variable costs and fixed costs is:",
        "options": [
            "A. Variable costs per unit fluctuate and fixed costs per unit remain constant.",
            "B. Variable costs per unit are fixed over the relevant range and fixed costs per unit are variable.",
            "C. Total variable costs are variable over the relevant range and fixed in the long term, while fixed costs never change.",
            "D. Variable costs per unit change in varying increments, while fixed costs per unit change in equal increments."
        ],
        "answer": 1,
        "notID": 8,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 8,
        "ansExplain": '<div class="ExplnAns">Correct answer: A. Variable costs per unit fluctuate and fixed costs per unit remain constant.</div>'
    },
    {
        "id": 9,
        "q": "Which of the following is the best example of a variable cost?",
        "options": [
            "A. The corporate president\u2019s salary.",
            "B. Cost of raw material.",
            "C. Interest charges.",
            "D. Property taxes."
        ],
        "answer": 2,
        "notID": 9,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 9,
        "ansExplain": '<div class="ExplnAns">Correct answer: B. Cost of raw material.</div>'
    },
    {
        "id": 10,
        "q": "Which one of the following is correct regarding a relevant range?",
        "options": [
            "A. Total variable costs will not change.",
            "B. TFCs will not change.",
            "C. Actual fixed costs usually fall outside the relevant range.",
            "D. The relevant range cannot be changed after being established."
        ],
        "answer": 2,
        "notID": 10,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 10,
        "ansExplain": '<div class="ExplnAns">Correct answer: B. TFCs will not change.</div>'
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
  
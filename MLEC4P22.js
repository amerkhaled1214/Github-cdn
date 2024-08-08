const MainScrptQues = [
    {
        "id": 1,
        "q": "If a company is operating at the break-even point:",
        "options": [
            "A. its contribution margin will be equal to its variable expenses.",
            "B. its margin of safety will be equal to zero.",
            "C. its fixed expenses will be equal to its variable expenses.",
            "D. its selling price will be equal to its variable expense per unit."
        ],
        "answer": 2,
        "notID": 1,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: B. its margin of safety will be equal to zero.</div>'
    },
    {
        "id": 2,
        "q": "At the break-even point:",
        "options": [
            "A. sales would be equal to contribution margin.",
            "B. contribution margin would be equal to fixed expenses.",
            "C. contribution margin would be equal to net operating income.",
            "D. sales would be equal to fixed expenses."
        ],
        "answer": 2,
        "notID": 2,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: B. contribution margin would be equal to fixed expenses.</div>'
    },
    {
        "id": 3,
        "q": "Break-even analysis assumes that:",
        "options": [
            "A. Total revenue is constant.",
            "B. Unit variable expense is constant.",
            "C. Unit fixed expense is constant.",
            "D. Selling prices must fall in order to generate more revenue."
        ],
        "answer": 2,
        "notID": 3,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: B. Unit variable expense is constant.</div>'
    },
    {
        "id": 4,
        "q": "Target profit analysis is used to answer which of the following questions?",
        "options": [
            "A. What sales volume is needed to cover all expenses?",
            "B. What sales volume is needed to cover fixed expenses?",
            "C. What sales volume is needed to earn a specific amount of net operating income?",
            "D. What sales volume is needed to avoid a loss?"
        ],
        "answer": 3,
        "notID": 4,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: C. What sales volume is needed to earn a specific amount of net operating income?</div>'
    },
    {
        "id": 5,
        "q": "The margin of safety can be calculated by:",
        "options": [
            "A. Sales \u2212 (Fixed expenses/Contribution margin ratio).",
            "B. Sales \u2212 (Fixed expenses/Variable expense per unit).",
            "C. Sales \u2212 (Fixed expenses + Variable expenses).",
            "D. Sales \u2212 Net operating income."
        ],
        "answer": 1,
        "notID": 5,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: A</div>'
    },
    {
        "id": 6,
        "q": "If the degree of operating leverage is 4, then a one percent change in quantity sold should result in a four percent change in:",
        "options": [
            "A. unit contribution margin.",
            "B. revenue.",
            "C. variable expense.",
            "D. net operating income."
        ],
        "answer": 4,
        "notID": 6,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: D. net operating income.</div>'
    },
    {
        "id": 7,
        "q": "Which of the following is the correct calculation for the degree of operating leverage?",
        "options": [
            "A. net operating income divided by total expenses.",
            "B. net operating income divided by total contribution margin.",
            "C. total contribution margin divided by net operating income.",
            "D. variable expense divided by total contribution margin."
        ],
        "answer": 3,
        "notID": 7,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: C. total contribution margin divided by net operating income.</div>'
    },
    {
        "id": 8,
        "q": "Which of the following is an assumption underlying standard CVP analysis?",
        "options": [
            "A. In multiproduct companies, the sales mix is constant.",
            "B. In manufacturing companies, inventories always change.",
            "C. The price of a product or service is expected to change as volume changes.",
            "D. Fixed expenses will change as volume increases."
        ],
        "answer": 1,
        "notID": 8,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: A. In multiproduct companies, the sales mix is constant.</div>'
    },
    {
        "id": 9,
        "q": "Mariam Company sells a single product at a selling price of $30 per unit. Variable cost is $12 per unit and fixed cost are $41,400. Mariam's break-even point is:",
        "options": [
            "A. 1,380 units",
            "B. 2,300 units",
            "C. 3,450 units",
            "D. 6,900 units"
        ],
        "answer": 2,
        "notID": 9,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: B. 2,300 units.</div>'
    },
    {
        "id": 10,
        "q": "Sales total $200,000 when variable costs total $150,000 and fixed costs total $30,000. The breakeven point in sales dollars is:",
        "options": [
            "A. $200,000",
            "B. $120,000",
            "C. $40,000",
            "D. $30,000"
        ],
        "answer": 2,
        "notID": 10,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: B. $120,000.</div>'
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
  
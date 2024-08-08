const MainScrptQues = [
    {
        "id": 1,
        "q": "Cost A is a fixed cost; cost B is a variable cost. During the current year, the activity level has increased but is still within the relevant range. In terms of cost per unit of activity, we would expect that:",
        "options": [
            "A. Cost A has remained unchanged.",
            "B. Cost B has decreased.",
            "C. Cost A has decreased.",
            "D. Cost B has increased."
        ],
        "answer": 4,
        "notID": 1,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 1,
        "ansExplain": '<div class="ExplnAns">Correct answer: D. Cost B has increased.</div>'
    },
    {
        "id": 2,
        "q": "Which costs will change with a decrease in activity within the relevant range?",
        "options": [
            "A. TFCs and total variable cost.",
            "B. Unit fixed costs and total variable cost.",
            "C. Unit variable cost and unit fixed cost.",
            "D. Unit fixed cost and TFC."
        ],
        "answer": 2,
        "notID": 2,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 2,
        "ansExplain": '<div class="ExplnAns">Correct answer: B. Unit fixed costs and total variable cost.</div>'
    },
    {
        "id": 3,
        "q": "An increase in the activity level within the relevant range results in:",
        "options": [
            "A. an increase in fixed cost per unit.",
            "B. a proportionate increase in TFCs.",
            "C. an unchanged fixed cost per unit.",
            "D. a decrease in fixed cost per unit."
        ],
        "answer": 4,
        "notID": 3,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 3,
        "ansExplain": '<div class="ExplnAns">Correct answer: D. a decrease in fixed cost per unit.</div>'
    },
    {
        "id": 4,
        "q": "The linear equation Y = a + bX is often used to express cost formulas. In this equation:",
        "options": [
            "A. The b term represents VC of activity.",
            "B. The a term represents variable cost in total.",
            "C. The X term represents total cost.",
            "D. The Y term represents TFC."
        ],
        "answer": 1,
        "notID": 4,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 4,
        "ansExplain": '<div class="ExplnAns">Correct answer: A. The b term represents VC of activity.</div>'
    },
    {
        "id": 5,
        "q": "Using the following data for August:\nDirect materials $35,000\nDirect labor $15,000\nManufacturing overhead $42,000\nBeginning work in process inventory $14,000\nEnding work in process inventory $17,000\nThe total Cost of goods manufactured is:",
        "options": [
            "A. $106,000",
            "B. $92,000",
            "C. $95,000",
            "D. $89,000"
        ],
        "answer": 4,
        "notID": 5,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 5,
        "ansExplain": '<div class="ExplnAns">Correct answer: D. $89,000.</div>'
    },
    {
        "id": 6,
        "q": "During August, the COGM was $73,000. The beginning finished goods inventory was $15,000 and the ending finished goods inventory was $21,000. What was the cost of goods sold for the month?",
        "options": [
            "A. $79,000",
            "B. $109,000",
            "C. $67,000",
            "D. $73,000"
        ],
        "answer": 3,
        "notID": 6,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 6,
        "ansExplain": '<div class="ExplnAns">Correct answer: C.</div>'
    },
    {
        "id": 7,
        "q": "The following inventory balances relate to Mostafa Manufacturing Corporation:\nBeg.\tEnd.\nMaterial inventory\t14,000\t19,000\nWorking in process\t31,000\t7,000\nFinished goods\t25,000\t23,000\nMostafa\u2019s total manufacturing cost was $543,000. What was Mostafa\u2019s cost of goods sold?",
        "options": [
            "A. $517,000",
            "B. $545,000",
            "C. $569,000",
            "D. $567,000"
        ],
        "answer": 3,
        "notID": 7,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 7,
        "ansExplain": '<div class="ExplnAns">Correct answer: C.</div>'
    },
    {
        "id": 8,
        "q": "Mostafa Company is a merchandising firm. Next month the company expects to sell 800 units. The following data describe the company's revenue and cost structure:\nSelling price per unit $40\nSales commission 5% of sales\nPurchase price (cost) per unit $18\nAdvertising cost $4,000 per month\nAdministrative expense $4,500 per month plus 15% of sales\n\nThe expected gross margin next month is:",
        "options": [
            "A. $17,600",
            "B. $11,200",
            "C. $14,400",
            "D. $16,000"
        ],
        "answer": 1,
        "notID": 8,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 8,
        "ansExplain": '<div class="ExplnAns">Correct answer: A.</div>'
    },
    {
        "id": 9,
        "q": "The expected contribution margin next month is:",
        "options": [
            "A. $17,600",
            "B. $11,200",
            "C. $14,400",
            "D. $16,000"
        ],
        "answer": 2,
        "notID": 9,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 9,
        "ansExplain": '<div class="ExplnAns">Correct answer: B.</div>'
    },
    {
        "id": 10,
        "q": "The expected net operating income next month is:",
        "options": [
            "A. $7,500",
            "B. $5,100",
            "C. $1,700",
            "D. $11,200"
        ],
        "answer": 3,
        "notID": 10,
        "yourAns": "",
        "yourNote": "",
        "yourChck": "",
        "id2": 10,
        "ansExplain": '<div class="ExplnAns">Correct answer: C.</div>'
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
  
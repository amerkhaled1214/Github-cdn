const MainScrptQues = [
    {
        id: 1,
        q: "Costs which can be eliminated in whole or in part if a particular business segment is discontinued are called:",
        options: [
            "A. sunk costs.",
            "B. opportunity costs.",
            "C. avoidable costs.",
            "D. irrelevant costs."
        ],
        answer: 3, // C
        notID: 1,
        yourAns: "",
        yourNote: "",
        yourChck: "",
        id2: 1,
        ansExplain: '<div class="ExplnAns">Correct answer: C. avoidable costs.</div>'
    },
    {
        id: 2,
        q: "Which of the following best describes an opportunity cost:",
        options: [
            "A. it is a relevant cost in decision making, but is not part of the traditional accounting records.",
            "B. it is not a relevant cost in decision making, but is part of the traditional accounting records.",
            "C. it is a relevant cost in decision making, and is part of the traditional accounting records.",
            "D. it is not a relevant cost in decision making, and is not part of the traditional accounting records."
        ],
        answer: 1, // A
        notID: 2,
        yourAns: "",
        yourNote: "",
        yourChck: "",
        id2: 2,
        ansExplain: '<div class="ExplnAns">Correct answer: A. it is a relevant cost in decision making, but is not part of the traditional accounting records.</div>'
    },
    {
        id: 3,
        q: "The acceptance of a special order will improve overall net operating income so long as the revenue from the special order exceeds:",
        options: [
            "A. the contribution margin on the order.",
            "B. the incremental costs associated with the order.",
            "C. the variable costs associated with the order.",
            "D. the sunk costs associated with the order."
        ],
        answer: 2, // B
        notID: 3,
        yourAns: "",
        yourNote: "",
        yourChck: "",
        id2: 3,
        ansExplain: '<div class="ExplnAns">Correct answer: B. the incremental costs associated with the order.</div>'
    },
    {
        id: 4,
        q: "Consider the following statements:\n1. Assemble all costs associated with each alternative being considered.\n2. Eliminate those costs that are sunk.\n3. Eliminate those costs that differ between alternatives.\nWhich of the above statements does not represent a step in identifying the relevant costs in a decision problem?",
        options: [
            "A. Only 1",
            "B. Only 2",
            "C. Only 3",
            "D. Only 1 and 3"
        ],
        answer: 3, // C
        notID: 4,
        yourAns: "",
        yourNote: "",
        yourChck: "",
        id2: 4,
        ansExplain: '<div class="ExplnAns">Correct answer: C. Only 3.</div>'
    },
    {
        id: 5,
        q: "Consider the following statements:\n1. A division's net operating income, after deducting both traceable and allocated common corporate costs, is negative.\n2. The division's avoidable fixed costs exceed its contribution margin.\n3. The division's traceable fixed costs plus its allocated common corporate costs exceed its contribution margin.\nWhich of the above statements give an economic reason for eliminating the division?",
        options: [
            "A. Only 1",
            "B. Only 2",
            "C. Only 3",
            "D. Only 1 and 2"
        ],
        answer: 2, // B
        notID: 5,
        yourAns: "",
        yourNote: "",
        yourChck: "",
        id2: 5,
        ansExplain: '<div class="ExplnAns">Correct answer: B. Only 2.</div>'
    },
    {
        id: 6,
        q: "Kinsi Corporation manufactures five different products. All five of these products must pass through a stamping machine in its fabrication department. This machine is Kinsi's constrained resource. Kinsi would make the most profit if it produces the product that:",
        options: [
            "A. uses the lowest number of stamping machine hours.",
            "B. generates the highest contribution margin per unit.",
            "C. generates the highest contribution margin ratio.",
            "D. generates the highest contribution margin per stamping machine hour."
        ],
        answer: 4, // D
        notID: 6,
        yourAns: "",
        yourNote: "",
        yourChck: "",
        id2: 6,
        ansExplain: '<div class="ExplnAns">Correct answer: D. generates the highest contribution margin per stamping machine hour.</div>'
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
  
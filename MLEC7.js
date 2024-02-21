const MainScrptQues = [
  {
    id: 1,
    q: "Which of the following inventories carried by a manufacturer is similar to the merchandise inventory of a retailer?",
    options: [
      "A. Raw materials.",
      "B. Work-in-process.",
      "C. Finished goods.",
      "D. Supplies."
    ],
    answer: 3,
    notID: 1,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain: '<div class="ExplnAns">Correct answer: C (Finished goods)</div>'
  },
  {
    id: 2,
    q: "Where should raw materials be classified on the statement of financial position?",
    options: [
      "A. Prepaid expenses.",
      "B. Inventory.",
      "C. Equipment.",
      "D. Not on the statement of financial position."
    ],
    answer: 2,
    notID: 2,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain: '<div class="ExplnAns">Correct answer: B (Inventory)</div>'
  },
  {
    id: 3,
    q: "Why are inventories included in the computation of net income?",
    options: [
      "A. To determine cost of goods sold.",
      "B. To determine sales revenue.",
      "C. To determine merchandise returns.",
      "D. Inventories are not included in the computation of net income."
    ],
    answer: 1,
    notID: 3,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain: '<div class="ExplnAns">Correct answer: A (To determine cost of goods sold)</div>'
  },
  {
    id: 4,
    q: "Which of the following is a characteristic of a perpetual inventory system?",
    options: [
      "A. Inventory purchases are debited to a Purchases account.",
      "B. Inventory records are not kept for every item.",
      "C. Cost of goods sold is recorded with each sale.",
      "D. Cost of goods sold is determined as the amount of purchases less the change in inventory."
    ],
    answer: 3,
    notID: 4,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain: '<div class="ExplnAns">Correct answer: C (Cost of goods sold is recorded with each sale)</div>'
  },
  {
    id: 5,
    q: "What is consigned inventory?",
    options: [
      "A. Goods that are shipped, but title transfers to the receiver.",
      "B. Goods that are sold, but payment is not required until the goods are sold.",
      "C. Goods that are shipped, but title remains with the shipper.",
      "D. Goods that have been segregated for shipment to a customer."
    ],
    answer: 3,
    notID: 5,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain: '<div class="ExplnAns">Correct answer: C (Goods that are shipped, but title remains with the shipper)</div>'
  },
  {
    id: 6,
    q: "When using a perpetual inventory system,",
    options: [
      "A. no Purchases account is used.",
      "B. a Cost of Goods Sold account is used.",
      "C. two entries are required to record a sale.",
      "D. All of these are correct."
    ],
    answer: 4,
    notID: 6,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain: '<div class="ExplnAns">Correct answer: D (All of these are correct)</div>'
  },
  {
    id: 7,
    q: "Goods in transit which are shipped f.o.b. shipping point should be",
    options: [
      "A. included in the inventory of the seller.",
      "B. included in the inventory of the buyer.",
      "C. included in the inventory of the shipping company.",
      "D. None of these are correct."
    ],
    answer: 2,
    notID: 7,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain: '<div class="ExplnAns">Correct answer: B (included in the inventory of the buyer.)</div>'
  },
  {
    id: 8,
    q: "Goods in transit which are shipped f.o.b. destination should be",
    options: [
      "A. included in the inventory of the seller.",
      "B. included in the inventory of the buyer.",
      "C. included in the inventory of the shipping company.",
      "D. None of these are correct."
    ],
    answer: 1,
    notID: 8,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain: '<div class="ExplnAns">Correct answer: A (included in the inventory of the seller.)</div>'
  },
  {
    id: 9,
    q: "Lower-of-cost-or-net realizable value",
    options: [
      "A. gives the lowest valuation if applied to the total inventory.",
      "B. gives the lowest valuation if applied to major groups of inventory.",
      "C. gives the lowest valuation if applied to individual items of inventory.",
      "D. must be applied to major groups for taxes."
    ],
    answer: 3,
    notID: 9,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain: '<div class="ExplnAns">Correct answer: B (gives the lowest valuation if applied to individual items of inventory)</div>'
  },
  {
    id: 10,
    q: "Which of the following is not an acceptable method of applying the lower-of-cost-or-net realizable value method to inventory?",
    options: [
      "A. Inventory location.",
      "B. Groups of inventory items.",
      "C. Individual item.",
      "D. Total of the inventory."
    ],
    answer: 1,
    notID: 10,
    yourAns: "",
    yourNote: "",
    yourChck: "",
    id2: 1,
    ansExplain: '<div class="ExplnAns">Correct answer: A (Inventory location.)</div>'
  },
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
  

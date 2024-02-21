const MainScrptQues = [
  const MainScrptQues = [
    {
      id: 1,
      q: "Prepaid expenses are:",
      options: [
        "A. paid and recorded in an asset account before they are used or consumed.",
        "B. paid and recorded in an asset account after they are used or consumed.",
        "C. incurred but not yet paid or recorded.",
        "D. incurred and already paid or recorded."
      ],
      answer: 1,
      notID: 1,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      ansExplain: '<div class="ExplnAns">Correct answer: A (paid and recorded in an asset account before they are used or consumed)</div>'
    },
    {
      id: 2,
      q: "Unearned revenues are",
      options: [
        "A. received and recorded as liabilities before they are earned.",
        "B. earned and recorded as liabilities before they are received.",
        "C. earned but not yet received or recorded.",
        "D. earned and already received and recorded."
      ],
      answer: 1,
      notID: 2,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      ansExplain: '<div class="ExplnAns">Correct answer: A (received and recorded as liabilities before they are earned)</div>'
    },
    {
      id: 3,
      q: "Accrued expenses are",
      options: [
        "A. paid and recorded in an asset account before they are used or consumed.",
        "B. paid and recorded in an asset account after they are used or consumed.",
        "C. incurred but not yet paid or recorded.",
        "D. incurred and already paid or recorded."
      ],
      answer: 3,
      notID: 3,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      ansExplain: '<div class="ExplnAns">Correct answer: C (incurred but not yet paid or recorded)</div>'
    },
    {
      id: 4,
      q: "Accrued revenues are",
      options: [
        "A. received and recorded as liabilities before they are earned.",
        "B. earned and recorded as liabilities before they are received.",
        "C. earned but not yet received or recorded.",
        "D. earned and already received and recorded."
      ],
      answer: 3,
      notID: 4,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      ansExplain: '<div class="ExplnAns">Correct answer: C (earned but not yet received or recorded)</div>'
    },
    {
      id: 5,
      q: "Closing entries are necessary for",
      options: [
        "A. permanent accounts only.",
        "B. temporary accounts only.",
        "C. both permanent and temporary accounts.",
        "D. permanent or real accounts only."
      ],
      answer: 2,
      notID: 5,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      ansExplain: '<div class="ExplnAns">Correct answer: B. temporary accounts only.</div>'
    },
    {
      id: 6,
      q: "The closing entry process consists of closing:",
      options: [
        "A. all asset and liability accounts.",
        "B. out the owner's capital account.",
        "C. all permanent accounts.",
        "D. all temporary accounts."
      ],
      answer: 4,
      notID: 6,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      ansExplain: '<div class="ExplnAns">Correct answer: D (all temporary accounts)</div>'
    },
    {
      id: 7,
      q: "Each of the following accounts is closed to Income Summary except",
      options: [
        "A. Expenses.",
        "B. Owner's Drawing.",
        "C. Revenues.",
        "D. All of these are closed to Income Summary."
      ],
      answer: 2,
      notID: 7,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      ansExplain: '<div class="ExplnAns">Correct answer: B (Owner\'s Drawing)</div>'
    },
    {
      id: 8,
      q: "The final step in the accounting cycle is to prepare",
      options: [
        "A. closing entries.",
        "B. financial statements.",
        "C. a post-closing trial balance.",
        "D. adjusting entries."
      ],
      answer: 3,
      notID: 8,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      ansExplain: '<div class="ExplnAns">Correct answer: C (a post-closing trial balance.)</div>'
    },
    {
      id: 9,
      q: "The first required step in the accounting cycle is",
      options: [
        "A. reversing entries.",
        "B. journalizing transactions in the book of original entry.",
        "C. analyzing transactions.",
        "D. posting transactions."
      ],
      answer: 3,
      notID: 9,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      ansExplain: '<div class="ExplnAns">Correct answer: C (analyzing transactions)</div>'
    },
    {
      id: 10,
      q: "The balances that appear on the post-closing trial balance will match the",
      options: [
        "A. income statement account balances after adjustments.",
        "B. balance sheet account balances after closing entries.",
        "C. income statement account balances after closing entries.",
        "D. balance sheet account balances after adjustments."
      ],
      answer: 2,
      notID: 10,
      yourAns: "",
      yourNote: "",
      yourChck: "",
      id2: 1,
      ansExplain: '<div class="ExplnAns">Correct answer: B (B. balance sheet account balances after closing entries.)</div>'
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
  

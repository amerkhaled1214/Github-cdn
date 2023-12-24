// function dropTakQuz(open, close1, close2, clrOpn, clrClos1, clrClos2) {
//   document.getElementById(open).style.display = "block";
//   document.getElementById(close1).style.display = "none";
//   document.getElementById(close2).style.display = "none";
//   document.getElementById(clrOpn).classList.add("actvBTN");
//   document.getElementById(clrClos1).classList.remove("actvBTN");
//   document.getElementById(clrClos2).classList.remove("actvBTN");
//   checkAttempts();
// }
// document.getElementById("frstBtnsQuz").classList.add("actvBTN");

const MarkedInputxx = document.getElementById("MarkedInput");
const markedSearchDiv = document.getElementById("markedSearchDiv");

MarkedInputxx.addEventListener("input", function () {
  const filter = MarkedInputxx.value.toLowerCase();
  const MarkdFltr = document.querySelectorAll(
    "#marked-questions-container .ShowDelMrkdCls"
  );
  for (let i = 0; i < MarkdFltr.length; i++) {
    const searchQuMarkedShow = MarkdFltr[i]
      .querySelector(".markedQuestionShow")
      .textContent.toLowerCase();
    if (searchQuMarkedShow.includes(filter)) {
      MarkdFltr[i].style.display = "flex";
    } else {
      MarkdFltr[i].style.display = "none";
    }
  }
});

function hideMunQsaved() {
  if (markedSearchDiv.style.display === "block") {
    markedSearchDiv.style.display = "none";
  } else {
    markedSearchDiv.style.display = "block";
  }
}
var myDropdownV = document.getElementById("myDropdown");
myDropdownV.style.display = "none";
function showPrevAttFunc() {
  if (myDropdownV.style.display == "none") {
    myDropdownV.style.display = "block";
  } else {
    myDropdownV.style.display = "none";
  }
}
var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");
var startTimer = null;
function startTim() {
  function startInterval() {
    startTimer = setInterval(function () {
      timer();
    }, 1000);
  }
  startInterval();
}
function timer() {
  if (h.innerHTML == 0 && m.innerHTML == 0 && s.innerHTML == 0) {
    h.innerHTML = 0;
    m.innerHTML = 0;
    s.innerHTML = 0;
    document.getElementById("ClocIcon").style.pointerEvents = "none";
    document.getElementById("TimRem").innerHTML = "Time's up";
  } else if (s.innerHTML != 0) {
    s.innerHTML--;
  } else if (m.innerHTML != 0 && s.innerHTML == 0) {
    s.innerHTML = 59;
    m.innerHTML--;
  } else if (h.innerHTML != 0 && m.innerHTML == 0) {
    m.innerHTML = 60;
    h.innerHTML--;
  }
  return;
}
function stopInterval() {
  clearInterval(startTimer);
}
var TimRem = document.getElementById("TimRem");
var ClocIcon = document.getElementById("ClocIcon");
function pausTime() {
  if (TimRem.innerHTML == "Time Remaining") {
    stopInterval();
    TimRem.innerHTML = "Time Paused";
    TimRem.style.color = "#F78181";
    ClocIcon.style.color = "#F78181";
  } else {
    startTim();
    TimRem.innerHTML = "Time Remaining";
    TimRem.style.color = "#fff";
    ClocIcon.style.color = "#fff";
  }
}
let scrollInterval;

document
  .getElementById("scrollUpBtn")
  .addEventListener("mouseright", function () {
    scrollInterval = setInterval(function () {
      document.getElementById("lstBtns").scrollLeft -= 10;
    }, 10);
  });
document
  .getElementById("scrollDownBtn")
  .addEventListener("mouseleft", function () {
    scrollInterval = setInterval(function () {
      document.getElementById("lstBtns").scrollRight += 10;
    }, 10);
  });

document.getElementById("scrollUpBtn").addEventListener("click", function () {
  document.getElementById("lstBtns").scrollLeft -= 60;
});
document.getElementById("scrollDownBtn").addEventListener("click", function () {
  document.getElementById("lstBtns").scrollLeft += 60;
});

document.addEventListener("mouseup", function () {
  clearInterval(scrollInterval);
});
function del() {
  var x = document.getElementById("screen").value;
  document.getElementById("screen").value = x.substr(0, x.length - 1);
}
var NoteArea = document.getElementById("NoteArea");
var NotIcon = document.getElementById("NotIcon");
var calcbody = document.getElementById("calcbody");
var calcbtn = document.getElementById("calcbtn");
var DropId = document.getElementById("DropId");
DropId.style.display = "none";
NoteArea.style.display = "none";
calcbody.style.display = "none";

function OpnNotFnc() {
  if (NoteArea.style.display === "block") {
    NoteArea.style.display = "none";
    NotIcon.style.color = "#000";
  } else {
    NoteArea.style.display = "block";
    NotIcon.style.color = "#8cc63f";
  }
  calcbody.style.display = "none";
  calcbtn.style.color = "#000";
  DropId.style.display = "none";
}

function opencalc() {
  if (calcbody.style.display === "block") {
    calcbody.style.display = "none";
    calcbtn.style.color = "#000";
  } else {
    calcbody.style.display = "block";
    calcbtn.style.color = "#8cc63f";
  }
  NoteArea.style.display = "none";
  NotIcon.style.color = "#000";
  DropId.style.display = "none";
}


var not = document.getElementById("not");
var Clear = document.getElementById("Clear");
var right = document.getElementById("right");
var left = document.getElementById("left");
Clear.classList.add("ClearActv");
Clear.onclick = function () {
  not.value = "";
  Clear.classList.add("ClearActv");
};
right.onclick = function () {
  not.style.direction = "rtl";
  right.style.backgroundColor = "#0B3801";
  left.style.backgroundColor = "green";
};
left.onclick = function () {
  not.style.direction = "ltr";
  right.style.backgroundColor = "green";
  left.style.backgroundColor = "#0B3801";
};
not.onkeyup = function () {
  if (not.value == "") {
    Clear.classList.add("ClearActv");
  } else {
    Clear.classList.remove("ClearActv");
  }
};
document.getElementById("left").click();
var BtnSide = document.getElementById("BtnSide");
var QuList = document.getElementById("QuList");
function BtnSideFunc() {
  if (QuList.style.display == "block") {
    QuList.style.display = "none";
    BtnSide.style.color = "#fff";
    document.getElementById("QuzCntnr2").style.width = "100%";
  } else {
    QuList.style.display = "block";
    BtnSide.style.color = "red";
    document.getElementById("QuzCntnr2").style.width = "calc(100% - 70px)";
  }
}

function scrlTp(tp) {
  const element = document.getElementById("lstBtns");
  element.scrollTop -= tp;
}
function scrlDwn(dwn) {
  const element = document.getElementById("lstBtns");
  element.scrollTop += dwn;
}
const questions = [];
let quizContainer = document.getElementById("quiz-container");
let question;
let index;
const QuArr1 = [];
const generateOptions = () => {
  let options = ``;
  for (let i = 0; i < question.options.length; i++) {
    let option = question.options[i];
    options += `<div class="eachAnswer">
                                    <label>
                                      <input type="radio" class="answrs" id="OP${
                                        i + 1
                                      }" onclick="addAnswer()" name="answer-btn" value="${option}"> ${option} 
                                      <span id="spn${i + 1}"></span>
                                    </label>
                                  </div>`;
  }
  return options;
};

const ArrCor = [];

const ArrWrng = [];

const ArrFlag = [];

let validateCheck = false;
let alwaysShowAns = false;

var explainID1 = document.getElementById("explainID1");
var ShoAns1 = document.getElementById("ShoAns1");
var setCheck = document.getElementById("setCheck");
var setAnsShow = document.getElementById("setAnsShow");

setCheck.addEventListener("click", () => {
  setCheck.classList.toggle("OnOffCls");
  if (validateCheck == false) {
    validateCheck = true;
    setCheck.innerHTML = "ON";
  } else {
    validateCheck = false;
    setCheck.innerHTML = "OFF";
  }
});

setAnsShow.addEventListener("click", () => {
  setAnsShow.classList.toggle("OnOffCls");
  if (alwaysShowAns == false) {
    explainID1.style.display = "block";
    ShoAns1.style.pointerEvents = "none";
    setAnsShow.innerHTML = "ON";
    ShoAns1.innerHTML = "Hide Answer";
    ShoAns1.style.opacity = "0.5";
    alwaysShowAns = true;
  } else {
    explainID1.style.display = "none";
    ShoAns1.style.pointerEvents = "auto";
    setAnsShow.innerHTML = "OFF";
    ShoAns1.innerHTML = "Show Answer";
    ShoAns1.style.opacity = "";
    alwaysShowAns = false;
  }
});

const addAnswer = () => {
  var CorAnsNum = document.getElementById("CorAnsNum");
  var crntOpID = document.getElementById("crntOpID");
  let currentOptions = document.getElementsByName("answer-btn");
  for (let i = 0; i < currentOptions.length; i++) {
    let currentOption = currentOptions[i];
    if (currentOption.checked == true) {
      questions[index].yourChck = currentOption.id;
      questions[index].yourAns = currentOption.id
        .replace(/OP1/g, "A")
        .replace(/OP2/g, "B")
        .replace(/OP3/g, "C")
        .replace(/OP4/g, "D");
      crntOpID.innerHTML = currentOption.id;

      if (validateCheck == false) {
        document.getElementById("spn1").style.border = "";
        document.getElementById("spn2").style.border = "";
        document.getElementById("spn3").style.border = "";
        document.getElementById("spn4").style.border = "";
      } else {
        document.getElementById("spn1").style.border = "";
        document.getElementById("spn2").style.border = "";
        document.getElementById("spn3").style.border = "";
        document.getElementById("spn4").style.border = "";
        var Crntspn = document.getElementById("spn" + Number(i + 1));
        if (currentOption.id == "OP" + questions[index].answer) {
          Crntspn.style.border = "3px solid #04B404";
        } else {
          Crntspn.style.border = "3px solid #FF0000";
        }
      }
    }
  }
  CheckQuID(QuID.innerHTML);

  if (crntOpID.innerHTML == "OP" + CorAnsNum.innerHTML) {
    if (ArrCor.includes(MainScrptQues[QuID.innerHTML - 1])) {
    } else {
      ArrCor.push(MainScrptQues[QuID.innerHTML - 1]);
      if (ArrWrng.includes(MainScrptQues[QuID.innerHTML - 1])) {
        ArrWrng.splice(ArrWrng.indexOf(MainScrptQues[QuID.innerHTML - 1]), 1);
      }
    }
    console.log(ArrCor);
    console.log(ArrWrng);
  } else {
    if (ArrWrng.includes(MainScrptQues[QuID.innerHTML - 1])) {
    } else {
      ArrWrng.push(MainScrptQues[QuID.innerHTML - 1]);
      if (ArrCor.includes(MainScrptQues[QuID.innerHTML - 1])) {
        ArrCor.splice(ArrCor.indexOf(MainScrptQues[QuID.innerHTML - 1]), 1);
      }
    }
    console.log(ArrCor);
    console.log(ArrWrng);
  }
};

function AddflagQ() {
  if (ArrFlag.includes(MainScrptQues[QuID.innerHTML - 1])) {
    alert("this question already marked");
  } else {
    ArrFlag.push(MainScrptQues[QuID.innerHTML - 1]);
    notifMSG.style.maxHeight = "50px";
    console.log(ArrFlag);
    setTimeout(() => {
      notifMSG.style.maxHeight = "0";
    }, 1500);
    document.getElementById("newId" + (index + 1)).innerHTML +=
      '<i class="fa fas fa-flag" style="color:#fff; font-size:15px; margin-left: 3px"></i>';
  }
}

const NootesDiv = document.getElementById("NootesDiv");
const notesDB = JSON.parse(localStorage.getItem("RetiredNotP1")) || [];
const noteElement = document.createElement("textarea");
noteElement.classList.add("clasNotDB");
noteElement.placeholder = "Enter a note for this question...";

const showQuestion = (i) => {
  index = i;
  if (questions[index]) {
    question = questions[index];
    let options = generateOptions();
    quizContainer.innerHTML = `<div class="pointer-container"></div>
                                                    <div id="Que"> ${question.q} </div>
                                                    <div class="answers-containers"> ${options} </div>`;
    document.getElementById("CorAnsNum").innerHTML = question.answer;
    document.getElementById("explainID1").innerHTML = question.ansExplain;
    document.getElementById("QuID").innerHTML = question.id;
    document.getElementById("QuID2").innerHTML = "ID:" + question.id;
    document.getElementById("QueDlelID").innerHTML =
      "Q: " + (index + 1) + " Of " + questions.length;

    const noteStord =
      (notesDB.find((n) => n.notID === question.notID) || {}).noteStord || "";
    noteElement.id = `noteStord-${question.notID}`;
    noteElement.value = question.noteStord || noteStord;
    noteElement.addEventListener("keyup", () =>
      saveNoteForQuestion(question.notID)
    ); // Add event lisnr to save noteStord on keyup
    NootesDiv.appendChild(noteElement);
  } else {
    alert("Invalid question");
  }
  loadNotesForQuestions();
  question.yourNote = noteElement.value;
  if (question.yourChck == "") {
  } else {
    document.getElementById(question.yourChck).click();
  }
};

function saveNoteForQuestion(questionId) {
  const noteStord = document.getElementById(`noteStord-${questionId}`).value;
  const notesDB = JSON.parse(localStorage.getItem("RetiredNotP1")) || [];
  const existingNote = notesDB.find((n) => n.notID === questionId);
  if (existingNote) {
    existingNote.noteStord = noteStord;
  } else {
    notesDB.push({ notID: questionId, noteStord: noteStord });
  }
  localStorage.setItem("RetiredNotP1", JSON.stringify(notesDB));
  question.yourNote = noteElement.value;
}

function loadNotesForQuestions() {
  const notesDB = JSON.parse(localStorage.getItem("RetiredNotP1")) || [];
  for (let i = 0; i < notesDB.length; i++) {
    const noteStord = notesDB[i];
    const noteElement = document.getElementById(`noteStord-${noteStord.notID}`);
    if (noteElement) {
      noteElement.value = noteStord.noteStord;
    }
  }
}

function clearLocalStorageButton() {
  localStorage.removeItem("RetiredNotP1");
  console.log("Local storage cleared.");
}

function CheckQuID(Qid) {
  if (QuArr1.includes(Qid)) {
  } else {
    QuArr1.push(Qid);
    prog();
  }
}
var notifMSG = document.getElementById("notifMSG");
var QuID = document.getElementById("QuID");
var pro = document.getElementById("file");
var lblPrg = document.getElementById("lblPrg");
function prog() {
  var incrs = 100 / questions.length;
  pro.value = pro.value + incrs;
  lblPrg.innerHTML = "Progress " + Math.round(pro.value) + "%";
  document.getElementById("newId" + (index + 1)).style.backgroundColor =
    "#272627";

  quesNum++;
}

function StartShowQ() {
  for (let i = 1; i < questions.length + 1; i++) {
    var newBTNs = document.createElement("button");
    newBTNs.innerHTML = i;
    newBTNs.id = "newId" + i;
    newBTNs.classList.add("newBtnsCls");
    document.getElementById("btnsDIV").appendChild(newBTNs);
    document.getElementById("newId1").classList.add("active2");
    newBTNs.addEventListener("click", showQue);
    function showQue() {
      showQuestion(i - 1);
      var current = document.getElementsByClassName("active2");
      for (var z = 0; z < current.length; z++) {
        current[0].className = current[0].className.replace(" active2", "");
        this.className += " active2";
      }

      if (alwaysShowAns == true) {
      } else {
        if (explainID1.style.display == "block") {
          explainID1.style.display = "none";
          ShoAns1.innerHTML = "Show Answer";
        }
      }
    }
  }
  showQuestion(0);
  startTim();
  startTimeEND();

  WaitQuiz();
}

function nextBTN() {
  if (index == questions.length - 1) {
    alert("this is the last question");
  } else {
    scrlDwn(35);
    document.getElementById("newId" + (index + 2)).click();
  }
}

function prevBTN() {
  if (index == 0) {
    alert("this is the first question");
  } else {
    scrlTp(35);
    document.getElementById("newId" + index).click();
  }
}
var ShoAns1 = document.getElementById("ShoAns1");
var NootesDivMain = document.getElementById("NootesDivMain");

explainID1.style.display = "none";
function ShoAns1Fnc() {
  if (explainID1.style.display == "none") {
    explainID1.style.display = "block";
    ShoAns1.innerHTML = "Hide Answer";
  } else {
    explainID1.style.display = "none";
    ShoAns1.innerHTML = "Show Answer";
  }
}

NootesDivMain.style.display = "none";
function ShowNotes() {
  if (NootesDivMain.style.display === "none") {
    NootesDivMain.style.display = "block";
  } else {
    NootesDivMain.style.display = "none";
  }
}

noteElement.style.direction = "ltr";
function rightLeftFnc() {
  if (noteElement.style.direction == "ltr") {
    noteElement.style.direction = "rtl";
  } else {
    noteElement.style.direction = "ltr";
  }
}
var ShowRV1 = document.getElementById("ShowRV1");
var ShowRV2 = document.getElementById("ShowRV2");
var ShowRV3 = document.getElementById("ShowRV3");
var QuRVExplnCor = document.getElementById("QuRVExplnCor");
var QuRVExplnwrng = document.getElementById("QuRVExplnwrng");
var QuRVExplnFlag = document.getElementById("QuRVExplnFlag");

function creatRVcor() {
  for (let i = 1; i < ArrCor.length + 1; i++) {
    var QFldcor = document.createElement("button");
    document.getElementById("Qcor00").appendChild(QFldcor);
    QFldcor.id = "Rv1Btn" + i;
    QFldcor.innerHTML = i;
    QFldcor.classList.add("classRev1");
    document.getElementById("Rv1Btn1").classList.add("activBtn1");
    QFldcor.addEventListener("click", function () {
      index1 = i - 1;
      ArrCorQ = ArrCor[index1];
      QuRV1.innerHTML = ArrCorQ.q;
      document.getElementById("QuRV1op1").innerHTML = ArrCor[index1].options[0];
      document.getElementById("QuRV1op2").innerHTML = ArrCor[index1].options[1];
      document.getElementById("QuRV1op3").innerHTML = ArrCor[index1].options[2];
      document.getElementById("QuRV1op4").innerHTML = ArrCor[index1].options[3];
      document.getElementById("dleel1").innerHTML = ArrCor[index1].answer;
      QuRVExplnCor.innerHTML = ArrCor[index1].ansExplain;
      QuRVExplnCor.style.display = "none";
      ShowRV1.innerHTML = "Show Answer";
      remvClr1();
      var currentBtn1 = document.getElementsByClassName("activBtn1");
      for (var z = 0; z < currentBtn1.length; z++) {
        currentBtn1[0].className = currentBtn1[0].className.replace(
          " activBtn1",
          ""
        );
        this.className += " activBtn1";
      }
    });
  }
  document.getElementById("Rv1Btn1").click();
}

function ShowRev1() {
  if (QuRVExplnCor.style.display == "none") {
    QuRVExplnCor.style.display = "block";
    ShowRV1.innerHTML = "Hide Answer";
  } else {
    QuRVExplnCor.style.display = "none";
    ShowRV1.innerHTML = "Show Answer";
  }
}

function remvClr1() {
  for (var i = 0; i < opCor.length; i++) {
    opCor[i].style.backgroundColor = "#fff";
  }
}

// 0000000000000000000000000000000000

function creatRVwrng() {
  for (let i = 1; i < ArrWrng.length + 1; i++) {
    var QFldwrng = document.createElement("button");
    document.getElementById("Qwrng00").appendChild(QFldwrng);
    QFldwrng.id = "Rv2Btn" + i;
    QFldwrng.innerHTML = i;
    QFldwrng.classList.add("classRev2");
    document.getElementById("Rv2Btn1").classList.add("activBtn2");
    QFldwrng.addEventListener("click", function () {
      index2 = i - 1;
      ArrWrngQ = ArrWrng[index2];
      QuRV2.innerHTML = ArrWrngQ.q;
      document.getElementById("QuRV2op1").innerHTML =
        ArrWrng[index2].options[0];
      document.getElementById("QuRV2op2").innerHTML =
        ArrWrng[index2].options[1];
      document.getElementById("QuRV2op3").innerHTML =
        ArrWrng[index2].options[2];
      document.getElementById("QuRV2op4").innerHTML =
        ArrWrng[index2].options[3];
      document.getElementById("dleel2").innerHTML = ArrWrng[index2].answer;
      QuRVExplnwrng.innerHTML = ArrWrng[index2].ansExplain;
      QuRVExplnwrng.style.display = "none";
      ShowRV2.innerHTML = "Show Answer";
      remvClr2();
      var currentBtn2 = document.getElementsByClassName("activBtn2");
      for (var z = 0; z < currentBtn2.length; z++) {
        currentBtn2[0].className = currentBtn2[0].className.replace(
          " activBtn2",
          ""
        );
        this.className += " activBtn2";
      }
    });
  }
  document.getElementById("Rv2Btn1").click();
}
function ShowRev2() {
  if (QuRVExplnwrng.style.display == "none") {
    QuRVExplnwrng.style.display = "block";
    ShowRV2.innerHTML = "Hide Answer";
  } else {
    QuRVExplnwrng.style.display = "none";
    ShowRV2.innerHTML = "Show Answer";
  }
}

function remvClr2() {
  for (var i = 0; i < opWrng.length; i++) {
    opWrng[i].style.backgroundColor = "#fff";
  }
}

// 0000000000000000000000000000000000

function creatRVflag() {
  for (let i = 1; i < ArrFlag.length + 1; i++) {
    var QFldFlag = document.createElement("button");
    document.getElementById("QFlag00").appendChild(QFldFlag);
    QFldFlag.id = "Rv3Btn" + i;
    QFldFlag.innerHTML = i;
    QFldFlag.classList.add("classRev3");
    document.getElementById("Rv3Btn1").classList.add("activBtn3");
    QFldFlag.addEventListener("click", function () {
      index3 = i - 1;
      ArrFlagQ = ArrFlag[index3];
      QuRV3.innerHTML = ArrFlagQ.q;
      document.getElementById("QuRV3op1").innerHTML =
        ArrFlag[index3].options[0];
      document.getElementById("QuRV3op2").innerHTML =
        ArrFlag[index3].options[1];
      document.getElementById("QuRV3op3").innerHTML =
        ArrFlag[index3].options[2];
      document.getElementById("QuRV3op4").innerHTML =
        ArrFlag[index3].options[3];
      document.getElementById("dleel3").innerHTML = ArrFlag[index3].answer;
      QuRVExplnFlag.innerHTML = ArrFlag[index3].ansExplain;
      QuRVExplnFlag.style.display = "none";
      ShowRV3.innerHTML = "Show Answer";
      remvClr3();
      var currentBtn3 = document.getElementsByClassName("activBtn3");
      for (var z = 0; z < currentBtn3.length; z++) {
        currentBtn3[0].className = currentBtn3[0].className.replace(
          " activBtn3",
          ""
        );
        this.className += " activBtn3";
      }
    });
  }
  document.getElementById("Rv3Btn1").click();
}
function ShowRev3() {
  if (QuRVExplnFlag.style.display == "none") {
    QuRVExplnFlag.style.display = "block";
    ShowRV3.innerHTML = "Hide Answer";
  } else {
    QuRVExplnFlag.style.display = "none";
    ShowRV3.innerHTML = "Show Answer";
  }
}
function remvClr3() {
  for (var i = 0; i < opFlag.length; i++) {
    opFlag[i].style.backgroundColor = "#fff";
  }
}

// 00000000000000000000000000000000000000000

var opCor = document.getElementsByClassName("opCor");
var opWrng = document.getElementsByClassName("opWrng");
var opFlag = document.getElementsByClassName("opFlag");
var dleel1 = document.getElementById("dleel1");
var dleel2 = document.getElementById("dleel2");
var dleel3 = document.getElementById("dleel3");
for (var i = 0; i < opCor.length; i++) {
  opCor[i].addEventListener("click", function (evt) {
    if (this.id == "QuRV1op" + dleel1.innerHTML) {
      this.style.backgroundColor = "#01DF74";
    } else {
      this.style.backgroundColor = "#F78181";
    }
  });
}
for (var i = 0; i < opWrng.length; i++) {
  opWrng[i].addEventListener("click", function (evt) {
    if (this.id == "QuRV2op" + dleel2.innerHTML) {
      this.style.backgroundColor = "#01DF74";
    } else {
      this.style.backgroundColor = "#F78181";
    }
  });
}
for (var i = 0; i < opFlag.length; i++) {
  opFlag[i].addEventListener("click", function (evt) {
    if (this.id == "QuRV3op" + dleel3.innerHTML) {
      this.style.backgroundColor = "#01DF74";
    } else {
      this.style.backgroundColor = "#F78181";
    }
  });
}

var ShoAns1 = document.getElementById("ShoAns1");
explainID1.style.display = "none";
function ShoAns1Fnc() {
  if (explainID1.style.display == "none") {
    explainID1.style.display = "block";
    ShoAns1.innerHTML = "Hide Answer";
  } else {
    explainID1.style.display = "none";
    ShoAns1.innerHTML = "Show Answer";
  }
}
var QueEnd03 = document.getElementById("QueEnd03");
var corEnd02 = document.getElementById("corEnd02");
var wrngEnd02 = document.getElementById("wrngEnd02");
var skpEnd02 = document.getElementById("skpEnd02");
var timeEnd02 = document.getElementById("timeEnd02");
var timeQend02 = document.getElementById("timeQend02");

function infAdd02() {
  QueEnd03.innerHTML = ArrCor.length + ArrWrng.length + " answered";
  corEnd02.innerHTML = ArrCor.length;
  wrngEnd02.innerHTML = ArrWrng.length;
  skpEnd02.innerHTML = ArrFlag.length;
  percEnd02.innerHTML =
    Math.round((ArrCor.length / questions.length) * 100) + " %";

  stopInterval();
  document.getElementById("timeEnd02").innerHTML =
    document.getElementById("countdown").innerHTML;
  document.getElementById("timeQend02").innerHTML =
    document.getElementById("countper").innerHTML;
  document.getElementById("infoNew02").style.display = "block";
  document.getElementById("mainQUIZ").style.display = "none";

  if (ArrCor.length >= 1) {
    creatRVcor();
    document.getElementById("noQuCor02").style.display = "none";
  } else {
    document.getElementById("FldRvCorID").style.display = "none";
  }

  if (ArrWrng.length >= 1) {
    creatRVwrng();
    document.getElementById("noQuWrng02").style.display = "none";
  } else {
    document.getElementById("FldRvWrngID").style.display = "none";
  }

  if (ArrFlag.length >= 1) {
    creatRVflag();
    document.getElementById("noQuSkp02").style.display = "none";
  } else {
    document.getElementById("FldRvFlgID").style.display = "none";
  }
  SaveAftrFnsh();
}
// Get marked questions from local storage or initialize to empty array
let QueMarkedRetiredP1 =
  JSON.parse(localStorage.getItem("QueMarkedRetiredP1")) || [];
// Update marked questions in local storage
function updateMarkedQuestions() {
  localStorage.setItem(
    "QueMarkedRetiredP1",
    JSON.stringify(QueMarkedRetiredP1)
  );
}

// Mark current question

// function markQuestion() {
//   let currentQuestionIndex = Number(document.getElementById("QuID").innerHTML);
//   const currentQuestion = questions.find(
//     (question) => question.id === currentQuestionIndex
//   );
//   const questionId = `Q#${currentQuestion.id}`;
//   const markedQuestionIndex = QueMarkedRetiredP1.findIndex(
//     (question) => question.id === currentQuestion.notID
//   );
//   if (markedQuestionIndex !== -1) {
//     if (
//       confirm(
//         "This question already exists, do you want to delete it from the saved questions?"
//       )
//     ) {
//       QueMarkedRetiredP1.splice(markedQuestionIndex, 1);
//       updateMarkedQuestions();
//       const markedQuestionsContainer = document.getElementById(
//         "marked-questions-container"
//       );
//       const markedQuestionDV = document.getElementById(questionId);
//       if (markedQuestionDV) {
//         markedQuestionsContainer.removeChild(markedQuestionDV);
//         showMarkedQuestions();
//       }
//       alert("The question has been removed.");
//     }
//   } else {
//     QueMarkedRetiredP1.unshift({
//       id: currentQuestion.id,
//       text: currentQuestion.q,
//       chos1: currentQuestion.options[0],
//       chos2: currentQuestion.options[1],
//       chos3: currentQuestion.options[2],
//       chos4: currentQuestion.options[3],
//       yourA: currentQuestion.yourAns,
//       yourNT: currentQuestion.yourNote,
//       Expln: currentQuestion.ansExplain,
//     });
//     updateMarkedQuestions();
//     const markedQuestionsContainer = document.getElementById(
//       "marked-questions-container"
//     );
//     const markedQuestionButton = document.createElement("button");
//     markedQuestionButton.id = questionId;
//     markedQuestionButton.textContent = questionId;
//     markedQuestionButton.addEventListener("click", () => {
//       showMarkedQuestion(currentQuestion.id);
//     });
//     markedQuestionsContainer.appendChild(markedQuestionButton);

//     notifSaved.style.maxHeight = "50px";
//     setTimeout(() => {
//       notifSaved.style.maxHeight = "0";
//     }, 1500);

//     showMarkedQuestions();
//   }
// }

function showMarkedQuestions() {
  const markedQuestionsContainer = document.getElementById(
    "marked-questions-container"
  );
  markedQuestionsContainer.innerHTML = "";
  QueMarkedRetiredP1.forEach((question) => {
    const markedQuestionDV = document.createElement("div");
    const markedQuestionButton = document.createElement("button");
    markedQuestionButton.classList.add("markedQuestionShow");
    markedQuestionDV.appendChild(markedQuestionButton);
    markedQuestionDV.classList.add("ShowDelMrkdCls");

    markedQuestionDV.id = `Q#${question.id}`;

    markedQuestionButton.textContent = `Q#${question.id}`;

    // Add delete button
    const deleteButtonMarked = document.createElement("button");
    deleteButtonMarked.classList.add("deleteMarkBtn");
    deleteButtonMarked.innerHTML =
      '<i class="fa fa-trash" aria-hidden="true"></i>';
    markedQuestionDV.appendChild(deleteButtonMarked);

    // Attach event listener to delete button
    deleteButtonMarked.addEventListener("click", () => {
      const markedQuestionIndex = QueMarkedRetiredP1.findIndex(
        (q) => q.id === question.id
      );
      const markedQuestionDV = document.getElementById(`Q#${question.id}`);
      const confirmed = confirm(
        "Are you sure you want to delete this saved question?"
      );
      if (confirmed) {
        QueMarkedRetiredP1.splice(markedQuestionIndex, 1);
        updateMarkedQuestions();
        const markedQuestionContainer = document.getElementById(
          "marked-question-container"
        );
        markedQuestionContainer.innerHTML = "";
        if (markedQuestionsContainer.contains(markedQuestionDV)) {
          markedQuestionsContainer.removeChild(markedQuestionDV);
          showMarkedQuestions();
        }
        document.getElementById("markedSearchDiv").style.display = "none";
      }
    });

    // Attach event listener to marked question button
    markedQuestionButton.addEventListener("click", () => {
      showMarkedQuestion(question.id);
    });
    markedQuestionsContainer.appendChild(markedQuestionDV);
  });

  NoMarkdQs();
}

// Show marked question
function showMarkedQuestion(questionId) {
  const markedQuestionIndex = QueMarkedRetiredP1.findIndex(
    (question) => question.id === questionId
  );
  const markedQuestion =
    markedQuestionIndex !== -1 ? QueMarkedRetiredP1[markedQuestionIndex] : null;
  if (markedQuestion) {
    const markedQuestionHtml = `
                                                                                                                      <div class="MrkdQuText">${markedQuestion.text}</div>
                                                                                                                      <div class="MrkdQuChoics">${markedQuestion.chos1}</div>
                                                                                                                      <div class="MrkdQuChoics">${markedQuestion.chos2}</div>
                                                                                                                      <div class="MrkdQuChoics">${markedQuestion.chos3}</div>
                                                                                                                      <div class="MrkdQuChoics">${markedQuestion.chos4}</div>
                                                                                                                      <div class="MrkdQuAnswrs"><strong>Your Answer: </strong>${markedQuestion.yourA}</div>
                                                                                                                      <div class="MrkdQuAnswrs">${markedQuestion.Expln}</div>
                                                                                                                      <div class="MrkdQuAnswrs"><strong>Your Note: </strong>${markedQuestion.yourNT}</div> `;
    const markedQuestionContainer = document.getElementById(
      "marked-question-container"
    );
    markedQuestionContainer.innerHTML = markedQuestionHtml;
    markedQuestionContainer.style.display = "block";
    markedQuestionContainer.style.opacity = ".3";
    setTimeout(() => {
      markedQuestionContainer.style.opacity = "1";
    }, 300);
    document.getElementById("markedSearchDiv").style.display = "none";
    document.getElementById("crntQueMarkd").innerHTML =
      markedQuestionIndex + 1 + " of " + QueMarkedRetiredP1.length;
  }
}

function NoMarkdQs() {
  const markedQuestionButtons = document.querySelectorAll(
    ".markedQuestionShow"
  );
  if (markedQuestionButtons.length > 0) {
    const firstButton = markedQuestionButtons[0];
    firstButton.classList.add("active");
    firstButton.click();
    document.getElementById("NoMarkQ").style.display = "none";
    document.getElementById("NoMarkQ2").style.display = "none";
    document.getElementById("NxtPrvID").style.display = "flex";
  } else {
    document.getElementById("NoMarkQ").style.display = "block";
    document.getElementById("NoMarkQ2").style.display = "block";
    document.getElementById("NxtPrvID").style.display = "none";
    document.getElementById("marked-question-container").innerHTML = "";
    document.getElementById("marked-question-container").style.display = "none";
  }

  // Loop through each button element and add an event listener
  markedQuestionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove the active class from all the markedQuestionButtons
      markedQuestionButtons.forEach((btn) => {
        btn.classList.remove("active");
      });
      // Add the active class to the clicked button
      button.classList.add("active");

      // Call your desired function or perform your desired action here
      showMarkedQuestion(button.textContent.slice(2)); // Example: extract the question ID from the button text and pass it to the showMarkedQuestion function
    });
  });
  document.getElementById("QnumSvd").innerHTML =
    "Total Saved Questions : " + markedQuestionButtons.length;
}

// document.getElementById("SaveQues").addEventListener("click", markQuestion);

let checkMarked = false;
// document.getElementById("MarkedQuBtn").addEventListener("click", function () {
//   if (checkMarked == false) {
//     showMarkedQuestions();
//     checkMarked = true;
//   }
// });
function NextMarkdQue() {
  const markedQueBtn = document.querySelectorAll(".markedQuestionShow");
  const activeButtonIndex = [...markedQueBtn].findIndex((button) =>
    button.classList.contains("active")
  );
  if (activeButtonIndex !== -1 && activeButtonIndex < markedQueBtn.length - 1) {
    const nextButtonMarkd = markedQueBtn[activeButtonIndex + 1];
    nextButtonMarkd.click();
  }
}

function PrevMarkdQue() {
  const markedQueBtn = document.querySelectorAll(".markedQuestionShow");
  const activeButtonIndex = [...markedQueBtn].findIndex((button) =>
    button.classList.contains("active")
  );
  if (activeButtonIndex !== -1 && activeButtonIndex > 0) {
    const prevButtonMarkd = markedQueBtn[activeButtonIndex - 1];
    prevButtonMarkd.click();
  }
}

const attempts = [];

// Retrieve previously saved quiz answers from local storage
if (localStorage.getItem("RetiredATTp1")) {
  const savedQuizAttempts = JSON.parse(localStorage.getItem("RetiredATTp1"));
  attempts.push(...savedQuizAttempts);
}

function SaveAftrFnsh() {
  const options = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "Africa/Cairo",
  };

  const date = new Date();
  date.setHours(date.getHours() + 1); // add one hour to adjust for the time difference
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const AttemptDate = formatter.format(date);

  let attemptName = "";
  let largestNumber = 0;

  // Find the largest number in the attempt names
  attempts.forEach((attempt) => {
    const number = parseInt(attempt.name.split("#")[1], 10);
    if (number && number > largestNumber) {
      largestNumber = number;
    }
  });

  // Create the default attempt name based on the largest number
  const defaultName = `Attempt #${largestNumber + 1}`;

  // while (attemptName.trim().length < 5 || attemptName.trim().length > 20) {
  //   attemptName = window.prompt(
  //     `Enter a name for this attempt (min 5 letters , max 20) or keep the default : "${defaultName}" by clicking directly on "Ok" \n To ignore saving this attempt, click "Cancel".`
  //   );
  //   if (attemptName === null) {
  //     // User clicked "Cancel" button
  //     return;
  //   }
  //   if (attemptName.trim().length === 0) {
  //     // User left the input field blank, use the default name
  //     attemptName = defaultName;
  //   }
  // }

  const attempt = {
    name: attemptName,
    date: AttemptDate,
    questions: [...questions],
  };

  attempts.push(attempt);

  // Limit the number of attempts to 50
  const maxAttempts = 50;
  if (attempts.length > maxAttempts) {
    // Delete the oldest attempt
    attempts.shift();
  }

  localStorage.setItem("RetiredATTp1", JSON.stringify(attempts));
  displayAttempts();
  autoOpenFirstAttempt();
}

function checkAttempts() {
  if (attempts.length > 0) {
    document.getElementById("notAttYet").style.display = "none";
    document.getElementById("notAttYet2").style.display = "none";
  } else {
    document.getElementById("notAttYet").style.display = "block";
    document.getElementById("notAttYet2").style.display = "block";
  }
}

const searchInputAtt = document.getElementById("search-inputAtt");
searchInputAtt.addEventListener("input", function () {
  const filter = searchInputAtt.value.toLowerCase();
  const mainAttemptGuides = document.querySelectorAll(
    "#attempts .MainAttemptGuide"
  );
  for (let i = 0; i < mainAttemptGuides.length; i++) {
    const nameDateAtt = mainAttemptGuides[i]
      .querySelector(".NamDate")
      .textContent.toLowerCase();
    if (nameDateAtt.includes(filter)) {
      mainAttemptGuides[i].style.display = "flex";
    } else {
      mainAttemptGuides[i].style.display = "none";
    }
  }
});

// Display the quiz attempts and their answers
function displayAttempts() {
  const attemptsElement = document.getElementById("attempts");
  attemptsElement.innerHTML = "";
  for (let i = attempts.length - 1; i >= 0; i--) {
    const attempt = attempts[i];
    const attemptElement = document.createElement("div");

    attemptElement.classList.add("MainAttemptGuide");
    // Save the current attempt index to a variable, so it can be accessed in the onclick function
    const attemptIndex = i;
    // Create a button for each attempt that displays the quiz questions and the user's answers for that attempt
    const attemptButton = document.createElement("button");
    attemptButton.innerHTML = `Show`; /*Show Attempt ${i + 1}*/
    attemptButton.classList.add("ShowStord");

    attemptButton.onclick = function () {
      // Set the quiz questions and answers to match the selected attempt
      const attemptQuestionsElement = document.getElementById(
        `attempt-${attempt.name}`
      );
      if (attemptQuestionsElement.style.display === "none") {
        // Hide all other attemptQuestionsElements
        const allAttemptQuestions =
          document.querySelectorAll(".attempt-questions");
        for (let j = 0; j < allAttemptQuestions.length; j++) {
          if (allAttemptQuestions[j].id !== attemptQuestionsElement.id) {
            allAttemptQuestions[j].style.display = "none";
          }
        }
        attemptQuestionsElement.style.display = "block";
        attemptQuestionsElement.style.opacity = ".3";
        setTimeout(() => {
          attemptQuestionsElement.style.opacity = "1";
        }, 300);

        // Change the background color of the clicked button
        const ShowStordCNST = document.querySelectorAll(".ShowStord");
        ShowStordCNST.forEach((ShowStord) => {
          if (ShowStord === this) {
            ShowStord.style.backgroundColor = "green";
          } else {
            ShowStord.style.backgroundColor = "#04B431";
          }
        });
      }

      document.getElementById("myDropdown").style.display = "none";
    };

    // Create a div for each attempt that contains the quiz questions and the user's answers for that attempt
    const attemptQuestionsElement = document.createElement("div");
    attemptQuestionsElement.classList.add("attempt-questions");
    attemptQuestionsElement.id = `attempt-${attempt.name}`; // Use the attempt name as the id
    attemptQuestionsElement.style.display = "none";
    attemptQuestionsElement.innerHTML = `<div style="direction: rtl; padding:10px; background-color:#ccc">${attempt.name}</div>`;

    let attemptScore = 0;
    for (let j = 0; j < attempt.questions.length; j++) {
      const question = attempt.questions[j];
      const questionElement = document.createElement("div");
      questionElement.classList.add("questionElementCls");
      questionElement.innerHTML = `<div class="QuesStored"><strong>Q${
        j + 1
      } : </strong>${question.q}</div>`;

      for (let k = 0; k < question.options.length; k++) {
        const optionElement = document.createElement("div");
        optionElement.classList.add("choicesQ");
        optionElement.textContent = question.options[k]
          .replace(/&#8217;|&#8221;|&#8220;|"|'/g, ",")
          .replace(/&#8211;/g, "-")
          .replace(/&#247;/g, "/")
          .replace(/&#247;/g, "/");
        questionElement.appendChild(optionElement);
      }

      questionElement.innerHTML += `<div class="yourAnsCls"><strong>Your answer : </strong> ${question.yourAns}</div>`;
      // questionElement.innerHTML += `<p><strong>Correct answer:</strong> ${question.options[question.answer-1]}</p>`;
      questionElement.innerHTML += `<div class="correctANS">${question.ansExplain}</div>`;
      questionElement.innerHTML += `<div class="yourNoteCls"><strong>Your Note : </strong> ${question.yourNote}</div>`;

      let theCorAns;
      if (question.answer == 1) {
        theCorAns = "A";
      } else if (question.answer == 2) {
        theCorAns = "B";
      } else if (question.answer == 3) {
        theCorAns = "C";
      } else if (question.answer == 4) {
        theCorAns = "D";
      }

      if (question.yourAns === theCorAns) {
        attemptScore++;
      }
      attemptQuestionsElement.appendChild(questionElement);
    }

    const attemptPercentage = (attemptScore / attempt.questions.length) * 100;

    // Create a button for deleting the current attempt
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`; /*Attempt ${i + 1}*/
    deleteButton.classList.add("DelStord");

    deleteButton.onclick = function () {
      var confirmed = confirm("Are you sure you want to delete this attempt?");
      if (confirmed) {
        // Find the index of the current attempt in the attempts array
        const attemptIndex = attempts.findIndex((a) => a.name === attempt.name);
        if (attemptIndex !== -1) {
          // Check if the current attempt is currently displayed
          const attemptQuestionsElement = document.getElementById(
            `attempt-${attempt.name}`
          );
          const isCurrentAttemptDisplayed =
            attemptQuestionsElement.style.display === "block";
          // Delete the current attempt from the array
          attempts.splice(attemptIndex, 1);
          localStorage.setItem("RetiredATTp1", JSON.stringify(attempts));
          // If the current attempt is currently displayed, hide it before updating the display
          if (isCurrentAttemptDisplayed) {
            attemptQuestionsElement.style.display = "none";
          }
          displayAttempts();
          autoOpenFirstAttempt();
        }
      }
      document.getElementById("myDropdown").style.display = "none";
      checkAttempts();
    };

    attemptElement.innerHTML = `<button class="scorStord">${attemptScore} of ${
      attempt.questions.length
    }<div>(${attemptPercentage.toFixed(
      0
    )}%)</div> </button> <button class="NamDate"> <div style="overflow:hidden; direction: rtl">${
      attempt.name
    }</div>${attempt.date}</button> `;

    attemptsElement.appendChild(attemptElement);
    attemptElement.appendChild(attemptButton);
    attemptElement.appendChild(deleteButton);
    document
      .getElementById("attemptsView")
      .appendChild(attemptQuestionsElement);
  }
  document.getElementById("SavedAT").innerHTML = attempts.length;
}

function autoOpenFirstAttempt() {
  const allAttemptQuestionsQQ = document.querySelectorAll(".ShowStord");
  if (allAttemptQuestionsQQ.length > 0) {
    const firstAttempt = allAttemptQuestionsQQ[0];
    firstAttempt.click();
    firstAttempt.style.backgroundColor = "green";
  }
}

displayAttempts();
autoOpenFirstAttempt();
function openRev02(evt, RevName) {
  var i, RevCntnt02, RevBtn02;
  RevCntnt02 = document.getElementsByClassName("RevCntnt02");
  for (i = 0; i < RevCntnt02.length; i++) {
    RevCntnt02[i].style.display = "none";
  }
  RevBtn02 = document.getElementsByClassName("RevBtn02");
  for (i = 0; i < RevBtn02.length; i++) {
    RevBtn02[i].className = RevBtn02[i].className.replace(" active", "");
  }
  document.getElementById(RevName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("DefltOpn2").click();
let quesNum = 0;
var AnsCor02 = document.getElementById("AnsCor02");
var AnsWrng02 = document.getElementById("AnsWrng02");
var AnsSkp02 = document.getElementById("AnsSkp02");
var answrs = document.getElementsByClassName("answrs");
var explainID1 = document.getElementById("explainID1");
var rslt = document.getElementById("rslt");

var QnmArr = [];

function addQQ() {
  for (var z = 0; z < QnmArr.length; z++) {
    for (const i in MainScrptQues) {
      if (MainScrptQues[i].id2 == QnmArr[z]) {
        questions.push(MainScrptQues[i]);
      }
    }
  }
}

function FchkTu(evt1, pp, ClsUchkd, checkAll) {
  var checkedCount = document.querySelectorAll(
    "." + ClsUchkd + ":checked"
  ).length;
  var totalCheckboxes = document.querySelectorAll("." + ClsUchkd).length;
  var checkAllV = document.getElementById(checkAll);
  if (evt1.checked == true) {
    for (var i = pp; i <= pp; i++) {
      if (QnmArr.includes(i)) {
      } else {
        QnmArr.push(i);
      }
    }
  } else {
    QnmArr.removeByValue(pp, pp);
  }
  if (checkedCount == totalCheckboxes) {
    checkAllV.checked = true;
  } else {
    checkAllV.checked = false;
  }
  QnumberFunc();
  Next1Func();
}

function checkAllBtn(evt1, pp, qq, ClsUchkd) {
  var totalCheckboxes = document.getElementsByClassName(ClsUchkd);
  if (evt1.checked == true) {
    for (var i = 0; i < totalCheckboxes.length; i++) {
      totalCheckboxes[i].checked = true;
      if (QnmArr.includes(i + pp)) {
      } else {
        QnmArr.push(i + pp);
      }
    }
  } else {
    for (var i = 0; i < totalCheckboxes.length; i++) {
      totalCheckboxes[i].checked = false;
      QnmArr.removeByValue(i + pp, i + pp);
    }
  }
  QnumberFunc();
  Next1Func();
}

Array.prototype.removeByValue = function (val1, val2) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] >= val1 && this[i] <= val2) {
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};

function QnumberFunc() {
  var filteredQuestions = MainScrptQues.filter(function (questionQnum) {
    return QnmArr.includes(questionQnum.id2);
  });
  rslt.innerHTML = filteredQuestions.length;
  document.getElementById("rslt2").innerHTML = filteredQuestions.length;
}

function Next1Func() {
  if (Number(rslt.innerHTML) > 0) {
    document.getElementById("nxt1BtnID").style.opacity = "1";
    document.getElementById("nxt1BtnID").style.pointerEvents = "auto";
  } else {
    document.getElementById("nxt1BtnID").style.opacity = "0.5";
    document.getElementById("nxt1BtnID").style.pointerEvents = "none";
  }
}

function openFunc(open, clos) {
  var open = document.getElementById(open);
  var clos = document.getElementById(clos);
  open.style.opacity = "1";
  open.style.maxHeight = "700px";
  clos.style.opacity = "0";
  clos.style.maxHeight = "0px";
}
var pages = document.getElementsByClassName("pages");
var scrlBTNs = document.getElementsByClassName("scrlBTNs");
var StrtBtnFnc = document.getElementById("StrtBtnFnc");
var qnmV = document.getElementById("qnmV");
var qnumMax = document.getElementById("qnumMax");
var TimVluF = document.getElementById("timV");

function SubmitChoices() {
  if (Number(rslt.innerHTML) >= 1) {
    qnmV.value = Number(rslt.innerHTML);
    qnumMax.innerHTML = Number(rslt.innerHTML);
    TimVlu();
    startEXAM();
  } else {
    alert("you have not selected any topic");
  }
}

function TimVlu() {
  if (Math.round(qnmV.value * 2) >= 360) {
    TimVluF.value = 360;
  } else {
    TimVluF.value = Math.round(qnmV.value * 2);
  }
}

function QnmVluFnc() {
  if (
    qnmV.value >= 1 &&
    qnmV.value <= Number(rslt.innerHTML) &&
    TimVluF.value >= 1 &&
    TimVluF.value <= 360
  ) {
    qnmV.value = Math.floor(qnmV.value);
    TimVluF.value = Math.floor(TimVluF.value);
    openFunc("mainQUIZ", "Pag2");
    setTimFunc();
  } else {
    alert(
      "Error in Questions Number Or Time" +
        "\n" +
        "Questions Number Must be between 1 : " +
        Number(rslt.innerHTML) +
        "\n" +
        "The Time Must be between 1 : 360"
    );
    qnmV.value = Number(rslt.innerHTML);
    TimVlu();
  }
}

function setTimFunc() {
  var timH = Math.floor(TimVluF.value / 60);
  var timM = 60 * timH;
  h.innerHTML = timH;
  m.innerHTML = TimVluF.value - timM;
  s.innerHTML = 0;
}

let randDlel = 3;
function chkk(value) {
  randDlel = value;
}

function startEXAM() {
  addQQ();
  if (randDlel == 1) {
    questions.sort(function (a, b) {
      return a.id - b.id;
    });
    questions.splice(qnmV.value, questions.length);
    StartShowQ();
  } else if (randDlel == 2) {
    questions.splice(qnmV.value, questions.length);
    StartShowQ();
  } else if (randDlel == 3) {
    questions.sort(function () {
      return 0.5 - Math.random();
    });
    questions.sort(function () {
      return 0.5 - Math.random();
    });
    questions.sort(function () {
      return 0.5 - Math.random();
    });
    questions.sort(function () {
      return 0.5 - Math.random();
    });
    questions.sort(function () {
      return 0.5 - Math.random();
    });
    questions.sort(function () {
      return 0.5 - Math.random();
    });
    questions.sort(function () {
      return 0.5 - Math.random();
    });
    questions.sort(function () {
      return 0.5 - Math.random();
    });
    questions.splice(qnmV.value, questions.length);
    StartShowQ();
  } else {
    alert("there are no choice");
  }
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
  }

  for (var i = 0; i < scrlBTNs.length; i++) {
    if (questions.length < 14) {
      scrlBTNs[i].style.display = "none";
    }
  }

  QnmVluFnc();
}

var loaderQuiz = document.getElementById("loding");
function WaitQuiz() {
  loaderQuiz.style.display = "block";
  setTimeout(() => {
    loaderQuiz.style.display = "none";
    document.getElementById("mainQUIZ").style.display = "block";
  }, 2000);
}
document.getElementById("Pag1").style.display = "none";
setTimeout(() => {
  document.getElementById("Pag1").style.display = "block";
  loaderQuiz.style.display = "none";
}, 2000);

function PreSubmitQuiz() {
  if (QuArr1.length == questions.length) {
    infAdd02();
  } else {
    AlertMsg.style.display = "block";
  }
}
function SubmitQuiz2() {
  infAdd02();
  clos();
}
var AlertMsg = document.getElementById("AlertMsg");
function clos() {
  AlertMsg.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == AlertMsg) {
    AlertMsg.style.display = "none";
  }

  /*
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('showPrevAttCls')) {
              openDropdown.classList.remove('showPrevAttCls');
            } } }
            */
};
var countper = document.getElementById("countper");
var seconds = 0;
var countdiv = document.getElementById("countdown");
var secondpass;

function startTimeEND() {
  var countDown = setInterval(function () {
    "use strict";
    secondpass();
  }, 1000);
}

function secondpass() {
  "use strict";
  if (seconds >= 0) {
    seconds = seconds + 1;
    var seconds2 = Math.floor(seconds / quesNum);
    var mints2 = Math.floor(seconds2 / 60);
    var seconds3 = seconds2 - mints2 * 60;
    var hours2 = Math.floor(mints2 / 60);
    var mints3 = mints2 - hours2 * 60;
    if (seconds3 < 10) {
      seconds3 = "0" + seconds3;
    }
    if (quesNum == 0) {
      countper.innerHTML = "00" + ":" + "00" + ":" + "00";
    } else {
      countper.innerHTML = hours2 + ":" + mints3 + ":" + seconds3;
    }

    var mints = Math.floor(seconds / 60);
    var remseconds = seconds % 60;
    var hours = Math.floor(mints / 60);
    var remmints = mints % 60;
    if (remseconds < 10) {
      remseconds = "0" + remseconds;
    }
    countdiv.innerHTML = hours + ":" + remmints + ":" + remseconds;
  }
}

document.getElementById("not").placeholder = "Draft for calculation";
document.getElementById("screen").placeholder = "0";
document.getElementById("qnmV").placeholder = "Questions";
document.getElementById("timV").placeholder = "Time";
document.getElementById("search-inputAtt").placeholder =
  "Search by name or date";
document.getElementById("MarkedInput").placeholder = "Search by Q ID";
var QueEnd = document.getElementById("QueEnd");
var corEnd = document.getElementById("corEnd");
var wrngEnd = document.getElementById("wrngEnd");
var skpEnd = document.getElementById("skpEnd");
var percEnd = document.getElementById("percEnd");
var timeEnd = document.getElementById("timeEnd");
var timeQend = document.getElementById("timeQend");

function infAdd() {
  QueEnd.innerHTML = OvQue.innerHTML + " Q";
  corEnd.innerHTML = OvCor.innerHTML;
  wrngEnd.innerHTML = OvINcor.innerHTML;
  skpEnd.innerHTML = skpCounter;
  percEnd.innerHTML = OvPerc.innerHTML;
  timeEnd.innerHTML = OvTM.innerHTML;
  timeQend.innerHTML = QuTM.innerHTML;
}
function openRev(evt, RevName) {
  var i, RevCntnt, RevBtn;
  RevCntnt = document.getElementsByClassName("RevCntnt");
  for (i = 0; i < RevCntnt.length; i++) {
    RevCntnt[i].style.display = "none";
  }
  RevBtn = document.getElementsByClassName("RevBtn");
  for (i = 0; i < RevBtn.length; i++) {
    RevBtn[i].className = RevBtn[i].className.replace(" active", "");
  }
  document.getElementById(RevName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("DefltOpn").click();
function addRngQ() {
  document.getElementById("noQuWrng").style.display = "none";
  const newQ = document.createElement("div");
  const gide = document.createElement("div");
  const NewQrev = document.createElement("div");
  const newAns1 = document.createElement("div");
  const newAns2 = document.createElement("div");
  const newAns3 = document.createElement("div");
  const newAns4 = document.createElement("div");
  const NewSHowBtn = document.createElement("div");
  const newEXP = document.createElement("div");
  const corANS = document.createElement("div");

  NewQrev.classList.add("NewQrev");
  newQ.classList.add("newQ");
  newAns1.classList.add("OPcls");
  newAns2.classList.add("OPcls");
  newAns3.classList.add("OPcls");
  newAns4.classList.add("OPcls");
  NewSHowBtn.classList.add("NewSHowBtn");
  newEXP.classList.add("newEXP");

  gide.innerHTML = "Question : " + score2;
  newQ.innerHTML = question.innerHTML;
  newAns1.innerHTML = op1.innerHTML;
  newAns2.innerHTML = op2.innerHTML;
  newAns3.innerHTML = op3.innerHTML;
  newAns4.innerHTML = op4.innerHTML;
  newEXP.innerHTML = showAns.innerHTML;
  newEXP.style.display = "none";
  NewSHowBtn.innerHTML = "Show Answer";
  gide.style.padding = " 0px 5px";
  corANS.innerHTML = "newAns" + questions[questionIndex].answer;
  const AnsWrng = document.getElementById("AnsWrng");
  AnsWrng.appendChild(NewQrev);
  NewQrev.appendChild(gide);
  NewQrev.appendChild(newQ);
  NewQrev.appendChild(newAns1);
  NewQrev.appendChild(newAns2);
  NewQrev.appendChild(newAns3);
  NewQrev.appendChild(newAns4);
  NewQrev.appendChild(NewSHowBtn);
  NewQrev.appendChild(newEXP);

  newAns1.onclick = function () {
    if (corANS.innerHTML == "newAns1") {
      newAns1.style.backgroundColor = "#4FC46B";
    } else {
      newAns1.style.backgroundColor = "#FA8278";
    }
  };
  newAns2.onclick = function () {
    if (corANS.innerHTML == "newAns2") {
      newAns2.style.backgroundColor = "#4FC46B";
    } else {
      newAns2.style.backgroundColor = "#FA8278";
    }
  };
  newAns3.onclick = function () {
    if (corANS.innerHTML == "newAns3") {
      newAns3.style.backgroundColor = "#4FC46B";
    } else {
      newAns3.style.backgroundColor = "#FA8278";
    }
  };
  newAns4.onclick = function () {
    if (corANS.innerHTML == "newAns4") {
      newAns4.style.backgroundColor = "#4FC46B";
    } else {
      newAns4.style.backgroundColor = "#FA8278";
    }
  };
  NewSHowBtn.onclick = function () {
    if (newEXP.style.display == "none") {
      newEXP.style.display = "block";
      NewSHowBtn.innerHTML = "Hide Answer";
    } else {
      newEXP.style.display = "none";
      NewSHowBtn.innerHTML = "Show Answer";
    }
  };
}

function addCorQ() {
  document.getElementById("noQuCor").style.display = "none";
  const newQ = document.createElement("div");
  const gide = document.createElement("div");
  const NewQrev = document.createElement("div");
  const newAns1 = document.createElement("div");
  const newAns2 = document.createElement("div");
  const newAns3 = document.createElement("div");
  const newAns4 = document.createElement("div");
  const NewSHowBtn = document.createElement("div");
  const newEXP = document.createElement("div");
  const corANS = document.createElement("div");

  NewQrev.classList.add("NewQrev");
  newQ.classList.add("newQ");
  newAns1.classList.add("OPcls");
  newAns2.classList.add("OPcls");
  newAns3.classList.add("OPcls");
  newAns4.classList.add("OPcls");
  NewSHowBtn.classList.add("NewSHowBtn");
  newEXP.classList.add("newEXP");

  gide.innerHTML = "Question : " + score;
  newQ.innerHTML = question.innerHTML;
  newAns1.innerHTML = op1.innerHTML;
  newAns2.innerHTML = op2.innerHTML;
  newAns3.innerHTML = op3.innerHTML;
  newAns4.innerHTML = op4.innerHTML;
  newEXP.innerHTML = showAns.innerHTML;
  newEXP.style.display = "none";
  NewSHowBtn.innerHTML = "Show Answer";
  gide.style.padding = " 0px 5px";
  corANS.innerHTML = "newAns" + questions[questionIndex].answer;
  const AnsCor = document.getElementById("AnsCor");
  AnsCor.appendChild(NewQrev);
  NewQrev.appendChild(gide);
  NewQrev.appendChild(newQ);
  NewQrev.appendChild(newAns1);
  NewQrev.appendChild(newAns2);
  NewQrev.appendChild(newAns3);
  NewQrev.appendChild(newAns4);
  NewQrev.appendChild(NewSHowBtn);
  NewQrev.appendChild(newEXP);

  newAns1.onclick = function () {
    if (corANS.innerHTML == "newAns1") {
      newAns1.style.backgroundColor = "#4FC46B";
    } else {
      newAns1.style.backgroundColor = "#FA8278";
    }
  };
  newAns2.onclick = function () {
    if (corANS.innerHTML == "newAns2") {
      newAns2.style.backgroundColor = "#4FC46B";
    } else {
      newAns2.style.backgroundColor = "#FA8278";
    }
  };
  newAns3.onclick = function () {
    if (corANS.innerHTML == "newAns3") {
      newAns3.style.backgroundColor = "#4FC46B";
    } else {
      newAns3.style.backgroundColor = "#FA8278";
    }
  };
  newAns4.onclick = function () {
    if (corANS.innerHTML == "newAns4") {
      newAns4.style.backgroundColor = "#4FC46B";
    } else {
      newAns4.style.backgroundColor = "#FA8278";
    }
  };
  NewSHowBtn.onclick = function () {
    if (newEXP.style.display == "none") {
      newEXP.style.display = "block";
      NewSHowBtn.innerHTML = "Hide Answer";
    } else {
      newEXP.style.display = "none";
      NewSHowBtn.innerHTML = "Show Answer";
    }
  };
}

let skpCounter = 0;
function addSkpQ() {
  skpCounter++;
  document.getElementById("noQuSkp").style.display = "none";
  const newQ = document.createElement("div");
  const gide = document.createElement("div");
  const NewQrev = document.createElement("div");
  const newAns1 = document.createElement("div");
  const newAns2 = document.createElement("div");
  const newAns3 = document.createElement("div");
  const newAns4 = document.createElement("div");
  const NewSHowBtn = document.createElement("div");
  const newEXP = document.createElement("div");
  const corANS = document.createElement("div");

  NewQrev.classList.add("NewQrev");
  newQ.classList.add("newQ");
  newAns1.classList.add("OPcls");
  newAns2.classList.add("OPcls");
  newAns3.classList.add("OPcls");
  newAns4.classList.add("OPcls");
  NewSHowBtn.classList.add("NewSHowBtn");
  newEXP.classList.add("newEXP");

  gide.innerHTML = "Question : " + skpCounter;
  newQ.innerHTML = question.innerHTML;
  newAns1.innerHTML = op1.innerHTML;
  newAns2.innerHTML = op2.innerHTML;
  newAns3.innerHTML = op3.innerHTML;
  newAns4.innerHTML = op4.innerHTML;
  newEXP.innerHTML = showAns.innerHTML;
  newEXP.style.display = "none";
  NewSHowBtn.innerHTML = "Show Answer";
  gide.style.padding = " 0px 5px";
  corANS.innerHTML = "newAns" + questions[questionIndex].answer;
  const AnsSkp = document.getElementById("AnsSkp");
  AnsSkp.appendChild(NewQrev);
  NewQrev.appendChild(gide);
  NewQrev.appendChild(newQ);
  NewQrev.appendChild(newAns1);
  NewQrev.appendChild(newAns2);
  NewQrev.appendChild(newAns3);
  NewQrev.appendChild(newAns4);
  NewQrev.appendChild(NewSHowBtn);
  NewQrev.appendChild(newEXP);

  newAns1.onclick = function () {
    if (corANS.innerHTML == "newAns1") {
      newAns1.style.backgroundColor = "#4FC46B";
    } else {
      newAns1.style.backgroundColor = "#FA8278";
    }
  };
  newAns2.onclick = function () {
    if (corANS.innerHTML == "newAns2") {
      newAns2.style.backgroundColor = "#4FC46B";
    } else {
      newAns2.style.backgroundColor = "#FA8278";
    }
  };
  newAns3.onclick = function () {
    if (corANS.innerHTML == "newAns3") {
      newAns3.style.backgroundColor = "#4FC46B";
    } else {
      newAns3.style.backgroundColor = "#FA8278";
    }
  };
  newAns4.onclick = function () {
    if (corANS.innerHTML == "newAns4") {
      newAns4.style.backgroundColor = "#4FC46B";
    } else {
      newAns4.style.backgroundColor = "#FA8278";
    }
  };
  NewSHowBtn.onclick = function () {
    if (newEXP.style.display == "none") {
      newEXP.style.display = "block";
      NewSHowBtn.innerHTML = "Hide Answer";
    } else {
      newEXP.style.display = "none";
      NewSHowBtn.innerHTML = "Show Answer";
    }
  };
}

var idquizover = document.getElementById("idquizover");
var infoNew = document.getElementById("infoNew");
var MainRev = document.getElementById("MainRev");
infoNew.style.display = "none";
MainRev.style.display = "none";
function quizOver() {
  document.querySelector(".quiz-over").style.display = "block";
  document.getElementById("showquiz").style.display = "none";
  OverFunc();
  infAdd();
  idquizover.appendChild(infoNew);
  idquizover.appendChild(MainRev);
  infoNew.style.display = "block";
  MainRev.style.display = "block";
}

function check(element) {
  if (element.id == questions[questionIndex].answer) {
    element.classList.add("correct");
    score++;
    correctAnswerSpan2.innerHTML = score;
    addCorQ();
  } else {
    element.classList.add("wrong");
    score2++;
    wrongAnswerSpan.innerHTML = score2;
    addRngQ();
  }
  disabledOptions();
}
function skipQ() {
  if (!options[0].classList.contains("disabled")) {
    addSkpQ();
  }
  enableOptions();
  randomQuestion();
}

// ESSAY STUFF
function SubmitChoicesEssay() {
  if (Number(rslt.innerHTML) >= 1) {
    qnmV.value = Number(rslt.innerHTML);
    qnumMax.innerHTML = Number(rslt.innerHTML);
    TimVlu();
    startEssayEXAM();
  } else {
    alert("you have not selected any topic");
  }
}

document.addEventListener("click", function (event) {
  if (event.target.matches(".formatbtn")) {
    var command = event.target.getAttribute("data-command"); // Use a data attribute for the command
    format(command);
  }
});
function format(cmd) {
  var iframe = document.getElementsByName("textArea")[0];
  iframe.contentWindow.document.execCommand(cmd, false, null);
}
function initTextEditor(content) {
  var iframe = document.getElementsByName("textArea")[0];
  if (iframe) {
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.designMode = "on";
    iframeDoc.body.innerHTML = content; // Set the content

    // Set up the onChange event listener
    iframeDoc.body.oninput = function () {
      if (question) {
        question.yourAns = iframeDoc.body.innerHTML;
      }
    };
  }
}

window.onload = function () {
  // Initialize the iFrame editor
  var iframe = document.getElementsByName("textArea")[0];
  iframe.contentWindow.document.designMode = "on";

  // Function to update the formatting
  format = function (cmd) {
    iframe.contentWindow.document.execCommand(cmd, false, null);
  };
};
const showEssayQuestion = (i) => {
  index = i;
  if (questions[index]) {
    question = questions[index];
    let options = generateOptions();
    quizContainer.innerHTML = `<div class="pointer-container"></div>
        <div id="Que"> ${question.q} </div>
        <div class="answers-containers">  
        <div class="popup-essay-btns">
        <button onClick="openPdf('${question.timeValues}')" style="display: flex; align-items: center; justify-content: center; gap: 8px;">
          <span
            aria-hidden="true">
            <svg style="width: 17px; height: 17px;" fill="currentColor" role="img"
              viewBox="0 0 1792 1792" class="g-icon g-file-pdf" aria-label="file pdf"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40
          0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528v-1024h-416q-40
          0-68-28t-28-68v-416h-768v1536h1280zm-514-593q33 26 84 56 59-7 117-7 147 0 177 49 16 22 2 52 0 1-1 2l-2 2v1q-6 38-71
          38-48 0-115-20t-130-53q-221 24-392 83-153 262-242 262-15 0-28-7l-24-12q-1-1-6-5-10-10-6-36 9-40 56-91.5t132-96.5q14-9
          23 6 2 2 2 4 52-85 107-197 68-136 104-262-24-82-30.5-159.5t6.5-127.5q11-40 42-40h22q23 0 35 15 18 21 9 68-2 6-4 8 1 3
          1 8v30q-2 123-14 192 55 164 146 238zm-576 411q52-24 137-158-51 40-87.5 84t-49.5 74zm398-920q-15 42-2 132 1-7 7-44 0-3
          7-43 1-4 4-8-1-1-1-2-1-2-1-3-1-22-13-36 0 1-1 2v2zm-124 661q135-54 284-81-2-1-13-9.5t-16-13.5q-76-67-127-176-27 86-83
          197-30 56-45 83zm646-16q-24-24-140-24 76 28 124 28 14 0 18-1 0-1-2-3z"></path>
            </svg>
          </span>Click here to view Essay Scenario
          <svg style="width: 17px; height:17px;" fill="currentColor" role="img" viewBox="0 0 2048 1792" class="g-icon g-open-folder" aria-label="open folder" xmlns="http://www.w3.org/2000/svg">
            <path d="M1943 952q0 31-31 66l-336 396q-43 51-120.5 86.5t-143.5 35.5h-1088q-34 0-60.5-13t-26.5-43q0-31
            31-66l336-396q43-51 120.5-86.5t143.5-35.5h1088q34 0 60.5 13t26.5 43zm-343-344v160h-832q-94 0-197
            47.5t-164 119.5l-337 396-5 6q0-4-.5-12.5t-.5-12.5v-960q0-92 66-158t158-66h320q92 0 158 66t66
            158v32h544q92 0 158 66t66 158z"></path>
         </svg>
        </button>
        <button onClick="openPdf('${question.essayScenario}')"  style="display: flex; align-items: center; justify-content: center; gap: 8px;">
          <span
            aria-hidden="true">
            <svg style="width: 17px; height: 17px;" fill="currentColor" role="img"
              viewBox="0 0 1792 1792" class="g-icon g-file-pdf" aria-label="file pdf"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40
          0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528v-1024h-416q-40
          0-68-28t-28-68v-416h-768v1536h1280zm-514-593q33 26 84 56 59-7 117-7 147 0 177 49 16 22 2 52 0 1-1 2l-2 2v1q-6 38-71
          38-48 0-115-20t-130-53q-221 24-392 83-153 262-242 262-15 0-28-7l-24-12q-1-1-6-5-10-10-6-36 9-40 56-91.5t132-96.5q14-9
          23 6 2 2 2 4 52-85 107-197 68-136 104-262-24-82-30.5-159.5t6.5-127.5q11-40 42-40h22q23 0 35 15 18 21 9 68-2 6-4 8 1 3
          1 8v30q-2 123-14 192 55 164 146 238zm-576 411q52-24 137-158-51 40-87.5 84t-49.5 74zm398-920q-15 42-2 132 1-7 7-44 0-3
          7-43 1-4 4-8-1-1-1-2-1-2-1-3-1-22-13-36 0 1-1 2v2zm-124 661q135-54 284-81-2-1-13-9.5t-16-13.5q-76-67-127-176-27 86-83
          197-30 56-45 83zm646-16q-24-24-140-24 76 28 124 28 14 0 18-1 0-1-2-3z"></path>
            </svg>
          </span>Time Value Tables
          <span aria-hidden="true">
            <svg style="width: 17px; height: 17px;" fill="currentColor" role="img"
              viewBox="0 0 1792 1792" class="g-icon g-external-link" aria-label="external link"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M1408 928v320q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119
                             84.5-203.5t203.5-84.5h704q14 0 23 9t9 23v64q0 14-9 23t-23 9h-704q-66 0-113 47t-47 113v832q0 66 47
                             113t113 47h832q66 0 113-47t47-113v-320q0-14 9-23t23-9h64q14 0 23 9t9 23zm384-864v512q0 26-19 45t-45
                             19-45-19l-176-176-652 652q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l652-652-176-176q-19-19-19-45t19-45
                             45-19h512q26 0 45 19t19 45z"></path>
            </svg>
          </span>

        </button>
      </div>
        <div id="textEditor">
        <div id="toolbar">
        <button class="formatbtn" data-command="bold" onclick="format('bold')"><i class="fa-bold fas fa"></i></button>
        <button class="formatbtn" onclick="format('italic')"><i class="fa-italic fa fas"></i></button>
        <button class="formatbtn" onclick="format('underline')"><i class="fa-underline fa fas"></i></button>
        <button class="formatbtn" onclick="format('justifyLeft')"><i class="fas fa fa-align-left"></i></button>
        <button class="formatbtn" onclick="format('justifyCenter')"><i class="fas fa fa-align-center"></i></button>
        <button class="formatbtn" onclick="format('justifyRight')"><i class="fas fa fa-align-right"></i></button>
        <button class="formatbtn" onclick="format('undo')"><i class="fas fa fa-undo"></i></button>
        <button class="formatbtn" onclick="format('redo')"><i style="transform: scale(-1,1);" class="fas fa fa-undo"></i></button>
        </div>
        <iframe name="textArea" id="textArea"></iframe>
        </div>
        </div>`;
    document.getElementById("CorAnsNum").innerHTML = question.answer;
    document.getElementById("explainID1").innerHTML = question.ansExplain;
    document.getElementById("QuID").innerHTML = question.id;
    document.getElementById("QuID2").innerHTML = "ID:" + question.id;
    document.getElementById("QueDlelID").innerHTML =
      "Q: " + (index + 1) + " Of " + questions.length;

    const noteStord =
      (notesDB.find((n) => n.notID === question.notID) || {}).noteStord || "";
    noteElement.id = `noteStord-${question.notID}`;
    noteElement.value = question.noteStord || noteStord;
    noteElement.addEventListener("keyup", () =>
      saveNoteForQuestion(question.notID)
    ); // Add event lisnr to save noteStord on keyup
    NootesDiv.appendChild(noteElement);
    initTextEditor(question.yourAns || ""); // Pass yourAns or an empty string if undefined
  } else {
    alert("Invalid question");
  }
  loadNotesForQuestions();
  question.yourNote = noteElement.value;
  if (question.yourChck == "") {
  } else {
    document.getElementById(question.yourChck).click();
  }
};

function StartShowEssayQ() {
  for (let i = 1; i < questions.length + 1; i++) {
    var newBTNs = document.createElement("button");
    newBTNs.innerHTML = i;
    newBTNs.id = "newId" + i;
    newBTNs.classList.add("newBtnsCls");
    document.getElementById("btnsDIV").appendChild(newBTNs);
    document.getElementById("newId1").classList.add("active2");
    newBTNs.addEventListener("click", showQue);
    function showQue() {
      showEssayQuestion(i - 1);
      var current = document.getElementsByClassName("active2");
      for (var z = 0; z < current.length; z++) {
        current[0].className = current[0].className.replace(" active2", "");
        this.className += " active2";
      }

      if (alwaysShowAns == true) {
      } else {
        if (explainID1.style.display == "block") {
          explainID1.style.display = "none";
          ShoAns1.innerHTML = "Show Answer";
        }
      }
    }
  }
  showEssayQuestion(0);
  startTim();
  startTimeEND();

  WaitQuiz();
}

function startEssayEXAM() {
  addQQ();

  if (randDlel == 1) {
    questions.sort(function (a, b) {
      return a.id - b.id;
    });
    questions.splice(qnmV.value, questions.length);
    StartShowEssayQ();
  } else if (randDlel == 2) {
    questions.splice(qnmV.value, questions.length);
    StartShowEssayQ();
  } else if (randDlel == 3) {
    questions.sort(function () {
      return 0.5 - Math.random();
    });
    questions.sort(function () {
      return 0.5 - Math.random();
    });
    questions.sort(function () {
      return 0.5 - Math.random();
    });
    questions.sort(function () {
      return 0.5 - Math.random();
    });
    questions.sort(function () {
      return 0.5 - Math.random();
    });
    questions.sort(function () {
      return 0.5 - Math.random();
    });
    questions.sort(function () {
      return 0.5 - Math.random();
    });
    questions.sort(function () {
      return 0.5 - Math.random();
    });
    questions.splice(qnmV.value, questions.length);
    StartShowEssayQ();
  } else {
    alert("there are no choice");
  }
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
  }

  for (var i = 0; i < scrlBTNs.length; i++) {
    if (questions.length < 14) {
      scrlBTNs[i].style.display = "none";
    }
  }

  QnmVluFnc();
}
function openPdf(pdfLink) {
  // Specify the path to your PDF file
  var pdfPath = `${pdfLink}`;

  // Specify the size and features of the new window
  var windowFeatures =
    "width=800,height=600,resizable=yes,scrollbars=yes,status=yes";

  // Open the PDF in a new window with specified features
  window.open(pdfPath, "_blank", windowFeatures);
}

window.onload = function () {
  var evt1 = document.getElementById("chU1");
  // Set the checkbox to the desired state, e.g., checked
  evt1.checked = true;

  var pp = 1; // Based on your original HTML element
  var qq = 6; // The value you used in your original onclick event
  var ClsUchkd = "ClsU1"; // The class name used in your original function

  checkAllBtn(evt1, pp, qq, ClsUchkd);
};

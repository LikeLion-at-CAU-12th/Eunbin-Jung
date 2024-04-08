const myHandText = document.getElementById("my-hand-text")
const myHandIcon = document.getElementById("my-hand-icon")
const myScore = document.getElementById("my-score")
const gameResult = document.getElementById("display-result")

const computerText = document.getElementById("computer-hand-text")
const computerIcon = document.getElementById("computer-hand-icon")
const computerScore = document.getElementById("computer-score")

const resetBtn = document.getElementById("reset-button")
const rockBtn = document.getElementById("rock")
const scissorsBtn = document.getElementById("scissors")
const paperBtn = document.getElementById("paper")

const darkModeBtn = document.getElementById("dark-mode-toggle")

let myScoreValue = 0;
let computerScoreValue = 0;

//선언한 dom 요소에 이벤트 생성

rockBtn.addEventListener("click", displayMyChoice);
scissorsBtn.addEventListener("click", displayMyChoice);
paperBtn.addEventListener("click", displayMyChoice);
resetBtn.addEventListener("click", resetScore);
darkModeBtn.addEventListener("click", changeMode);

function displayMyChoice(e){
  let clickedBtn = e.currentTarget.id;
  let clickedicon = e.target.className;

  myHandText.innerText = clickedBtn;
  myHandIcon.className = clickedicon;

  start(clickedBtn);
}

function getComChoice(){

  const randomvalue = {
    0: ["rock","fa-regular fa-hand-back-fist"],
    1: ["scissors","fa-regular fa-hand-scissors fa-rotate-90"],
    2: ["paper", "fa-regular fa-hand"],
  };

  const randomIndex = Math.floor(Math.random() * 3);

  return randomvalue[randomIndex];
}


function displayComChoice(result) {
  computerText.innerText = result[0];
  computerIcon.className = result[1]; 
}

function displayScore() { //스코어 보여주기
  myScore.innerText = myScoreValue;
  computerScore.innerText = computerScoreValue; 
}

function updateScore(playerChoice, computerChoice) { //스코어 업데이트 + 승패 비교하기
  if (playerChoice === computerChoice) {
    return "draw";
  }

  if ((playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")) {
    myScoreValue += 1;
    return "win";
  } else {
    computerScoreValue += 1;
    return "lose";
  }
}

function displayGameResult(result) { //승부결과 텍스트 띄우기
  gameResult.innerText = result;
}

function resetScore() { //스코어 초기화 시키고 점수판에 보여주기
  myScoreValue = 0;
  computerScoreValue = 0;
  displayScore();
}

function changeMode() { //다크모드 구현하기
  document.body.classList.toggle("dark-mode");
}

function start(myChoice) {
  let resultArray = getComChoice();
  displayComChoice(resultArray);

  let result = updateScore(myChoice, resultArray[0]);
  displayScore();

  displayGameResult(result);
}

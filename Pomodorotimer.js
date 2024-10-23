let startEl = document.getElementById('start')
let stopEl = document.getElementById('stop')
let resetEl = document.getElementById('reset')
let timerEl = document.getElementById('timer')

let interval
let timeleft = 10;


function updateTimer(){
  let minutes = Math.floor(timeleft / 60)
  let second = timeleft % 60
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`;

  timerEl.innerHTML = formattedTime;
}



function startTimer(){
  interval = setInterval(()=>{
    timeleft--;
    updateTimer()
    if(timeleft === 0){
      clearInterval(interval);
      alert("Time's up!")
      timeleft = 1500;
    }
  },1000)
}
function stopTimer(){
  console.log("stop");
}
function resetTimer(){
  console.log("reset");
}



startEl.addEventListener("click", startTimer)
stopEl.addEventListener("click", stopTimer)
resetEl.addEventListener("click", resetTimer)
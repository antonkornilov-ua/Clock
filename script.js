function showClock() {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    hour = checkTime(hour);
    document.querySelector(".hour").innerHTML = hour;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
    setTimeout(showClock, 1000);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
function showCalendar() {
    let date = new Date;
    let currentYear = date.getFullYear();
    let month = date.getMonth();
    let monthes = [
      "Січня",
      "Лютого",
      "Березня",
      "Квітня",
      "Травня",
      "Червня",
      "Липня",
      "Серпня",
      "Вересня",
      "Жовтня",
      "Листопада",
      "Грудня",
    ];
    let currentMonth = monthes[month];
    let dayNum = date.getDate();
    let dayStr = date.getDay();
    let days = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "Пʼятниця", "Субота"];
    let currentDay = days[dayStr];
    document.querySelector(".date").innerHTML = currentDay;
    document.querySelector(".day").innerHTML = dayNum;
    document.querySelector(".month").innerHTML = currentMonth;
    document.querySelector(".year").innerHTML = currentYear;
    setTimeout(showCalendar, 60000);
}

function watch() {
    showClock();
    showCalendar();
}
// timer section
let h3 = document.getElementsByTagName('h3')[0];
let startBtn = document.querySelector(".start-timer");
let resetBtn = document.querySelector(".reset-timer");
let stopBtn = document.querySelector(".stop-timer");

let sec = 0,
    min = 0,
    hrs = 0;
let t;

function tick() {
  sec++;
  if(sec >= 60){
    sec = 0;
    min++;
    if(min >= 60){
      min = 0;
      hrs++;
    }
  }
}
function add() {
  tick();
  h3.textContent = (hrs > 9 ? hrs : "0" + hrs) + ":" +(min > 9 ? min : "0" + min)  + ":" + (sec > 9 ? sec : "0" + sec);
  timer()
}
function timer() {
  t = setTimeout(add, 1000);
}
startBtn.addEventListener("click", timer);
stopBtn.addEventListener("click", ()=> clearInterval(t));
resetBtn.addEventListener("click", function () {
  h3.textContent = "00:00:00";
seconds = 0; minutes = 0; hours = 0;
})










const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let giveaway = document.querySelector(".giveaway");
let deadline = document.querySelector(".deadline");
let items = document.querySelectorAll(".deadline-format h4"); 

let futureDate = new Date(2022, 5, 8, 20, 30, 0);
console.log(futureDate);

let year = futureDate.getFullYear();
let hours = futureDate.getHours();
let minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
let day = futureDate.getDay();

day = weekdays[day];
month = months[month];


giveaway.textContent = `giveaway ends on ${month}, ${day}, ${year}, ${hours}:${minutes}`


// future time in ms

let futureTime = futureDate.getTime().toFixed(0);


function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let textDay = Math.floor(t / day);
    let textHour = Math.floor((t % day) / hour);
    let textMinute = Math.floor((t % hour) / minute);
    let textSecond = Math.floor((t % minute) / second);

    const values = [textDay, textHour, textMinute, textSecond];

    items.forEach(function(item, index){
      item.innerHTML = values[index];
    });

}

// countdown
let countdown = setInterval(getRemainingTime,1000);
getRemainingTime();


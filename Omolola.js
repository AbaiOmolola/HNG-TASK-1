let dayList = [
    "Sunday",
    "Monday",
    "Tuesday", // Corrected typo
    "Wednesday", // Corrected typo
    "Thursday",
    "Friday",
    "Saturday"
];

let a = document.getElementById("currentDayOfTheWeek");

let b = document.getElementById("currentUTCTime");

function daysAndTime() { // Corrected function name
    let today = new Date();
    let day = today.getDay();
    let todaysDay = dayList[day];
    a.innerHTML = todaysDay;

    let time = today.getTime();
    b.innerHTML = time;
};

setInterval(daysAndTime, 100);

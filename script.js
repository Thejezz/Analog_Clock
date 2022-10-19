const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

function setDate() {
    const date = new Date();
    const seconds = date.getSeconds();
    const secondDegrees = ((seconds/60)*360) + 90;
    const minutes = date.getMinutes();
    const minuteDegrees = ((minutes/60)*360) + 90;
    const hours = date.getHours();
    const hourDegrees = ((hours/12)*360)+90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    console.log(hourDegrees)
}

setInterval(setDate, 1000)
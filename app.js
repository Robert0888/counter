const newYear = '27 Oct 2022';
const dayEl = document.querySelector('#days')
const hrsEl = document.querySelector('#hours')
const minsEl = document.querySelector('#minute')
const secEl = document.querySelector('#second')

function timer() {
    const nY = new Date(newYear)
    const currentDate =  Date.now();
    const totSec = (nY - currentDate)/ 1000;
    const days = Math.floor((totSec / 3600)/24);
    const hrs = Math.floor(totSec /3600) % 24;
    const mins =Math.floor(totSec/ 60) %60
    const sec = Math.floor(totSec) % 60
    // console.log(days,hrs, mins, sec);

    dayEl.innerText = days
    hrsEl.innerText = hrs
    minsEl.innerText = time(mins)
    secEl.innerText = sec
}

timer()


setInterval(timer, 1000)

function time(c) {
    if (c < 10) {
        return 0`${c}`
    } else {
        return c
    }
}
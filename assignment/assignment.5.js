const dday = document.querySelector('.js-Dday > h2')

function dDayCounter() {
    const cristmas = new Date("Sat Dec 25 2021 00:00:00 GMT+0900")
    const now = new Date();

    let dDay = Math.abs(cristmas - now);

    const day = parseInt(dDay / (1000*3600*24));
    const dayLeft = dDay % (1000*3600*24)
    const hour = parseInt(dayLeft / (1000*3600));
    const hourLeft = dayLeft % (1000*3600)
    const min = parseInt(hourLeft / (1000*60));
    const minLeft = hourLeft % (1000*60)
    const sec = parseInt(minLeft / 1000);

    dday.innerText 
    = `${day < 10 ? `0${day}` : day}d ${
        hour < 10 ? `0${hour}` : hour}h ${
        min < 10 ? `0${min}` : min}m ${
        sec < 10 ? `0${sec}` : sec}s`;
}

function init(){
    setInterval(dDayCounter,1000);
}

init();
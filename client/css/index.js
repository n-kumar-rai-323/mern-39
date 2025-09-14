let counter = 0
function clickMeBtnEvent() {
    counter++
    document.getElementById("counterElement").innerHTML = "Counter : " + counter;
}




document.getElementById('clickBtn').addEventListener("click", clickMeBtnEvent);




const numPadding = (numb) => {
    if (numb < 10) {
        return `${numb}`.padStart(2,'0')
    } else {
        return numb
    }
}
const showClock = () => {
    let date = new Date()
    let hours =  numPadding(date.getHours());
    let minutes =numPadding( date.getMinutes());
    let seconds = numPadding( date.getSeconds());

    let time = hours + ":" + minutes + ":" + seconds
    document.getElementById("clock").innerHTML = time
}
// showClock()

document.addEventListener("DOMContentLoaded", () => {
    setInterval(showClock, 1000)
}
)
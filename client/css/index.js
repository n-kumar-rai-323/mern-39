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


const numPaddings = (numb) => {
      return numb < 10 ? `${numb}`.padStart(2, '0') : numb;
    };

    const showDate = () => {
      let date = new Date();
      let day = numPaddings(date.getDate());
      let month = numPaddings(date.getMonth() + 1); // month starts from 0
      let year = date.getFullYear();

      let formattedDate = day + "/" + month + "/" + year;
      document.getElementById("dateDisplay").innerHTML = formattedDate;
    };

    document.addEventListener("DOMContentLoaded", () => {
      setInterval(showDate, 1000);
    });




     const colors = ["#FF6B6B", "#4ECDC4", "#FFD93D", "#6BCB77", "#1A5F7A", "#9D4EDD"];

    // Step 2: Function to change background
    const changeBackground = () => {
      let randomIndex = Math.floor(Math.random() * colors.length);
      let newColor = colors[randomIndex];
      document.body.style.backgroundColor = newColor;
      document.getElementById("colorName").innerHTML = "Current Color: " + newColor;
    };

    // Step 3: Update every 2 seconds
    document.addEventListener("DOMContentLoaded", () => {
      changeBackground(); // run once immediately
      setInterval(changeBackground, 2000); // run every 2s
    });

     // Step 1: Array of quotes
    const quotes = [
      "The best way to get started is to quit talking and begin doing.",
      "Success is not in what you have, but who you are.",
      "Dream big and dare to fail.",
      "Don’t let yesterday take up too much of today.",
      "It always seems impossible until it’s done."
    ];

    // Step 2: Function to pick a random quote
    const showQuote = () => {
      let randomIndex = Math.floor(Math.random() * quotes.length);
      document.getElementById("quoteDisplay").innerHTML = quotes[randomIndex];
    };

    // Step 3: When page loads, start updating every 5 seconds
    document.addEventListener("DOMContentLoaded", () => {
      showQuote(); // show one immediately
      setInterval(showQuote, 5000); // change every 5s
    });



    let count = 0;

    const updateCounter = () => {
      count++;
      document.getElementById("counter").innerHTML = count;
    };

    document.addEventListener("DOMContentLoaded", () => {
      setInterval(updateCounter, 1000); // increase every 1s
    });
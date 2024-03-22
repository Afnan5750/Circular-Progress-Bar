const loading = document.getElementById("loading");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const circle = document.querySelector("circle");

const loadingDots = ['.', '..', '...'];

let loadingCounter = 0;
let numberCounter1 = 0;
let numberCounter2 = 0;

// Function to update the loading dots
function updateLoadingDots() {
    if (loadingCounter === loadingDots.length) {
        loadingCounter = 0;
    }
    loading.textContent = loadingDots[loadingCounter];
    loadingCounter++;
}

// Function to update the number counter 1 and adjust the progress bar
function updateNumberCounter1() {
    if (numberCounter1 === 65) {
        clearInterval(numberInterval1);
    } else {
        numberCounter1++;
        number1.innerHTML = numberCounter1 + "%";
        updateProgressBar(numberCounter1);
    }
}

// Function to update the number counter 2 and adjust the progress bar
function updateNumberCounter2() {
    if (numberCounter2 === 74) {
        clearInterval(numberInterval2);
    } else {
        numberCounter2++;
        number2.innerHTML = numberCounter2 + "%";
    }
}

// Function to update the progress bar based on the percentage
function updateProgressBar(percent) {
    const circumference = circle.getTotalLength();
    const offset = circumference * (1 - percent / 100);
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = offset;
}

// Interval for updating the loading text
const loadingInterval = setInterval(updateLoadingDots, 500);

// Interval for updating the number counter 1 and progress bar
const numberInterval1 = setInterval(updateNumberCounter1, 25);

// Interval for updating the number counter 2
const numberInterval2 = setInterval(updateNumberCounter2, 32);

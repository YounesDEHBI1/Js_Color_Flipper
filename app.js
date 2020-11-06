// Colors to display
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// Get Button
const btn = document.getElementById("btn");
// Get Color
const color = document.querySelector(".color");

btn.addEventListener('click', function (){
    // Get Hardcoded random number
    //const randomNumber = 2;

    // Get random number
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    // Change the background color
    document.body.style.backgroundColor = colors[randomNumber];

    // Show the displayed color name
    color.textContent = colors[randomNumber];
});
// Function to get random number
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
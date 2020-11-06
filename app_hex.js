// Hex numbers to combine for color like   #F15023
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// Get Button
const btn = document.getElementById("btn");
// Get Color
const color = document.querySelector(".color");

btn.addEventListener('click', function (){
   // Initiate Color Code
   let hexColor = "#";
   // Complete the hexa code for our random color
   for(let i = 0; i < 6; i++) {
       // Hard coded
       //hexColor += hex[10];
       // Random one
       hexColor += hex[getRandomNumber()];
   }
   color.textContent = hexColor;
   document.body.style.backgroundColor = hexColor;
});

// Function to get random number
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
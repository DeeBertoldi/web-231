/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Daniella Bertoldi
      Date:   09/05/25

      Filename: project03-01.js
*/

 // Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }

 // creates a variable called menuItems with the class name "menuItem"
let menuItems = document.getElementsByClassName("menuItem");

// Loop - starts at i = 0. + runs until i is less than the total
// number of menu items + and, It increases i by 1 each time.

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", calcTotal);
}

// Function to calculate total
function calcTotal() {
  let orderTotal = 0; // reset total

    // Loop through all items
  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].checked) {
      // add price if checked
      orderTotal += Number(menuItems[i].value);
    }
  }

    // HTML with total
  document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

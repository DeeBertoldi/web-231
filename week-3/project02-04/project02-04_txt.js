/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: DB
      Date:   01/09/2024

      Filename: project02-04.js
 */

// Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }

// declare the following constants
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE  = 9.95;
const SALMON_PRICE  = 18.95;
const SALAD_PRICE   = 7.95;
const SALES_TAX     = 0.07;


// insert an event handler that runs the calcTotal() - above calcTotal)
document.getElementById('chicken').addEventListener('click', calcTotal);
document.getElementById('halibut').addEventListener('click', calcTotal);
document.getElementById('burger') .addEventListener('click', calcTotal);
document.getElementById('salmon') .addEventListener('click', calcTotal);
document.getElementById('salad')  .addEventListener('click', calcTotal);

// calcTotal
function calcTotal() {
  // a) start
  let cost = 0;



  // read checkboxes
  const buyChicken = document.getElementById('chicken').checked;
  const buyHalibut = document.getElementById('halibut').checked;
  const buyBurger  = document.getElementById('burger').checked;
  const buySalmon  = document.getElementById('salmon').checked;
  const buySalad   = document.getElementById('salad').checked;

  // add item prices
  cost += buyChicken ? CHICKEN_PRICE : 0;
  cost += buyHalibut ? HALIBUT_PRICE : 0;
  cost += buyBurger  ? BURGER_PRICE  : 0;
  cost += buySalmon  ? SALMON_PRICE  : 0;
  cost += buySalad   ? SALAD_PRICE   : 0;

  //  show item total
  document.getElementById('foodTotal').innerHTML = formatCurrency(cost);

  // tax
  const tax = cost * SALES_TAX;
  // show tax
  document.getElementById('foodTax').innerHTML = formatCurrency(tax);

  // grand total
  const totalCost = cost + tax;
  // h) show grand total
  document.getElementById('totalBill').innerHTML = formatCurrency(totalCost);
}


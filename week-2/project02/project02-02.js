/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Daniella Bertoldi
      Date:   08/24/2025

      Filename: project02-02.js
 */

// define a named function
function verifyForm() {
  // get value from inputs with ids
  const name  = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();

  // use name && email && phone tp check
  (name && email && phone)
    ? window.alert('Thank you!')
    : window.alert('Please fill in all fields');
}

// Event listener for
document.getElementById('submit').addEventListener('click', verifyForm);

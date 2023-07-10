window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  // set default
  document.getElementById("loan-amount").value = 2000;
  document.getElementById("loan-years").value = 2;
  document.getElementById("loan-rate").value = 2;
  // calculate initial value based on defaults
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let number = calculateMonthlyPayment(getCurrentUIValues());
  updateMonthly(number);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  // proccesses the numbers
  let amount = parseFloat(values.amount);
  // gets monthly rate
  let rate = parseFloat(values.rate) / 100 / 12;
  // gets number of payments (per year)
  let payments = parseFloat(values.years) * 12;
  // calculates monthly payment
  var x = Math.pow(1 + rate , payments);
  var monthly = (amount*x*rate)/(x-1);
  // returns value rounded with 2 dec
  return monthly.toFixed( 2 );
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").textContent = monthly;
}

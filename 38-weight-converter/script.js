const pounds = document.querySelector('.pounds'),
  kilograms = document.querySelector('.kilograms'),
  grams = document.querySelector('.grams'),
  ounces = document.querySelector('.ounces'),
  form = document.querySelector('form');

// Pounds Converter
form.addEventListener('input', convertWeight);

function convertWeight(e) {
  if (e.target.classList.contains('pounds')) {
    let x = e.target.value;
    // console.log(x);
    kilograms.value = (x / 2.2046).toFixed(2);
    grams.value = (x / 0.0022046).toFixed(2);
    ounces.value = (x * 16).toFixed(2);
  }

  if (e.target.classList.contains('kilograms')) {
    let x = e.target.value;
    // console.log(x);
    pounds.value = (x / 2.2046).toFixed(2);
    grams.value = (x * 1000).toFixed(2);
    ounces.value = (x * 35.274).toFixed(2);
  }

  if (e.target.classList.contains('grams')) {
    let x = e.target.value;
    // console.log(x);
    kilograms.value = (x * 1000).toFixed(2);
    pounds.value = (x * 0.0022046).toFixed(2);
    ounces.value = (x * 0.035274).toFixed(2);
  }

  if (e.target.classList.contains('ounces')) {
    let x = e.target.value;
    // console.log(x);
    kilograms.value = (x / 35.274).toFixed(2);
    grams.value = (x / 0.035274).toFixed(2);
    pounds.value = (x * 0.0625).toFixed(2);
    console.log(kilograms.value);
  }
}

//  -- From pounds to --
// kilograms = x / 2.2046;
// grams = x / 0.0022046;
// ounces = x * 16;

// -- From Kilogram to --
// pounds = x * 2.2046;
// grams = x * 1000;
// ounces = x * 35.274;

// -- From Gram to --
// kilograms = x / 1000;
//   pounds = x * 0.0022046;
//   ounces = x * 0.035274;

// -- From Ounce to --
// kilograms = x / 35.274;
// grams = x / 0.035274;
// pounds = x * 0.0625;

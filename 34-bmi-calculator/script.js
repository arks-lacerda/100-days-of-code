// BMI - kg/m2
// Underweight - < 18.5
// Normal - 18.5 - 24.9
// Overweight - 25 - 29.9
// Obese 30 and above

const btn = document.querySelector('.btn'),
  result = document.querySelector('.result'),
  reset = document.querySelector('.reset');

btn.addEventListener('click', calculateBMI);

function calculateBMI(e) {
  e.preventDefault();
  let height = document.querySelector('.height').value;
  let weight = document.querySelector('.weight').value;

  // Validate Input
  if (height === '' || isNaN(height)) {
    return (result.innerHTML = 'Provide a valid Height!');
  } else if (weight === '' || isNaN(weight)) {
    return (result.innerHTML = 'Provide a valid Weight!');
  } else {
    height = height / 100;
    let bmi = (weight / Math.pow(height, 2)).toFixed(2);

    //Categorizes result
    if (bmi < 18.5) {
      showResult(`Underweight: <span>${bmi}</span>`, 'orange');
    } else if (bmi >= 18.5 && bmi < 24.9) {
      showResult(`Normal: <span>${bmi}</span>`, 'green');
    } else if (bmi >= 25 && bmi < 29.9) {
      showResult(`Overweight: <span>${bmi}</span>`, 'blue');
    } else if (bmi >= 30) {
      showResult(`Obese: <span>${bmi}</span>`, 'red');
    } else {
      result.innerHTML = 'Invalid Input';
    }
  }
  result.style.display = 'block';
  reset.style.display = 'block';
}

function showResult(val, color) {
  result.style.backgroundColor = color;
  return (result.innerHTML = val);
}

reset.addEventListener('click', () => {
  document.querySelector('form').reset();
  result.style.display = 'none';
  reset.style.display = 'none';
});

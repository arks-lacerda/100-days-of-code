const btn = document.querySelector('.get-quotes');
const number = document.getElementById('number');
const URL = 'https://type.fit/api/quotes';

btn.addEventListener('click', getQuotes);

function getQuotes(e) {
  e.preventDefault();
  if (number.value.length == 0) {
    return alert('Please enter a number');
  } else {
    fetch(URL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // console.log(data);

        data = shuffle(data);

        let output = '';

        for (let i = 0; i < data.length; i++) {
          if (i == number.value) {
            break;
          }
          output += `
            <div class='wrapper-quotes'>
              <ul class="quotes-list">
                <li>Quote: <span>${data[i].text}</span></li>
                <li>Author: <span>${data[i].author}</span></li>
              </ul>
            </div>
        `;
        }
        document.querySelector('.quotes').innerHTML = output;
      });
  }
}

function shuffle(quotes) {
  let CI = quotes.length,
    tempValue,
    randomIndex;

  // While elements exist in the array
  while (CI > 0) {
    randomIndex = Math.floor(Math.random() * CI);
    // Decrease CI by 1
    CI--;
    // * Swap the last element with CI
    tempValue = quotes[CI];
    quotes[CI] = quotes[randomIndex];
    quotes[randomIndex] = tempValue;
  }
  return quotes;
}

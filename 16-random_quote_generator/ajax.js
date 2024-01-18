const btn = document.querySelector('.get-quotes');
const number = document.getElementById('number');

btn.addEventListener('click', getQuotes);

function getQuotes(e) {
  e.preventDefault();

  if (number.value.length == 0) {
    return alert('Please enter a number.');
  } else {
    const https = new XMLHttpRequest();
    https.open('GET', 'https://type.fit/api/quotes', true);

    https.onload = function () {
      if (this.status === 200) {
        // console.log(this.responseText);

        const response = shuffle(JSON.parse(this.responseText));

        let output = '';

        // response.forEach(function (quote) {
        //   output += `
        // <div class='wrapper-quotes'>
        //   <ul class="quotes">
        //     <li>Quote: <span>${quote.text}</span></li>
        //     <li>Author: <span>${quote.author}</span></li>
        //   </ul>
        // </div>
        // `;
        // });

        for (let i = 0; i < response.length; i++) {
          if (i == number.value) {
            break;
          }
          output += `
            <div class='wrapper-quotes'>
              <ul class="quotes-list">
                <li>Quote: <span>${response[i].text}</span></li>
                <li>Author: <span>${response[i].author}</span></li>
              </ul>
            </div>
        `;
        }

        document.querySelector('.quotes').innerHTML = output;
      }
    };

    https.send();
  }
}

// Function to shuffle quotes
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

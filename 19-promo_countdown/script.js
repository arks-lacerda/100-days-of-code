// Time Countdown
let time = 10; // time in minutes
let promoTime = time * 60;

let counting = document.getElementById('countdown');

function startCountdown() {
  let promoTimer = setInterval(() => {
    if (promoTime < 0) {
      clearInterval(promoTimer);
      counting.innerHTML = 'Promo has ended';
    } else {
      promoTime--;
      const days = Math.floor(promoTime / 3600 / 24);
      const hours = String(Math.floor(promoTime / 3600) % 24).padStart(2, '0');
      const min = String(Math.floor(promoTime / 60) % 60).padStart(2, '0');
      const sec = String(Math.floor(promoTime % 60)).padStart(2, '0');

      counting.innerHTML = `TIME: ${hours}hrs : ${min}min : ${sec}s`;
    }
  }, 1000);
}

startCountdown();

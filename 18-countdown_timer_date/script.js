const countTo = '1 Jan 2025';

const c = setInterval(() => {
  const endDate = new Date(countTo);
  const currentDate = new Date();
  const totalSeconds = (endDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = String(Math.floor(totalSeconds / 3600) % 24).padStart(2, '0');
  const minutes = String(Math.floor(totalSeconds / 60) % 60).padStart(2, '0');
  const seconds = String(Math.floor(totalSeconds) % 60).padStart(2, '0');

  const countDown = document.getElementById('countdown');

  countDown.textContent = `${days}Days ${hours}Hrs : ${minutes}Min : ${seconds}s`;

  if (totalSeconds < 0) {
    clearInterval(c);
    countDown.textContent = 'Happy New Year';
  }
}, 1000);

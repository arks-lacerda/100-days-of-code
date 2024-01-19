const API = {
  key: 'd539f330ec7f815c539e7b30ed546fd8',
  base: 'https://api.openweathermap.org/data/2.5/',
};

const search = document.querySelector('.search');
const btn = document.querySelector('.btn');

btn.addEventListener('click', getInput);

function getInput(e) {
  e.preventDefault();

  if (e.type == 'click') {
    getData(search.value);
    console.log(search.value);
  }
}

function getData() {
  fetch(`${API.base}weather?q=${search.value}&units=metric&appid=${API.key}`)
    .then((res) => res.json())
    .then(displayData);
}

function displayData(res) {
  // console.log(res);
  if (res.cod === '404') {
    const error = document.querySelector('.error');
    error.textContent = 'Please enter a valid city';
    search.value = '';
  } else {
    const city = document.querySelector('.city');
    city.innerText = `${res.name}, ${res.sys.country}`;

    const today = new Date();
    const date = document.querySelector('.date');
    date.innerText = funcDate(today);

    const temp = document.querySelector('.temp');
    temp.innerHTML = `Temp: ${Math.round(res.main.temp)} <span>&deg;C</span>`;

    const weather = document.querySelector('.weather');
    weather.innerText = `Weather: ${res.weather[0].main}`;

    const tempRange = document.querySelector('.temp-range');
    tempRange.innerHTML = `Temp Range: ${Math.round(
      res.main.temp_min
    )}&deg;C / ${Math.round(res.main.temp_max)}&deg;C`;

    const weatherIcon = document.querySelector('.weather-icon');
    const iconURL = `http://openweathermap.org/img/w/`;
    weatherIcon.src = `${iconURL}${res.weather[0].icon}.png`;
  }
  search.value = '';
}

function funcDate(d) {
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
}

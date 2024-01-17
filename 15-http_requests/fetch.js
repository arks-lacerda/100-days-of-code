// Load All Users
const btn = document.getElementById('btn');

btn.addEventListener('click', getUsers);

function getUsers(e) {
  e.preventDefault();

  fetch('users.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);
      let output = '';
      data.forEach(function (user) {
        output += `
          <hr>
          <ul>
            <li>ID: <span>${user.id}</span></li>
            <li>Name: <span>${user.name}</span></li>
            <li>Age: <span>${user.age}</span></li>
            <li>Email: <span>${user.email}</span></li>
          </ul>
        `;
      });
      document.getElementById('users').innerHTML = output;
    });
}

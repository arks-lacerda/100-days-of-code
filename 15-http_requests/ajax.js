// Load All Users
const btn = document.getElementById('btn');

btn.addEventListener('click', getUsers);

//Create Function getUsers
function getUsers(e) {
  e.preventDefault();

  const http = new XMLHttpRequest();

  http.open('GET', 'users.json', true);

  http.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);
      const users = JSON.parse(this.responseText);

      let output = '';
      users.forEach(function (user) {
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
    }
  };

  http.send();
}

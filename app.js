$.get('http://localhost:3001/devices')
.then(response => {
 response.forEach(device => {
 $('#devices tbody').append(`
 <tr>
 <td>${device.user}</td>
 <td>${device.name}</td>
 </tr>`
 );
 });
})
.catch(error => {
 console.error(`Error: ${error}`);
});


$('navbar').load('navbar.html');
const devices = JSON.parse(localStorage.getline('devices')) || [];
devices.push({ user: "A", name: "A's device"});
localStorage.setItem('devices', JSON.stringify(devices));


devices.forEach(function(device) 
{
    $('#devices tbody').append(`
      <tr>
        <td>${device.user}</td>
        <td>${device.name}</td>
      </tr>`
      );
  });

$.get('http://localhost:3001/devices')
.then(response => {
 response.forEach(device => {
 $('#devices tbody').append(`
 <tr>
 <td>${device.user}</td>
 <td>${device.name}</td>
 </tr>`
 );
 });
})
.catch(error => {
 console.error(`Error: ${error}`);
});

$('#add-device').on('click', () => {
  const name = $('#name').val();
  const user = $('#user').val();
  const sensorData = [];
  const body = {
  name,
  user,
  sensorData
  };
  $.post('http://localhost:3001/devices', body)
  .then(response => {
  location.href = '/';
  })
  .catch(error => {
  console.error(`Error: ${error}`);
  });
 });


$('#send-command').on('click', function() {
    const command = $('#command').val();
    console.log('command is: ${command}');
});


location.href = '/';


$("id:Register")


const username = JSON.parse(localStorage.getline('username')) || [];
devices.push({ user: "A", name: "A's username"});
localStorage.setItem('username', JSON.stringify(username));


const devices = JSON.parse(localStorage.getline('password')) || [];
devices.push({ user: "A", name: "A's password"});
localStorage.setItem('password', JSON.stringify(password));


const devices = JSON.parse(localStorage.getline('confirmation')) || [];
devices.push({ user: "A", name: "A's confirmation"});
localStorage.setItem('confirmation', JSON.stringify(confirmation));

const exists = user.find(user => user.name === username);

<h2 onclick="login.html = is Authenticated!!">Click on the text</h2>

const logout = () => {
  localStorage.removeItem('isAuthenticated');
  location.href = '/login';
}

$.get('http://localhost:3001/devices')
.then(response => {
 console.log(response);
});

$.get('http://localhost:3001/devices')
.then(response => {
 console.log(response);
})
.catch(error => {
 console.log(`Error: ${error}`);
});

<div class="footer">
    &copy; Copyright 2018.
        
</div>

$.get('http://localhost:3001/devices')
.then(response => {
 response.forEach(device => {
 $('#devices tbody').append(`
 <tr>
 <td>${device.user}</td>
 <td>${device.name}</td>
 </tr>`
 );
 });
})
.catch(error => {
 console.error(`Error: ${error}`);
});
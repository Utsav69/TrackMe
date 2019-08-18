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
  $.{API_URL}('http://localhost:3000/devices', body)
  .then(response => {
  location.href = '/';
  })
  .catch(error => {
  console.error(`Error: ${error}`);
  });
 });


$.{MQTT_URL}('http://localhost:5001/send-command')
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

const API_URL = 'http://localhost:5000/api';

$('#login').on('click', () => {
  const user = $('#user').val();
  const password = $('#password').val();
  $.post(`${API_URL}/authenticate`, { user, password })
  .then((response) =>{
  if (response.success) {
  localStorage.setItem('user', user);
  localStorage.setItem('isAdmin', response.isAdmin);
  location.href = '/';
  } else {
  $('#message').append(`<p class="alert alert-danger">${response}
 </p>`);
  }
  });
 });


 $('#login').on('click', () => {
  const user = $('#user').val();
  const password = $('#password').val();
  $.post(`${API_URL}/authenticate`, { user, password })
  .then((response) =>{
  if (response.success) {
  localStorage.setItem('password', password);
  localStorage.setItem('confirm', response.confirm);
  location.href = '/';
  } else {
  $('#message').append(`<p class="alert alert-danger">${response}
 </p>`);
  }
  });
 });

 {
  "user": "test",
  "password":"test123",
  "isAdmin" : 1
 };


const currentUser = localStorage.getItem('user');

if (currentUser) {
  $.get('${API_URL}/users/${currentUser}/devices')
  .then(response => {
  response.forEach((device) => {
    $('#devices tbody').append('
    <tr> data-device-id=${device._id}
    <td>${device.user}</td>
    <td>${device.name}</td>
    </tr>'
    );
  });
  $('#devices tbody tr').on('click', (e) => {
    const deviceId = e.currentTarget.getAttributr('data-device-id');
    $.get('${API_URL}/devices/${deviceId}/device-history')
    .then(response => {
      response.map(sensorData => {
        $('#historyContent').append('
        <tr>
        <td>${sensorData.ts}</td>
        <td>${sensorData.temp}</td>
        <td>${sensorData.loc.lat}</td>
        <td>${sensorData.loc.lon}</td>
        </tr>
        ');
      );
      $('#historyModal').modal('show');
    });
  });
  })
  .catch(error => {
    console.error('Error: ${error}');
  });
}
else {
  const path = window.location.pathname;
  if (path !== '/login') {
    location.href = '/login';
  }
}


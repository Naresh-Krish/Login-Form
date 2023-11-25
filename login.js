function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'yourUsername' && password === 'yourPassword') {
      alert('Login successful!');
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
  
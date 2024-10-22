const users = [
    { email: 'user1@gmail.com', password: 'pass1' },
    { email: 'user2@gmail.com', password: 'pass2' },
    { email: 'user3@gmail.com', password: 'pass3' },
    { email: 'user4@gmail.com', password: 'pass4' },
    { email: 'user5@gmail.com', password: 'pass5' },
    { email: 'user6@gmail.com', password: 'pass6' },
    { email: 'user7@gmail.com', password: 'pass7' },
    { email: 'user8@gmail.com', password: 'pass8' },
    { email: 'user9@gmail.com', password: 'pass9' },
    { email: 'user10@gmail.com', password: 'pass10' }
  ];
  
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      alert('Login successful!');
      localStorage.setItem('user', JSON.stringify(user));
      window.location.href = 'index.html';
    } else {
      alert('Invalid credentials');
    }
  });
  
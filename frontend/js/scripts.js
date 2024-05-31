document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (data.token) {
      localStorage.setItem('token', data.token);
      if (data.user.role === 'hr') {
          window.location.href = 'hr-dashboard.html';
      } else {
          window.location.href = 'employee-dashboard.html';
      }
  } else {
      alert('Login failed!');
  }
});

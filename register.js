document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('registerUsername').value;
  const password = document.getElementById('registerPassword').value;
  let users = JSON.parse(localStorage.getItem('users') || '{}');
  if (users[username]) {
    alert('Username already exists');
    return;
  }
  users[username] = { password, purchases: [] };
  localStorage.setItem('users', JSON.stringify(users));
  alert('Registration successful! Please login.');
  window.location.href = 'index.html';
});

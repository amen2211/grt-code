document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  if (users[username] && users[username].password === password) {
    localStorage.setItem('currentUser', username);
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid credentials');
  }
});

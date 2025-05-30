const currentUser = localStorage.getItem('currentUser');
if (!currentUser) window.location.href = 'index.html';
document.getElementById('userDisplay').textContent = currentUser;
document.getElementById('logoutBtn').onclick = function() {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
};

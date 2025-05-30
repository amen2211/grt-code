const currentUser = localStorage.getItem('currentUser');
if (!currentUser) window.location.href = 'index.html';

// Example keys data (could be loaded from localStorage or hardcoded)
const keys = [
  { id: 1, type: 'Windows 10', desc: 'Windows 10 Pro Key', code: 'XXXXX-XXXXX-XXXXX-XXXXX-12345' },
  { id: 2, type: 'Windows 11', desc: 'Windows 11 Home Key', code: 'XXXXX-XXXXX-XXXXX-XXXXX-67890' },
  { id: 3, type: 'ESET', desc: 'ESET Antivirus Key', code: 'ESET-XXXXX-XXXXX-ABCDE' }
];

function renderKeys() {
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  const user = users[currentUser];
  const purchases = user.purchases || [];
  const container = document.getElementById('keysList');
  container.innerHTML = '';
  keys.forEach(key => {
    const owned = purchases.includes(key.id);
    const div = document.createElement('div');
    div.innerHTML = `
      <strong>${key.type}</strong>: ${key.desc}<br>
      ${owned ? `<span>Purchased</span>` : `<a href="https://www.instagram.com/your_username/" target="_blank"><button>Buy via Instagram</button></a>
      <button onclick="markPurchased(${key.id})">Mark as Purchased</button>`}
      <hr>
    `;
    container.appendChild(div);
  });
}
window.markPurchased = function(keyId) {
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  const user = users[currentUser];
  if (!user.purchases.includes(keyId)) user.purchases.push(keyId);
  users[currentUser] = user;
  localStorage.setItem('users', JSON.stringify(users));
  renderKeys();
};
renderKeys();

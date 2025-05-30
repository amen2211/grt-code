const currentUser = localStorage.getItem('currentUser');
if (!currentUser) window.location.href = 'index.html';

const keys = [
  { id: 1, type: 'Windows 10', desc: 'Windows 10 Pro Key', code: 'XXXXX-XXXXX-XXXXX-XXXXX-12345' },
  { id: 2, type: 'Windows 11', desc: 'Windows 11 Home Key', code: 'XXXXX-XXXXX-XXXXX-XXXXX-67890' },
  { id: 3, type: 'ESET', desc: 'ESET Antivirus Key', code: 'ESET-XXXXX-XXXXX-ABCDE' }
];

function renderMyKeys() {
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  const user = users[currentUser];
  const purchases = user.purchases || [];
  const container = document.getElementById('myKeysList');
  container.innerHTML = '';
  keys.filter(k => purchases.includes(k.id)).forEach(key => {
    const div = document.createElement('div');
    div.innerHTML = `
      <strong>${key.type}</strong>: ${key.desc}<br>
      <span>Key: ${key.code}</span>
      <hr>
    `;
    container.appendChild(div);
  });
}
renderMyKeys();

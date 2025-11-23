// main.js – gère tools, panels et contact

// Charger les tools
if (document.getElementById('toolsContainer')) {
  fetch("/api/tools")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('toolsContainer');
      data.forEach(tool => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <img src="${tool.image}" alt="${tool.name}">
          <h3>${tool.name}</h3>
          <p>${tool.utility}</p>
          <p><b>${tool.price}</b></p>
          <button onclick="buyTool('${tool.name}')">Acheter</button>
        `;
        container.appendChild(card);
      });
    });
}

// Acheter un tool
function buyTool(name) {
  const userContact = prompt('Entrez votre contact (email/DM) :');
  if (!userContact) return alert('Contact requis');

  fetch('/tools/buy', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ toolName: name, userContact })
  })
  .then(res => res.json())
  .then(res => alert(res.message))
  .catch(err => alert('Erreur lors de la commande'));
}

// Charger les panels
if (document.getElementById('panelsContainer')) {
  fetch("/api/panels")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('panelsContainer');
      data.forEach(panel => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <h3>${panel.name}</h3>
          <p>Quantité: ${panel.quantity}</p>
          <p><b>${panel.price}</b></p>
          <button onclick="buyPanel('${panel.name}')">Acheter</button>
        `;
        container.appendChild(card);
      });
    });
}

// Acheter un panel
function buyPanel(name) {
  const userContact = prompt('Entrez votre contact (email/DM) :');
  const quantity = prompt('Combien voulez-vous ?');
  if (!userContact || !quantity) return alert('Informations requises');

  fetch('/panels/buy', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ panelName: name, quantity, userContact })
  })
  .then(res => res.json())
  .then(res => alert(res.message))
  .catch(err => alert('Erreur lors de la commande'));
}

// Contact
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    fetch('/contact', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(res => document.getElementById('contactStatus').textContent = res.message)
    .catch(err => document.getElementById('contactStatus').textContent = 'Erreur lors de l\'envoi');
  });
}

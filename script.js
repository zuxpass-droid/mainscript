function login() {
  const user = document.getElementById('username').value.trim().toLowerCase();
  const pass = document.getElementById('password').value.trim();

  // Daftar user biasa
  const validUsers = {
    'toya': 'madzax123',
    'zuxpass': 'neonvip2026',
    'kudusboy': 'jatengkeren',
  };

  // Daftar VIP khusus (password beda atau tambahin key ekstra)
  const vipUsers = {
    'vipuser': 'premiumglow',     // contoh VIP
    'elitekudus': 'vipjateng2026',
    'neonelite': 'glowpremium'
  };

  if (validUsers[user] && validUsers[user] === pass) {
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('currentUser', user);
    localStorage.setItem('isVIP', 'false'); // biasa
    setTimeout(() => { window.location.replace('index.html'); }, 50);
  } 
  else if (vipUsers[user] && vipUsers[user] === pass) {
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('currentUser', user);
    localStorage.setItem('isVIP', 'true'); // VIP aktif

    // Prompt nama personal VIP (sekali aja)
    let vipName = localStorage.getItem('vipName');
    if (!vipName) {
      vipName = prompt("Masukin nama VIP lu sendiri bro (biar badge beda):") || "VIP Elite";
      localStorage.setItem('vipName', vipName);
    }

    setTimeout(() => { window.location.replace('index.html'); }, 50);
  } 
  else {
    document.getElementById('errorMsg').style.display = 'block';
  }
}
// Tampilin badge kalau VIP
if (localStorage.getItem('isVIP') === 'true') {
  document.getElementById('vipBadge').style.display = 'block';
  const vipName = localStorage.getItem('vipName') || 'VIP Elite';
  document.getElementById('vipUserName').innerText = vipName.toUpperCase();
}

// Tampilin nama user biasa
document.getElementById('user').innerText = localStorage.getItem('currentUser') || 'User';
// Tampilin badge kalau VIP
if (localStorage.getItem('isVIP') === 'true') {
  document.getElementById('vipBadge').style.display = 'block';
  const vipName = localStorage.getItem('vipName') || 'VIP Elite';
  document.getElementById('vipUserName').innerText = vipName.toUpperCase();
}

// Tampilin nama user biasa
document.getElementById('user').innerText = localStorage.getItem('currentUser') || 'User';
function login() {
  const user = document.getElementById('username').value.trim().toLowerCase();
  const pass = document.getElementById('password').value.trim();

  const validUsers = {
    'toya': 'rahasia123',
    'zuxpass': 'neonvip2026',
  };

  const vipUsers = {
    'vipuser': 'premiumglow',
    'elitekudus': 'vipjateng2026'
  };

  if (validUsers[user] && validUsers[user] === pass) {
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('currentUser', user);
    localStorage.setItem('isVIP', 'false');
    setTimeout(() => { window.location.replace('index.html'); }, 100);
  } 
  else if (vipUsers[user] && vipUsers[user] === pass) {
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('currentUser', user);
    localStorage.setItem('isVIP', 'true'); // INI YANG PENTING

    let vipName = localStorage.getItem('vipName');
    if (!vipName) {
      vipName = prompt("Masukin nama VIP lu (biar badge beda):") || "VIP Elite";
      localStorage.setItem('vipName', vipName);
    }

    console.log("VIP unlocked:", user, vipName); // debug di console F12

    setTimeout(() => { window.location.replace('index.html'); }, 100);
  } 
  else {
    document.getElementById('errorMsg').style.display = 'block';
  }
}
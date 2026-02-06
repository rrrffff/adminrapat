const accountBtn = document.querySelector('.account-btn');
const accountDropdown = document.querySelector('.account-dropdown');

accountBtn.addEventListener('click', function() {
  accountDropdown.classList.toggle('active');
});

// Opsional: Tutup menu jika klik di luar
document.addEventListener('click', function(event) {
  if (!accountDropdown.contains(event.target)) {
    accountDropdown.classList.remove('active');
  }
});
const themeStyle = document.querySelector('#theme-style');
const body = document.body;
const logo = document.querySelector('#logo');
let theme = localStorage.getItem('theme') || 'light';
themeStyle.href = `styles-${theme}.css`;

const themeToggleButtons = document.querySelectorAll('.theme-toggle-button');
themeToggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (theme === 'light') {
      themeStyle.setAttribute('href', 'styles-dark.css');
      theme = 'dark';
    } else {
      themeStyle.setAttribute('href', 'styles-light.css');
      theme = 'light';
    }

    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      button.innerHTML = '<i class="fas fa-moon"></i><span>Dark mode</span>';
      logo.src = 'images/Guru Swarupa dark.png';
    } else {
      button.textContent = 'Light mode';
      button.innerHTML = '<i class="fas fa-sun"></i><span>Light mode</span>';
      logo.src = 'images/Guru Swarupa light.png';
    }

    localStorage.setItem('theme', theme);
  });
});
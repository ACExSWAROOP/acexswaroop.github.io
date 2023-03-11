const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const themeToggle1 = document.getElementById('theme-toggle1');
const themeToggle2 = document.getElementById('theme-toggle2');
const themeStyle = document.getElementById('theme-style');
let theme = 'light';
const body = document.body;
const logo = document.getElementById('logo');

menuIcon.addEventListener('click', function () {
  if (slideoutMenu.style.opacity == "1") {
    slideoutMenu.style.opacity = '0';
    slideoutMenu.style.pointerEvents = 'none';
  } else {
    slideoutMenu.style.opacity = '1';
    slideoutMenu.style.pointerEvents = 'auto';
  }
})


// Function to set the theme
function setTheme(theme) {
  const themeStyle = document.getElementById('theme-style');
  const body = document.body;
  const logo = document.getElementById('logo');

  if (theme === 'light') {
    themeStyle.setAttribute('href', 'styles-light.css');
    body.classList.remove('dark-mode');
    logo.src = 'images/Guru Swarupa light.png';
    themeToggle1.innerHTML = '<i class="fas fa-moon"></i><span>Light mode</span>';
    themeToggle2.innerHTML = '<i class="fas fa-moon"></i><span>Light mode</span>';
  } else if (theme === 'dark') {
    themeStyle.setAttribute('href', 'styles-dark.css');
    body.classList.add('dark-mode');
    logo.src = 'images/Guru Swarupa dark.png';
    themeToggle1.innerHTML = '<i class="fas fa-sun"></i><span>Dark mode</span>';
    themeToggle2.innerHTML = '<i class="fas fa-sun"></i><span>Dark mode</span>';
  }
}

// Function to toggle the theme
function toggleTheme() {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'light') {
    localStorage.setItem('theme', 'dark');
    setTheme('dark');
  } else {
    localStorage.setItem('theme', 'light');
    setTheme('light');
  }
}

// Set the initial theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  setTheme(currentTheme);
} else {
  setTheme('light');
}

// Add event listeners to the buttons
themeToggle1.addEventListener('click', toggleTheme);

themeToggle2.addEventListener('click', toggleTheme);

/*
themeToggle1.addEventListener('click', function() {
  if (theme === 'light') {
    themeStyle.setAttribute('href', 'styles-dark.css');
    theme = 'dark';
  } else {
    themeStyle.setAttribute('href', 'styles-light.css');
    theme = 'light';
  }
})

themeToggle1.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    themeToggle1.innerHTML = '<i class="fas fa-moon"></i><span>Dark mode</span>';
    logo.src = 'images/Guru Swarupa dark.png';
  } else {
    themeToggle1.textContent = 'Light mode';
    themeToggle1.innerHTML = '<i class="fas fa-sun"></i><span>Light mode</span>';
    logo.src = 'images/Guru Swarupa light.png';
  }
});

themeToggle2.addEventListener('click', function() {
  if (theme === 'light') {
    themeStyle.setAttribute('href', 'styles-dark.css');
    theme = 'dark';
  } else {
    themeStyle.setAttribute('href', 'styles-light.css');
    theme = 'light';
  }
})

themeToggle2.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    themeToggle2.innerHTML = '<i class="fas fa-moon"></i><span>Dark mode</span>';
    logo.src = 'images/Guru Swarupa dark.png';
  } else {
    themeToggle2.textContent = 'Light mode';
    themeToggle2.innerHTML = '<i class="fas fa-sun"></i><span>Light mode</span>';
    logo.src = 'images/Guru Swarupa light.png';
  }
});
*/

const toggleToDarkMode = document.querySelector('.toggleThemeToDark');
const toggleToLightMode = document.querySelector('.toggleThemeToLight');

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}

toggleToDarkMode.onclick = toggleTheme;
toggleToLightMode.onclick = toggleTheme;

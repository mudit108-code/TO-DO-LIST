const toggleBtn = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggleBtn.addEventListener("click", toggleTheme);

function toggleTheme() {
  document.body.classList.toggle("dark_mode");
  this.classList.toggle("bi-moon");
  this.classList.toggle("bi-brightness-high-fill");
  if (document.body.classList.contains("dark_mode")) {
    localStorage.setItem("website_theme", "dark_mode");
  } else {
    localStorage.setItem("website_theme", "default");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const theme = localStorage.getItem("website_theme");
  const checkbox = document.querySelector(".dark-mode-slider #checkbox");

  if (theme !== null) {
    document.body.classList.remove("default", "dark_mode");
    checkbox.classList.remove("bi-moon", "bi-brightness-high-fill");
    document.body.classList.add(theme);
    
    if (theme === "dark_mode") {
      checkbox.checked = true;
      checkbox.classList.add("bi-moon");
    } else {
      checkbox.classList.add("bi-brightness-high-fill");
    }
  }
});

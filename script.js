// === Portfolio Template Scripts with Dark Mode ===

// Toggle mobile menu
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

// Smooth scroll khi click menu
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      window.scrollTo({
        top: targetEl.offsetTop - 60,
        behavior: "smooth"
      });
    }
    document.querySelector(".nav-links").classList.remove("active");
  });
});

// Filter projects
function filterProjects(category) {
  const projects = document.querySelectorAll(".project-card");
  projects.forEach(project => {
    const type = project.getAttribute("data-category");
    if (category === "all" || type === category) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}
const filterButtons = document.querySelectorAll(".project-filters button");
filterButtons.forEach(btn => {
  btn.addEventListener("click", function () {
    const category = this.getAttribute("data-filter");
    filterProjects(category);
    filterButtons.forEach(b => b.classList.remove("active"));
    this.classList.add("active");
  });
});

// Dark mode toggle
const body = document.body;
const darkToggleBtn = document.createElement("button");
darkToggleBtn.className = "dark-toggle";
darkToggleBtn.textContent = "🌙";
document.querySelector(".navbar").appendChild(darkToggleBtn);

// Load trạng thái từ localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  darkToggleBtn.textContent = "☀️";
}

// Toggle khi bấm nút
darkToggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    darkToggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    darkToggleBtn.textContent = "🌙";
  }
});

function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => section.classList.remove("active"));
  document.getElementById(sectionId).classList.add("active");
}

function filterCars() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".car-card");

  cards.forEach(card => {
    const name = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = name.includes(input) ? "block" : "none";
  });
}

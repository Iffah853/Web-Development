function changeIntro() {
  const intro = document.getElementById("intro");
  intro.textContent = "Thanks for visiting my profile! I design interfaces that connect with people.";
}

function toggleContact() {
  const contact = document.getElementById("contact-info");
  contact.classList.toggle("hidden");
}

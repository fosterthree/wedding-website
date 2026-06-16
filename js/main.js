const navButtons = Array.from(document.querySelectorAll('.nav-link[data-section]'));
const sections = Array.from(document.querySelectorAll('.page-section'));

function setActiveSection(sectionName) {
  sections.forEach((section) => {
    section.hidden = section.dataset.section !== sectionName;
  });

  navButtons.forEach((button) => {
    const isActive = button.dataset.section === sectionName;
    button.classList.toggle('nav-link--active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setActiveSection(button.dataset.section);
  });
});

setActiveSection('details');

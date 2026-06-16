const navButtons = Array.from(document.querySelectorAll('.nav-link[data-section]'));
const sections = Array.from(document.querySelectorAll('.page-section'));
const rsvpForm = document.querySelector('.rsvp-form');
const guestsSelect = document.getElementById('guests');
const guest2Field = document.getElementById('guest2-field');
const guest2Input = document.getElementById('guest2');
const rsvpSuccess = document.getElementById('rsvp-success');

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

if (guestsSelect && guest2Field && guest2Input) {
  guestsSelect.addEventListener('change', () => {
    const isTwoGuests = guestsSelect.value === '2';
    guest2Field.hidden = !isTwoGuests;
    guest2Input.required = isTwoGuests;
  });
}

if (rsvpForm && rsvpSuccess) {
  rsvpForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(rsvpForm);
    const response = await fetch(rsvpForm.action, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      rsvpForm.hidden = true;
      rsvpSuccess.hidden = false;
    } else {
      alert("Something went wrong — please try again or email us directly.");
    }
  });
}

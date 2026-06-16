const navButtons = Array.from(document.querySelectorAll('.nav-link[data-section]'));
const sections = Array.from(document.querySelectorAll('.page-section'));
const rsvpForm = document.querySelector('.rsvp-form');
const guestsSelect = document.getElementById('guests');
const guestFieldsContainer = document.getElementById('guest-fields');
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

function renderGuestFields() {
  if (!guestsSelect || !guestFieldsContainer) {
    return;
  }

  const guestCount = Number.parseInt(guestsSelect.value, 10);

  guestFieldsContainer.innerHTML = '';

  for (let guestNumber = 2; guestNumber <= guestCount; guestNumber += 1) {
    const field = document.createElement('div');
    field.className = 'field';

    const label = document.createElement('label');
    label.className = 'field-label';
    label.htmlFor = `guest-${guestNumber}`;
    label.textContent = `Guest #${guestNumber}`;

    const input = document.createElement('input');
    input.className = 'field-input';
    input.type = 'text';
    input.id = `guest-${guestNumber}`;
    input.name = `guest${guestNumber}`;
    input.placeholder = 'Full Name';

    field.append(label, input);
    guestFieldsContainer.append(field);
  }
}

if (guestsSelect && guestFieldsContainer) {
  guestsSelect.addEventListener('change', renderGuestFields);
  renderGuestFields();
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

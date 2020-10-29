// Selectors
const elements = {
  body: document.querySelector('body'),
  header: document.querySelector('.header'),
  applyBtns: document.querySelectorAll('.apply-btn'),
  cards: document.querySelectorAll('.card'),
};

const cardData = {
  title: document.querySelector('.card .title').innerText,
  date: document.querySelector('.card .date').innerHTML,
  venue: document.querySelector('.card .venue').innerHTML,
  deadline: document.querySelector('.card .deadline').innerHTML,
  briefing: document.querySelector('.card .briefing').innerHTML,
};

// Functions
const hideAlert = () => {
  const el = document.querySelector('.alert');
  if (el) el.parentElement.removeChild(el);
};

// type is 'success' or 'premium'
const showAlert = (type, msg, time = 2) => {
  hideAlert();
  const markup = `<div class="alert alert--${type}">${msg}</div>`;
  elements.body.insertAdjacentHTML('afterbegin', markup);
  window.setTimeout(hideAlert, time * 1000);
};

const showCurrentEvent = (title, date, venue, deadline, briefing) => {
  document.querySelector('.header h1').style.display = 'none';

  const markup = `<div class="header__dynamic">
  <h3>Your current event</h3>
  <h2>${title}</h2>
  <div>
    <p>${date}</p>
    <p>${venue}</p>
    <p>${deadline}</p>
    <p>
    ${briefing}
    </p>
  </div>
</div> `;

  elements.header.innerHTML = markup;
};

// Event Listeners
elements.applyBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    showAlert('success', 'You have registered successfully!');

    showCurrentEvent(
      cardData.title,
      cardData.date,
      cardData.venue,
      cardData.deadline,
      cardData.briefing
    );
  });
});

// Selectors
const elements = {
  body: document.querySelector('body'),
  header: document.querySelector('.header'),
  applyBtns: document.querySelectorAll('.apply-btn'),
  cards: document.querySelectorAll('.card'),
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

// on apply-btn button click
elements.applyBtns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const cardData = {
      title:
        event.target.parentElement.parentElement.parentElement.firstElementChild
          .firstElementChild.children[1].innerText,
      date:
        event.target.parentElement.parentElement.parentElement.firstElementChild
          .children[1].firstElementChild.children[0].innerHTML,
      venue:
        event.target.parentElement.parentElement.parentElement.firstElementChild
          .children[1].firstElementChild.children[1].innerHTML,
      deadline:
        event.target.parentElement.parentElement.parentElement.firstElementChild
          .children[1].firstElementChild.children[2].innerHTML,
      briefing:
        event.target.parentElement.parentElement.parentElement.firstElementChild
          .children[1].firstElementChild.children[3].innerHTML,
    };

    // console.log(event);
    // console.log(
    //   event.target.parentElement.parentElement.parentElement.firstElementChild
    //     .classList[2]
    // );

    // if (
    //   event.target.parentElement.parentElement.parentElement.firstElementChild
    //     .classList[2] === 'premium'
    // ) {
    //   showAlert('premium', 'Sorry, this is a premium event.');
    // }

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

const popupElementName = document.querySelector('.popup__form_name')
const popupElementCard = document.querySelector('.popup__form_card')
const profileName = document.querySelector('.profile__name')
const profileProfession = document.querySelector('.profile__profession')
const popupName = document.querySelector('.popup__input_name');
const popupProfession = document.querySelector('.popup__input_profession');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupUserEdit = document.querySelector('.popup_profile');
const addCardElement = document.querySelector('.popup_cards');
const addCardElementButton = document.querySelector('.profile__add-button')
const popupsContainer = document.querySelector('.popups')
const popupCardName = document.querySelector('.popup__input_card_title');
const popupCardLink = document.querySelector('.popup__input_card_link');
const popupPhoto = document.querySelector('.popup_photo')


function handleFormSubmitName(evt) {
  evt.preventDefault();

  profileName.textContent = `${popupName.value}`;
  profileProfession.textContent = `${popupProfession.value}`;

  closePopup()
}

popupElementName.addEventListener('submit', handleFormSubmitName);

function handleFormSubmitCard(evt) {
  evt.preventDefault();

  createCard({
    name: `${popupCardName.value}`,
    link: `${popupCardLink.value}`
  })


  closePopup()
}

popupElementCard.addEventListener('submit', handleFormSubmitCard)

function openPopup(popup) {
  popup.classList.add('popup_opened')
};

function closePopup() {
  document.querySelector('.popup_opened').classList.remove('popup_opened')
};

profileEditButton.addEventListener('click', function() {
  popupName.value = `${profileName.textContent}`;
  popupProfession.value = `${profileProfession.textContent}`;
  openPopup(popupUserEdit);
});

addCardElementButton.addEventListener('click', function() {
  openPopup(addCardElement)
});

popupsContainer.addEventListener('click', function(evt) {
  if (evt.target.closest('.popup__button-close')) {
    closePopup();
  }
});


const cardTemplate = document.querySelector('#card').content;
const cardsGrid = document.querySelector('.elements-grid');

const addCard = (data) => {
  const cardElement = cardTemplate.querySelector('.element__item').cloneNode(true);
  cardElement.querySelector('.element__photo').src = data.link;
  cardElement.querySelector('.element__title').textContent = data.name;
  cardElement.querySelector('.element__trash').addEventListener('click', deleteCard);
  cardElement.querySelector('.element__like').addEventListener('click', likeCard);
  cardElement.querySelector('.element__photo').addEventListener('click', openPicture);

  return cardElement;
}

const deleteCard = (evt) => {
  evt.target.closest('.element__item').remove();
};

const likeCard = (evt) => {
  evt.target.classList.toggle('element__like_active');
};

const openPicture = (evt) => {
  document.querySelector('.popup__image').src = evt.target.src;
  document.querySelector('.popup__caption').textContent = evt.target.closest('.element__item').textContent;
  openPopup(popupPhoto);
}

const createCard = (data) => {
  cardsGrid.prepend(addCard(data))
};

for (let i = initialCards.length - 1; i >= 0; i = i - 1) {
  createCard(initialCards[i])
}

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


function handleFormSubmitName(evt) {
  evt.preventDefault();

  profileName.textContent = `${popupName.value}`;
  profileProfession.textContent = `${popupProfession.value}`;

  closePopup()
}

popupElementName.addEventListener('submit', handleFormSubmitName);

function handleFormSubmitCard(evt) {
  evt.preventDefault();

  initialCards.unshift({
    name: `${popupCardName.value}`,
    link: `${popupCardLink.value}`
  })
  console.log(initialCards)

  addCard()

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

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardTemplate = document.querySelector('#card').content;
const cardsGrid = document.querySelector('.elements-grid');
//const cardElementPicture = ;
//const cardElementTitle = ;

function addCard() {
  initialCards.forEach(function (element){
    const cardElement = cardTemplate.querySelector('.element__item').cloneNode(true);
    cardElement.querySelector('.element__photo').src = element.link;
    cardElement.querySelector('.element__title').textContent = element.name;
    cardsGrid.append(cardElement);

    cardElement.querySelector('.element__like').addEventListener('click', function(evt) {
      evt.target.classList.toggle('element__like_active');
    })
  })
}
//





addCard()

//const likeButton = document.querySelector('.element__like')
//likeButton.addEventListener('click', likeChange);
//function likeChange(evt) {
//  evt.target.classList.toggle('element__like_no-active');
//  evt.target.classList.toggle('element__like_active')
//}

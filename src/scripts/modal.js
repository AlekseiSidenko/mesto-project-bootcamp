export { closePopup, handleFormSubmitCard, handleFormSubmitName, handleFormSubmitAvatar, handleFormSubmitDeleteCard, openPopup, openPicture, popupDeleteCard }
import { profileEdit, avatarEdit, cardServerAdd, cardServerDelete } from "./api.js";

const popupCardName = document.querySelector('.popup__input_card_title');
const popupCardLink = document.querySelector('.popup__input_card_link');
const popupPhoto = document.querySelector('.popup_photo');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const profileAvatar = document.querySelector('.profile__avatar')
const popupAvatar = document.querySelector('.popup__input_avatar_link');
const popupDelete = document.querySelector('.popup_delete');

function handleFormSubmitName(evt) {
  evt.preventDefault();
  profileEdit()
  closePopup()
}


function handleFormSubmitCard(evt) {
  evt.preventDefault();
  cardServerAdd({
    name: `${popupCardName.value}`,
    link: `${popupCardLink.value}`
  })
  evt.target.reset();
  closePopup()
}

function handleFormSubmitAvatar(evt) {
  evt.preventDefault()
  avatarEdit()
  profileAvatar.src = popupAvatar.value
  evt.target.reset();
  closePopup()
}

function handleFormSubmitDeleteCard() {
  const elements = Array.from(document.querySelectorAll('.element__item'))
  elements.forEach((item) => {
    if (item.id === popupDelete.id) {
      cardServerDelete(item.id)
      item.remove()
    }
  })
  closePopup()
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', escListener);
};

function closePopup() {
  document.querySelector('.popup_opened').classList.remove('popup_opened');
  document.removeEventListener('keydown', escListener);
  popupDelete.id = '';
};


const openPicture = (evt) => {
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt
  popupCaption.textContent = evt.target.alt;
  openPopup(popupPhoto);
}

function escListener(evt) {
    if (evt.key === 'Escape') {
      closePopup();
    }
};

const popupDeleteCard = (evt) => {
  const element = evt.target.closest('.element__item')
  openPopup(popupDelete)
  popupDelete.id = element.id
};

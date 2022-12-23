export { closePopup, handleFormSubmitCard, handleFormSubmitName, openPopup, openPicture }
import { createCard } from "./card.js"

const popupCardName = document.querySelector('.popup__input_card_title');
const popupCardLink = document.querySelector('.popup__input_card_link');
const popupPhoto = document.querySelector('.popup_photo');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const profileName = document.querySelector('.profile__name')
const profileProfession = document.querySelector('.profile__profession')
const popupName = document.querySelector('.popup__input_name');
const popupProfession = document.querySelector('.popup__input_profession');

function handleFormSubmitName(evt) {
  evt.preventDefault();
  profileName.textContent = `${popupName.value}`;
  profileProfession.textContent = `${popupProfession.value}`;

  closePopup()
}


function handleFormSubmitCard(evt) {
  evt.preventDefault();
  createCard({
    name: `${popupCardName.value}`,
    link: `${popupCardLink.value}`
  })
  evt.target.reset();
  closePopup()
}


function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', escListener);
};

function closePopup() {
  document.querySelector('.popup_opened').classList.remove('popup_opened');
  document.removeEventListener('keydown', escListener);
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

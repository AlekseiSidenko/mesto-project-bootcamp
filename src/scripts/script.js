const popupsContainer = document.querySelector('.popups');
const popupElementName = document.querySelector('.popup__form_name');
const popupElementCard = document.querySelector('.popup__form_card');
const profileEditButton = document.querySelector('.profile__edit-button');
const addCardElementButton = document.querySelector('.profile__add-button');
const popupUserEdit = document.querySelector('.popup_profile');
const addCardElement = document.querySelector('.popup_cards');
const profileName = document.querySelector('.profile__name')
const profileProfession = document.querySelector('.profile__profession')
const popupName = document.querySelector('.popup__input_name');
const popupProfession = document.querySelector('.popup__input_profession');
popupName.value = `${profileName.textContent}`;
popupProfession.value = `${profileProfession.textContent}`;

import '../pages/index.css';

import { enableValidation } from "./validate.js";

enableValidation();

import { closePopup, handleFormSubmitCard, handleFormSubmitName, openPopup } from "./modal.js";

profileEditButton.addEventListener('click', function() {
  popupName.value = `${profileName.textContent}`;
  popupProfession.value = `${profileProfession.textContent}`;
  openPopup(popupUserEdit);
});

addCardElementButton.addEventListener('click', function() {
  openPopup(addCardElement)
});

popupsContainer.addEventListener('mousedown', function(evt) {
  if (evt.target.closest('.popup__button-close') || evt.target.classList.contains('popup')) {
    closePopup();
  }
});

popupElementCard.addEventListener('submit', handleFormSubmitCard)

popupElementName.addEventListener('submit', handleFormSubmitName);

import { createCard } from "./card.js";
import { initialCards } from './data';

for (let i = initialCards.length - 1; i >= 0; i = i - 1) {
  createCard(initialCards[i])
}


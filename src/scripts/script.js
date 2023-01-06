const popupsContainer = document.querySelector('.popups');
const popupElementName = document.querySelector('.popup__form_name');
const popupElementCard = document.querySelector('.popup__form_card');
const popupElementDeleteCard = document.querySelector('.popup__form_delete')
const popupElementAvatar = document.querySelector('.popup__form_avatar')
const profileEditButton = document.querySelector('.profile__edit-button');
const addCardElementButton = document.querySelector('.profile__add-button');
const avatarEditButton = document.querySelector('.pofile__avatar-edit')
const popupUserEdit = document.querySelector('.popup_profile');
const addCardElement = document.querySelector('.popup_cards');
const avatarEdit = document.querySelector('.popup_avatar');
export const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

import '../pages/index.css';

import { closePopup, handleFormSubmitAvatar, handleFormSubmitCard, handleFormSubmitName, handleFormSubmitDeleteCard, openPopup } from "./modal.js";

import { enableValidation } from './validate.js';

import { userLoad } from './api.js';

profileEditButton.addEventListener('click', function() {
  openPopup(popupUserEdit);
});

addCardElementButton.addEventListener('click', function() {
  openPopup(addCardElement)
  popupsContainer.querySelector('.popup__button-save_card').classList.add('popup__button_inactive');
  popupsContainer.querySelector('.popup__button-save_card').disabled = true
});

avatarEditButton.addEventListener('click', function() {
  openPopup(avatarEdit)
  popupsContainer.querySelector('.popup__button-save_avatar').classList.add('popup__button_inactive');
  popupsContainer.querySelector('.popup__button-save_avatar').disabled = true
})

popupsContainer.addEventListener('mousedown', function(evt) {

  if (evt.target.closest('.popup__button-close') || evt.target.classList.contains('popup')) {
    closePopup();
  }
});

popupElementCard.addEventListener('submit', handleFormSubmitCard);

popupElementName.addEventListener('submit', handleFormSubmitName);

popupElementAvatar.addEventListener('submit', handleFormSubmitAvatar);

popupElementDeleteCard.addEventListener('submit', handleFormSubmitDeleteCard);


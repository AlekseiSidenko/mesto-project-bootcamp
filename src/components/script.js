import { popups, popupElementName, popupElementCard, popupElementDeleteCard, popupElementAvatar,
profileEditButton, addCardElementButton, avatarEdit, avatarEditButton, popupUserEdit, addCardElement,
settings, popupName, popupProfession, profileName, profileProfession, profileAvatar } from './constants.js';

import '../pages/index.css';

import { closePopup, handleFormSubmitAvatar, handleFormSubmitCard, handleFormSubmitName, handleFormSubmitDeleteCard, openPopup } from "./modal.js";

import { enableValidation } from './validate.js';

import { getUserInfo, getCards } from './api.js';

import { createCard } from './card.js'

profileEditButton.addEventListener('click', function() {
  openPopup(popupUserEdit);
});

addCardElementButton.addEventListener('click', function() {
  openPopup(addCardElement)
});

avatarEditButton.addEventListener('click', function() {
  openPopup(avatarEdit)
})

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__button-close')) {
          closePopup(popup)
      }
  })
})

popupElementCard.addEventListener('submit', handleFormSubmitCard);

popupElementName.addEventListener('submit', handleFormSubmitName);

popupElementAvatar.addEventListener('submit', handleFormSubmitAvatar);

popupElementDeleteCard.addEventListener('submit', handleFormSubmitDeleteCard);

Promise.all([getUserInfo(), getCards()])
  .then(([userData, cards]) => {
    profileName.id = userData._id;
    profileName.textContent = userData.name;
    profileProfession.textContent = userData.about;
    profileAvatar.src = userData.avatar;
    popupName.value = userData.name;
    popupProfession.value = userData.about;
    cards.reverse().forEach((item) => {
      createCard(item)
    })
    enableValidation(settings)
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`)
  });

export const popups = document.querySelectorAll('.popup');
export const popupElementName = document.querySelector('.popup__form_name');
export const popupElementCard = document.querySelector('.popup__form_card');
export const popupElementDeleteCard = document.querySelector('.popup__form_delete')
export const popupElementAvatar = document.querySelector('.popup__form_avatar')
export const profileEditButton = document.querySelector('.profile__edit-button');
export const addCardElementButton = document.querySelector('.profile__add-button');
export const avatarEditButton = document.querySelector('.pofile__avatar-edit')
export const popupUserEdit = document.querySelector('.popup_profile');
export const addCardElement = document.querySelector('.popup_cards');
export const avatarEdit = document.querySelector('.popup_avatar');
export const popupName = document.querySelector('.popup__input_name');
export const popupProfession = document.querySelector('.popup__input_profession');
export const profileAvatarInput = document.querySelector('.popup__input_avatar_link');
export const profileName = document.querySelector('.profile__name');
export const profileProfession = document.querySelector('.profile__profession');
export const profileAvatar = document.querySelector('.profile__avatar');
export const cardTemplate = document.querySelector('#card').content;
export const cardsGrid = document.querySelector('.elements-grid');
export const popupCardName = document.querySelector('.popup__input_card_title');
export const popupCardLink = document.querySelector('.popup__input_card_link');
export const popupPhoto = document.querySelector('.popup_photo');
export const popupImage = document.querySelector('.popup__image');
export const popupCaption = document.querySelector('.popup__caption');
export const popupAvatar = document.querySelector('.popup__input_avatar_link');
export const popupDelete = document.querySelector('.popup_delete');
export const popupProfileSaveButton = popupElementName.querySelector('.popup__button-save')
export const popupAvatarSaveButton = popupElementAvatar.querySelector('.popup__button-save')
export const popupCardLoadButton = popupElementCard.querySelector('.popup__button-save')
export const popupDeleteCardButton = popupElementDeleteCard.querySelector('.popup__button-save')
export const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}
export const config = {
  baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-4',
  headers: {
    authorization: 'f8b7451c-8abd-4722-9293-22498f2bcdfa',
    'Content-Type': 'application/json'
  }
}

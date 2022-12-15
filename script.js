const popupElement = document.querySelector('.popup__container')
const profileName = document.querySelector('.profile__name')
const profileProfession = document.querySelector('.profile__profession')
const popupName = document.querySelector('.popup__input_name');
const popupProfession = document.querySelector('.popup__input_profession');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupButtonClose = document.querySelector('.popup__button-close');
const popupButtonSave = document.querySelector('.popup__button-save');


function handleFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = `${popupName.value}`;
  profileProfession.textContent = `${popupProfession.value}`;

  closePopup()
}

popupElement.addEventListener('submit', handleFormSubmit);

function redact() {
  popupName.value = `${profileName.textContent}`;
  popupProfession.value = `${profileProfession.textContent}`;
  document.querySelector('.popup').classList.add('popup_opened')
};

function closePopup() {
  document.querySelector('.popup').classList.remove('popup_opened')
};

profileEditButton.addEventListener('click', redact);

popupButtonClose.addEventListener('click', closePopup);

popupButtonSave.addEventListener('click', handleFormSubmit);

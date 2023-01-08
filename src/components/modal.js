import { editProfile, editAvatar, addCardServer, deleteCardServer } from "./api.js";
import { renderLoading } from "./utils.js";
import { createCard } from "./card.js";
import { popupCardName, popupCardLink, profileAvatar, popupAvatar,
  popupDelete, popupName, popupProfession, profileName, profileProfession, popupProfileSaveButton,
  popupAvatarSaveButton, popupCardLoadButton, popupDeleteCardButton } from "./constants.js";

function handleFormSubmitName(evt) {
  renderLoading(true, popupProfileSaveButton)
  editProfile(popupName.value, popupProfession.value)
    .then(res =>  {
      profileName.id = res._id;
      profileName.textContent = res.name;
      profileProfession.textContent = res.about;
      closePopup();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
    .finally(() => {
      renderLoading(false, popupProfileSaveButton)
    })
}

function handleFormSubmitCard(evt) {
  renderLoading(true, popupCardLoadButton, 'Создать', 'Создание...')
  addCardServer({
    name: `${popupCardName.value}`,
    link: `${popupCardLink.value}`
  })
    .then((res) => {
      createCard(res)
      evt.target.reset();
      closePopup();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
    .finally(() => {
      renderLoading(false, popupCardLoadButton, 'Создать', 'Создание...')
    })
}

function handleFormSubmitAvatar(evt) {
  renderLoading(true, popupAvatarSaveButton)
  editAvatar(popupAvatar.value)
    .then((res) => {
      profileAvatar.src = res.avatar
      evt.target.reset();
      closePopup();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
    .finally(() => {
      renderLoading(false, popupAvatarSaveButton)
    })
}

function handleFormSubmitDeleteCard(evt) {
  renderLoading(true, popupDeleteCardButton, 'Да', 'Удаление...')
    const cardDeleteId = popupDelete.id
    deleteCardServer(popupDelete.id)
    .then((res) => {
      popupDelete.id = ''
      document.getElementById(`${cardDeleteId}`).remove()
      closePopup()
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
    .finally(() => {
      renderLoading(false, popupDeleteCardButton, 'Да', 'Удаление...')
    })
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscape);
};

function closePopup() {
  const openedPopup = document.querySelector('.popup_opened');
  if (!openedPopup) return;
  openedPopup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscape);
};

function handleEscape(evt) {
    if (evt.key === 'Escape') {
      closePopup();
    }
};

const openPopupDeleteCard = (evt) => {
  const element = evt.target.closest('.element__item')
  openPopup(popupDelete)
  popupDelete.id = element.id
};

export { closePopup, handleFormSubmitCard, handleFormSubmitName, handleFormSubmitAvatar,
  handleFormSubmitDeleteCard, openPopup, openPopupDeleteCard }

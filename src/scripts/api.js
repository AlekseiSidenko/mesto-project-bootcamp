const popupName = document.querySelector('.popup__input_name');
const popupProfession = document.querySelector('.popup__input_profession');
const profileAvatarInput = document.querySelector('.popup__input_avatar_link');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const profileAvatar = document.querySelector('.profile__avatar');

export { profileEdit, avatarEdit, cardServerAdd, cardServerDelete, likeServerAdd, likeServerDelete }

import { createCard, disableDeleteCardButton, checkLikeButton, likesNumber } from "./card.js";
import { enableValidation } from "./validate.js";

function profileEdit () {
  renderLoadingProfile(true)
  fetch('https://nomoreparties.co/v1/wbf-cohort-4/users/me', {
    method: 'PATCH',
    headers: {
      authorization: 'f8b7451c-8abd-4722-9293-22498f2bcdfa',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: popupName.value,
      about: popupProfession.value
    })
  })
    .then(res => res.json())
    .then(res =>  {
    profileName.id = res._id;
    profileName.textContent = res.name;
    profileProfession.textContent = res.about;
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`)
  })
  .finally(() => {
    renderLoadingProfile(false)
  })
}

fetch('https://nomoreparties.co/v1/wbf-cohort-4/users/me', {
  method: 'GET',
  headers: {
    authorization: 'f8b7451c-8abd-4722-9293-22498f2bcdfa'
  }
})
  .then(res => res.json())
  .then((result) => {
    profileName.id = result._id;
    profileName.textContent = result.name;
    profileProfession.textContent = result.about;
    profileAvatar.src = result.avatar;
    popupName.value = result.name;
    popupProfession.value = result.about;
    cardLoad()
    enableValidation()
  });

function avatarEdit() {
  renderLoadingAvatar(true)
  fetch('https://nomoreparties.co/v1/wbf-cohort-4/users/me/avatar', {
    method: 'PATCH',
    headers: {
      authorization: 'f8b7451c-8abd-4722-9293-22498f2bcdfa',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: profileAvatarInput.value
    })
  })
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => {
    console.log(`Ошибка: ${err}`)
  })
  .finally(() => {
    renderLoadingAvatar(false)
  })
}

function cardLoad() {
fetch('https://nomoreparties.co/v1/wbf-cohort-4/cards', {
  headers: {
    authorization: 'f8b7451c-8abd-4722-9293-22498f2bcdfa'
  }
})
  .then(res => res.json())
  .then((result) => {
    result.reverse().forEach((item) => {
      createCard(item)
      disableDeleteCardButton(item)
      item.likes.forEach((like) => {
        checkLikeButton(like._id)
      })
    })
  });
}

function cardServerAdd(data) {
  renderLoadingCard(true)
  fetch('https://nomoreparties.co/v1/wbf-cohort-4/cards', {
    method: 'POST',
    headers: {
      authorization: 'f8b7451c-8abd-4722-9293-22498f2bcdfa',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: data.name,
      link: data.link
    })
  })
  .then(res => res.json())
  .then((res) => {
    createCard(res)
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`)
  })
  .finally(() => {
    renderLoadingCard(false)
  })
}

function cardServerDelete(id) {
  renderLoadingCardDelete(true)
  fetch('https://nomoreparties.co/v1/wbf-cohort-4/cards/' + id, {
    method: 'DELETE',
    headers: {
      authorization: 'f8b7451c-8abd-4722-9293-22498f2bcdfa',
    },
  })
  .then(res => res.json())
  .then(res => console.log(res))
  .catch((err) => {
    console.log(`Ошибка: ${err}`)
  })
  .finally(() => {
    renderLoadingCardDelete(false)
  })
}

function likeServerAdd(id) {
  fetch('https://nomoreparties.co/v1/wbf-cohort-4/cards/likes/' + id, {
    method: 'PUT',
    headers: {
      authorization: 'f8b7451c-8abd-4722-9293-22498f2bcdfa',
    },
  })
  .then(res => res.json())
  .then(res => {
    likesNumber(res._id, res.likes.length)
  })
}

function likeServerDelete(id) {
  fetch('https://nomoreparties.co/v1/wbf-cohort-4/cards/likes/' + id, {
    method: 'DELETE',
    headers: {
      authorization: 'f8b7451c-8abd-4722-9293-22498f2bcdfa',
    },
  })
  .then(res => res.json())
  .then(res => {
    likesNumber(res._id, res.likes.length)
  })
}

function renderLoadingProfile(isLoading) {
  if (isLoading) {
    document.querySelector('.popup__button-save_profile').textContent = 'Сохранение...'
  } else {
    document.querySelector('.popup__button-save_profile').textContent = 'Сохранить'
  }
}

function renderLoadingAvatar(isLoading) {
  if (isLoading) {
    document.querySelector('.popup__button-save_avatar').textContent = 'Сохранение...'
  } else {
    document.querySelector('.popup__button-save_avatar').textContent = 'Сохранить'
  }
}

function renderLoadingCard(isLoading) {
  if (isLoading) {
    document.querySelector('.popup__button-save_card').textContent = 'Создание...'
  } else {
    document.querySelector('.popup__button-save_card').textContent = 'Создать'
  }
}

function renderLoadingCardDelete(isLoading) {
  if (isLoading) {
    document.querySelector('.popup__button-save_delete').textContent = 'Удаление...'
  } else {
    document.querySelector('.popup__button-save_delete').textContent = 'Да'
  }
}

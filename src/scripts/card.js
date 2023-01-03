import { openPicture, popupDeleteCard } from "./modal.js";
import { likeServerAdd, likeServerDelete } from "./api.js";

const cardTemplate = document.querySelector('#card').content;
const cardsGrid = document.querySelector('.elements-grid');
const profileName = document.querySelector('.profile__name');


const addCard = (data) => {
  const cardElement = cardTemplate.querySelector('.element__item').cloneNode(true);
  cardElement.querySelector('.element__photo').src = data.link;
  cardElement.querySelector('.element__photo').alt = data.name;
  cardElement.id = data._id
  cardElement.querySelector('.element__title').textContent = data.name;
  cardElement.querySelector('.element__trash').addEventListener('click', popupDeleteCard);
  cardElement.querySelector('.element__like-numbers').textContent = data.likes.length;
  cardElement.querySelector('.element__like').addEventListener('click', likeCard);
  cardElement.querySelector('.element__photo').addEventListener('click', openPicture);
  return cardElement;
}

const likeCard = (evt) => {
  evt.target.classList.toggle('element__like_active');
  if (evt.target.classList.contains('element__like_active')) {
    likeServerAdd(evt.target.closest('.element__item').id)
  } else {
    likeServerDelete(evt.target.closest('.element__item').id)
  }
};

export const createCard = (data) => {
  cardsGrid.prepend(addCard(data))
};

export function disableDeleteCardButton(item) {
  if (item.owner._id === profileName.id) {
    document.querySelector('.element__trash').disabled = false
    document.querySelector('.element__trash').classList.remove('element__trash_disabled')
  } else {
    document.querySelector('.element__trash').disabled = true
    document.querySelector('.element__trash').classList.add('element__trash_disabled')
  }
}

export function checkLikeButton(like) {
  if (like === profileName.id) {
    document.querySelector('.element__like').classList.add('element__like_active')
  }
}

export function likesNumber(id, numbers) {
  const cardList = Array.from(document.querySelectorAll('.element__item'))
  cardList.forEach((card) => {
    if (card.id === id) {
      card.querySelector('.element__like-numbers').textContent = numbers
    }
  })
}


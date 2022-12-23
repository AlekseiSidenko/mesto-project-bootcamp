import { initialCards } from './data.js'
import { openPicture } from "./modal.js";

const cardTemplate = document.querySelector('#card').content;
const cardsGrid = document.querySelector('.elements-grid');

const addCard = (data) => {
  const cardElement = cardTemplate.querySelector('.element__item').cloneNode(true);
  cardElement.querySelector('.element__photo').src = data.link;
  cardElement.querySelector('.element__photo').alt = data.name;
  cardElement.querySelector('.element__title').textContent = data.name;
  cardElement.querySelector('.element__trash').addEventListener('click', deleteCard);
  cardElement.querySelector('.element__like').addEventListener('click', likeCard);
  cardElement.querySelector('.element__photo').addEventListener('click', openPicture);

  return cardElement;
}

const deleteCard = (evt) => {
  evt.target.closest('.element__item').remove();
};

const likeCard = (evt) => {
  evt.target.classList.toggle('element__like_active');
};


export const createCard = (data) => {
  cardsGrid.prepend(addCard(data))
};


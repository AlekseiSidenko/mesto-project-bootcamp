import { openPopup, openPopupDeleteCard } from "./modal.js";
import { addLikeServer, deleteLikeServer } from "./api.js";
import { cardTemplate, cardsGrid, profileName, popupImage, popupCaption, popupPhoto } from "./constants.js";

const addCard = (data) => {
  const cardElement = cardTemplate.querySelector('.element__item').cloneNode(true);
  cardElement.id = data._id
  const photoElement = cardElement.querySelector('.element__photo');
  photoElement.src = data.link;
  photoElement.alt = data.name;
  photoElement.addEventListener('click', openPicture);
  cardElement.querySelector('.element__title').textContent = data.name;
  const trashElement = cardElement.querySelector('.element__trash')
  trashElement.addEventListener('click', openPopupDeleteCard);
  disableDeleteCardButton(data, trashElement)
  cardElement.querySelector('.element__like-numbers').textContent = data.likes.length;
  const likeElement = cardElement.querySelector('.element__like')
  likeElement.addEventListener('click', likeCard);
  data.likes.forEach((like) => checkLikeButton(like._id, likeElement));
  return cardElement;
}

const likeCard = (evt) => {
  const card = evt.target.closest('.element__item');
  const cardCounter = card.querySelector('.element__like-numbers');
  if (evt.target.classList.contains('element__like_active')) {
    deleteLikeServer(card.id)
      .then((res) => {
        checkLikesNumber(res._id, res.likes.length, cardCounter, card.id);
        evt.target.classList.remove('element__like_active');
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      })
  } else {
    addLikeServer(card.id)
      .then((res) => {
        checkLikesNumber(res._id, res.likes.length, cardCounter, card.id);
        evt.target.classList.add('element__like_active')
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      })
  }
};

export const createCard = (data) => {
  cardsGrid.prepend(addCard(data))
};

export function disableDeleteCardButton(item, trashElement) {
  if (item.owner._id === profileName.id) {
    trashElement.disabled = false
    trashElement.classList.remove('element__trash_disabled')
  } else {
    trashElement.disabled = true
    trashElement.classList.add('element__trash_disabled')
  }
}

function checkLikeButton(like, likeButton) {
  if (like === profileName.id) {
    likeButton.classList.add('element__like_active')
  }
}

function checkLikesNumber(id, numbers, counter, cardId) {
    if (cardId === id) {
      counter.textContent = numbers
    }
  }

  const openPicture = (evt) => {
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt
    popupCaption.textContent = evt.target.alt;
    openPopup(popupPhoto);
  }

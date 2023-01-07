import { config } from "./constants.js";

function editProfile (name, about) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about
    })
  })
  .then(res => checkResponse(res))
}

function getUserInfo() {
return fetch(`${config.baseUrl}/users/me`, {
  method: 'GET',
  headers: config.headers
})
  .then(res => checkResponse(res))
}

function editAvatar(avatar) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatar
    })
  })
  .then(res => checkResponse(res))
}

function getCards() {
return fetch(`${config.baseUrl}/cards`, {
  headers: config.headers
})
  .then(res => checkResponse(res))
}

function addCardServer(data) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: data.name,
      link: data.link
    })
  })
  .then(res => checkResponse(res))
}

function deleteCardServer(id) {
  return fetch(`${config.baseUrl}/cards/` + id, {
    method: 'DELETE',
    headers: config.headers,
  })
  .then(res => checkResponse(res))
}

function addLikeServer(id) {
  return fetch(`${config.baseUrl}/cards/likes/` + id, {
    method: 'PUT',
    headers: config.headers,
  })
  .then(res => checkResponse(res))
}

function deleteLikeServer(id) {
  return fetch(`${config.baseUrl}/cards/likes/` + id, {
    method: 'DELETE',
    headers: config.headers,
  })
  .then(res => checkResponse(res))
}

function checkResponse(res) {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export { getUserInfo, getCards, editProfile, editAvatar, addLikeServer, deleteLikeServer, addCardServer, deleteCardServer }

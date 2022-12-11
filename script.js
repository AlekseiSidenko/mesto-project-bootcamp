function redact() {
  document.querySelector('.popup').style.display = "flex"
};

function close() {
  document.querySelector('.popup').style.display = "none"
};

document.querySelector('.profile__edit-button').addEventListener('click', redact);

document.querySelector('.popup__button-close').addEventListener('click', close);

function editUser() {
  let name = document.querySelector('.popup__input_name');
  let profession = document.querySelector('.popup__input_profession');

  document.querySelector('.profile__name').textContent = `${name.value}`;
  document.querySelector('.profile__profession').textContent = `${profession.value}`;

  close();
};

document.querySelector('.popup__button-save').addEventListener('click', editUser, close);

(()=>{"use strict";var e=document.querySelector("#card").content,t=document.querySelector(".elements-grid"),n=document.querySelector(".profile__name"),o=function(e){var t;e.target.classList.toggle("element__like_active"),e.target.classList.contains("element__like_active")?(t=e.target.closest(".element__item").id,fetch("https://nomoreparties.co/v1/wbf-cohort-4/cards/likes/"+t,{method:"PUT",headers:{authorization:"f8b7451c-8abd-4722-9293-22498f2bcdfa"}}).then((function(e){return e.json()})).then((function(e){c(e._id,e.likes.length)}))):function(e){fetch("https://nomoreparties.co/v1/wbf-cohort-4/cards/likes/"+e,{method:"DELETE",headers:{authorization:"f8b7451c-8abd-4722-9293-22498f2bcdfa"}}).then((function(e){return e.json()})).then((function(e){c(e._id,e.likes.length)}))}(e.target.closest(".element__item").id)},r=function(n){t.prepend(function(t){var n=e.querySelector(".element__item").cloneNode(!0);return n.querySelector(".element__photo").src=t.link,n.querySelector(".element__photo").alt=t.name,n.id=t._id,n.querySelector(".element__title").textContent=t.name,n.querySelector(".element__trash").addEventListener("click",j),n.querySelector(".element__like-numbers").textContent=t.likes.length,n.querySelector(".element__like").addEventListener("click",o),n.querySelector(".element__photo").addEventListener("click",x),n}(n))};function c(e,t){Array.from(document.querySelectorAll(".element__item")).forEach((function(n){n.id===e&&(n.querySelector(".element__like-numbers").textContent=t)}))}var u=function(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove("popup__button_inactive"),t.disabled=!1):(t.classList.add("popup__button_inactive"),t.disabled=!0)},a=document.querySelector(".popup__input_name"),i=document.querySelector(".popup__input_profession"),l=document.querySelector(".popup__input_avatar_link"),d=document.querySelector(".profile__name"),s=document.querySelector(".profile__profession"),p=document.querySelector(".profile__avatar");function _(e){document.querySelector(".popup__button-save_profile").textContent=e?"Сохранение...":"Сохранить"}function f(e){document.querySelector(".popup__button-save_avatar").textContent=e?"Сохранение...":"Сохранить"}function m(e){document.querySelector(".popup__button-save_card").textContent=e?"Создание...":"Создать"}function h(e){document.querySelector(".popup__button-save_delete").textContent=e?"Удаление...":"Да"}fetch("https://nomoreparties.co/v1/wbf-cohort-4/users/me",{method:"GET",headers:{authorization:"f8b7451c-8abd-4722-9293-22498f2bcdfa"}}).then((function(e){return e.json()})).then((function(e){d.id=e._id,d.textContent=e.name,s.textContent=e.about,p.src=e.avatar,a.value=e.name,i.value=e.about,fetch("https://nomoreparties.co/v1/wbf-cohort-4/cards",{headers:{authorization:"f8b7451c-8abd-4722-9293-22498f2bcdfa"}}).then((function(e){return e.json()})).then((function(e){e.reverse().forEach((function(e){r(e),function(e){e.owner._id===n.id?(document.querySelector(".element__trash").disabled=!1,document.querySelector(".element__trash").classList.remove("element__trash_disabled")):(document.querySelector(".element__trash").disabled=!0,document.querySelector(".element__trash").classList.add("element__trash_disabled"))}(e),e.likes.forEach((function(e){!function(e){e===n.id&&document.querySelector(".element__like").classList.add("element__like_active")}(e._id)}))}))})),Array.from(document.querySelectorAll(".popup__form")).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e){var t=Array.from(e.querySelectorAll(".popup__input")),n=e.querySelector(".popup__button-save");u(t,n),t.forEach((function(o){o.addEventListener("input",(function(){!function(e,t){t.validity.valid?function(e,t){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove("popup__input_type_error"),n.classList.remove("popup__input-error_active"),n.textContent=""}(e,t):function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add("popup__input_type_error"),o.classList.add("popup__input-error_active"),o.textContent=n}(e,t,t.validationMessage)}(e,o),u(t,n)}))}))}(e)}))}));var v=document.querySelector(".popup__input_card_title"),y=document.querySelector(".popup__input_card_link"),b=document.querySelector(".popup_photo"),S=document.querySelector(".popup__image"),q=document.querySelector(".popup__caption"),L=document.querySelector(".profile__avatar"),g=document.querySelector(".popup__input_avatar_link"),k=document.querySelector(".popup_delete");function E(e){e.classList.add("popup_opened"),document.addEventListener("keydown",w)}function C(){document.querySelector(".popup_opened").classList.remove("popup_opened"),document.removeEventListener("keydown",w),k.id=""}var x=function(e){S.src=e.target.src,S.alt=e.target.alt,q.textContent=e.target.alt,E(b)};function w(e){"Escape"===e.key&&C()}var j=function(e){var t=e.target.closest(".element__item");E(k),k.id=t.id},A=document.querySelector(".popups"),T=document.querySelector(".popup__form_name"),z=document.querySelector(".popup__form_card"),D=document.querySelector(".popup__form_delete"),N=document.querySelector(".popup__form_avatar"),O=document.querySelector(".profile__edit-button"),P=document.querySelector(".profile__add-button"),J=document.querySelector(".pofile__avatar-edit"),H=document.querySelector(".popup_profile"),G=document.querySelector(".popup_cards"),M=document.querySelector(".popup_avatar");O.addEventListener("click",(function(){E(H)})),P.addEventListener("click",(function(){E(G)})),J.addEventListener("click",(function(){E(M)})),A.addEventListener("mousedown",(function(e){(e.target.closest(".popup__button-close")||e.target.classList.contains("popup"))&&C()})),z.addEventListener("submit",(function(e){var t;e.preventDefault(),t={name:"".concat(v.value),link:"".concat(y.value)},m(!0),fetch("https://nomoreparties.co/v1/wbf-cohort-4/cards",{method:"POST",headers:{authorization:"f8b7451c-8abd-4722-9293-22498f2bcdfa","Content-Type":"application/json"},body:JSON.stringify({name:t.name,link:t.link})}).then((function(e){return e.json()})).then((function(e){r(e)})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){m(!1)})),e.target.reset(),C()})),T.addEventListener("submit",(function(e){e.preventDefault(),_(!0),fetch("https://nomoreparties.co/v1/wbf-cohort-4/users/me",{method:"PATCH",headers:{authorization:"f8b7451c-8abd-4722-9293-22498f2bcdfa","Content-Type":"application/json"},body:JSON.stringify({name:a.value,about:i.value})}).then((function(e){return e.json()})).then((function(e){d.id=e._id,d.textContent=e.name,s.textContent=e.about})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){_(!1)})),C()})),N.addEventListener("submit",(function(e){e.preventDefault(),f(!0),fetch("https://nomoreparties.co/v1/wbf-cohort-4/users/me/avatar",{method:"PATCH",headers:{authorization:"f8b7451c-8abd-4722-9293-22498f2bcdfa","Content-Type":"application/json"},body:JSON.stringify({avatar:l.value})}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){f(!1)})),L.src=g.value,e.target.reset(),C()})),D.addEventListener("submit",(function(){Array.from(document.querySelectorAll(".element__item")).forEach((function(e){var t;e.id===k.id&&(t=e.id,h(!0),fetch("https://nomoreparties.co/v1/wbf-cohort-4/cards/"+t,{method:"DELETE",headers:{authorization:"f8b7451c-8abd-4722-9293-22498f2bcdfa"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){h(!1)})),e.remove())})),C()}))})();
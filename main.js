(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.removeAttribute("disabled"),t.classList.remove("popup__button_disabled")):(t.setAttribute("disabled","true"),t.classList.add("popup__button_disabled"))}function n(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",o)}function r(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",o)}function o(e){"Escape"==e.key&&r(document.querySelector(".popup_is-opened"))}e.d({},{Tp:()=>d,vY:()=>s,Ny:()=>l,y6:()=>p,$J:()=>f,ar:()=>_});var c={baseUrl:"https://nomoreparties.co/v1/apf-cohort-202",headers:{authorization:"41f0a2d5-732e-467e-8396-8ade1cc91bbb","Content-Type":"application/json"}};function a(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function u(e){var t=d.cloneNode(!0),r=t.querySelector(".card__image"),o=t.querySelector(".card__title"),u=t.querySelector(".card__delete-button"),i=t.querySelector(".card__like-button"),y=t.querySelector(".card__likes-num");return r.src=e.link,r.alt=e.name,o.textContent=e.name,r.addEventListener("click",(function(){_.src=e.link,_.alt=e.name,f.textContent=e.name,n(p)})),y.textContent=e.likes.length,e.owner._id===l._id?u.style.display="block":u.style.display="none",e.likes.some((function(e){return e._id===l._id}))?i.classList.add("card__like-button_is-active"):i.classList.remove("card__like-button_is-active"),u.addEventListener("click",(function(t){var n;(n=e._id,fetch("".concat(c.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:{Authorization:c.headers.authorization}}).then((function(e){return a(e)}))).then((function(){!function(e){var t=e.target.closest(".card");t&&s.removeChild(t)}(t)})).catch((function(e){return console.error("Ошибка при удалении карточки:",e)}))})),i.addEventListener("click",(function(){var t;i.classList.contains("card__like-button_is-active")?(t=e._id,fetch("".concat(c.baseUrl,"/cards/likes/").concat(t),{method:"DELETE",headers:{Authorization:c.headers.authorization}}).then((function(e){return a(e)}))).then((function(){i.classList.remove("card__like-button_is-active"),y.textContent=e.likes.length-1})).catch((function(e){return console.error("Ошибка при удалении лайка:",e)})):function(e){return fetch("".concat(c.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:{Authorization:c.headers.authorization}}).then((function(e){return a(e)}))}(e._id).then((function(){i.classList.add("card__like-button_is-active"),y.textContent=e.likes.length+1})).catch((function(e){return console.error("Ошибка при добавлении лайка:",e)}))})),t}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var l=null,s=document.querySelector(".places__list"),d=document.querySelector("#card-template").content,p=document.querySelector(".popup_type_image"),_=p.querySelector(".popup__image"),f=p.querySelector(".popup__caption"),y=document.querySelector(".popup_type_edit"),v=document.querySelector(".popup_type_new-card");document.querySelectorAll(".popup__close").forEach((function(e){e.addEventListener("click",(function(){r(e.closest(".popup"))}))}));var h=document.querySelectorAll(".popup");h.forEach((function(e){e.addEventListener("click",(function(t){t.target===e&&r(e)}))}));var m=document.querySelector(".profile__title"),b=document.querySelector(".profile__description"),S=y.querySelector(".popup__form"),q=S.querySelector(".popup__input_type_name"),k=S.querySelector(".popup__input_type_description");document.querySelector(".profile__edit-button").addEventListener("click",(function(){q.value=m.textContent,k.value=b.textContent,n(y)})),S.addEventListener("submit",(function(e){e.preventDefault();var t,n,o=q.value,u=k.value;A.textContent="Сохранение...",A.disabled=!0,(t=o,n=u,fetch("".concat(c.baseUrl,"/users/me"),{method:"PATCH",headers:c.headers,body:JSON.stringify({name:t,about:n})}).then((function(e){return a(e)}))).then((function(e){m.textContent=e.name,b.textContent=e.about,r(y)})).catch((function(e){return console.error(e)})).finally((function(){A.textContent="Сохранить",A.disabled=!1}))}));var L=v.querySelector(".popup__form"),E=L.querySelector(".popup__input_type_card-name"),g=L.querySelector(".popup__input_type_url"),C=L.querySelector(".popup__button"),A=S.querySelector(".popup__button");document.querySelector(".profile__add-button").addEventListener("click",(function(){E.value="",g.value="",n(v)})),L.addEventListener("submit",(function(e){e.preventDefault(),C.textContent="Сохранение...",C.disabled=!0;var t,n,o={name:E.value,link:g.value};(t=o.name,n=o.link,fetch("".concat(c.baseUrl,"/cards"),{method:"POST",headers:c.headers,body:JSON.stringify({name:t,link:n})}).then((function(e){return a(e)}))).then((function(e){var t=u(e);s.prepend(t),r(v)})).catch((function(e){return console.error(e)})).finally((function(){C.textContent="Сохранить",C.disabled=!1}))})),h.forEach((function(e){e.classList.add("popup_is-animated")})),Array.from(document.querySelectorAll(".popup__form")).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e){var n=Array.from(e.querySelectorAll(".popup__input")),r=e.querySelector(".popup__button");t(n,r),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t){t.validity.valid?function(e,t){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove("popup__input_type_error"),n.classList.remove("popup__error_visible"),n.textContent=""}(e,t):function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add("popup__input_type_error"),r.textContent=n,r.classList.add("popup__error_visible")}(e,t,t.validationMessage)}(e,o),t(n,r)}))}))}(e)}));var x=document.querySelector(".profile__image"),z=document.querySelector(".profile__image"),U=document.querySelector(".popup_type_avatar"),O=U.querySelector(".popup__form"),j=O.querySelector(".popup__input_type_url"),T=U.querySelector(".popup__close"),w=U.querySelector(".popup__button");z.addEventListener("click",(function(){x.src&&(j.value=x.src),n(U)})),T.addEventListener("click",(function(){return r(U)})),O.addEventListener("submit",(function(e){var t;e.preventDefault(),w.textContent="Сохранение...",w.disabled=!0,(t=j.value,fetch("".concat(c.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:c.headers,body:JSON.stringify({avatar:t})}).then((function(e){return a(e)}))).then((function(e){x.style.backgroundImage="url("+e.avatar+")",r(U)})).catch((function(e){return console.error(e)})).finally((function(){w.textContent="Сохранить",w.disabled=!1}))})),Promise.all([fetch("".concat(c.baseUrl,"/users/me"),{headers:{Authorization:c.headers.authorization}}).then((function(e){return a(e)})),fetch("".concat(c.baseUrl,"/cards"),{headers:{Authorization:c.headers.authorization}}).then((function(e){return a(e)}))]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];l=o,m.textContent=o.name,b.textContent=o.about,x.style.backgroundImage="url(".concat(o.avatar,")"),c.forEach((function(e){var t=u(e);s.append(t)}))})).catch((function(e){return console.error("Ошибка при загрузке данных:",e)}))})();
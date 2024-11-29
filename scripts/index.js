// @todo: Темплейт карточки
const cardsContainer = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const imagePopup = document.querySelector('.popup_type_image');
const popupImage = imagePopup.querySelector('.popup__image');
const popupCaption = imagePopup.querySelector('.popup__caption');

// @todo: Функция создания карточки
function createCard(cardData) {
    const newCard = cardTemplate.cloneNode(true);

    const cardImage = newCard.querySelector('.card__image');
    const cardTitle = newCard.querySelector('.card__title');
    const deleteButton = newCard.querySelector('.card__delete-button');
    const likeButton = newCard.querySelector('.card__like-button');

    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardTitle.textContent = cardData.name;

    // Обработчик клика на изображение для открытия поп-апа
    cardImage.addEventListener('click', () => {
        popupImage.src = cardData.link;
        popupImage.alt = cardData.name;
        popupCaption.textContent = cardData.name;
        openModal(imagePopup);
    });

    deleteButton.addEventListener('click', (evt) => {
        removeCard(evt);
    });

    likeButton.addEventListener('click', (evt) => {
        toggleLike(evt);
    });

    return newCard;
}

// @todo: Функция удаления карточки
function removeCard(evt) {
    const cardItem = evt.target.closest('.card');
    if (cardItem) {
        cardsContainer.removeChild(cardItem);
    }
}

function toggleLike(evt) {
    const likeButton = evt.target;
    likeButton.classList.toggle('card__like-button_is-active');
}

// @todo: Вывести карточки на страницу
initialCards.forEach(card => {
    const cardElement = createCard(card);
    cardsContainer.append(cardElement); // Добавляем новую карточку в список
});

// ПОПАПЫ!!!!!!!!!!!!

const profilePopup = document.querySelector('.popup_type_edit');
const cardPopup = document.querySelector('.popup_type_new-card');

// Функция для открытия попапа
function openModal(popup) {
    popup.classList.add('popup_is-opened');
}

// Функция для закрытия попапа
function closeModal(popup) {
    popup.classList.remove('popup_is-opened');
}

// Обработчик событий для кнопок закрытия поп-апов
const closeButtons = document.querySelectorAll('.popup__close');
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.popup');
        closeModal(popup);
    });
});

// Закрытие поп-апа при клике вне его содержимого
const popups = document.querySelectorAll('.popup');
popups.forEach(popup => {
    popup.addEventListener('click', (evt) => {
        if (evt.target === popup) { // Проверяем, был ли клик на самом поп-апе
            closeModal(popup);
        }
    });
});

// ФОРМА РЕДАКТИРОВАНИЯ
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const profileFormElement = profilePopup.querySelector('.popup__form');
const nameInput = profileFormElement.querySelector('.popup__input_type_name');
const jobInput = profileFormElement.querySelector('.popup__input_type_description');

function fillProfileForm() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
}

// Обработчик открытия поп-апа редактирования профиля
document.querySelector('.profile__edit-button').addEventListener('click', () => {
    fillProfileForm();
    openModal(profilePopup);
});

// Обработчик отправки формы редактирования профиля
function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    const nameValue = nameInput.value;
    const jobValue = jobInput.value;

    profileTitle.textContent = nameValue;
    profileDescription.textContent = jobValue;

    closeModal(profilePopup);
}

// Прикрепляем обработчик к форме редактирования профиля
profileFormElement.addEventListener('submit', handleProfileFormSubmit);

// ФОРМА КАРТОЧКИ
const cardFormElement = cardPopup.querySelector('.popup__form');
const cardNameInput = cardFormElement.querySelector('.popup__input_type_card-name');
const cardLinkInput = cardFormElement.querySelector('.popup__input_type_url');

// Обработчик открытия поп-апа добавления карточки
document.querySelector('.profile__add-button').addEventListener('click', () => {
    cardNameInput.value = '';
    cardLinkInput.value = '';
    openModal(cardPopup);
});

// Обработчик отправки формы добавления карточки
function handleCardFormSubmit(evt) {
    evt.preventDefault();

    const cardData = {
        name: cardNameInput.value,
        link: cardLinkInput.value,
    };

    // Создаем новую карточку и добавляем её в начало контейнера
    const newCardElement = createCard(cardData);
    cardsContainer.prepend(newCardElement);

    closeModal(cardPopup);
}

// Прикрепляем обработчик к форме добавления карточки
cardFormElement.addEventListener('submit', handleCardFormSubmit);

// Добавление класса для анимации при загрузке приложения
popups.forEach(popup => {
    popup.classList.add('popup_is-animated');
});

import galleryItems from "./gallery-items.js";

//ПОИСК ЭЛЕМЕНТОВ
const galleryList = document.querySelector('ul.js-gallery');
const modalForm = document.querySelector('div.lightbox');
const lightBoxRef = document.querySelector('.js-lightbox');
const lightBoxImage = document.querySelector('lightbox__image');
const closeBtn = document.querySelector('button[data-action="close-lightbox"]');

// СОЗДАНИЕ РАЗМЕТКИ И ПРИСВОЕНИЕ АТРИБУТОВ

galleryItems.forEach(({ preview, original, description }, index) => {
    const galleryItem = document.createElement('li');
    const galleryLink = document.createElement('a');
    const galleryImage = document.createElement('img');
    
    galleryImage.setAttribute('src', preview);
    galleryLink.setAttribute('href', original)
    galleryImage.setAttribute('data-source', original);
    galleryImage.setAttribute('alt', description);
    galleryImage.setAttribute('daia-index', index)

    galleryList.appendChild(galleryItem);
    galleryItem.appendChild(galleryLink);
    galleryLink.appendChild(galleryImage);

    galleryItem.classList.add('gallery__item');
    galleryLink.classList.add('gallery__link');
    galleryImage.classList.add('gallery__image');
});

//МОДАЛЬНОЕ ОКНО

galleryList.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName !== IMG) {
        return;
    };
        
});

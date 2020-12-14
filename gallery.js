
import galleryItems from "./gallery-items.js";

//СОЗДАНИЕ РАЗМЕТКИ

const galleryRef = document.querySelector('ul.js-gallery');
const lightboxRef = document.querySelector('.js-lightbox');
const lightboxImgRef = document.querySelector('.lightbox__image');
const modalRef = document.querySelector('div.lightbox');
const btnCloseRef = document.querySelector('button[data-action="close-lightbox"]');

galleryItems.forEach(({preview, original, description}, index) => {

    const listRef = document.createElement('li');
    const linkRef = document.createElement('a');
    const imageRef = document.createElement('img');

    imageRef.setAttribute('src', preview);
    linkRef.setAttribute('href', original);
    imageRef.setAttribute('data-source', original);
    imageRef.setAttribute('alt', description);
    imageRef.setAttribute('data-id', index);

    galleryRef.append(listRef);
    listRef.append(linkRef);
    linkRef.append(imageRef);

    listRef.classList.add('gallery__item');
    linkRef.classList.add('gallery__link');
    imageRef.classList.add('gallery__image');

});

// МОДАЛЬНОЕ ОКНО

galleryRef.addEventListener('click', event => {
    event.preventDefault();
    if(event.target.nodeName !== "IMG") {
        return;
    }
    lightboxImgRef.src = event.target.dataset.source;
    lightboxImgRef.alt = event.target.alt;

    modalRef.classList.add('is-open');

} )


function onClickCloseButton(event) {
    if (event.target.nodeName !== 'BUTTON') {
        return;
    }
    modalRef.classList.remove('is-open');
    lightboxImgRef.src = "";
    lightboxImgRef.alt = "";
};

btnCloseRef.addEventListener('click', onClickCloseButton);


function onClickOverlay(event) {
        
  if (event.target.nodeName !== "DIV") {
      return;
  };
  modalRef.classList.remove('is-open');
  lightboxImgRef.src = "";
  lightboxImgRef.alt = "";
};

modalRef.addEventListener('click', onClickOverlay);

function onClickKeydownEscape(event) { 
  if (event.code === 'Escape') {
    modalRef.classList.remove('is-open');
    lightboxImgRef.src = "";
    lightboxImgRef.alt = "";
  }  
}

window.addEventListener('keydown', onClickKeydownEscape);
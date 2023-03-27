import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector(".gallery");

for (let i = 0; i < galleryItems.length; i++) {
  const imageArr = galleryItems[i];
  const markup = `<li class="gallery__item">
  <a class="gallery__link" href="${imageArr.original}">
     <img class="gallery__image" src="${imageArr.preview}" alt="${imageArr.description}" />
  </a>
</li>`

  list.insertAdjacentHTML("beforeend", markup);
}

let lightbox = new SimpleLightbox('.gallery a', { 
  captionsData:"alt",
  captionDelay:250
  });
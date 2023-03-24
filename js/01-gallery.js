import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector(".gallery");
for (let i = 0; i < galleryItems.length; i++) {
  const imageArr = galleryItems[i];

  const markup = `<div class="gallery__item">
  <a class="gallery__link" href=javascript:void(0)>
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source=${imageArr.original}
      alt="${imageArr.description}"
    />
  </a>
</div>`;
  list.insertAdjacentHTML("beforeend", markup);
}

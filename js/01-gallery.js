import { galleryItems } from "./gallery-items.js";
// Change code below this line
function blockRedir(event) {
  event.preventDefault();
}

const list = document.querySelector(".gallery");

for (let i = 0; i < galleryItems.length; i++) {
  const imageArr = galleryItems[i];
  const markup = `<div class="gallery__item">
  <a class="gallery__link" href="#">
    <img
      class="gallery__image"
      src="${imageArr.preview}"
      data-source="${imageArr.original}"
      alt="${imageArr.description}"
    />
  </a>
</div>`;
  list.insertAdjacentHTML("beforeend", markup);
}
list.addEventListener("click", imageClick);

function imageClick(event) {
  blockRedir(event);
  
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="1280" height="768">
`);
  instance.show();

  list.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}


import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

function createItemsMarkup(items) {
  const galleryList = items.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
  })
   return galleryList.join("");
};

galleryContainer.insertAdjacentHTML('beforeend', createItemsMarkup(galleryItems));

galleryContainer.addEventListener('click', onclick);


function onclick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return

   const largeImageUrl = event.target.dataset.source; 
 const instance = basicLightbox.create(
 `<img  width="1280" height="auto" src="${largeImageUrl}">`
);
instance.show()
}
function closeModal(event) {
  if (event.code !== "ESCAPE") {
    return
  }
  instance.close()
}
console.log(galleryItems);

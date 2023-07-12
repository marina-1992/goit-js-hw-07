
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
            alt="${description}"
          />
        </a>
      </li>`;
  })
   return galleryList.join("");
};
galleryContainer.insertAdjacentHTML('beforeend', createItemsMarkup(galleryItems));
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData : 'alt',
  captionDelay : 250,
});
console.log(galleryItems);

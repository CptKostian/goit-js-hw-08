// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML('beforeend', createPhoto(galleryItems));

function createPhoto(photos) {
  return photos
    .map(({ preview, original, description }) => {
      return `<a class='gallery__item' href='${original}'>
      <img class="gallery__image" src="${preview}" alt="${description}"></img>
    </a>`;
    })
    .join('');
}
const lightbox = new SimpleLightbox('.gallery a', {
  disableRightClick: true,
  captionsData: 'alt',
  captionDelay: 250,
});

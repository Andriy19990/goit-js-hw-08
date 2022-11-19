// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const lightBoxRef = document.querySelector(".gallery");
const lightBoxMarkUp = createlightBoxItem(galleryItems);
lightBoxRef.innerHTML = lightBoxMarkUp;

lightBoxRef.addEventListener("click", onImageClick);

function createlightBoxItem(galleryItems) {
return galleryItems
    .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

function onImageClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image"))
        return;
}

let lightbox = new SimpleLightbox(".gallery a", {
captionsData: "alt",
captionDelay: 250,
});

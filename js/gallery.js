const thumbnails = document.querySelectorAll('.thumbs-img');
const previewImage = document.getElementById('gallery-picture');
const previewTitle = document.getElementById('gallery-title');
const previewDescription = document.getElementById('gallery-description');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('mouseover', () => {
    const imageUrl = thumbnail.getAttribute('src');
    const imageTitle = thumbnail.getAttribute('data-title');
    const imageDescription = thumbnail.getAttribute('data-description');
    
    previewImage.setAttribute('src', imageUrl);
    previewTitle.textContent = imageTitle;
    previewDescription.textContent = imageDescription;
  });
});


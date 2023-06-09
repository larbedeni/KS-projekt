const carouselImages = document.querySelectorAll('.carousel img');
const dots = document.querySelectorAll('.dot');

let currentImageIndex = 0;
const intervalTime = 3000; 

function showImage(index) {
  carouselImages.forEach((image, i) => {
    if (i === index) {
      image.style.display = 'block';
      dots[i].classList.add('active');
    } else {
      image.style.display = 'none';
      dots[i].classList.remove('active');
    }
  });
}

function switchImage() {
  currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
  showImage(currentImageIndex);
}

function handleDotClick(index) {
  currentImageIndex = index;
  showImage(currentImageIndex);
}

// Initial display of the first image
showImage(currentImageIndex);

// Automatic image switching with slower interval time
setInterval(switchImage, intervalTime);

// Add event listener to each dot
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    handleDotClick(index);
  });
});










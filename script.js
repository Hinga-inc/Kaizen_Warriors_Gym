const menu =  document.querySelector('.menu');
const menuOpener = document.querySelector('.menuOpener');

menuOpener.addEventListener('click', () => {
    menuOpener.classList.toggle('active');
    menu.classList.toggle('active');
});

// this is the image changer script
const images = [
    'images/KWGlogo.jpg',
    'images/image-2.jpg',
    'images/image-3.jpg',
    'images/image-4.jpg',
    'images/image-5.jpg',
    'images/image-6.jpg',
    'images/image-7.jpg',
    'images/image-8.jpg',
    'images/image-9.jpg',
    'images/image-10.jpg',
    'images/image-11.jpg',
    'images/image-12.jpg',
    'images/image-13.jpg',
    'images/image-14.png',
    'images/image-15.jpg',
    'images/image-16.jpg',
    'images/image-17.jpg',
    'images/image-18.jpg',
    'images/image-19.jpg',
    'images/image-20.jpg',
    'images/image-21.jpg',

  ];

  let currentImageIndex = 0;
  const heroContainer = document.getElementById('hero-container');

  function backgroundChange() {
    heroContainer.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }

  setInterval(backgroundChange, 5000);
  backgroundChange();
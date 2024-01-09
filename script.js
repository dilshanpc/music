const coverImage = document.getElementById('coverImage');
const audioPlayer = document.getElementById('audioPlayer');

// List of random cover image URLs
const coverImages = [
  'https://source.unsplash.com/300x300/?music',
  'https://source.unsplash.com/300x300/?concert',
  'https://source.unsplash.com/300x300/?guitar',
  // Add more URLs or modify as needed
];

// Function to pick a random cover image URL
function getRandomCover() {
  return coverImages[Math.floor(Math.random() * coverImages.length)];
}

// Set a random cover image on page load
window.addEventListener('load', function() {
  const randomCover = getRandomCover();
  coverImage.src = randomCover;
});

// Handle audio file selection
const audioFileInput = document.getElementById('audioFileInput');
audioFileInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  const objectURL = URL.createObjectURL(file);
  audioPlayer.src = objectURL;
  audioPlayer.play();
});

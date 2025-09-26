// Your server simulation function
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (Math.random() < 0.2) {
        reject("Random server error. Try again.");
      } else {
        resolve("Server call successful!");
      }
    }, 300);
  });
}

// Grab all hearts and modal elements
const hearts = document.querySelectorAll('.like-glyph');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');

hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    mimicServerCall()
      .then(() => {
        // Toggle heart
        if (heart.textContent === '♡') {
          heart.textContent = '♥';
          heart.classList.add('activated-heart');
        } else {
          heart.textContent = '♡';
          heart.classList.remove('activated-heart');
        }
      })
      .catch(error => {
        modalMessage.textContent = error;
        modal.classList.remove('hidden');
        setTimeout(() => modal.classList.add('hidden'), 3000);
      });
  });
});

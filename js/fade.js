function checkFade() {
  const fadeElements = document.querySelectorAll('.fade-right, .fade-left');
  fadeElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight * 0.75) {
          element.classList.add('fade-in');
      }
  });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);

// Add this line to trigger the effect on page load
document.addEventListener('DOMContentLoaded', checkFade);

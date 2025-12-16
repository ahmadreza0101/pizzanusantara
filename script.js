 const form = document.getElementById('contactForm');
    const popup = document.getElementById('popup');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      popup.classList.add('active');
      form.reset();
    });

    function closePopup() {
      popup.classList.remove('active');
    }
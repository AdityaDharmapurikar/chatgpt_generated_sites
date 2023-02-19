// Smooth scrolling
$('a').on('click', function(e) {
    if (this.hash !== '') {
      e.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800
      );
    }
  });
  
  // Mobile menu
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('header nav');
  const navItems = document.querySelectorAll('header nav li');
  
  let showMenu = false;
  
  menuBtn.addEventListener('click', toggleMenu);
  
  function toggleMenu() {
    if (!showMenu) {
      menuBtn.classList.add('close');
      nav.classList.add('show');
      navItems.forEach(item => item.classList.add('show'));
  
      showMenu = true;
    } else {
      menuBtn.classList.remove('close');
      nav.classList.remove('show');
      navItems.forEach(item => item.classList.remove('show'));
  
      showMenu = false;
    }
  }
  
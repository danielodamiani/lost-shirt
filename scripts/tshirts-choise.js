(function () {

    const elem = document.querySelector('.tshirts-choice__list');
  const iso = new Isotope( elem, {
    itemSelector: '.tshirts-choice__item',
    filter: '.black',
  });
  
    
    const controlls = document.querySelectorAll('.color__btn');
    const activeClass = 'color__btn--checked';
  
    controlls.forEach(function(control) {
      control.addEventListener('click', function(e) {
        e.preventDefault();
  
        const filterName = control.getAttribute('data-filter');
  
        controlls.forEach(function(link) {
          link.closest('.color__btn').classList.remove(activeClass);
        })
        control.closest('.color__btn').classList.add(activeClass);
  
        iso.arrange({
          filter: `.${filterName}`
        })
      });
    });
  // forEach - для каждого


  }());

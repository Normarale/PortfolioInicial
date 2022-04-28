// Agregar clase para no ocultar menu navegacion
const menunav = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >= 100) {
        menunav.classList.add('navbarDark')
    }
    else {
        menunav.classList.remove('navbarDark');
    }
};

        
    /*---------------------------
      Selector
    ------------------------------ */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    };
   
        
    /*------------------------
     Animacion para los Skills
    ------------------------------*/

    let skilsContent = select('.skills-content');
    if (skilsContent) {
      new Waypoint({
        element: skilsContent,
        offset: '95%',
        handler: function(direction) {
          let progress = select('.progress .progress-bar', true);
          progress.forEach((el) => {
            el.style.width = el.getAttribute('aria-valuenow') + '%'
          });
        }
      })
    };

      


const test = document.querySelector('.js-button');
      console.log(test.classList.contains('js-button'));

      const gaming = document.querySelector('.js-gaming-button');
      const music = document.querySelector('.js-music-button');
      const tech = document.querySelector('.js-tech-button');
      y = '';

      function gamingButton (x, y) {       
        if (x.classList.value !== `gaming-button js-${y}-button`){
          x.classList.remove('is-toggled');   
        } else {
          gaming.classList.remove('is-toggled'); 
          tech.classList.remove('is-toggled'); 
          music.classList.remove('is-toggled'); 
          x.classList.add('is-toggled');
        }
      }
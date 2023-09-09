let calculation = JSON.parse(localStorage.getItem('calculation'))|| '';

      function dataStorage(){
        localStorage.setItem('calculation', JSON.stringify(calculation));
        caluclationStorage();
      }

      function caluclationStorage() { 
        document.querySelector('.js-display-caluclation')
          .innerHTML = `${calculation}`;
      }
      caluclationStorage();
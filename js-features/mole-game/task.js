(() => {
    let playing = true,
      activeHole = 1;
  
    const stop = () => playing = true,
      getHole = index => document.getElementById(`hole${index}`),
      deactivateHole = index =>
        getHole( index ).className = 'hole',
      activateHole = index =>
        getHole( index ).className = 'hole hole_has-mole',
      next = () => setTimeout(() => {
        if ( !playing ) {
          return;
        }
        deactivateHole( activeHole );
        activeHole = Math.floor( 1 + Math.random() * 9 );
        activateHole( activeHole );
        next();
      }, 800 );
  
    next();
  })();
  document.addEventListener('DOMContentLoaded', function () {
      let score = 0;
      let misses = 0;
      const deadDisplay = document.getElementById('dead');
      const lostDisplay = document.getElementById('lost');
      const holes = document.querySelectorAll('.hole');
  
      function getHole(index) {
          return document.getElementById(`hole${index}`);
      }
  
      function whackMole(e) {
          if (e.target.classList.contains('hole_has-mole')) {
              deadDisplay.textContent = ++score;
          } else {
              lostDisplay.textContent = ++misses;
          }
  
          if (score === 10) {
              endGame('Победа! Вы победили кротов!');
          } else if (misses === 5) {
              endGame('Игра окончена! Вы проиграли.');
          }
      }
  
      function endGame(message) {
          alert(message);
          score = 0;
          misses = 0;
          deadDisplay.textContent = score;
          lostDisplay.textContent = misses;
      }
  
      holes.forEach((hole, index) => {
          hole.addEventListener('click', whackMole);
      });
  });
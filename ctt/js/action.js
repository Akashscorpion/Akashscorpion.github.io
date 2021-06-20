const fence = document.querySelectorAll('.fence');
  const scoreBoard = document.querySelector('.score');
  const thief = document.querySelectorAll('.thief');
  let lastfence;
  let timeUp = false;
  let score = 0;

  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function randomfence(fence) {
    const idx = Math.floor(Math.random() * fence.length);
    const data = fence[idx];
    if (data === lastfence) {
      console.log('Ah nah thats the same one bud');
      return randomfence(fence);
    }
    lastfence = data;
    return data;
  }

  function peep() {
    const time = randomTime(200, 1000);
    const data = randomfence(fence);
    data.classList.add('up');
    setTimeout(() => {
      data.classList.remove('up');
      if (!timeUp) peep();
    }, time);
  }

  function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 10000)
  }

  function bonk(e) {
    if(!e.isTrusted) return; // cheater!
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
  }

  thief.forEach(mole => mole.addEventListener('click', bonk));


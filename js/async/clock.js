function clock() {
  let divE = document.querySelector('#clock');
  let today = new Date();
  divE.innerHTML = today.toLocaleTimeString();
}

setInterval(clock, 1000);
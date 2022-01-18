// Indicator moves to active list item
let list = document.querySelectorAll('.list');
list.forEach((item) =>
item.addEventListener('click', activeLink));

function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');

// --------------------------------------------------

// Play audio on keydown

window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keycode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keycode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    console.log(key);
    key.classList.add('playing')
})};

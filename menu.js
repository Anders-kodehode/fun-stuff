// Indicator moves to active list item
let list = document.querySelectorAll('.list');
function activeLink(e){
    console.log('click worked')
    console.log(e.target.classList.contains ('.list'))
    if (e.target.classList.contains ('.list')) {return}; 
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
list.forEach((item) =>
item.addEventListener('click', (e) => activeLink(e)));

// $('li').on('click', function(){
//     $('li').removeClass('active');
//     $(this).addClass('active');
// });

// Play audio on keydown
window.addEventListener('keydown', function(e) {
    const audio = this.document.querySelector(`audio[data-key=${e.keycode}]`);
    const key = document.querySelector(`.key[data-key=${e.keycode}]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    console.log(key);
    key.classList.add('playing')
})};
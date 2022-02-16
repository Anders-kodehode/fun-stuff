//Mouse ripple click effect
// const pulse = function() {
//     const e = document.createElement('div');
//     e.setAttribute('class', 'ripple'),
//     document.body.appendChild(e),
//     e.style.top = event.pageY + 'px',
//     e.style.left = event.pageY + 'px',

//     setTimeout(function() {
//         document.body.removeChild(e)
//     }, 1000)
// };
// document.addEventListener('click', pulse);
window.addEventListener('click', function(e) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    this.document.body.appendChild(ripple);
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`; 
})
// --------------------------------------------------

// Indicator moves to active list item
const list = document.querySelectorAll('.list');
list.forEach((item) =>
item.addEventListener('click', activeLink));

function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
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
});
// --------------------------------------------------

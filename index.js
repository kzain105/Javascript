let dark = document.getElementById('darkMode');
let body = document.querySelector('body');

dark.addEventListener('click', function() {
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high')){
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';

    } else {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }
})
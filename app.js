let menuBtn = document.querySelector('#icon');
let myNav = document.querySelector('#myNav');

menuBtn.addEventListener("click", function() {
    if (myNav.className === 'nav'){
        myNav.className += ' responsive';
    } else {
        myNav.className = 'nav'
    }
    // Чтобы при клике на икноку не переходил по ссылке
    return false;
});

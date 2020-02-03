'use strict';
//Работа кнопки-сэндвич для скрытия/показа мобильного меню
const toggleMobMenu = () => {
    const sandwich = document.querySelector('.sandwich');
    const mobMenu = document.querySelector('#mobMenu')
    const mobBody = document.querySelector('#mobBody')
    const closeMob = document.querySelector('#closeMob');

    sandwich.addEventListener('click', function() {
        mobMenu.classList.add('active-mob');
        mobBody.style.left = '0';
    });

    closeMob.addEventListener('click', function() {
        mobMenu.classList.remove('active-mob');
        mobBody.style.left = '-100%';
    });
};


toggleMobMenu();
window.addEventListener('resize', function() {
    if (window.innerWidth > 1269) {
        mobMenu.classList.remove('active-mob');
        mobBody.style.left = '-100%';
    }
});
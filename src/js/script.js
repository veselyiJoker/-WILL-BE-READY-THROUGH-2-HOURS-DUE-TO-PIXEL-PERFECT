'use strict';
const mainMenuBtn = document.querySelector('.header__menu-btn');
const header = document.querySelector('header');
const petsSliders = document.querySelectorAll('.pets__slider');
const answersPreview = document.querySelectorAll('.answers__preview');
const answers = document.querySelectorAll('.answers__answer');
const answersPreviewBtns = document.querySelectorAll('.answers__preview-btn');

mainMenuBtn.classList.remove('header__menu-btn--locked');
header.classList.remove('header--locked');

// code should be predictable so 2 cycles answers and answersPreviewBtns
for (let i = 1; i < answersPreviewBtns.length; i++) {
    answersPreviewBtns[i].classList.remove('answers__preview-btn--active');
}
for (let i = 1; i < answers.length; i++) {
    answers[i].classList.add('answers__answer--hidden');
}
for (let i = 1; i < petsSliders.length; i++) {
    petsSliders[i].classList.add('pets__slider--hidden');
}

mainMenuBtn.addEventListener('click', onMainMenuBtnClick);

function onMainMenuBtnClick () {
    mainMenuBtn.classList.toggle('header__menu-btn--close');
    header.classList.toggle('header--open');
}

const petsNavBtns = document.querySelectorAll('.pets__nav-btn');

petsNavBtns.forEach(elem => {
    elem.addEventListener('click', () => onPetsNavBtnClick(elem));
});

function onPetsNavBtnClick(petsBtn) {
    petsNavBtns.forEach(elem => {
        elem.classList.remove('pets__nav-btn--active');
    });
    petsBtn.classList.add('pets__nav-btn--active');

    petsSliders.forEach(elem => {
        if (elem.dataset.sliderId === petsBtn.dataset.sliderBtnId) {
            elem.classList.remove('pets__slider--hidden');
        } else {
            elem.classList.add('pets__slider--hidden');
        }
    });
}

answersPreview.forEach(elem => {
    elem.addEventListener('click', ()=> onAnswersPreviewBtnClick(elem));
});

function onAnswersPreviewBtnClick (elem) {
    if (event.target.classList.contains('answers__preview-btn')) {
        event.target.classList.toggle('answers__preview-btn--active');
        elem.nextElementSibling.classList.toggle('answers__answer--hidden');
    }
}


const askAQuestionLink = document.querySelector('.answers__ask-a-question-link');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal__close-btn');

askAQuestionLink.addEventListener('click',onaskAQuestionLinkClick);

function onaskAQuestionLinkClick () {
    event.preventDefault();
    let clientWidth = 0;

    clientWidth = document.body.clientWidth;
    modal.classList.remove('modal--hidden');
    document.body.style.overflow = 'hidden';

    if (document.body.clientWidth > clientWidth) {
        document.body.style.paddingRight = '10px';
    }

    modalCloseBtn.addEventListener('click', onModalCloseBtnClick);
    document.addEventListener('keydown', onEscapeClick);
}


function onModalCloseBtnClick () {
    modal.classList.add('modal--hidden');
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';

    modalCloseBtn.removeEventListener('click', onModalCloseBtnClick);
    document.removeEventListener('keydown', onEscapeClick);
}

function onEscapeClick(evt) {
    if (evt.key === 'Escape') {
        onModalCloseBtnClick();
    }
}

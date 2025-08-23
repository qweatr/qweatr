const sections = Array.from(document.querySelectorAll('section'));
const buttons = document.querySelectorAll('.header__card');
let activeButton = document.querySelector('.active')
const button = document.querySelector('.mobile__button')
let header__cards = document.querySelector('.header__cards')
const icon = button.querySelector('img')

function toogleMenu() {
    header__cards.classList.toggle('opened')
    if (header__cards.classList.contains('opened')) {
        icon.src = 'img/Copy_of_close_menu.png'
    }
    else {icon.src = 'img/mobile_menu.png'}
}
function handleScroll() {
    const position = window.scrollY + 1
    let targetSection = null
    for (let section of sections) {
        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight;
        if (sectionTop <= position && sectionBottom >= position) {
            targetSection = section;
            break;
        }
    }
    const index = sections.indexOf(targetSection);
    const targetButton = buttons[index];
    activeButton.classList.remove('active');
    targetButton.classList.add('active');
    activeButton = targetButton;
}

window.addEventListener('scroll', handleScroll)
button.addEventListener('click', toogleMenu)
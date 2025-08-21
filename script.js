const sections = Array.from(document.querySelectorAll('section'));
const buttons = document.querySelectorAll('.header__card');
let activeButton = document.querySelector('.active')

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
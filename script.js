const sections = document.querySelectorAll('section');
const buttons = document.querySelectorAll('.header__card');

function handleScroll() {
    const position = window.scrollY
    let targetSection = sections[null]
    for (let section of sections) {
        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight;
        if (sectionTop <= position && sectionBottom >= position) {
            targetSection = section;
            break;
        }
    }
}

window.addEventListener('scroll', handleScroll)
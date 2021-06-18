const header = document.querySelector('header');
const hamburger = document.getElementsByClassName('change');

header.style.position = 'absolute';
header.style.top = '-500px';

const changeHamburger = parameter => {
    parameter.classList.toggle("change");
    if (header.style.position === 'absolute') {
        header.style.position = 'fixed';
        header.style.top = '0px'
    } else {
        header.style.position = 'absolute';
        header.style.top = '-500px'
    };
};

const navMenu = document.querySelector('#MGnb');
// const burgerButton = document.querySelector('div#MGbb');
let isOpen = false;

const handleMenu = () => {
    if (!isOpen) {
        navMenu.className = 'isOpen';
    }
    else {
        navMenu.className = '';
    }
    isOpen = !isOpen;
}

// burgerButton.addEventListener('click', handleMenu);
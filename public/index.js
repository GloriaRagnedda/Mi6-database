toggleMenu = () => {

    const sideMenuIcon = this.element.querySelector('.side-menu__icon')
    const sideMenuContent = this.element.querySelector('.side-menu__content')
    sideMenuContent.style.visibility = 'hidden';
    // activate the icon element by attaching an event listener to it
    sideMenuIcon.addEventListener('click', () => {
        if (sideMenuContent.style.visibility === 'hidden') {
            sideMenuContent.style.visibility = 'visible';
            this.element.classList.remove('side-menu--hidden');
        } else if (sideMenuContent.style.visibility === 'visible') {
            sideMenuContent.style.visibility = 'hidden';
            this.element.classList.add('side-menu--hidden');
        }
    })
}
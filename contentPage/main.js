function menuItems_bgChange() {
    const menuOptions = document.querySelectorAll('.menu-items');
    const menuItems = document.querySelectorAll('.menu-contentIcon');

    addEventListener('DOMContentLoaded', () => {
        menuOptions[0].style.cssText += 'background-color:#6b69f9';
    });

    menuOptions.forEach((item) => {
        item.addEventListener('click', () => {
            showFilteredContent(item);
        })
    })

    function showFilteredContent(btn) {
        menuItems.forEach((item) => {
            if (item.classList.contains(btn.id)) {
                resetActiveItem();
                btn.style.cssText += 'background-color:#6b69f9';
            }
        });
    }

    function resetActiveItem() {
        menuOptions.forEach((item) => {
            item.style.setProperty('background-color', 'initial');
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    menuItems_bgChange();

});
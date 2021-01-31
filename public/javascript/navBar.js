addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.menu__btn');
    if(btn_menu){
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu__items')
            menu_items.classList.toggle('show')
        }
        )
    }
})

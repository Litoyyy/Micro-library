export function modals () {
    const allModals = document.querySelectorAll(".modal");

    $('.open-modal').click((e)=> {
        // В data-type и data-type-modal Название вашего модального окна
        const modalValue = e.target.attributes['data-type-modal'].value;
        const modalElement = document.querySelector(`[data-type="${modalValue}"]`);
        modalElement.attributes['data-modal-state'].value = "open";
        document.documentElement.style.overflow = "hidden";
    });

    $('.btn-modal-close').click(closeModal);
    $('.modal-inset').click(closeModal);

    function closeModal() {
        allModals.forEach((el)=>{
            el.attributes['data-modal-state'].value = "close";
        });
        document.documentElement.style.overflow = null;
    }
}

// Для корректной работы необходимо подключить и активировать эту функцию в app.js

// Также для корректной работы необходима библиотека jquery

// Пример подключения: import { modals } from "./путь/к/файлу/modals.js";

// Активация: modals();
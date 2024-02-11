export function parallax () {
    document.addEventListener('DOMContentLoaded', function () {
        let parallaxLayers = document.querySelectorAll('.parallax-elem');
        
        window.addEventListener('scroll', function () {
            let scrollY = window.scrollY;

            parallaxLayers.forEach(function (layer) {
                // depth - значение степени параллакса объекта
                let depth = layer.getAttribute('data-depth');
                let translateY = -(scrollY * depth);

                layer.style.transform = 'translateY(' + translateY + 'px)';
            });
        });
    });
}

// Для корректной работы необходимо подключить и активировать эту функцию в app.js

// Пример подключения: import { parallax } from "./путь/к/файлу/parallax.js";

// Активация: parallax();
function initializeCarousel(sliderClass, intervalDuration) {
    const slider = document.querySelector(`.${sliderClass} .list`);
    const items = document.querySelectorAll(`.${sliderClass} .list .item`);
    const next = document.querySelector(`.${sliderClass} .next`);
    const prev = document.querySelector(`.${sliderClass} .prev`);
    const dots = document.querySelectorAll(`.${sliderClass} .dots li`);
    let lengthItems = items.length - 1;
    let active = 0;
    let refreshInterval;

    function reloadSlider() {
        slider.style.left = -items[active].offsetLeft + 'px';

        let lastActiveDot = document.querySelector(`.${sliderClass} .dots li.active`);
        lastActiveDot.classList.remove('active');
        dots[active].classList.add('active');
    }

    next.onclick = function () {
        active = active + 1 <= lengthItems ? active + 1 : 0;
        reloadSlider();
        restartInterval();
    }

    prev.onclick = function () {
        active = active - 1 >= 0 ? active - 1 : lengthItems;
        reloadSlider();
        restartInterval();
    }

    dots.forEach((li, key) => {
        li.addEventListener('click', () => {
            active = key;
            reloadSlider();
            restartInterval();
        });
    });

    window.addEventListener('resize', () => {
        reloadSlider();
    });

    function startInterval() {
        refreshInterval = setInterval(() => { next.click() }, intervalDuration);
    }

    function stopInterval() {
        clearInterval(refreshInterval);
    }

    function restartInterval() {
        stopInterval();
        startInterval();
    }

    startInterval();
    return { startInterval, stopInterval };
}

const carousel1 = initializeCarousel('slider1', 5000);

const carousel2 = initializeCarousel('slider2', 9000);

const carousel3 = initializeCarousel('slider3', 7000);

const carousel4 = initializeCarousel('slider4', 8000);
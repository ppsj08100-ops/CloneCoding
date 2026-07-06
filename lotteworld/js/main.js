const li1 = document.querySelector('.main .con2 ul li:first-child');
const li2 = document.querySelector('.main .con2 ul li:last-child');
const str1 = document.querySelector('.main .con2 ul li:first-child strong');
const str2 = document.querySelector('.main .con2 ul li:last-child strong');
const con2 = document.querySelector('.main .con2');

li1.addEventListener('mouseenter', function () {
    con2.style.backgroundImage = 'url(./images/mainCon1_bg.jpg)';
    str1.textContent = '상설전시';
});

li2.addEventListener('mouseenter', function () {
    con2.style.backgroundImage = 'url(./images/mainCon2_bg.jpg)';
    str2.textContent = '특별전시';
});

const visualSwiper = new Swiper('.visual-swiper', {
    loop: true,
    speed: 800,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.visual-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.visual-prev',
        nextEl: '.visual-next',
    },
});

const visualToggle = document.querySelector('.visual-toggle');
let visualPlaying = true;

visualToggle.addEventListener('click', function () {
    if (visualPlaying) {
        visualSwiper.autoplay.stop();
        visualToggle.querySelector('img').alt = '재생';
    } else {
        visualSwiper.autoplay.start();
        visualToggle.querySelector('img').alt = '정지';
    }

    visualPlaying = !visualPlaying;
});

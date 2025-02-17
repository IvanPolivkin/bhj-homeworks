document.addEventListener('DOMContentLoaded', function () {
    let clicks = 0;
    let lastClickTime = new Date().getTime();
    let totalClicks = document.getElementById('clicker__counter');
    let cookie = document.getElementById('cookie');
    let clickTimer;
    let clickDurationDisplay = document.createElement('div');
    cookie.parentElement.appendChild(clickDurationDisplay);

    cookie.addEventListener('mousedown', function () {
        clickTimer = new Date().getTime();
        cookie.style.width = '220px';
    });

    cookie.addEventListener('mouseup', function () {

        cookie.style.width = '200px';
    });

    cookie.addEventListener('click', function () {
        clicks++;
        totalClicks.textContent = clicks;

    });
});
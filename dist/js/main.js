document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu > div');
    const countdowns = document.querySelectorAll('.countdown');

    const setActiveMenu = (menuDiv) => {
        menuItems.forEach((menuDiv) => menuDiv.classList.remove('active'));
        menuDiv.classList.add('active');
    };

    const setActiveCountdown = (targetId) => {
        countdowns.forEach((countdown) => {
            countdown.classList.toggle('active', countdown.id === targetId);
        });
    };

    if (menuItems.length > 0) {
        const firstMenuDiv = menuItems[0];
        const firstMenuItem = firstMenuDiv.querySelector('.menu__item');
        const firstCountdownId = firstMenuItem.getAttribute('data-target');

        setActiveMenu(firstMenuDiv);
        setActiveCountdown(firstCountdownId);
    }

    menuItems.forEach((div) => {
        div.addEventListener('click', () => {
            const targetId = div.querySelector('.menu__item').getAttribute('data-target');

            setActiveMenu(div);
            setActiveCountdown(targetId);
        });
    });

    const startCountdown = (targetDate, countdownElement) => {
        const updateCountdown = () => {
            const currentTime = new Date().getTime();
            const difference = targetDate - currentTime;

            if (difference < 0) {
                clearInterval(interval);
                ['days', 'hours', 'minutes', 'seconds'].forEach((unit) => {
                    countdownElement.querySelector(`.countdown__number--${unit}`).innerHTML = '00';
                });
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            countdownElement.querySelector('.countdown__number--days').innerHTML = days.toString().padStart(2, '0');
            countdownElement.querySelector('.countdown__number--hours').innerHTML = hours.toString().padStart(2, '0');
            countdownElement.querySelector('.countdown__number--minutes').innerHTML = minutes.toString().padStart(2, '0');
            countdownElement.querySelector('.countdown__number--seconds').innerHTML = seconds.toString().padStart(2, '0');
        };

        const interval = setInterval(updateCountdown, 1000);
        updateCountdown();
    };

    const targetDates = [
        new Date('November 3, 2024 13:30:00 GMT-0300').getTime(),
        new Date('August 21, 2024 08:00:00 GMT-0300').getTime(),
        new Date('September 9, 2024 10:00:00 GMT-0300').getTime(),
        new Date('October 15, 2024 14:00:00 GMT-0300').getTime(),
    ];

    const countdownElements = [
        document.getElementById('countdown-1'),
        document.getElementById('countdown-2'),
        document.getElementById('countdown-3'),
        document.getElementById('countdown-4'),
    ];

    targetDates.forEach((date, index) => startCountdown(date, countdownElements[index]));
});

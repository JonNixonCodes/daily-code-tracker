
// script.js

document.addEventListener('DOMContentLoaded', () => {
    const streakCounter = document.querySelector('.streak-counter');
    const markButton = document.querySelector('.mark-coded-today-button');
    const lastCodedDateElem = document.querySelector('.streak-message p:last-child');

    let currentStreak = 0;
    let lastCodedDate = '';

    // Function to get today's date in YYYY-MM-DD format
    const getTodayDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    };

    // Function to update the UI
    const updateUI = () => {
        streakCounter.textContent = currentStreak;
        if (lastCodedDate) {
            lastCodedDateElem.textContent = `Last coded: ${lastCodedDate}`;
        } else {
            lastCodedDateElem.textContent = 'Start your streak!';
        }

        if (lastCodedDate === getTodayDate()) {
            markButton.disabled = true;
            markButton.textContent = 'Coded Today!';
        } else {
            markButton.disabled = false;
            markButton.textContent = 'Mark Coded Today!';
        }
    };

    // Function to load data from localStorage
    const loadData = () => {
        const savedStreak = localStorage.getItem('currentStreak');
        const savedLastCodedDate = localStorage.getItem('lastCodedDate');

        if (savedLastCodedDate) {
            lastCodedDate = savedLastCodedDate;
            const today = new Date(getTodayDate());
            const lastDate = new Date(lastCodedDate);
            const diffTime = today - lastDate;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays > 1) {
                currentStreak = 0;
                localStorage.setItem('currentStreak', currentStreak);
            } else {
                currentStreak = savedStreak ? parseInt(savedStreak, 10) : 0;
            }
        } else {
            currentStreak = 0;
        }
        updateUI();
    };

    // Function to save data to localStorage
    const saveData = () => {
        localStorage.setItem('currentStreak', currentStreak);
        localStorage.setItem('lastCodedDate', lastCodedDate);
    };

    // Event listener for the button
    markButton.addEventListener('click', () => {
        const todayDate = getTodayDate();
        if (lastCodedDate) {
            const lastDate = new Date(lastCodedDate);
            const today = new Date(todayDate);
            const diffTime = today - lastDate;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays === 1) {
                currentStreak++;
            } else if (diffDays > 1) {
                currentStreak = 1;
            }
        } else {
            currentStreak = 1;
        }
        lastCodedDate = todayDate;
        saveData();
        updateUI();
    });

    // Initial load
    loadData();
});

// Helper function to get the current date as string
const getTodaysDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
};

// Helper function to get yesterday's date as string
const getYesterdaysDate = () => {
    const today = new Date();
    let yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    return yesterday.toISOString().split('T')[0];
};



document.addEventListener('DOMContentLoaded', () => {
    // Code will only execute after HTML content is loaded 
    console.log("The page is now fully loaded, and my script can start!");
    
    // Assign variables to HTML elements for updating
    const streakCounterElement = document.getElementById('streak-counter');
    const markCodedTodayButtonElement = document.getElementById('mark-coded-today-button');
    const lastCodedDateElement = document.getElementById('streak-message-last-coded-date');
    const streakMessageQuoteElement = document.getElementById('streak-message-quote');
    
    // Assign state variables
    const streakState = {
        currentStreak: 0,
        lastCodedDate: 'Never'
    };
    
    
    // Helper function to save streak state to local storage
    const saveState = () => {
        localStorage.setItem('currentStreak', streakState.currentStreak);
        localStorage.setItem('lastCodedDate', streakState.lastCodedDate);
    };
    
    // Helper function to load streak state from local storage
    const loadState = () => {
        let currentStreak = localStorage.getItem('currentStreak');
        let lastCodedDate = localStorage.getItem('lastCodedDate');
        if (currentStreak === null) {
            currentStreak = 0;
        };
        if (lastCodedDate === null) {
            lastCodedDate = 'Never';
        };
        streakState.currentStreak = parseInt(currentStreak, 10) || 0;
        streakState.lastCodedDate = lastCodedDate;
    };
    
    // Helper function to render the widget
    const renderWidget = () => {
        // Assign variables
        let streakMessageQuote = 'Start your streak by coding today!';
        let markCodedTodayButtonText = 'Mark Coded Today!';
        let buttonDisabled = false;
        
        // Update the current streak
        streakCounterElement.textContent = streakState.currentStreak;
        
        // Update the last coded date
        lastCodedDateElement.textContent = streakState.lastCodedDate;
        
        if (streakState.lastCodedDate === getTodaysDate()) {
            // Coded today
            streakMessageQuote = 'You\'ve already logged your coding for today! 🎉'
            markCodedTodayButtonText = 'Already Coded Today!';
            buttonDisabled = true;
        } else if (streakState.lastCodedDate === getYesterdaysDate()) {
            // Coded yesterday
            streakMessageQuote = 'Let\'s keep your streak going! 💪'
            markCodedTodayButtonText = 'Mark Coded Today!';
            buttonDisabled = false;
        } else {
            // Never coded
            streakMessageQuote = 'Start your streak by coding today!'
            markCodedTodayButtonText = 'Mark Coded Today!';
            buttonDisabled = false;
        }
        // Update the quote
        streakMessageQuoteElement.textContent = streakMessageQuote;
        
        // Update the button
        markCodedTodayButtonElement.textContent = markCodedTodayButtonText;
        markCodedTodayButtonElement.disabled = buttonDisabled;
    }

    // Add event listener for button click
    markCodedTodayButtonElement.addEventListener('click', () => {

        if (streakState.lastCodedDate === getTodaysDate()) {
            // No update to current streak
            console.log('No update to current streak');
        } else if (streakState.lastCodedDate === getYesterdaysDate()) {
            // Increment current streak
            streakState.currentStreak += 1;
            console.log('Increment current streak');
        } else {
            // Reset current streak
            streakState.currentStreak = 1;
            console.log('Reset current streak');
        }

        // Update lastCodedDate
        streakState.lastCodedDate = getTodaysDate();

        // Save the state
        saveState();
        
        // Update widget
        renderWidget();

    });

    // Following code executes when the app is loaded
    // 1. Load the state from local storage
    loadState();

    // 2. Render the widget based on the state
    renderWidget();

});
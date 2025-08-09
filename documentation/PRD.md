# Product Requirements Document: Daily Code Tracker

- Author: JonNixonCodes

- Date: July 1, 2025

- Version: 1.0

## 1. Introduction
This document outlines the requirements for the initial version of the "Daily Code Tracker" web application. The primary goal is to create a simple, client-side tool using HTML, CSS, and JavaScript to help users establish and maintain a daily coding habit by tracking their consecutive coding days.

## 2. Product Overview
**Product Name**

Daily Code Tracker

**Problem Statement**

Many aspiring software developers struggle with maintaining a consistent coding routine, often leading to inconsistent progress and skill development. There is a need for a simple, accessible tool to encourage and track daily coding activity.

**Solution Overview**

The Daily Code Tracker is a web-based application designed to motivate users to code every day. It provides a clear visual representation of their current coding streak and a straightforward mechanism to log their daily coding sessions. The application will run entirely in the browser, leveraging local storage for data persistence.

## 3. Goals
- To enable users to establish and maintain a daily coding habit.
- To offer a simple, frictionless way to log daily coding activity.
- To save user progress across browser sessions.

## 4. Scope (Current Iteration - V1.0)
This document defines the features and functionality for the initial release of the Daily Code Tracker:
- Displaying the current consecutive coding streak.
- A button to mark a day as "coded."
- Logic to increment the streak for consecutive days.
- Logic to reset the streak if a day is missed.
- Persistence of streak data using browser Local Storage.

## 5. User Stories / Features
### 5.1 Core User Stories
- As a user, I want to see my current coding streak (how many consecutive days I've coded) so I can track my progress.
- As a user, I want to be able to easily mark a day as "coded" so I can update my streak.
- As a user, I want the app to automatically detect if I've missed a day and reset my streak so I can accurately track my consistency.
- As a user, I want my streak data to be saved so I don't lose it when I close the browser.
- As a user, I want to see a clear visual representation of my progress so I stay motivated.

### 5.2 Detailed Features
**Streak Display**
- The application will prominently display the current number of consecutive days the user has coded.
- The display will be updated in real-time based on user actions and page load logic.

**"Mark Coded Today!" Button**
- A dedicated button will be available for the user to click once per day to log their coding activity.
- Once clicked for the current day, the button will become disabled and its appearance will change to indicate it has been used.
- The button will re-enable at the start of the next day.

**Streak Logic**
- New Streak: If the user marks a day as coded and there is no previous streak (or a streak was broken), a new streak of 1 day will begin.
- Continue Streak: If the user marks a day as coded and the last recorded coding date was the previous day, the streak count will increment by 1.
- Reset Streak: If the user marks a day as coded, but the last recorded coding date was not the previous day (i.e., a day was missed), the streak will be reset to 1.
- Page Load Check: Upon page load, the application will check the lastCodedDate. If it's not "today" or "yesterday," the currentStreak will be reset to 0 to reflect a broken streak.

**Data Persistence**
- The currentStreak count and the lastCodedDate (as a string in "YYYY-MM-DD" format) will be stored in the browser's localStorage.
- Data will be loaded from localStorage on page initialization.

**Last Coded Date Display**
- A small text element will display the date the user last marked as coded. This helps the user understand the app's state.

## 6. Functional Requirements
### 6.1 User Interface
- **Title**: "Daily Code Tracker" prominently displayed.\
- **Streak Counter**: A large, clear numerical display for the current streak.
- **Button**: "Mark Coded Today!" button.
- **Last Coded Date**: Small text indicating the last logged date.
- **Conditional Messages**: Display messages for streak reset or encouragement as needed.

## 7. Non-Functional Requirements
- **Performance**: The application should load quickly and respond instantly to user interactions.
- **Usability**: The interface should be intuitive and easy to understand, requiring minimal instruction.
- **Responsiveness**: The layout should adapt gracefully to different screen sizes (mobile, tablet, desktop).
- **Maintainability**: The code should be well-structured, commented, and easy to understand for future modifications.
- **Accessibility**: Basic accessibility considerations (e.g., semantic HTML, clear focus states) will be applied.

## 8. Technical Design (High-Level)
**Front-End Technologies**:
- HTML5: For page structure (index.html).
- CSS3: For styling and layout (style.css).
- JavaScript (ES6+): For all application logic and DOM manipulation (script.js).

**Data Storage**:
- localStorage API: Used for client-side persistence of currentStreak and lastCodedDate.

**File Structure**:
- index.html
- style.css
- script.js

## 9. Future Considerations (Out of Scope for V1.0)
The following features are planned for potential future iterations to enhance the user experience and functionality:
- Session timer for current coding duration.
- Text input for daily coding goals.
- A review system (e.g., 5-star rating, notes) for coding sessions.
- Display of randomized motivational quotes.
- Integration with external APIs (e.g., GitHub) for automated coding activity detection.
- More advanced visual analytics (e.g., calendar view, graphs).
- Cloud synchronization for data across devices.

## 10. Success Metrics
The success of the Daily Code Tracker V1.0 will be measured by:
- Functionality: All defined features work as expected without errors.
- Usability: Users can easily understand and interact with the application.
- Data Persistence: Streak data is correctly saved and loaded across sessions.
## Welcome to the Procrastination Station!

This project is a reflection of what I have learned from Phase-1 of Flatiron School's Software Engineering Bootcamp.

Phase-1 of the Software Engineering Bootcamp was all about Javascript concepts and DOM manipulation.
I learned all about using Functions, Event Listeners, Loops, and Fetch requests.

# Procrastination Station

## Table of Contents
- [Description](#description)
- [Features](#features)
- [JavaScript Functionalities](#javascript-functionalities)
- [Usage](#usage)
- [Contributing](#contributing)

## Description
The HTML file `index.html` serves as the structure of the Procrastination Station webpage. It includes various sections and functionalities:
- Header section with the Procrastination Station logo.
- Random activity generator with details such as type, participants, price, and accessibility.
- Featured activities section with hover and click functionalities.
- Favorite activities section for saving preferred activities.
- Form section to add custom activities to your list.
- Personal activities section to view added custom activities.
- Styling via the associated CSS file `styles.css`.
- JavaScript functionalities to fetch random activities, interact with featured and personal activities, and manage favorites.

## Features
- **Random Activity Generator**: Clicking the "Click for a random activity!" button fetches a random activity with details.
- **Featured Activities**: Displays featured activities with hover and click functionalities.
- **Favorite Activities**: Allows users to add and remove favorite activities to/from the list.
- **Add Custom Activity**: Users can input their own activities via the form section.
- **Personal Activities**: Displays the list of user-added custom activities.

## JavaScript Functionalities
### Random Activity Generation
- Fetches random activities from an external API (`http://www.boredapi.com/api/activity/`).
- Displays activity details in a popup and enables adding to favorites.

### Featured Activities Interaction
- Fetches and displays featured activities from a local database (`http://localhost:3000/activities`).
- Provides hover and click functionalities for interaction.

### User-Added Custom Activities
- Allows users to add custom activities via a form and displays them in the Personal Activities section.

### Favorites Management
- Enables adding and removing activities from the Favorites section.

### Popups for Confirmation
- Confirms actions like adding to favorites, form submission, and removing activities.

This JavaScript code significantly enhances user interaction and experience on the webpage, allowing for dynamic content generation, customization, and management of activities across various sections.

## Usage
To use this project:
1. Download or clone the repository.
2. Open the `index.html` file in a web browser.
   - Type "json-server --watch db.json" into your console.
3. Explore the functionalities provided:
   - Click the "Click for a random activity!" button to get a random activity.
   - Interact with featured activities by hovering and clicking.
   - Add custom activities using the form section.

## Contributing
Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to submit a pull request or open an issue.



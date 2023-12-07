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

```javascript
const randomBtn = document.querySelector(".random-btn");

randomBtn.addEventListener('click', () => {
  fetch("http://www.boredapi.com/api/activity/")
  .then(res => res.json())
  .then(activities => {
    // Code to display activity details in a popup
    // Code to add activity to favorites
  })
});
```
### Featured Activities Interaction
- Fetches and displays featured activities from a local database (`http://localhost:3000/activities`).
- Provides hover and click functionalities for interaction.
```javascript
fetch("http://localhost:3000/activities")
.then(res => res.json())
.then(activities => { 
  activities.forEach(act => {
    // Code to display featured activities and their interactions
  });
});
```
### User-Added Custom Activities
- Allows users to add custom activities via a form and displays them in the Personal Activities section.
```javascript 
const form = document.querySelector("#new-activity-form");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Code to handle form submission and display user-added activities
});
```

### Favorites Management
- Enables adding and removing activities from the Favorites section temporarily.

```javascript 
favBtn.addEventListener('click', () => {
      let favoritesDiv = document.querySelector("#favorites-div");

      const favoriteName = document.createElement("h3")
      const removeBtn = document.createElement("button")
      const favTypes = document.createElement("p");
      const favParticipants = document.createElement("p");
      const favPrice = document.createElement("p");
      const favAccess = document.createElement("p");

      removeBtn.setAttribute("id", "remove-btn");

      favoriteName.textContent = popupName.textContent;
      favTypes.textContent = type.textContent;
      favParticipants.textContent = participants.textContent;
      favPrice.textContent = price.textContent;
      favAccess.textContent = accessibility.textContent;
      removeBtn.textContent = "Remove"

      favsPlaceholder.remove();

      showPopup();

      favoritesDiv.append(favoriteName, favTypes, favParticipants, favPrice, favAccess, removeBtn);

removeBtn.addEventListener('click', () => {
        favoriteName.remove();
        favTypes.remove();
        favParticipants.remove();
        favPrice.remove();
        favAccess.remove();
        removeBtn.remove();

        if (favoritesDiv.children.length === 0 && !favoritesDiv.contains(favsPlaceholder)) {
          favoritesDiv.appendChild(favsPlaceholder);
        } else if (favoritesDiv.children.length > 0 && favoritesDiv.contains(favsPlaceholder)) {
          favsPlaceholder.remove();
        }
```


### Popups for Confirmation
- Confirms actions like adding to favorites, form submission, and removing activities.
- I did this by adding a style to the popup's HTML with 'none' and then using this function to display it when the function is called.
```javascript
function showPopup() {
  const popup = document.querySelector("#popup");
  popup.style.display = 'block';

  setTimeout(() => {
    popup.style.display = 'none';
  }, 3000); 
}
```

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



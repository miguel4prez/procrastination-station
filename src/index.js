// Adds a placeholder text when nothing is added to the favorites section
//  then deletes it once theres a favorites added. 
const favsPlaceholder = document.createElement("p");
favsPlaceholder.textContent = "(There is nothing here)"
document.querySelector("div#favorites-section").append(favsPlaceholder);

const emptyDiv = document.createElement("p")
emptyDiv.textContent = "(There is nothing here)"
document.querySelector("#personal-list").append(emptyDiv);

// Popup function for confirmation
function showPopup() {
  const popup = document.querySelector("#popup");
  popup.style.display = 'block';

  setTimeout(() => {
    popup.style.display = 'none';
  }, 3000); 
}

function featuredPopup(){
  const featuredPopup = document.querySelector("#featured-popup");
  featuredPopup.style.display = 'block';

  setTimeout(() => {
    featuredPopup.style.display = 'none';
  }, 3000); 
}
  
const randomBtn = document.querySelector(".random-btn")

// Event listener to display random activities and display in the
//  favorites section
randomBtn.addEventListener('click', () => {
  fetch("http://www.boredapi.com/api/activity/")
  .then(res => res.json())
  .then(activities => {
    const popupDiv = document.querySelector("#random-activity-popup");
    const divCard = document.createElement("div");
    const popupName = document.createElement("h1");
    const type = document.querySelector("#type-name");
    const participants = document.querySelector("#participants-value");
     const price = document.querySelector("#price-value");
    const accessibility = document.querySelector("#accessibility-value");
    const favBtn = document.createElement("button");

    divCard.setAttribute("id", "activity-card")
    popupName.setAttribute("id", "activity-name");
    favBtn.setAttribute("id", "save-btn")

    popupName.textContent = activities.activity
    type.textContent = `Type: ${activities.type}`;
    participants.textContent = `Participants: ${activities.participants}`;
    price.textContent = `Price: $${activities.price}`;

    if (activities.accessibility < 0.5){
      accessibility.textContent = `Accessibility: Most Accessible!`
    } else if (activities.accessibility <= 0.5 && activities.accessibility <= 0.8){
      accessibility.textContent = `Accessibility: Sort of Accessible!`
    } else {
      accessibility.textContent = `Accessibility: Not That Accessible`
    }

    favBtn.textContent = "Favorite";

    while(popupDiv.firstChild){
      popupDiv.removeChild(popupDiv.lastChild)
    }
    
    divCard.append(popupName, type, participants, price, accessibility, favBtn)
    popupDiv.append(divCard)

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
      })
    })
  })
})

// My own database
fetch("http://localhost:3000/activities")
.then(res => res.json())
.then(activities => { 
     
  activities.forEach(act => {
    const featuredActivities = document.querySelector("#featured-activities");
    const featuredNameDisplay = document.createElement("h3");
    featuredNameDisplay.className = "featured-ptag"
    featuredNameDisplay.textContent = act.activity;
    featuredActivities.append(featuredNameDisplay);

    featuredNameDisplay.addEventListener('mouseover', () => {
      featuredNameDisplay.style.color = '#f5b1f4'
    })

    featuredNameDisplay.addEventListener('mouseout', () => {
      featuredNameDisplay.style.color = 'black'
    })

    featuredNameDisplay.addEventListener('click', () => {
      const featuredCards = document.querySelector("#featured-popup-card");
      const featuredName = document.querySelector("#featured-activity-name");
      const featuredType = document.querySelector("#featured-type");
      const featuredPrice = document.querySelector("#featured-price")
      const featuredParticipants = document.querySelector("#featured-participants")
      const featuredAccessibility = document.querySelector("#featured-accessibility");
      const favBtn = document.querySelector("#featured-save-btn");
          
      favBtn.textContent = "Favorite";
      favBtn.style.display = "inline-flex"
      
      featuredName.textContent = act.activity
      featuredType.textContent = `Type: ${act.type}`;
      featuredParticipants.textContent = `Participants: ${act.participants}`;
      featuredPrice.textContent = `Price: $${act.price}`;
  
      if (act.accessibility < 0.5){
        featuredAccessibility.textContent = `Accessibility: Most Accessible!`
      } else if (act.accessibility <= 0.5 && act.accessibility <= 0.8){
        featuredAccessibility.textContent = `Accessibility: Sort of Accessible!`
      } else {
            featuredAccessibility.textContent = `Accessibility: Not That Accessible`
      }
  
      featuredCards.append(featuredName, featuredType, featuredParticipants, featuredPrice, featuredAccessibility, favBtn)
      favBtn.addEventListener('click', () => {
        let favoritesDiv = document.querySelector("#favorites-div");
      
        const favoriteName = document.createElement("h3")
        const removeBtn = document.createElement("button")
        const favTypes = document.createElement("p");
        const favParticipants = document.createElement("p");
        const favPrice = document.createElement("p");
        const favAccess = document.createElement("p");
      
        removeBtn.setAttribute("id", "remove-btn");
      
        favoriteName.textContent = featuredName.textContent;
        favTypes.textContent = featuredType.textContent;
        favParticipants.textContent = featuredParticipants.textContent;
        favPrice.textContent = featuredType.textContent;
        favAccess.textContent = featuredAccessibility.textContent;
        removeBtn.textContent = "Remove"
      
        favsPlaceholder.remove();
      
        featuredPopup();
      
        favoritesDiv.append(favoriteName, favTypes, favParticipants, favPrice, favAccess, removeBtn)
      
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
        })
      })
    })
  })   
})

const form = document.querySelector("#new-activity-form");

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let personalDiv = document.querySelector("#personal-list");
  const listName = document.createElement("h3");
  const listType = document.createElement("p");
  const listParticipants = document.createElement("p");
  const listPrice = document.createElement("p");
  const listAccess = document.createElement("p")
  const removeBtn = document.createElement("button")

  removeBtn.setAttribute("id", "remove-btn");
  removeBtn.textContent = "Delete";

  const newActivity  = e.target.activity.value;
  const newType = e.target["act-type"].value;
  const newParticipants = e.target.participants.value;
  const newPrice = e.target.price.value;
  const newAccess = e.target.access.value;

  listName.textContent = `${newActivity}`;
  listType.textContent = `Type: ${newType}`;
  listParticipants.textContent = `Participants: ${newParticipants}`;
  listPrice.textContent = `Price: $${newPrice}`;
  listAccess.textContent = `Accessibility: ${newAccess}`;

  const submitPopup = document.querySelector("#submit-popup")
  submitPopup.style.display = 'block';

  setTimeout(() => {
    submitPopup.style.display = 'none';
  }, 3000);

  emptyDiv.remove();
  
  personalDiv.append(listName, listType, listParticipants, listPrice, listAccess, removeBtn)
  e.target.reset()

  removeBtn.addEventListener('click', () => {
    listName.remove();
    listType.remove();
    listParticipants.remove();
    listPrice.remove();
    listAccess.remove();
    removeBtn.remove();
    emptyDiv.remove();

    if (personalDiv.children.length === 0 && !personalDiv.contains(emptyDiv)) {
      personalDiv.appendChild(emptyDiv);
    } else if (personalDiv.children.length > 0 && personalDiv.contains(emptyDiv)) {
      emptyDiv.remove();
    }
  })
})

// Figure out how to get images on the DOM
// Fix alignment issues
// Decorate a bit more

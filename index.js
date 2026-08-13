/*** You will not need this file until Unit 5 ***/
/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");
// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    // This section will run whenever the button is clicked
}

// Step 3: Register a 'click' event listener for the theme button,
themeButton.addEventListener("click", toggleDarkMode);
//             and tell it to use toggleDarkMode as its callback function


/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
const form = document.querySelector("#rsvp-form");

const addParticipant = (person) => {
    // Step 2: Write your code to manipulate the DOM here
    
    const notif = document.createElement("p");
    notif.textContent = `🎟️ ${person.username} ${person.emoji} has joined the live`;

    const container = document.querySelector(".rsvp-participants");
    container.appendChild(notif);   
}

// Step 3: Add a click event listener to the submit RSVP button here
//form.addEventListener('submit', addParticipant);

/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = (event) => {
   event.preventDefault();
  
  let containsErrors = false;

  let rsvpInputs = document.querySelectorAll("#rsvp-form input");

  let person = {
      username: rsvpInputs[0].value,
      email: rsvpInputs[1].value,
      emoji: rsvpInputs[2].value
  }


  // TODO: Loop through all inputs
  for (let index = 0; index < rsvpInputs.length; index++) {
    const input = rsvpInputs[index];
    console.log(input.id, input.value);
    
    if (input.value.trim().length < 2) {
      containsErrors = true;
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
    }


 console.log("containsErrors:", containsErrors);
  

     if(containsErrors == false) {
    addParticipant(person);
    toggleModal(person);

      for (let index = 0; index < rsvpInputs.length; index++) {
        rsvpInputs[index].value = "";
     }
    }

  }




  // TODO: Inside loop, validate the value of each input

  // TODO: If no errors, call addParticipant() and clear fields
 

// Step 3: Replace the form button's event listener with a new one that calls validateForm()

form.addEventListener('submit', validateForm);

/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

const toggleModal = (person) => {
    let modal = document.querySelector("#success-modal"); // TODO
    let modalContent = document.querySelector("#modal-text");

    // TODO: Update modal display to flex
    modal.style.display = "flex";

    // TODO: Update modal text to personalized message
    modalContent.textContent = `Thanks for joining the live, ${person.username} ${person.emoji}! Grab some popcorn, drinks, and enjoy the stream!`;

    modalImage = document.querySelector("#modal-img");

    intervalID = setInterval(animateImage, 500);

    // Set modal timeout to 5 seconds
    setTimeout(() => {
      clearInterval(intervalID);

      let modal = document.querySelector("#success-modal");
      modal.style.display = "none";
    }, 5000);




}

// TODO: animation variables and animateImage() function
let rotateFactor = 0;
let modalImage;
let intervalID;

const animateImage = () => {
  if (rotateFactor === 0) {
    rotateFactor = -10;
  } else {
    rotateFactor = 0; 
  }

  modalImage.style.transform = `rotate(${rotateFactor}deg)`;
}


// Dark Mode
  
  
let themeButton = document.getElementById("theme-button");
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}

themeButton.addEventListener("click", toggleDarkMode);


// Form Handling


const form = document.querySelector("#rsvp-form");

const addParticipant = (person) => {
    
    const notif = document.createElement("p");
    notif.textContent = `🎟️ ${person.username} ${person.emoji} has joined the live`;

    const container = document.querySelector(".rsvp-participants");
    container.appendChild(notif);   
}

//form.addEventListener('submit', addParticipant);

// Form Validation
  
 

const validateForm = (event) => {
   event.preventDefault();
  
  let containsErrors = false;

  let rsvpInputs = document.querySelectorAll("#rsvp-form input");

  let person = {
      username: rsvpInputs[0].value,
      email: rsvpInputs[1].value,
      emoji: rsvpInputs[2].value
  }


  // Loop through all inputs
  for (let index = 0; index < rsvpInputs.length; index++) {
    const input = rsvpInputs[index];
    
    if (input.value.trim().length < 2) {
      containsErrors = true;
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
    }

  

     if(containsErrors == false) {
    addParticipant(person);
    toggleModal(person);

      for (let index = 0; index < rsvpInputs.length; index++) {
        rsvpInputs[index].value = "";
     }
    }

  }



form.addEventListener('submit', validateForm);

// Modal Animations

const toggleModal = (person) => {
    let modal = document.querySelector("#success-modal"); 
    let modalContent = document.querySelector("#modal-text");

    //Update modal display to flex
    modal.style.display = "flex";

    //Update modal text to personalized message
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

//animation variables and animateImage() function
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


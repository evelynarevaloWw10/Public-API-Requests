
// Global variables 
const url = "https://randomuser.me/api/?results=12&inc=name,picture,dob,email,phone,location,&noinfo&nat=US"
const searchContainer = document.querySelector('.search-container');
const gallery = document.getElementById('gallery'); 
let users = [];  // empty array to hold fetched data


//creates a fetch function to generate the data needed for each of the 12 profiles
function fetchUserData(url) {
  return fetch(url)
  .then(checkStatus)// runs checkStatus function 
  .then(response => response.json()) // parses response
}
// placing the data pulled from the fetch function 
//and passing it into displayUser() as a @para/container

fetchUserData(url)
.then(data => {
  users = data.results;
  displayUsers(users);
})

// function created to check status of response
function checkStatus(response) {
  if (response.ok) { // boolean stating whether the response was successful
    return Promise.resolve(response); //returns a Promis object that is resolved with a give value
  } else {
    return Promise.reject(new Error(response.statusText)); // if promise is rejected returns the status property w/ HTTP status code
  }
}

//function to display users, template 
//literal was included to be able to make page dynamic  

function displayUsers(users){

  let html = "";
  users.forEach((user, index) => {
    const picture = user.picture;
    const name = user.name;
    const email = user.email;
    const location = user.location;
  
  html +=

              ` <div class="card" data-index="${index}">
                <div class="card-img-container">
                        <img class="card-img" src=${user.picture.large} alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${user.name.first}</h3>
                        <p class="card-text">${user.email}</p>
                        <p class="card-text cap">${user.location.city} , ${user.location.state}</p>
                    </div>
                  </div>
                  `;
  });
    gallery.insertAdjacentHTML('beforeend', html);
    }

// Modula function with object deconstructuring to be able to 
//access the properties from the specific employee index
//https://www.youtube.com/watch?v=NIq3qLaHCIs&t=607s
//additionally this info was pulled from array with api and only included US
// so no need to structure phone number

function createModal(index){
  const { 
     name,
     dob,
     phone,
     email,
     location: {city, street, state, postcode},
     picture,
 } = users[index];
 
 //created arrays to be able to structure the dob
 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
 let month = new Date(dob.date).getMonth();
 let day = new Date(dob.date).getDay();
 let year = new Date(dob.date).getFullYear();

   let modalHtml = 

       `<div class="modal-container">
       <div class="modal">
           <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
           <div class="modal-info-container">
               <img class="modal-img" src=${picture.large} alt="profile picture">
               <h3 id="name" class="modal-name cap">${name.first}</h3>
               <p class="modal-text">${email}</p>
               <p class="modal-text cap">${city}</p>
               <hr>
               <p class="modal-text">${phone}</p>
               <p class="modal-text">${street.number}, ${street.name}, ${state}, ${postcode}</p>
               <p class="modal-text"> ${month}/${day}/${year}</p>
           </div>
       </div>s
`;
         
         document.body.insertAdjacentHTML('beforeend', modalHtml);
         

         /*created to additional variables to be able to use in eventListner
          closeModal targets the modal-close-btn and has the listner attached
          if selected w/ a "click" the modal-container is removed.
    
          */
         const closeModal = document.getElementById("modal-close-btn"); //select the close-modal id 
         const modalContainer = document.querySelector(".modal-container");
         closeModal.addEventListener("click", () => {  
           modalContainer.remove(); 
         });
         }
         
         
           

        gallery.addEventListener('click', (e) => {
        const card = e.target.closest(".card"); //.closest targets through the DOM selecting the CCS selector specified
        const index = card.getAttribute("data-index"); // returns value of specified element/ happns to be the html card attribute 
        createModal(index); // call modal with index passed into it 
        }); 

 
  
             
      

      

      
 

      
    

       




 

//event listeners 







 
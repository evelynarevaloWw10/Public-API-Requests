const url = "https://randomuser.me/api/?results=12&inc=name,picture,email,location,&noinfo&nat=US"
const searchContainer = document.querySelector(".search-container");
const gallery = document.getElementById('gallery'); 
let users = [];  


Promise.all([fetchUserData(url)])
.then(data => {
  users = data[0].results
  displayUsers(users);
});


async function fetchUserData(url){
  try {
    const response = await fetch(url);
    const response_1 = (response);
    return response_1.json();
  } catch (err) {
    return console.log('SOMETHING WENT WRONG!', err);
  }
};


function displayUsers(user){
 for(let i = 0 ; i < user.length; i++ ){
  let html =

              ` <div class="card">
                <div class="card-img-container">
                        <img class="card-img" src=${user[i].picture.large} alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${user[i].name.first}</h3>
                        <p class="card-text">${user[i].email}</p>
                        <p class="card-text cap">${user[i].location.city} , ${user[i].location.state}</p>
                    </div>`

    gallery.insertAdjacentHTML('beforeend', html);
    }
}

// Modula 
function createModal(index){
  const { 
     name,
     dob, 
     phone,
     email,
     location: {city, street, state, postcode},
     picture,
 } = users[index] //Object destructuring 

   const modalContainer = document.querySelector(".modal-cointainer")
   let modalHtml = 

       ` <div class="modal">
         <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
         <div class="modal-info-container">
            <img class="modal-img" src=${picture.medium} alt="profile picture">
            <h3 id="name" class="modal-name cap"></h3>
            <p class="modal-text"></p>
            <p class="modal-text cap"></p>
            <hr>
            <p class="modal-text">${phone}</p>
            <p class="modal-text">${street}, ${city}, ${state} ${postcode}</p>
            <p class="modal-text">Birthday: 10/21/2015</p>
             </div>`;
     
         document.body.insertAdjacentHTML('beforeend', modalHtml);
           
    modalContainer.innerHTML = modalHtml;


}

                 
 
  gallery.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    const index = card.getAttribute("data-index");
   modalIndex = index;
   createModal(index);
  }); 
 
          
             
      

      

      
 

      
    

       




 

//event listeners 









 

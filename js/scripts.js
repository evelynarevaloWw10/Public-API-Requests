const url = "https://randomuser.me/api/?results=12&inc=name,picture,email,location,&noinfo&nat=US"
const searchContainer = document.querySelector(".search-container");
const gallery = document.getElementById('gallery');   


fetch(url)
.then(response => response.json())
.then(data => data.results)
.then(usersToDisplay)
.catch((err) => console.log('SOMETHING WENT WRONG!'));



 //gallery.innerHTML = '';


//users to display
function usersToDisplay(user){
 
  for(let i = 0 ; i < user.length; i++ ){
  let html = 
    `<div class="card-img-container">
                        <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">name</h3>
                        <p class="card-text">email</p>
                        <p class="card-text cap">city, state</p>
                    </div>`
 gallery.insertAdjacentHTML('beforeend', html);
    }
}
/* Modula stuff already 

const employee = `<div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
                        <h3 id="name" class="modal-name cap">name</h3>
                        <p class="modal-text">email</p>
                        <p class="modal-text cap">city</p>
                        <hr>
                        <p class="modal-text">(555) 555-5555</p>
                        <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                        <p class="modal-text">Birthday: 10/21/2015</p>
                         </div>`;
 searchContainer.insertAdjacentHTML('beforeend','employee');
*/
 

/*fetch("https://randomuser.me/api/?results=12&inc=name,picture,email,location,&noinfo&nat=US")
.then(response => response.json())
.then(data => data.results)
.then(usersToDisplay)
.catch((err) => console.log('SOMETHING WENT WRONG!'));
*/

//  console.log(err);
//});
//console.log(response.statusText)
//.then(response => response.json())
//.then(data => usersToDisplay(data.results));

//fetch(url)
  //.then(response => response.json())
  //.then(data => console.log(data));
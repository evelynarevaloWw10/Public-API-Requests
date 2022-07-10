const url = "https://randomuser.me/api/?results=12&inc=name,picture,email,location,&noinfo&nat=US"
const searchContainer = document.querySelector(".search-container");
const gallery = document.getElementById('gallery');   
let body = document.querySelector('body')


//users to display, for loop shows 12 users and allows html and JavaSript to interact w/ each other dynamically

function usersToDisplay(user){
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

fetch(url)
.then(response => response.json())
.then(data => data.results)
.then(usersToDisplay)
.catch((err) => console.log('SOMETHING WENT WRONG!'));

// Modula 


function showModalWindow(employee){
  
  let modalHtml = "";
      modalHtml =
  ` <div class="modal">
    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
    <div class="modal-info-container">
       <img class="modal-img" src=photo alt="profile picture">
       <h3 id="name" class="modal-name cap"></h3>
       <p class="modal-text"></p>
       <p class="modal-text cap"></p>
       <hr>
       <p class="modal-text">(555) 555-5555</p>
       <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
       <p class="modal-text">Birthday: 10/21/2015</p>
        </div>`;

    body.insertAdjacentHTML('beforeend', modalHtml);
      

        /*const openModal = document.getElementById('open');
        const modalContainer = document.getElementByClass('modal-info-container');
        const closeBtn = document.getElementById('modal-close-btn')

        openModal.addEventListener('click', ()=>{
          modalContainer.classList.add('show');
        })

        closeBtn.addEventListener('click', () => {
          modalContainer.classList.remove('show');
        })

          */
        }
 

      
    





 

//event listeners 









 

const noti = document.getElementById("noti");
let cantNotifications=3;        
const button=document.getElementById("allread")
const punto=document.getElementById("punto")
const unread=document.getElementById("unread")

const notifications =()=>{
    noti.innerHTML= `
                    <h1>Notifications  <span class="numero">${cantNotifications}</span> </h1>  
                    `

    unread.innerHTML= ` 
    
                    <p class="unread"> <img src="./assets/images/avatar-mark-webber.webp" alt=""> <a href="/" class="nombres">Mark Webber</a>  reacted to your recent post My first tournament today! <span class="punto">*</span>  <br>
                    1m ago</p>

                    <p class="unread"> <img src="./assets/images/avatar-angela-gray.webp" alt=""> <a href="/" class="nombres">Angela Gray</a> followed you <span class="punto">*</span>  <br>
                    5m ago</p>

                    <p class="unread">  <img src="./assets/images/avatar-jacob-thompson.webp" alt=""> <a href="/"  class="nombres">Jacob Thompson</a>  has joined your group Chess Club <span class="punto">*</span> <br>
                    1 day ago</p>
                        
    
    `

    
}

notifications()

button.addEventListener("click",(e)=>{
    e.preventDefault()
    cantNotifications=0;
    notifications()
    unread.innerHTML= ` 
    
                    <p class="unread"> <img src="./assets/images/avatar-mark-webber.webp" alt=""> <a href="/" class="nombres read">Mark Webber</a>  reacted to your recent post My first tournament today!   <br>
                    1m ago</p>

                    <p class="unread"> <img src="./assets/images/avatar-angela-gray.webp" alt=""> <a href="/" class="nombres read">Angela Gray</a> followed you  <br>
                    5m ago</p>

                    <p class="unread"> <img src="./assets/images/avatar-jacob-thompson.webp" alt=""> <a href="/"  class="nombres read">Jacob Thompson</a>  has joined your group Chess Club <br>
                    1 day ago</p>
                        
    
    `
    
    

})





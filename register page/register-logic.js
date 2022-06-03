/*


Bugs and need to improvement

- ClientText and sellerText have bugs
- responsive design 

- add validation function
- post data to json file (users json)
*/
    
let sellerContainer = document.querySelector(".sellerReg");
let clientContainer = document.querySelector(".clientReg");
let clientText = document.getElementById("clC");
let sellerText = document.getElementById("slC");
//let foucsLine = document.querySelector(".selectedOption")

let clientForm = document.forms[0];
let sellerForm = document.forms[1];
// register style animation 



function expandClientContainer() {
    sellerContainer.style.cssText =
        `
        opacity: 0;
        visibility: hidden;
        height:0
        transition: opacity 1.2s, height .6s, width 1.2s ease-out ;

    `
    clientContainer.style.cssText = `
        opacity: 1;
        visibility: visible;
        height: 29rem;
        transition: opacity 1.2s,height .6s, width 1.2s ease-out ;
    `
    let x = clientText.classList
    console.log(typeof (x.value))


    clientText.classList.toggle(".selectedOption")
    sellerText.classList.toggle(".selectedOption")



}

function expandSellerContainer() {



    clientContainer.style.cssText =
        `
        opacity: 0;
        visibility: hidden;
        height: 0;
        transition: opacity 1.2s,height .6s,  width 1.2s ease-in-out ;
    `
    sellerContainer.style.cssText = `
        opacity: 1;
        visibility: visible;
        height: 29rem;
        transition: opacity 1.2s,height .6s,  width 1.2s ease-out ;
    `


    sellerText.classList.toggle("selectedOption")
    clientText.classList.toggle("selectedOption")



}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let clientUserName = clientForm["clientName"];
let clientEmail = clientForm["clientEmail"];
let clientPassword = clientForm["clientPassword"];
// validation function
function validationChecker(e){
    e.preventDefault()
    const nameExp = /[a-zA-Z]/g;
    const emailExp = /^[a-zA-Z0-9]{1,12}(@)(ElMallClient)(.com)$/i
    console.log(nameExp.test(clientContainer)   )
    if(nameExp.test (clientContainer)===false){
        alert("User name can't contain number or symbols")
        
    }
    
   else if(emailExp.test(clientEmail)===false){
       alert("Wrong email")
   }
    else{
       
    }
    
}
//check if password and confirm password inputs are the same and if not return the confirm password to empty string
function passwordValidation(){
    let clientConfirmPassword = clientForm["confirmPassword"];

    if(clientPassword.value===clientConfirmPassword.value){
        return true;
    }

    else{
        alert("Confirm password don't match password")
       
        clientConfirmPassword = clientForm["confirmPassword"].value ="" ;
        return false;
    }

}


//adding data to users.json 


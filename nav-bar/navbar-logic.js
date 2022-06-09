//scroll controller
let progressBar = document.querySelector(".progressBar")
let catContainer = document.querySelector(".categoriesContainer")

window.addEventListener('scroll', (e) => {
    let currentPosition = window.scrollY;
    let valueOfScrolling = (currentPosition / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;

    progressBar.style.width = valueOfScrolling + '%'
})


//get data from api https://retail.amit-learning.com/api/categories

function showCatWithData() {
    let req = new XMLHttpRequest()
    req.open("GET", "https://retail.amit-learning.com/api/categories")

    req.addEventListener("readystatechange", function () {
        if (req.status === 200 && req.readyState === 4) {
            //console.log(req.response)
            let test = JSON.parse(req.response)

            //console.log(test.categories[0].name)

            insertDataToHtmlBody(test.categories)
        }
    })
    req.send()
}
let categoriesContainer = document.querySelector(".categoriesContainer")
let categoriesBody = document.querySelector(".categoriesUL")

function insertDataToHtmlBody(
    listOfCategories
) {
    // if there is no element inside categories body add the categories from api
    if(!categoriesBody.contains(document.getElementById("1"))){
        for (let index = 0; index < listOfCategories.length; index++) {
            

                categoriesContainer.style.display = 'flex'
           
            categoriesContainer.style.opacity = 1
                categoriesContainer.style.transform="scale(1)"
                categoriesContainer.style.transition = "ease-in-out opacity .6s ease,ease-in-out .6s ease-in-out"

          
            categoriesBody.innerHTML+=`<li onclick="sendIdToProducts(${listOfCategories[index].id})" id="${listOfCategories[index].id}"><a href="#">${listOfCategories[index].name}</a></li>`
             
         }
    }
    else{
        
        categoriesContainer.style.opacity  = 0
        categoriesContainer.style.transform ="scale(0)"
        categoriesContainer.style.transition = "ease-in-out opacity .6s,ease-in-out transform .6s "
        categoriesBody.innerHTML=''

            categoriesContainer.style.display = 'none'
      
    }

 }






// open and close profile popup contianer
function openProfilePopup(){

    profilePopup.style.opacity="1";
    profilePopup.style.visibility="visible";
    profilePopup.style.transition="opacity .6s ease-in-out"
}
let profilePopup = document.getElementById("cont")
function closeProfilePopup(){
   profilePopup.style.opacity="0";
   profilePopup.style.visibility="none";
    profilePopup.style.transition="opacity .3s ease-in-out"


}


// log out by cleaning the log in session storage
function logOutConfirm(){
    let conf = confirm("Do you want to log-out?")
    if(conf){
        sessionStorage.removeItem("isloggedIn")
    }
}


// send request to get the products from products api to be shown in the body  https://retail.amit-learning.com/api/products
 function sendIdToProducts(val){
     
    let productRequest = new XMLHttpRequest();

    productRequest.open("GET",`https://retail.amit-learning.com/api/products?category_id=category_id=${val}`)


    productRequest.addEventListener('readystatechange',()=>{

        if(productRequest.status ===200 && productRequest.readyState ===4){
            let products = JSON.parse(productRequest.response)
            let listOfProducts = products.products
            for (let index = 0; index < listOfProducts.length; index++) {
                    if(listOfProducts[index].category_id ===val ){
                        // place the code here

                    }
                
            }
        }
    })
    productRequest.send()
 }


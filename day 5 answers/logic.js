let nameinput = document.getElementById('name');
let email = document.getElementById('email');


/*
    Make your own .js library to create, display and delete cookies, then use it in creating the required cookies to display a greeting message to your visitor with displaying an image as his profile pic referring to his gender, and inform him with his number of visits to the site. Display user name and number of visits with font color according to his choices. Replace the registration pagewith the profile page using location object
            the library should have the following functions:
            • getCookie(cookieName):
            o Retrieves a cookie value based on a cookie name.
            • setCookie(cookieName,cookieValue[,expiryDate]):
            o Sets a cookie based on a cookie name, cookie value,and expiration date.
            • deleteCookie(cookieName):
            o Deletes a cookie based on a cookie name.
            • allCookieList():
            o returns a list of all stored cookies
            • hasCookie(cookieName):
            o Check whether a cookie exists or not
            Note:
            Don’t use <form> tag

*/

function submitBtn(){
    let gender = document.querySelector('input[type=radio]:checked').value;

   let name = Cookies.saveCookie('name',nameinput.value,'20-2-2023')
    let emailCookie =  Cookies.saveCookie('email',email.value,'20-2-2023')
    let genderCookie = Cookies.saveCookie('gender',gender,'20-2-2023');
    if (name && emailCookie && genderCookie == true) {
        alert("saved to cookies")
      
        location.assign('cookieResult.html')
        Cookies.saveCookie("inc",refresh,'20-2-2023')

    }
    else{
        alert('there is error')
     
    }
    
}


function loadingCookie(){

    let result = Cookies.allCookieList();
     document.write(`
    <img src="./${result.gender}" alt=" the image from cookie">
        <h1> Welcome <span style="color:red;"> ${result.name} </span> Email is  <span style="color:red;"> ${result.email} </span> </h1>
        
    `)
}

function refreshUrl(){
    window.location.reload()
}




/////////////////////////////////////local storage


/*
1-use local storage to save user name and password, when user press login button, and retrieve them on page load and write them to the textboxes
    2-In the previous Assignment, add “remember me” check box, and save user name and password only if the user checked this checkbox, and if the user didn’t check it, remove the saved user name and password from local storage if they saved before.
*/












let subFormWithLocalStorage = document.forms["subWithLocal"];

function savingToLocal(){
    

    let nameInputs = subFormWithLocalStorage["name1"].value;
    let passwordInputs = subFormWithLocalStorage["pass1"].value;
    let isLogged = subFormWithLocalStorage["checkbox"].checked;

    localStorage.setItem("name",nameInputs);
    localStorage.setItem("password",passwordInputs);
    if(isLogged){
        localStorage.setItem("isLoggedIn",isLogged);
        
  
    }
    else{
       localStorage.removeItem("name")
       localStorage.removeItem("password")
        alert('remember me not activated')
    }
    console.log(isLogged)
    console.log(localStorage.getItem("isLoggedIn"))


}

function printData(){
let res = localStorage.getItem("name")

 let titles =   document.createElement("h1")
 document.body.appendChild(titles)
    titles.appendChild(document.createTextNode("welcome  "+ res))
    alert('remember me  activated!')
}





/*
    find out the rockbands.json file to make a page with 2 dropdown lists, the 1st one is filled with the band and the 2nd one is filled with the artist after selecting a band from its dropdown list. Once the userselects an artist of the band; open his link
*/

///////////////////ajax and json

let artistOption = document.getElementById("a1");

let bandOption = document.getElementById("b1");

function getJsonData() {

    let jsonData = new XMLHttpRequest()

    jsonData.open("GET", "rockbands.json", true);

    jsonData.send()
    var data;
    var keys;
    let bands;
    jsonData.addEventListener("readystatechange", function () {
        
        if (jsonData.readyState==4 && jsonData.status == 200) {

               data  =  JSON.parse(jsonData.response);
              keys  = Object.keys(data)
               
            for (let index = 0; index < keys.length; index++) {
               
                let x = document.createElement("option")
                x.innerText = keys[index]

                bandOption.appendChild(x)

            }

            bandOption.addEventListener('change',function(){
                bands = data[bandOption.value]
                for (let index = 0; index < bands.length; index++) {
                    let y = document.createElement("option")
                    y.innerText = bands[index].name
                   
                    console.log(bands[index].name)
                    artistOption.appendChild(y)

                    
                }

            })

             //to open the links
             artistOption.addEventListener('change',function(){
   
                    location.href =`${bands[artistOption.selectedIndex].value}`
           
                
             })

        }

    })

    



}



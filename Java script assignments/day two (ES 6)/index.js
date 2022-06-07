// Promises
// a. Make your own interface to create tabs and display usernames by requesting users from the link below using Ajax ES6 fetch function: https://jsonplaceholder.typicode.com/users
// Note: handle the response with promises using then and catch methods.
// b. When a user tab is clicked display its posts’ titles by requesting the posts from the link below using Ajax ES6 fetch function:
// https://jsonplaceholder.typicode.com/posts?userId=userId Note:
// - handle the response with promises using Async and await.
// - do not get the posts of all users on page load, the user tab must be clicked to request its posts.

//get user names 

function navigationData(){
    return  new Promise(
        (resolve,reject)=>{
            let userNameList = userNameResponse();
            if(userNameList.length !=0){
                resolve(userNameList)
            }
            else{
                reject("error in users data")
            }
        }
     )
     
     // user name request
     async function userNameResponse(){
         try{
             let reponseVal = await fetch('https://jsonplaceholder.typicode.com/users')
            
             let jasonVal = reponseVal.json()
             return jasonVal;

         }catch(err){
             throw err
         }
     
     }
     
}

 


{/* <li id="nav-items"><div class=" contianer nav-item  m-2"> <a class="nav-link active" href="#"></a></div> </li>
<li id="nav-items"><div class=" contianer nav-item m-2"> <a class="nav-link" href="#"></a></div> </li>
<li id="nav-items"><div class=" contianer nav-item m-2"> <a class="nav-link" href="#"></a></div> </li>
<li id="nav-items"><div class=" contianer nav-item m-2"> <a class="nav-link" href="#"></a></div> </li>
<li id="nav-items"><div class=" contianer nav-item m-2"> <a class="nav-link" href="#"></a></div> </li> */}

let navBody = document.querySelector("#nav-list")

navigationData().then(
    function(resolve){
        
      for(let index = 0; index < resolve.length; index++){
                // creating the nav items

                //create list
              let test =  document.createElement("li")
                test.classList.add("contianer","nav-item","m-2")

                //create link
                let link = document.createElement('a')
                link.classList.add('nav-link')
                link.setAttribute("onclick",content(resolve[index].id))

                link.textContent =resolve[index].name
                test.appendChild(link)
                navBody.appendChild(test)
               // navBody.innerHTML += `<li id="nav-items"><div class=" contianer nav-item  m-2"> <a onclick="content(${resolve[index].id})"   class="nav-link " href="#">${resolve[index].name}</a></div> </li>`
               
               
                
            }
        
    },

    function(reject){console.log(reject)}
)

let contentBody = document.querySelector("#content-body");
function content(value){

    postsFromApi().then(
        function (resolve){
            
            console.log(resolve[value].userId)
            for(let x =0; x < resolve.length;x++){
                
            }
        }
    )


   
}

// posts from api 

function postsFromApi(){
    return new Promise(
           
        (resolve,reject)=>{
            let posts = apiHandeler();
            if(posts.length != 0){
                resolve(posts)
            }
            else{
                reject("There is error in posts api")
            }
        }
    )

  async  function apiHandeler(){
      try{
        let request = await fetch("https://jsonplaceholder.typicode.com/posts?")

        let postsArray = await request.json();

        return postsArray;
      }catch(err){
          console.error(err)
      }
        
    }
}




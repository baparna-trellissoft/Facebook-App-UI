 const form = document.getElementById("form");
 const home = document.getElementById("facebookHome");
 home.style.display = "none";
 const user = document.getElementById("welcomeUser");
var database = [
    {
        email:"john.p@gmail.com",
        password:"johnp@123"
    },
    {
        email:"apss.b@gmail.com",
        password:"ab@123"
    },
    {
        email:"liya.a@gmail.com",
        password:"liya@123"
    },
    {
        email:"harry.p@gmail.com",
        password:"harry@123"
    }
]

var newsFeed = [
    {
        username:"John P",
        timeline:"Hi there! Good morning. Enjoying my Coffee:))"
    },
    {
        username:"Apss B",
        timeline:"Hurray....Finally it's a weekend!"
    },
    {
        username:"Liya A",
        timeline:"Too tired to go on a date :("
    },
    {
        username:"Harry P",
        timeline:"Too tired to go on a date :("
    }
]

function validateUserCredentials(){
    const email = document.getElementById("email").value;
    const email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    const pass = document.getElementById('password').value;
    const error = document.getElementById('error');
    if(email == "" && pass == ""){
        error.style.display = "block";
        error.innerHTML = "Email and password can not be blank";
    }
    else if(!email_regex.test(email)){
        error.style.display = "block";
        error.innerHTML = "Please enter valid email id";
    }
    else{
        function ifUserExist(email,pass){
                for(i=0; i < database.length; i++){
                   if(database[i].email === email && database[i].password === pass){
                       return true;
                   }
                }
                return false;
               }

               function matchCredentials(username, password){
                       if(ifUserExist(username,password)){
                         console.log("Welcome " + username);
                         form.style.display = "none";
                         home.style.display = "block";
                         user.innerHTML = "Welcome " + username;
                         //console.log(newsFeed);
                         var newsList = document.getElementById("listGroupMain");
                            for(i=0; i<newsFeed.length; i++){
                                newsList.innerHTML += '<div class="col-xl-12 mb-3"><div class="list-group"><a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true"><img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0"><div class="d-flex gap-2 w-100 justify-content-between"><div><h6 class="mb-0">'+ newsFeed[i].username +'</h6><p class="mb-0 opacity-75">'+ newsFeed[i].timeline +'</p></div><small class="opacity-50 text-nowrap">now</small></div></a></div></div>';
                                console.log(newsFeed[i].username);
                                
                            }
                       }
                       else{
                        error.style.display = "block";
                        error.innerHTML = "Wrong username or password";
                       }
                   }
                
                   matchCredentials(email, pass);
    }
 
}

if (form) {
    form.addEventListener("submit",function(e){
        e.preventDefault();
        validateUserCredentials();
    });
  }


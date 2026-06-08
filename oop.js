const user = {
    username :"anjan",
    loginCount:8,
    signedIn:true,
    getUserDetails:function(){
        console.log("got user details from database");
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    return this
}

const userOne = new User("anjan",12,true)
const usertwo = new User("chai",12,true)
console.log(userOne);


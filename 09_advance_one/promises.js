const promiseOne = new Promise(function(resolve,reject){
    // do an async task
    // db calls , cryptigraphy , network
    setTimeout(function(){
        console.log('async task is complete');
        resolve()

    },1000)
})

promiseOne.then(function(){
    console.log('promised consumed');
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
        
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'Chai',email :'chai@example'})
    },1000)
})

promiseThree.then(function(user){
console.log(user);

})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =false;
        if(!error){
            resolve({username:"anjan",password:"123"})
        }else{
            reject('ERROR: something went wrong')
        }
    },1000)
}) 

promiseFour.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=> console.log('the promise is either resolved or rejected')
)

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
    },1000)
})

async function consumePromiseFive(){
    try{
        const response=await promiseFive
        console.log(response);
        
    }catch(error){
        console.log(error);
        
    }
}

consumePromiseFive()

async function getAlUsers(){
    try{
        const resoponse = await fetch('')
    const data = await resoponse.json()
    console.log(data);
    } catch(error){
        console.log(error);
        
    }
    
}

getAlUsers()
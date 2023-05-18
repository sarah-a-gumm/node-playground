//USING PROMISES INSTEAD OF CALLBACK FUNCTIONS FOR ASYNC FUNCTIONS

//EXAMPLE OF A CALLBACK FUNCTION
function dostuff_callback(data, callback){
    callback("done");
}
dostuff_callback(true, (result)=> console.log(result));

//predfined construct that takes a function as an argument, which takes 2 arguments (resolve and reject)
//you can only pass a Promise 1 argument of any type. So, it's best to use an object as the arg, since it can pass multiple attributes with a single argument
function doStuff_promise(data){
    return new Promise((resolve, reject)=>{
        if(typeof data === 'boolean' && data === true){
            resolve();
        }else{
            reject();
        }
    });
}

//example of a promise using an object as the argument
function doStuff(data){
    return new Promise((resolve, reject)=>{
        //success message object
        let successMessage = {
            status: 'success',
            message: 'All is well!'
        };
        //error message object
        let errorMessage = {
            status: 'err',
            message: 'oops, there was an error!'
        };

        if(typeof data === 'boolean' && data === true){
            resolve(successMessage);
        }else{
            reject(errorMessage);
        }

    });
}

doStuff(false).then(
    //first argument passed to 'then' function is if everything goes well
    (successMessage)=>{
        console.log(successMessage);
    }, //add a second argument to the 'then' function to handle when there is an error (when 'false' is passed to doStuff)
    (errorMessage)=>{
        console.log(errorMessage);
    }
);

//CHAINING PROMISES INSTEAD OF EMBEDDING CALLBACKS:
doStuff(true).then(
    ()=>{ //doStuff was succesful
        let a = false;
        console.log("First doStuff resolved");
        return doStuff(a); //sends the second 'then' function the doStuff function to run
    }
).then(
    ()=>{ //after first 'then' function completes, run a second function which runs doStuff passed from first 'then' function
        console.log("Second doStuff resolved");
    }
).catch( //if any of the previous promises fail or get rejected, the 'catch' will be run
    ()=>{
        console.log("An error occured");
    }
)
function doStuff(data){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            if(typeof data == 'number'){
                resolve(data * data);
            }else{
                reject("An error occured");
            }
        }, 1000)//set timeout to 1 second via passing 1000 as argument to setTimeout function
    })
}

async function chainStuff(data){ //'async' makes this function asynchronous -- aysnc functions ALWAYS return a promise
    /*doStuff(2).then((a)=>{

    });*/
   let a = await doStuff(2); // quicker to type 'await' to wait for doStuff to return a value vs above code
   console.log(a);
   let b = await (doStuff(a));
   console.log(b);
   let c = await (doStuff(b));
   console.log(c);
   return c;
}

//console.log(chainStuff()); <-- will output undefined promise

chainStuff().then(result =>{
    console.log(result);
}).catch(error=>{
    console.log(error);
})
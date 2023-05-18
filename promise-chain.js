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

doStuff(2).then(a=>{
    console.log(a); // will output 4 after waiting a second
    return doStuff(a);
}).then(b=>{
    console.log(b);
    return doStuff(b);
}).then(c=>{
    console.log(c);
}).catch(error=>{
    console.log('err');
})
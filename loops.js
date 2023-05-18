var i = 0;
var limit = 5;

//while loops check the condition before running logic
 while (i<limit){ 
    console.log(i); 
    i = i+1; //<-- without this increment, i would always be less than 5 and you'd have an endless loop.- press ctrl+c to get out of endless loop in terminal
    //i++; <-- another way of incrementing
} 

//do while loops check the condition AFTER the code runs, so it will always run at least once if the condition is is not met
do{
    console.log(i);
    i++;
}while(i<limit);

//FOR LOOPS
for (i=0; i<limit; i++){
    console.log(i);
}

//most common loop is the FOR EACH loop used with arrays
var arr1 = [10,20,30];
arr1.forEach(function(item){
console.log(item);
})

//for loop
var arr2 = [10,20,30];
for (var i of arr2){
    console.log(i);
}


//the below function only works if you know the amount of numbers you want to add - but what if you don't know how many numbers you'l need to add? Use an array as the arg. OR use a REST parameter
function add_known(a,b){
    return a+b;
}
console.log(add_known(2, 3));

//Use a REST parameter to send an unknown quantity of numbers to add
function add(...a){
    let sum = 0;
    a.forEach(num => sum += num);//for each number in the REST parameter, add it to the total sum of numbers
    return sum;
}
console.log(add(2, 3, 4));

//you can add multiple paramaters togethr like this
function add(a, ...b){
    console.log(a);
    console.log(b);
    let sum = a;
    b.forEach(num => sum += num);//for each number in the REST parameter, add it to the total sum of numbers
    return sum;
}
console.log(add(2, 3, 4));
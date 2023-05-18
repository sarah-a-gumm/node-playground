let student = {
    firstname: 'Sarah',
    lastname: 'Gumm',
    age: 37,
    hobbies: ['hiking', 'painting', 'programming'],
    email: 'test@gmail.com',
    website: 'linkedin.org'
}

//one way to set variables would be like this:
//let firstName = student.firstname;
//let lastname = student.lastname;

//easier to use destructuring:
let {firstname:fName, lastname, nickName:NN='Not provided', ...details} = student;

console.log(fName);
console.log(lastname);
console.log(NN);
console.log(details);
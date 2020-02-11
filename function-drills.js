function greeting (){
 
    console.log ('Hi my name is Dasha, and I am 35 years old');
    }
    greeting ();

function createGreeting (){
    return = 'heelo my name is Dasha'
};
const greeting1=createGreeting();
console.log(greeting1);

function createGreeting(name, age){
    return(`${name} + ${age}`)
};

function createGreeting(name, age){
    const yearOfBirth=(2019 - age);
    return(yearOfBirth)
};

function getYourOfBirth (age) {
    return (2019 - age)
};
function createGreeting (name, age){
    return(`${name} + ${age}`)
};

function yearOfBirth(age) {
    if(age <= 0);
    throw new Error("Age cannot be negative");
    return (age);

}
try  {
    const greeting1=createGreeting(name, age);
    return(`${name}, ${age}`);
catch (e) {
   return("Age cannot be negative")
  };
  finally {
    return('This happens in both success and failure case!');
  };
//Name
const NAME: string = "WeaverSong";

//Number of states in the us
const NUM_STATES_IN_US: number = 50; //TODO: update this const if number changes

//5 + 4. Why are we storing this?
const FIVE_PLUS_FOUR: number = 5 + 4;

//Says hello world
function sayHello ()
{
    alert("Hello World!");
};
sayHello();

//checks age. Given const history, why is 21 not a const?
function checkAge (name: string, age: number)
{
    if (age < 21)
    {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
};

//Runs the function several times, to check some people's ages
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

//list of favorite veggies
const FAVORITE_VEGGIES: string[] = ["Potato", "Cucumber", "Lettuce", "Carrot", "Broccoli"];

//loop over them and display them to the console
for (var i = 0; i < FAVORITE_VEGGIES.length; i++)
{
    console.log(FAVORITE_VEGGIES[i]);
};

//Pet
const PET: {name: string, breed: string} = {
    name: "Alimora",
    breed: "Weaverling"
};

//display pet in the log
console.log(PET);

//A list of 5 people. Why didn't we make this for Charles and his gang?
const PEOPLE: {name: string, age: number}[] = [
    {name: "Jack", age: 15},
    {name: "Naira", age: 237},
    {name: "David", age: 20},
    {name: "Sheiran", age: 146},
    {name: "Alineer", age: 183}
];

//Loop over them to check their ages. Again - why didn't we do this for Charle's guys?
for (var i = 0; i < PEOPLE.length; i++)
{
    let person = PEOPLE[i];
    checkAge(person.name, person.age);
}

//gets the length of the string
//Just because of that one question and answer, I'm going to do this without the .length property
const getLength = function (string: string)
{
    let testString = "";
    let a = 0;
    while (testString !== string)
    {
        testString += string[a];
        a++;
    }

    return (a);
}

const HELLO_WORLD_LENGTH: number = getLength("Hello World");

console.log (HELLO_WORLD_LENGTH % 2 == 0 ? "The world is nice and even!" : "The world is an odd place!");
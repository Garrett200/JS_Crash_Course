//let count = 1

//while (count <= 100) {
//    console.log(count)
//    count = count + 1;
//    count++;
//}

//for (let i = 0; i <= 10; i++) {
//    console.log(i)
//}

//for (let i = 1; i <= 20; ++i) {
//    if (i % 3 === 0 && i % 5 === 0) {
//        console.log("Frontend Simplified");
//    }
//    else if (i % 3 === 0) {
//        console.log("Frontend");
//    }
//    else if (i % 5 === 0) {
//        console.log("Simplified");
//    }
//    else {
//        console.log(i);
//    }
//}

//const str = "frontend"
//for (let i = 0; i < str.length; ++i) {
//    console.log(str[i])
//}

//FUNCTION DEFINITION

//function welcomePersonToFES(firstName, lastName) {
//	console.log(`Welcome to FES, ${firstName} ${lastName}`);
//}

//CALL THE FUNCTION

//welcomePersonToFES('Garrett', 'Hummel');


//const convertCelsiusToFahrenheit = (celsius) => {
//    return celsius * 1.8 + 32;
//}
//
//console.log(convertCelsiusToFahrenheit(0));

//let arr = [20, 30, 40, 50, 100];

//First Element of array
//console.log(arr[0]);

//Last element of array
//console.log(arr[arr.length - 1]);

//Adds 200 to array
//arr.push(200);

//element loops for each value
//let newArr = arr.filter((element) => {
//    return element < 50
//});

//Condensed code
// let newArr = arr.filter(element => element < 50)

//console.log(newArr);


//let grades = ['A+', 'A', 'FAIL']
//let goodGrades = grades.filter(element => element !== 'FAIL')
//console.log(goodGrades);


//let grades = ['A+', 'A', 'FAIL']
//let goodGrades = []

//for (let i = 0; i < grades.length; i++) {
//    if (grades[i] !== 'FAIL') {
//        goodGrades.push(grades[i]);
//    }
//
//}

//console.log(goodGrades);


//let arr = [1, 4, 9, 16]

//let newArray = arr.map((element) => {
//    console.log(element)
//    return undefined;
//})

//console.log(newArray);

////////BRUTE FORCE METHOD
//let dollars = [1, 5, 10, 3];
//let cents = [];

//let change = dollars.map(element => element * 100)

//console.log(change);

//for (let i = 0; i < dollars.length; ++i) {
//    cents.push(dollars[i] * 100);
//
//}
//console.log(cents);

let users = []


function register(user) {
    users.push(user);
}

register({
    username: 'Garrett', 
    email: 'garrettjrh@live.com', 
    password: 'password123', 
    subscriptionStatus: 'VIP', 
    discordId: 'Garebear#0001', 
    lessonsCompleted: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
});

console.log(users)


//first way of accessing an element
console.log(document.querySelector('.title'));

//second way of accessing an element
console.log(document.getElementById('title'));

//Change HTML
document.querySelector('title').innerHTML = 'JS Crash Course'

//Change CSS
document.querySelector('h1').style.fontSize = '100px'


function toggleDarkMode() {
    document.querySelector('body').classList.toggle("dark-theme")
}
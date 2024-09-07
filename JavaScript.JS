// ASSIGNMENT NO 4

// Question No 1

// var input = prompt("Enter A Character:");
// var ascii = input.charCodeAt(0);

// console.log("Input Character: " + input);
// console.log("ASCII Code: " + ascii);

// if (ascii >= 65 && ascii <= 90) {
//   console.log(input + " Is An Uppercase Letter");
// } 

// else if (ascii >= 97 && ascii <= 122) {
//   console.log(input + " Is A Lowercase Letter");
// }

// else {
//   console.log(input + " Is Neither A Letter Nor A Number");
// }

// Question No 2
// var num1 = +prompt("Enter The First Integer:");
// var num2 = +prompt("Enter The Second Integer:");

// if (num1 > num2) {
//   console.log(num1 + " Is Larger.");
// } else if (num2 > num1) {
//   console.log(num2 + " Is Larger.");
// } else {
//   console.log("Both Numbers Are Equal.");
// }

// Question No 3
// var number = +prompt("Enter A Nnumber:");

// if (number > 0) {
//   console.log("The Number Is Positive.");
// } else if (number < 0) {
//   console.log("The Number Is Negative.");
// } else {
//   console.log("The Number Is zero.");
// }


// Question No 4
// var char = prompt("Enter A Character:")

// if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//   console.log("True");  
// } else {
//   console.log("False"); 
// }

// Question No 5
// // (a)
// var correctPassword = "AH3421";

// //(b) 
// var userPassword = prompt("Enter Your Password:");

// // (c)
// if (!userPassword) {
//   console.log("Please Enter Your Password");
// }
//  else if (userPassword === correctPassword) {
//   console.log("Correct!");
// }
//  else {
//   console.log("Incorrect Password.");
// }

// Question No 6

// var greeting;
// var hour = 13;

// if (hour < 18) {
// greeting = "Good Day";
// }
// else{
// greeting = "Good Evening";
// }
// document.write (greeting);

// *******************************************************

// var hour = +prompt("Enter The Hour (0-23):");
// var greeting;

//   if (hour < 18) {
//     greeting = "Good Day";
//   } else {
//     greeting = "Good Evening";
//   }
//   console.log(greeting);


// Question No 7

// var time = +prompt("Enter The Time ");
// var hours = Math.floor(time / 100);
// var minutes = time % 100;

// if (minutes >= 60) {
//   hours = hours + Math.floor(minutes / 60); 
//   minutes = minutes % 60; 
// }
// var period;

// if (hours >= 12) {
//   period = "PM";
//   if (hours > 12) {
//     hours = hours - 12;  
//   }
// } else {
//   period = "AM";
//   if (hours === 0) {
//     hours = 12;  
//   }
// }


// var formattedTime;

// if (minutes < 10) {
//   formattedTime = hours + ":0" + minutes + " " + period;  
// } else {
//   formattedTime = hours + ":" + minutes + " " + period;
// }

// var greeting;

// if (time >= 0 && time < 1200) {
//   greeting = "Good Morning!";
// } else if (time >= 1200 && time < 1700) {
//   greeting = "Good Afternoon!";
// } else if (time >= 1700 && time < 2100) {
//   greeting = "Good Evening!";
// } else if (time >= 2100 && time <= 2359) {
//   greeting = "Good Night!";
// } else {
//   greeting = "Invalid Time Entered!";
// }

// console.log("Time Entered: " + formattedTime + " - " + greeting);

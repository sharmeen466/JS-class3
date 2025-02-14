///   Q   #   1


// let userCity = "karachi"

// let user = prompt("Enter your city name", "karachi")

// if (user === userCity){
// document.write("welcome to the city of light")
// }

// else {
//     document.write("welcome to our city")
// }



//    Q    #    2



// let usergender = prompt("what's your gender?")

// if(usergender === "male"){
// console.log("Good Morning Sir!");

// }
// else {
//     console.log("Good Morning Ma'am");

// }


//    Q    #    3



// let trafficSignal = prompt("what signal-color do you see?", "Red / Yellow / Green")

// if (trafficSignal === "Red") {
//     console.log("Must Stop !");

// }

// else {
//     if (trafficSignal === "Yellow")
//         console.log("Ready to move");
//     else {
//         if (trafficSignal === "Green")
//             console.log("Move now");
//         else {
//             console.log("Invalid color! Please enter Red, Yellow, or Green.");

//         }
//     }
// }


//    Q    #    4


// let userFuel = prompt("what's the remaining fuel in your car?")
// if (userFuel <= "0.25litres"){
// alert("“Please refill the fuel in your car”")
// }
// else {
//     alert("You are ready to go..")
// }


//    Q    #    5

// a:
// let a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// document.write("a = 4 <br> simplify: (++ a = = = 5) <br> ++a is a + 1 <br> ++a is (4 + 1 = 5) <br> Hence, 5 = = = 5 <br> so, the condition is <strong> TRUE </strong>")

// b:
// let b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// document.write("b = 82 <br> simplify: (b ++ = = = 82) <br> b ++ is b + 1 <br> b ++ is post increment (will show next console is 82 + 1 = 83) <br> Hence, 82 is not equal to 83 <br> so, the condition is <strong> FALSE </strong>")

// c:
// let c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// document.write("<h1> Condition 1 </h1> <br> c = 12 <br> simplify: (c ++ = = = 13) <br> c ++ is c + 1 <br> c ++ is post increment (will show next console is 12 + 1 = 13) <br> Hence, 12 is not equal to 13 <br> so, the condition is <strong> FALSE </strong>")

// d:
// if (c === 13) {
//     alert("condition 2 is true");
// }
// document.write("<h1> Condition 2 </h1> <br> find: (c = = = 13) <br> increment was done by condition 1 <br>so, c = 13 <br> and 13 is equals to 13 <br> Hence, the condition is <strong> True </strong>")

// e:
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// document.write("<h1> Condition 3 </h1> <br> find: (++ c < 14) <br> in condition 2, c is 13 but after again increment this will be 14 <br> but 14 is not larger than 14 <br> so, the condition (14 < 14) is <strong> FALSE </strong>")

// f:
// if (c === 14) {
//     alert("condition 4 is true");
// }
// document.write("<h1> Condition 4 </h1> <br> find: (c = = = 14) <br> in condition 3, c is 14 <br> so, 14 is equals to 14 <br> Hence,  the condition is <strong> True </strong>")


//    Q    #    6


// let criteria1 = 80
// let criteria2 = 70
// let criteria3 = 60
// let sub1Marks = +prompt("write your marks obtained in sub 1")
// let sub2Marks = +prompt("write your marks obtained in sub 2")
// let sub3Marks = +prompt("write your marks obtained in sub 3")
// let obtainedMarks = sub1Marks + sub2Marks + sub3Marks
// let totalMarks = 300
// let percentage = (obtainedMarks / totalMarks) * 100;
// let grade;
// let remarks;
// console.log(percentage);

// grade = "A-One"
// remarks = "Excellent"
// if(percentage >= criteria1){
// document.write ("<h1> Marks Sheet </h1> <br> Total Marks: ", totalMarks, "<br> Marks Obtained: ", obtainedMarks, "<br> Percentage: ", percentage, "<br> Grade: ", grade, "<br> Remarks:", remarks)
// }

// else if (percentage >= criteria2){
//     document.write ("<h1> Marks Sheet </h1> <br> Total Marks: ", totalMarks, "<br> Marks Obtained: ", obtainedMarks, "<br> Percentage: ", percentage, "<br> Grade: A <br> Remarks: Good")
//     }

// else if (percentage >= criteria3){
//     document.write ("<h1> Marks Sheet </h1> <br> Total Marks: ", totalMarks, "<br> Marks Obtained: ", obtainedMarks, "<br> Percentage: ", percentage, "<br> Grade: B  <br> Remarks: You need to improve")
//     }

// else {
//     document.write ("<h1> Marks Sheet </h1> <br> Total Marks: ", totalMarks, "<br> Marks Obtained: ", obtainedMarks, "<br> Percentage: ", percentage, "<br> Grade: Fail <br> Remarks: Sorry")
//     }


//    Q    #    7

// let number = 10
// let user = +prompt("Guess the number")

// if (user == number){
//     document.write("“Bingo! Correct answer”.")
// }
// else {
//     document.write("“Close enough to the correct answer”.")
// }


//    Q    #    8


// let number = +prompt("Enter a number:");


// if (number % 3 === 0) {
//     alert(number + " is divisible by 3.");
// } else {
//     alert(number + " is not divisible by 3.");
// }


//    Q    #    9


// let userNumber = +prompt("Giva a number")
// if(userNumber % 2 === 0){
//     alert(userNumber + " is an Even number")
// }
// else{
//     alert(userNumber + " is an Odd number")
// }


//    Q    #    10


// let tempreture1 = 40
// let tempreture2 = 30
// let tempreture3 = 20
// let tempreture4 = 10

// let userTempreure = +prompt("Write a tempreture")

// if(userTempreure >= tempreture1){
//     alert("“It is too hot outside.”")
// }

// else if (userTempreure >= tempreture2){
//     alert("“The Weather is Normal today.”")
// }
// else if (userTempreure >= tempreture3){
//     alert("“Today’s Weather is cool.”")
// }
// else if (userTempreure >= tempreture4){
//     alert("“OMG! Today’s weather is so Cool.”")
// }


//    Q    #    11


// let number1 = +prompt("Enter a number" )
// let number2 = +prompt("Enter another number" )
// let operation = prompt("Enter the opertion (+, -, *, /, %)")

// if(operation === "+"){
//     alert(number1 + number2)
// }

// else if(operation === "-"){
//     alert(number1 - number2)
// }

// else if(operation === "*"){
//     alert(number1 * number2)
// }

// else if(operation === "/"){
//     alert(number1 / number2)
// }

// else if(operation === "%"){
//     alert(number1 % number2)
// }


//....................................chap # 9 - 11 completed...........................................

//....................................chap # 12 - 13 start...........................................


//    Q    #    1


// let character = prompt("Please enter your character to check whether the given input is a number, uppercase letter or lower case letter")
// let value = character.charCodeAt(0)

// // checking numbers
// if (value >= 48 && value <= 57){
//     alert(character + " is a number")
// }

// //checking uppercase letter
// else if (value >= 65 && value <= 90){
//     alert(character + " is Uppercase Letter")
// }

// //checking lowercase letter
// else if (value >= 97 && value <= 122){
//     alert(character + " is Lowercase Letter")
// }



//    Q    #    2


// let number1 = +prompt("Enter 1st integer")
// let number2 = +prompt("Enter 2nd integer")

// if(number1 < number2){
//     alert(number2 + " is larger")
// }
// else if (number1 > number2){
//     alert(number1 +" is larger")
// }
// else {
//     alert(number1 + " and "+ number2 + " both are Equal !")
// }


//    Q    #    3


// let number = +prompt("Enter a number. positive/Negative")

// if (number > 0){
//     alert("Your number is Positive")
// }
// else if (number < 0){
//     alert("Your number is Negative")
// }
// else {
// alert("Your number is 0")
// }
// }


//    Q    #    4


// let character = prompt("Enter a charactor. will tell you, vowel or not")

// if (character === "a" ||character === "A" || character === "e" ||character === "E" ||character === "i" ||character === "I" ||character === "o" ||character === "O" ||character === "u" ||character === "U"){
// alert("True! "+ character +" is vowel")
// }
// else{
//     alert("False! "+ character + "is not vowel")
// }


//    Q    #    5


// let password = "sharmeen"
// let userPassword = prompt("Enter a password")

// if (userPassword == ''){
//     alert("“Please enter your password”")
// }
// else if (userPassword === password){
//     alert("“Correct! The password you entered matches the original password”.")
// }
// else {
//     alert("“Incorrect password”")
// }


//    Q    #    6


// This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// var greeting;
// let userHour = +prompt("Time btao")
// if (userHour < 18) {
// greeting = "Good day";
// alert(greeting)
// }
// else{
// greeting = "Good evening";
// alert(greeting)
// }


//    Q    #    7


// let userTime = +prompt("Please enter the time in  24 hour \n clock format like: 19:00 = 7pm.")

// if(userTime >= 0 && userTime < 1200){
//     alert("Good Morning!")
// }
// else if (userTime >= 1200 && userTime < 1700) {
//     alert("Good Afternoon!")
// }
// else if (userTime >= 1700 && userTime < 2100) {
//     alert("Good Evening!")
// }
// else if (userTime >= 2100 && userTime < 2359) {
//     alert("Good Night!")
// }
//else {
//     alert("Invalid value")
//}


//....................................chap # 12 - 13 completed...........................................

//....................................chap # 14 - 16 start...........................................


//    Q    #    1

// let studentNames = [];


//    Q    #    2

// let studentNames = new Array();


//    Q    #    3

// let names = ["sharmmen", "zainab", "maryam"]


//    Q    #    4


// let number = [5 , 10 , 15 , 20 , 25];


//    Q    #    5

// let boolean = ["true", "false"];


//    Q    #    6

// let mixedArray = ["sharmeen", "23", "true"];


//    Q    #    7

// let education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];

//  document.write("<h1> Qualifications </h1> <br> 1)  "+ education[0]+ "<br> 2)  "+ education[1] + "<br> 3)  "+ education[2] + "<br> 4)  "+ education[3] + "<br> 5)  "+ education[4] + "<br> 6)  "+ education[5] + "<br> 7)  "+ education[6] + "<br> 8)  "+ education[7])


//    Q    #    8

// let studentsNames =["Michael", "John", "Tony"];
// let score = [350 , 320, 280];
// let total = 500;
// let percentage1 = (score[0] / total)*100; 
// let percentage2 = (score[1] / total)*100; 
// let percentage3 = (score[2] / total)*100; 
// document.write("Score of "+studentsNames[0]+ " is "+ score[0]+ ". " + "percentage: " + percentage1 + "% <br>")
// document.write("Score of "+studentsNames[1]+ " is "+ score[1]+ ". " + "percentage: " + percentage2 + "% <br>")
// document.write("Score of "+studentsNames[2]+ " is "+ score[2]+ ". " + "percentage: " + percentage3 + "% <br>")


//    Q    #    9

// let colors = ["Red" , "Blue" , "Black" , "Pink" , "Yellow"];

// a:
// let userColor = prompt("what color you wants to add to the beginning?")
// colors.unshift (userColor)
// document.write ("updated array: " + colors);

// b:
// let userColorEnd = prompt("what color you wants to add to the end?")
// colors.push  (userColorEnd)
// document.write ("updated array: " + colors);

// c;
// let addColor1 = prompt("Add first color in the beginning of Array")
// let addColor2 = prompt("Add second color in the beginning of Array")
// colors.unshift  (addColor1 , addColor2)
// document.write ("updated array: " + colors);
 
// d;
// colors.shift()  
// document.write ("updated array: " + colors);
 
// e;
// colors.pop()  
// document.write ("updated array: " + colors);

// f;
// let index = +prompt("write index number where you want to add your color")
// let userColor = prompt("And what's the color?")
// colors.splice(index,0, userColor)
// document.write("Updated Array: " + colors)

// g;
// let index = +prompt("which index you wants to delete color(s)?")
// let count = +prompt("How many colors do yo want to delete?")
// colors.splice(index, 0, count)
// document.write("Updated Array :" + colors)


//    Q    #    10

// let studentsScore = [320, 230, 480, 120, ]
// let sortedScore = studentsScore.sort()
// document.write(sortedScore)


//    Q    #    11

// let city = ["Karachi", "Islamabad", "Lahore", "Quetta", "Peshawar"]
// let selectedCities = city.slice(1 , 4)
// document.write("<h3> Cities List: </h3> <br>"+ city + "<br> <br> <br> <h3> Selected Cities List: </h3> <br>"+  selectedCities)


//    Q    #    12

// let array = ["This ", "is ", "my ", "cat "];
// let string = array.join ("")
// document.write ("<h3> Array: </h3>" + array + "<br> <h3> Sting: </h3>" + string)


//    Q    #    13

// let devices = ["Keyboard", "Mouse", "printer", "monitor"]
// let out;
// document.write("<h3> Devices: </h3> <br>" + devices + "<br> <br>")

// out = devices.shift()
// document.write("Out: <br>" + out + "<br>")
// out = devices.shift()
// document.write("Out: <br>" + out + "<br>")
// out = devices.shift()
// document.write("Out: <br>" + out + "<br>")
// out = devices.shift()
// document.write("Out: <br>" + out + "<br>")


//    Q    #    14

// let devices = ["Keyboard", "Mouse", "printer", "monitor"]
// let out;
// document.write("<h3> Devices: </h3> <br>" + devices + "<br> <br>")

// out = devices.pop()
// document.write("Out: <br>" + out + "<br>")
// out = devices.pop()
// document.write("Out: <br>" + out + "<br>")
// out = devices.pop()
// document.write("Out: <br>" + out + "<br>")
// out = devices.pop()
// document.write("Out: <br>" + out + "<br>")


//    Q    #    15

// let phones = ["Apple","Samsung", "Motorola"," Nokia"," Sony"," Haier"]

// document.write("<select>")
// document.write("<option>" + phones[0] + "</option <br>")
// document.write("<option>" + phones[1] + "</option <br>")
// document.write("<option>" + phones[2] + "</option <br>")
// document.write("<option>" + phones[3] + "</option <br>")
// document.write("<option>" + phones[4] + "</option <br>")
// document.write("<option>" + phones[5] + "</option <br>")
// document.write("</select>")

//....................................chap # 14 - 16 completed...........................................
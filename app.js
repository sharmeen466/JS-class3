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


// if (c === 13) {
//     alert("condition 2 is true");
// }
// document.write("<h1> Condition 2 </h1> <br> find: (c = = = 13) <br> increment was done by condition 1 <br>so, c = 13 <br> and 13 is equals to 13 <br> Hence, the condition is <strong> True </strong>")


// if (++c < 14) {
//     alert("condition 3 is true");
// }
// document.write("<h1> Condition 3 </h1> <br> find: (++ c < 14) <br> in condition 2, c is 13 but after again increment this will be 14 <br> but 14 is not larger than 14 <br> so, the condition (14 < 14) is <strong> FALSE </strong>")


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
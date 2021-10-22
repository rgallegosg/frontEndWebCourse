// alert ("Hello world!");
// console.log("Hola mundo");

// var bankAccountForMe = "si soy";
// bankAccountForMe = 5;
// var y = 5;

// var z = bankAccountForMe + y
// var prueba = "90";
// document.getElementById("test").innerHTML="Hello" + z;
// document.getElementById("test").innerHTML= prueba;
// document.getElementById("test").innerHTML= typeof(z);

// var fruit = 100;
// var Fruit = 29;
// var companyName = "Apple";

// fruit = 50;

// fruit += 2;
// fruit++;

/****************************************************************/

// var temp = null;

// var myNumber = 50; //Number

// var myString = "Igneus"; //String

// var harley = ["street750", "fatboy", "streetbob"]; //Array

// var bikeObject = {nameOfBike: "street750", ccOfBike: 750}; //Object

// var isActive = true;

// var isComplete = false;

// var someString = "";

/****************************************************************/

// var greeting = "";

// var highScore = 100;

// var myScore = 200;

// if (myScore < highScore){
//     greeting = "OOPS! you just missed the high score. AHHH!";
// } else if (myScore == highScore){
//     greeting = "You just matched high score"
// }else {
//     greeting = "Hurray! you just got a high score"
// }

// document.getElementById("test").innerHTML = greeting;

/****************************************************************/

// var greeting = "";

// switch (new Date().getDay()) {
//     case 0:
//         greeting = "I don't move on Sunday";
//         break;

//     case 1:
//         greeting = "Monday : Go to work";
//         break;

//     case 2:
//         greeting = "Tuesday : Chill out with family";
//         break;

//     case 3:
//         greeting = "Wednesday : Focus on learning";
//         break;

//     case 4:
//         greeting = "Thursday : Analyze the outcome";
//         break;

//     case 5:
//         greeting = "Friday : Last day of work ";
//         break;

//     case 6:
//         greeting = "Saturday : Party Night";
//         break;
//     default:
//         greeting = "error";
//         break;
// }

// document.getElementById("test").innerHTML = greeting

/****************************************************************/

// var greeting = "";

// var highScore = 2;

// var myScore = "453";

// var harley = ["street750", "FatBoy", "streetbob", "StreetGide", "Iron883"];

// greeting += harley[0] + "<br>";
// greeting += harley[1] + "<br>";
// greeting += harley[2] + "<br>";
// greeting += harley[3] + "<br>";

// var i;

// for (i = 0; i < harley.length; i++){
//     greeting += harley[i] + "<br>";
// }

// for (i in harley){
//     greeting += harley[i] + "<br>";
// }
// var i = 0;
// while (i <= 9 ){
//     greeting += "The new number is: " +i+ "<br>";
//     i++ 
// }
// var i = 12;
// do{
//     greeting += "<br> The new number is  " + i;
// } while (i <= 9)

// document.getElementById("test").innerHTML = greeting;

// function multipicationFunc (num1, num2, num3){
//     return num1*num3*num2;
// }

// document.getElementById("test").innerHTML = multipicationFunc(3, 5, 6);

// var harley = {  firstName:"street", 
//                 secondName: "750",
//                 CC: "850cc", 
//                 weight: "320",
//                 color: "black",
//                 fullName: function(){
//                     return this.firstName + "-" + this.secondName;
//                 }
//             }
// document.getElementById("test").innerHTML = harley.firstName;

// function showDate(){
//     document.getElementById("test").innerHTML = Date();
// }

// function myError(){

//     var msg, x;

//     msg = document.getElementById("msg");
//     msg.innerHTML = "";

//     x = document.getElementById("some").value;
//     try{
//         if(x == "") throw "please choose a number";
//         if(isNaN(x)) throw "Only number are allowed";
//         if(x < 4) throw "Choose a number greater than 3";
//     } catch(err){
//         msg.innerHTML = "Error is " + err;
//     } finally{
//         document.getElementById("some").value = "";
//     }
// }

// var str = "Apple apple APPLE AppLE AppLe aPPLE";
// var txt = str.replace(/([A-Z])\w+/gi,"google");

// document.getElementById("test").innerHTML = txt;

// function increaseHighScore(currentScore){
//     var newHighScore = 2 * currentScore;
//     return newHighScore;
// }

// console.log(increaseHighScore(4) );

// var newHighScore = function (currentScore){

//     return(
//         console.log(this),
//         console.log(arguments)
//     );
// }(2);

// document.getElementById("test").innerHTML = newHighScore(10);

// var harley = {
//     name : "Street750",
//     color: "Black",

//     getBudgetForCustomStuff: function(a){
//         return ("you need to lower budget",
//             console.log(this.name)
//         )
//     },

//     shoutOuts : [
//         {kevin: "A cool balck monster with 750cc"},
//         {sam: "Heavy bike with full power"}
//     ]
// };

// harley.getBudgetForCustomStuff(8000);

// document.getElementById("test").innerHTML = harley.shoutOuts;

// var walk = function(){
//     return("He is able to walk");
// }

// var superHero = function(){
//     var power, villian;
// }

// superHero.prototype.walk = walk;
// peterParker = new superHero;
// peterParker.power = "AirSwing";
// peterParker.villian = "Green Goblin";
// peterParker.walk();

// console.log(peterParker.walk());

// clark = new superHero;
// clark.power = "fly";
// clark.villian = "Lex Luthor";

// console.log(clark.villian);

// var doSomenthing = function(work){
//     console.log(work);
//     console.log(this.banchPress);
// }

// doSomenthing("pushUps")
// var exercise = {banchPress : "4 sets", squats: "2 sets"}
// doSomenthing.call(exercise, exercise.squats);
// doSomenthing.call(exercise, ['chunches']);


// var multiplier = function() {
//     var result = 1;
//     for(var i = arguments.length -1; i>= 0; i--){
//         result *= arguments[i];
//     }
//     return result;
// }

// console.log(multiplier(2,5,8,6));

// var counter = (function(){
//     var addOne = 0;
//     return function(){
//         return addOne += 1;
//     }
// })();

// console.log(counter());


// document.getElementById("test1").innerHTML= "Changed by Script"

// var newList = document.createElement("li");
// newList.innerHTML="I was added by JS";

// document.getElementById("change").appendChild(newList);


// function myFunction(){
//     var x = document.forms["myForm"];
//     var text =  "";
//     var i;
//     for (i = 0; i < x.length; i++ )  {
//         text += x.elements[i].value + "<br>";         
//     }
//     document.getElementById("getValue").innerHTML = text;
// }

function mDown(obj){
    obj.style.backgroundColor = "yellow";
    obj.innerHTML = "You Clicked!"
}
function mUp(obj){
    obj.style.backgroundColor = "blue";
    obj.innerHTML = "Go away!"
}
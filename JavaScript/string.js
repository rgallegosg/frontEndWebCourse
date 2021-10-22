var sampleString = 'Let\'s start our journey whit JavaScript';
console.log(sampleString.indexOf('start'));
console.log(sampleString.lastIndexOf('start'));
console.log(sampleString.slice(5,11));

console.log(sampleString.replace("journey", "Adventure"));
console.log(sampleString.toLowerCase());
console.log(sampleString.toUpperCase());

var name1 = "Kevin";
var name2 = new String("Kevin");

if(name1 === name2){
    console.log("Result is true");
} else{
    console.log("Resulto is false")
}



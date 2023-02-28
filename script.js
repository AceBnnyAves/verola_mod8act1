var gender;
var name = prompt("Helloooo~ Whats your name?");
alert("oooh what a nice name you have! ^^");
var username = prompt("To get started, make a username for yourself :D");
alert("Oh what a great username choice!");
alert("Ooops I forgot! what's your gender " + name + "?");
var gender_affirm = confirm("Ok for Boy\nCancel for Girl");
if (gender_affirm == true){
	gender = "Boy";
}else{
	gender = "Girl";
}
alert("Ohhh you're a " + gender +"~");
alert("All genders are allowed here dont worry!");
alert("You know what... Tell something about yourself");
var desc = prompt("It doesnt have to be long dont worry! just be honest, it can be a short description if you want");
alert("Ohhh that's nice to hear");
var old = prompt("One last thing I wanna ask though... What year where you born in?");
const d = new Date();
current = d.getFullYear();
let year = Number(old);
let age = current - year;
alert("OH! you're " + age + "!")
alert("How lovely~!")
alert("I wish I couldve see you though... I have an idea!")
var choice = confirm("Can you upload a pic of yourself here?")
if (choice == true){
	var pfp = prompt("Link here a picture of yourself!")
    alert("OOHH!")
    alert("You look gorgeous~")
}else{
	alert("That's ok!")
	alert("anyways...")
}
alert("I made this card for you from the info I have gotten from you ^^\nI hope you enjoy it!")

document.getElementById("ppic").src = pfp;
document.getElementById("fname").innerHTML = name;
document.getElementById("gender").innerHTML = gender;
document.getElementById("username").innerHTML = username;
document.getElementById("desc").innerHTML = desc;
document.getElementById("year").innerHTML = old;
document.getElementById("age").innerHTML = age;
document.getElementById("fname").innerHTML = name;
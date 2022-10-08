//Baby weather app (conditionals)
// if rain = "Grab your umbrella"
// else " wear your sunglasses"


let weather = prompt("How is the weather")

if (weather == 'rainy') {
    document.getElementById("output").innerHTML = "Grab your umbrella ⛱";
} else if (weather == 'sunny') {
    document.getElementById("output").innerHTML = "Wear Sunglasses 🌞";
} else if (weather == 'cold') {
    document.getElementById("output").innerHTML = "Grab a Jacket ☃️"
} 
  else if (weather == 'windy') {
    document.getElementById("output").innerHTML = "It is windy 🌪"
}

else {
    document.getElementById("output").innerHTML = "Please choose between sunny, cold or rainy";
}


// $("button").click(function(){
//     $("#output").after("Hello world!");
//   });
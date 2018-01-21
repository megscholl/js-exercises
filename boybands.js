
let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
var boyBands = bands.length;

var bandArray = "";
for (var i = 0; i < boyBands; i++) {
  bandArray += bands[i] + " - ";
  // if (bandArray:nth-last){
  //   bandArray += namds[i];
  // }
}

// HOW DO I MAKE THE LIST NOT END IN " - "?

document.getElementById("boy-bands").innerHTML = bandArray;

var newVeggies = "";
var vegNumber = vegetables.length;

for (var j = 0; j < vegNumber; j++) {
    newVeggies += vegetables[j] + " - ";
}

document.getElementById("veggies").innerHTML = newVeggies;
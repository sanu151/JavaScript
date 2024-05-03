// for in loop with object

var colors = {
  primary: "red",
  secondary: "yellow",
  thirdly: "green",
  fourthly: "blue",
};

for (var color in colors) {
  console.log(color + " -> " + colors[color]);
}

// for in loop with Array

var colorsArray = [
  "violate",
  "Indigo",
  "blue",
  "green",
  "yellow",
  "orange",
  "red",
];

for (var color in colorsArray) {
  console.log(color + " -> " + colorsArray[color]);
}

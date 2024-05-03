// for of loop

var scores = [12, 24, 45, 23];

for (var score of scores) {
  console.log(score);
}

// for of loop with index
for (var [index, value] of scores.entries()) {
  console.log(index + " : " + value);
}

// for of loop with string
var str = "Supriyo Das";

for (var c of str) {
  console.log(c);
}

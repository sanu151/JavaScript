// redeclerarion of variable
var a = 23;
console.log(a);
var a = 32; // redecleraing a variable
console.log(a);

// block scope issue
if (a === 32) {
  var b = 89;
  console.log(b); // This will print 89, not just inside the block.
}

console.log(b); // it also be assessable from outside of the block

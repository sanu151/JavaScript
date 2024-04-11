// JavaScript -> jsdocs

/**
 * Area of Nothing
 * @returns not important
 */
const areaOfNothing = () => {
  return "Area of nothing";
};

/**
 * Calculate area of ractangle
 * @param {number} dim1 length of rectangle
 * @param {number} dim2 height of rectangle
 * @returns Area of rectangle (length * height)
 */
const areaOfRectangle = (dim1, dim2) => {
  return dim1 * dim2;
};

/**
 * Calculate area of triangle
 * @param {number} dim1 base of triangle
 * @param {number} dim2 height of triangle
 * @returns Area of triangle (0.5 * base * height)
 */
const areaOfTriangle = (dim1, dim2) => {
  return dim1 * dim2 * 0.5;
};

/**
 * Calculate radious of circle
 * @param {number} dim1 radious of circle
 * @returns Area of circle (PI * radious^2)
 */
const areaOfCircle = (dim1) => {
  return Math.PI * Math.pow(dim1, 2);
};

console.log(`Area of Nothing : ${areaOfNothing()}`);
console.log(`Area of Rectangle (10,20) : ${areaOfRectangle(10, 20)}`);
console.log(`Area of Triangle (6,8) : ${areaOfTriangle(6, 8)}`);
console.log(`Area of Circle (12) : ${areaOfCircle(12)}`);

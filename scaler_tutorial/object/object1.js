// Create nested object

var myData = {
  firstName: "Supriyo",
  lastName: "Das",
  age: 36,
  address: {
    city: {
      line1: "Keota Kundubagan",
      line2: "Onkernath Lane",
      line3: "Near Onkernath Ashrom",
      nearByRailStation: "Bandel",
    },
    post: "Sahaganj",
    municipality: "Hooghly-Chuchura",
    dist: "Hooghly",
    state: "West Bengal",
    pincode: 712104,
  },
  friends: ["Jojo", "Kanai", "Sanu"],
  family: {
    father: "Let Mritunjoy Das",
    mother: "Sandhya Das",
    garden: "Sandhya Das (Aunt)",
    spose: "Rupa Das",
    daughter: "Rishika Das",
  },
};

console.log(myData);

console.log(myData.family.spose);

// Web storage API - allows us to store & read data in browser
// Web storage API - localStorage, sessionStorage

// localStorage - store, read, update and remove data
// no expairy date : data never gets list even if we close the browser.

// Store / Update data in browser : setItem(key, value)
localStorage.setItem('userName', 'Supriyo Das');
localStorage.setItem('password', '712104');

// Read data from localStorage : getItem(key)
const userName = localStorage.getItem('userName');
const userPass = localStorage.getItem('password');

console.log(`Name : ${userName} | Password : ${userPass}`);

// Remove data from localStorage : removeItem(key)
localStorage.removeItem('userName');
localStorage.removeItem('password');

// Store Array / Object in localStorage
const countries = ['India', 'Bangladesh', 'Mayanmar'];
localStorage.setItem('countries', JSON.stringify(countries));

// getItem(key) -> Array / Object
const countryList = JSON.parse(localStorage.getItem('countries'));
countryList.forEach(x => {
    console.log(x);
});

// Clear all data from localStorage
localStorage.clear();
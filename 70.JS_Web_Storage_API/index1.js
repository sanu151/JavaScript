// Session Storage
// sessionStorage is similar as localStorage

// Create or update data in sessionStorage
sessionStorage.setItem('userId', '101');
sessionStorage.setItem('userName', 'Supriyo Das');

// Read data from sessionStorage
const userId = sessionStorage.getItem('userId');
const userName = sessionStorage.getItem('userName');

console.log(userId, userName);

// Remove data from sessionStorage
sessionStorage.removeItem('userName');

// Clear all data from sessionStorage
sessionStorage.clear();


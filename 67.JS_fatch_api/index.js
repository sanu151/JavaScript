// Call api using fatch

// fatch() has replaced XMLhttpRequest
// fatch() =global method for making HTTP request.
// 2 ways to call - .then, async await

// fatch() is easy to use compare to XMLhttpRequest
// fatch() returns a promise
// return promise can only handle network error
// does not supprot all the older browser

console.clear();

// GET method -> fetch all object data from Database
const getMethod = (url) => {
    fetch(url)
    .then(res => {
        if(!res.ok){
            const message = `${res.status}`;
            throw new Error(message);
        }
        return res.json()
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

getMethod('https://jsonplaceholder.typicode.com/posts');

// POST Method -> add new object data to Database
const postMethod = (url, title, body, userId) => {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            title: title,
            body: body,
            userId: userId,
        }),
        
    })
    .then((res) => res.json())
    .then((res) => console.log(res));
}

postMethod('https://jsonplaceholder.typicode.com/posts', 'Welcome', 'Supriyo Das', 1)

// PUT Method -> Update object data to Database respect of it's Primary Key
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
        id: 1,
        title: 'fooma',
        body: 'barma',
        userId: 1,
    })
})
.then(res => {
    if(!res.ok){
        const message = `${res.status}`;
        throw new Error(message);
    }
    return res.json();
})
.then(res => console.log(res))
.catch(err => console.log(err));

// PATCH Method -> Update single data from an object respect it's Primary Key
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
        title : 'Supriyo Das',
    }),
})
.then(res => {
    if(!res.ok){
        const message = `${res.status}`;
        throw new Error(message);
    }
    return res.json();
})
.then(res => console.log(res))
.catch(err => console.log(err));

//DELETE Method -> Delete an object data respect it's Primary Key
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
})
.then(res => {
    if(!res.ok){
        const message = `${res.status}`;
        throw new Error(message);
    }
    return res.json();
})
.then(res => console.log(res))
.catch(err => console.log(err));
// Calling api from javascript | ajax jquery
// add jquery library cdn
// ajax -> asynchromous javascript and xml

console.clear();

const makeRequest = async (url, method, data) => {
    try {
        const result = await $.ajax({
            url : url,
            method : method,
            data : data,
        });
        return result;
    } catch (err) {
        console.log(err)
    }
};

const getData = () => {
        makeRequest(`https://jsonplaceholder.typicode.com/posts`, `GET`)
        .then(res => console.log(res));
}

getData();

const createData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts', 'POST', {
        title: 'Typing Practice',
        body: 'A Quick Brown Fox Jumps Over The Lazy Dog',
        userId: 1,
    })
    .then(res => console.log(res));
}
createData();

const updateData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'PUT', {
        id : 1,
        title : 'Hello World',
        body : 'Supriyo Das',
        userId : 1,
    })
    .then(res => console.log(res));
}
updateData();
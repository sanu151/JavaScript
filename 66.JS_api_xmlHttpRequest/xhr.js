// Call API using XMLhttpRequest
// Methods : GET, POST, PUT, PATCH, DELETE
// url: The URL of the server resource you want to access
// Handle the Response: onload, onerror
// Functions : open(), send(), setRequestHeader()
console.clear();

const makeRequest = (method, url, data) => {
    const xhr = new XMLHttpRequest();
    
    xhr.open(method, url);

    xhr.setRequestHeader('Content-type', 'application/json');

    xhr.onload = () => {
        let data = xhr.response;
        console.log(JSON.parse(data));
    }

    xhr.onerror = () => {
        console.log('Error is here');
    }

    xhr.send(JSON.stringify(data));
}

const getData = () => {
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts');
}

const postData = () => {
    makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,  
    });
}

const updateData = () => {
    makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
        id: 1,
        title: 'fooma',
        body: 'barma',
        userId: 1,  
    });
}

const updateSingleData = () => {
    makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {
        title: 'This title is changed',
    });
}

const deleteData = () => {
    makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1');
    console.log('Deleted');
}


getData();
postData();
updateData();
updateSingleData();
deleteData();
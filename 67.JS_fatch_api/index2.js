// fetch -> async await

const makeRequest = async (url, config) => {
    const res = await fetch(url, config);
    if(!res.ok){
        const message = `${res.status}`;
        throw new Error(message);
    }
    const data = await res.json();
    return data;
};

const getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts')
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

//getData();

const sendData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            title: 'Welcome',
            body: 'Supriyo Das',
            userId: 1,
        }),
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

//sendData();

const updateData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            id: 1,
            title: 'Hello World',
            body: 'Learn JavaScript API handeling',
            userId: 1,
        }),
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

updateData();
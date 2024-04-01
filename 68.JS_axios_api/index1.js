// axios api using async await


const makeRequest = async (config) => {
    return await axios(config);
};

const getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts')
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
}

getData();

const createData = () => {
    makeRequest({
        // Sending data as an object to function : makeRequest(config)
        url : 'https://jsonplaceholder.typicode.com/posts',
        method : 'post',
        data : JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
          }),
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
}

createData();

const updateData =() => {
    makeRequest({
        url : 'https://jsonplaceholder.typicode.com/posts/1',
        method : 'put',
        data : JSON.stringify({
            id : 1,
            title : 'Welcome',
            body : 'Supriyo Das',
            userId : 1,
        })
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
}

updateData();
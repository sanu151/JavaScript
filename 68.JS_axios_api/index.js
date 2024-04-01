// calling api from javascript | axios api


console.clear();

// axios GET Method
axios.get('https://jsonplaceholder.typicode.com/posts')
.then(res => console.log(res.data))
.catch(err => console.log(err));

// axios POST Method
axios.post('https://jsonplaceholder.typicode.com/posts', {
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
})
.then(res => console.log(res.data))
.catch(err => console.log(err));

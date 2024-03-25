// Object Literals

const studentInfo = (name, age) => {
    return{
        name, // removing duplicate variables (name : name)
        age
    }
}

console.log(studentInfo('Supriyo Das', 36));

// Function inside object using Object literals

let message = {
    body(){
        return 'Hi! I am an object function';
    },

    // use space in function name using ES6
    'body name'(){
        return 'This is a function which name contains space';
    }
}

console.log(message.body());
console.log(message['body name']());
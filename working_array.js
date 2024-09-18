// 1. Create an Array of User Objects
const users = [
    {
        name: 'Alice',
        age: 25,
        hobbies: ['reading', 'swimming', 'traveling']
    },
    {
        name: 'Bob',
        age: 30,
        hobbies: ['cycling', 'painting', 'hiking']
    },
    {
        name: 'Charlie',
        age: 35,
        hobbies: ['coding', 'cooking', 'gaming']
    }
];

// 2. Destructure Properties
users.forEach(user => {
    const { name, age } = user;
    console.log(`Name: ${name}, Age: ${age}`);
});

// 3. Use Spread Operator to combine hobbies from all users
const combinedHobbies = [...users[0].hobbies, ...users[1].hobbies, ...users[2].hobbies];
console.log('Combined Hobbies:', combinedHobbies);

// Alternatively, combine hobbies using map and reduce
const allHobbies = users.map(user => user.hobbies).reduce((acc, hobbies) => [...acc, ...hobbies], []);
console.log('All Hobbies:', allHobbies);

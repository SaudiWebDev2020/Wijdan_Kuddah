var users = [
    {
        name: "Michael",
        age: 37
    },
    {
        name: "John",
        age: 30
    },
    {
        name: "David",
        age: 27
    }
];

console.log(users[1].age)
console.log(users[0].name)

for (var user in users){
    console.log(users[user].name + ' - ' + users[user].age)
}
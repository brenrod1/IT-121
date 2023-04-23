const people = {friends:[]}
const friends1 = {firstName:"Wendy", lastName:"O'Williams", id: "1"};
const friends2 = {firstName:"Bettie", lastName:"Rubble", id: "2"};
const friends3 = {firstName:"Ahsoka", lastName:"Tano", id: "3"};
people.friends.push(friends1, friends2, friends3);
let lengthOfPeople = people.friends.push("Wendy O'Williams", "Betty Rubble", "Ashoka Tano"); 
console.log(people);
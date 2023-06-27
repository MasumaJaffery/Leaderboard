import './class.js';
// Objects Dynamically Created 
const players = [{
    id: 1,
    username: "Masuma",
    score: 100
},
{
    id:2,
    username: "Gappi",
    score: 85
},
{
    id:3,
    username: "Naz",
    score: 80
},
{
    id: 4,
    username: "Rubab",
    score: 70
},
{
    id: 5,
    username: "Carmen",
    score: 100
}
];
// Function Display for Array of Objects!
function display(index){
    const tb = document.getElementById('table-body');
    tb.innerHTML += `<tr><td>${players[index].id}</td><td>${players[index].username}</td><td>${players[index].score}</td></tr>`;
}
// For Loop to iterate for Array of Objects! 
for(let i = 0; i <= players.length; i += 1){
// Display Callback Func,
    display(i);
}

// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)

const firstName = 'Kyle';
const lastName = 'Gromala';
const bestFriend = {
  firstName: 'Jason',
  lastName: 'Smith',
  'favorite food': 'Pizza'
}
const me = {
  firstName,
  lastName,
  'favorite food': 'Sushi',
  bestFriend,
}

// 2. console.log best friend's firstName and your favorite food

console.log(bestFriend.firstName)
console.log(me["favorite food"])

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X

const board = [
  ["-", "o", "-"] ,
  ["-", "x", "o"] ,
  ["x", "-", "x"] 
]

// 4. After the array is created, 'O' claims the top right square.
// Update that value.

const boardUpdate = [
  ["-", "o", "o"] ,
  ["-", "x", "o"] ,
  ["x", "-", "x"] 
]

// 5. Log the grid to the console.

console.log(boardUpdate)

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

const myEmail = new RegExp('\S+@\S+.\S+')

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date

const assignmentDate = '1/21/2019';
new Date(assignmentDate)

//** or logged into console as: **//

console.log(new Date(assignmentDate))

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.

const dueDate = '1/28/2019';
new Date(dueDate)

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const dueDay = '28'
const dueYear = '2019'

let element = document.createTextNode(`<time datetime="2019-01-28">${months[0]} ${dueDay}, ${dueYear}</time>`)

// 10. log this value using console.log

console.log(
  `<time datetime="2019-01-28">${months[0]} ${dueDay}, ${dueYear}</time>`
)

// or could log into console as an assigned element from above as:

console.log(element)
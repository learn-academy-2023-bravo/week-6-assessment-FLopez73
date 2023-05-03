// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
describe("personStory", () => {
  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" },
  ]
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    expect(personStory(people)).toEqual([
      "Ford Prefect is a hitchhiker.",
      "Zaphod Beeblebrox is president of the galaxy.",
      "Arthur Dent is a radio employee.",
    ])
  })
})
// FAIL  ./code-challenges.test.js
// personStory
//   ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (3 ms)

// ● personStory › takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

//   ReferenceError: personStory is not defined

//     21 |   ]
//     22 |   it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
//   > 23 |     expect(personStory(people)).toEqual([
//        |     ^
//     24 |       "Ford Prefect is a hitchhiker.",
//     25 |       "Zaphod Beeblebrox is president of the galaxy.",
//     26 |       "Arthur Dent is a radio employee.",

//     at Object.expect (code-challenges.test.js:23:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.96 s
// Ran all test suites.
// error Command failed with exit code 1.

// b) Create the function that makes the test pass.
// Pseduocode:

const personStory = (array) => {
  return array.map(
    (value) =>
      `${value.name
        .split(" ")
        .map((value) => value[0].toUpperCase() + value.slice(1))
        .join(" ")} is ${value.occupation}.`
  )
}

// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-6-assessment-FLopez73/node_modules/.bin/jest
//  PASS  ./code-challenges.test.js
//   personStory
//     ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (6 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        1.479 s
// Ran all test suites.
// ✨  Done in 3.59s.

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
describe("divBy3", () => {
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    expect(divBy3(hodgepodge1)).toEqual([2, 0, -1, 0])
    expect(divBy3(hodgepodge2)).toEqual([2, 1, -1])
  })
})

// ● divBy3 › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

//     ReferenceError: divBy3 is not defined

//       64 |   const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
//       65 |   it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
//     > 66 |     expect(divBy3(hodgepodge1)).toEqual([2, 0, -1, 0])
//          |     ^
//       67 |     expect(divBy3(hodgepodge2)).toEqual([2, 1, -1])
//       68 |   })
//       69 | })

//       at Object.expect (code-challenges.test.js:66:5)

// Test Suites: 1 failed, 1 total
// Tests:       2 failed, 2 total
// Snapshots:   0 total
// Time:        1.304 s
// Ran all test suites.
// error Command failed with exit code 1.

// b) Create the function that makes the test pass.
//Pseudocode:
// input: array
// output: array of numbers
// create a function divBy3 takes in an array.
// declare a return statement run a .filter method on the array to iterate over it. Extract the numbers only by using typeof operator and setting the value strictly equal to a "number".
// then chain a .map method to iterate through the values of the new filtered array and preform arithmetic by using the modulo operator to display the remainder only when the value is divided by 3.

//

const divBy3 = (array) => {
  return array
    .filter((value) => typeof value === "number")
    .map((value) => value % 3)
}

// PASS  ./code-challenges.test.js
// divBy3
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.422 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.25s.

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
describe("sumCube", () => {
  const cubeAndSum1 = [2, 3, 4]
  const cubeAndSum2 = [0, 5, 10]
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    expect(sumCube(cubeAndSum1)).toEqual(99)
    expect(sumCube(cubeAndSum2)).toEqual(1125)
  })
})

// ReferenceError: sumCube is not defined

// 97 |   const cubeAndSum2 = [0, 5, 10]
// 98 |   it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
// >  99 |     expect(sumCube(cubeAndSum1)).toEqual(99)
//    |     ^
// 100 |     expect(sumCube(cubeAndSum2)).toEqual(1125)
// 101 |   })
// 102 | })

// at Object.expect (code-challenges.test.js:99:5)

// Test Suites: 1 failed, 1 total
// Tests:       3 failed, 3 total
// Snapshots:   0 total
// Time:        3.22 s
// Ran all test suites.

// b) Create the function that makes the test pass.
// pseudocode:
// input:array
// output: number
// declare a function sumCube that takes in an array.
// since we have to keep a running tally after the numbers are cubed declare a variable of sum equal to zero as the starting point for the count.
// to cube each number in the array use .map method to iterate through each value in the array and preform the power of 3 arithmetic which will be stored in a declared variable of cube.
// Using the forEach method to iterate through the cube array to add them into the sum variable up after they have been cubed.
// will return sum that should have all the values added up.

// I went back and chained the .forEach method to the cube variable. I had originally called it on the cube variable in a new line. I think I love chaining.

const sumCube = (array) => {
  let sum = 0
  const cube = array
    .map((value) => value ** 3)
    .forEach((value) => (sum += value))
  return sum
}

// PASS  ./code-challenges.test.js
// sumCube
//   ✓ takes in an array of numbers and returns the sum of all the numbers cubed. (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.412 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.91s.

// Part I
// Use the following object for this set of questions:

let users = [
  {
    username: "larry",
    email: "larry@foo.com",
    yearsExperience: 22.1,
    favoriteLanguages: ["Perl", "Java", "C++"],
    favoriteEditor: "Vim",
    hobbies: ["Fishing", "Sailing", "Hiking"],
    hometown: {
      city: "San Francisco",
      state: "CA",
    },
  },
  {
    username: "jane",
    email: "jane@test.com",
    yearsExperience: 33.9,
    favoriteLanguages: ["Haskell", "Clojure", "PHP"],
    favoriteEditor: "Emacs",
    hobbies: ["Swimming", "Biking", "Hiking"],
    hometown: {
      city: "New York",
      state: "NY",
    },
  },
  {
    username: "sam",
    email: "sam@test.com",
    yearsExperience: 8.2,
    favoriteLanguages: ["JavaScript", "Ruby", "Python", "Go"],
    favoriteEditor: "Atom",
    hobbies: ["Golf", "Cooking", "Archery"],
    hometown: {
      city: "Fargo",
      state: "SD",
    },
  },
  {
    username: "anne",
    email: "anne@test.com",
    yearsExperience: 4,
    favoriteLanguages: ["C#", "C++", "F#"],
    favoriteEditor: "Visual Studio Code",
    hobbies: ["Tennis", "Biking", "Archery"],
    hometown: {
      city: "Albany",
      state: "NY",
    },
  },
  {
    username: "david",
    email: "david@test.com",
    yearsExperience: 12.5,
    favoriteLanguages: ["JavaScript", "C#", "Swift"],
    favoriteEditor: "VS Code",
    hobbies: ["Volunteering", "Biking", "Coding"],
    hometown: {
      city: "Los Angeles",
      state: "CA",
    },
  },
];

// 1. Write a function called printEmails which console.log's each email for the users.
// const printEmails = () => {
//   users.forEach((user) => {
//     console.log(user.email);
//   });
// };

// printEmails();

// 2. Write a function called printHobbies which console.log's each hobby for each user.
// const printHobbies = () => {
//   users.forEach((user) => {
//     const arrayOfHobbies = user.hobbies;
//     arrayOfHobbies.forEach((val) => {
//       console.log(val);
//     });
//   });
// };

// printHobbies();

// 3. Write a function called findHometownByState which returns the first user which has a hometown of the state that is passed in
// const findHometownByState = (inputState) => {
//   // Loop through users array
//   // At each iteration, check if "state" exists in user object
//   // If exists, return the user object

//   for (let user of users) {
//     if (user.hometown.state === inputState) {
//       console.log(user);
//       return;
//     }
//   }
// };

// findHometownByState("CA");

// 4. Write a function called allLanguages which returns an array of all of the unique values
const allLanguages = () => {
  // init new array
  // loop
  // per iteration, store all users favoriteLanguage arrays in new array
  // loop through new array
  // init another array
  // for each array, push value to another array if value is unique
  // return another array

  let usersLanguages = [];
  let languageList = [];

  users.forEach((user) => {
    usersLanguages = user.favoriteLanguages;

    usersLanguages.forEach((val) => {
      languageList.push(val);
    });
  });

  console.log([...new Set(languageList)]);
  return [...new Set(languageList)];
};

allLanguages();

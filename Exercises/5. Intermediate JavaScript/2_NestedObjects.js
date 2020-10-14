// Given the following nested object:

let nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
      primeNumbers: [2, 3, 5, 7, 11],
      fibonnaci: [1, 1, 2, 3, 5, 8, 13],
    },
    addSnack: function (snack) {
      this.snacks.push(snack);
      return this;
    },
  },
};

// 1) Using a for loop, console.log all of the numbers in the primeNumbers array.
// let numbers = nestedData.innerData.numberData.primeNumbers;

// for (num of numbers) {
//   console.log(num);
// }

//////////////////////////////////////////////////////////////////////////////////////////////

// 2) Using a for loop, console.log all of the even Fibonnaci numbers.
// let fib = nestedData.innerData.numberData.fibonnaci;

// for (evenNum of fib) {
//   if (evenNum % 2 === 0) {
//     console.log(evenNum);
//   }
// }

//////////////////////////////////////////////////////////////////////////////////////////////

// 3) Console.log the value "second" inside the order array.
// console.log(nestedData.innerData.order[1]);

//////////////////////////////////////////////////////////////////////////////////////////////

// 4) Invoke the addSnack function and add the snack "chocolate".
// nestedData.innerData.addSnack("chokolate");
// console.log(nestedData.innerData.snacks);

// Inside of the addSnack function there is a special keyword called this. What does the word this refer to inside the addSnack function?

// ANSWER: THE 'this' KEYWORD REFERS TO THE 'nestedData' OBJECT

// Given the following nested object:

let nestedObject = {
  speakers: [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000,
          },
        },
      },
    },
    languages: {
      spanish: {
        hello: "Hola",
      },
      french: {
        hello: "Bonjour",
      },
    },
  },
};

// 1) Write a function addSpeaker to add a speaker to the array of speakers. The speaker you add must be an object with a key of name and a value of whatever you'd like.
// let addSpeaker = (arr) => {
//   let speakers = nestedObject.speakers;

//   speakers.push(arr);

//   console.log(speakers);
// };
// addSpeaker({ name: "Jimmy" });

//////////////////////////////////////////////////////////////////////////////////////////////

// 2) Write a function addLanguage that adds a language to the languages object. The language object you add should have a key with the name of the language and the value of another object with a key of "hello" and a value of however you spell "hello" in the language you add.
// let addLanguage = () => {
//   let newlang = {
//     hello: "Mavo",
//   };

//   let languagesObj = nestedObject.data.languages;

//   languagesObj.Urhobo = newlang;

//   console.log(languagesObj);
// };
// addLanguage();

//////////////////////////////////////////////////////////////////////////////////////////////

// 3) Write a function addCountry that adds a European country to the countries object (inside of the continents object, inside of the countries object). The country you add should be an object with the key as name of the country and the value as an object with the keys of "capital" and "population" and their respective values.

let addCountry = () => {
  let newCountryData = {
    capital: "Madrid",
    population: 7000000,
  };

  let countriesObj = nestedObject.data.continents.europe.countries;

  countriesObj.spain = newCountryData;

  console.log(countriesObj);
};

addCountry();

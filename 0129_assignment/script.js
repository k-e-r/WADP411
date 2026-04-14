const getQuote = () => {
  return new Promise((res, rej) => {
    const delay = Math.floor(Math.random() * 1000);
    console.log('Promise Delay: ', delay);

    setTimeout(() => {
      if (delay > 500) {
        rej('Promise: Connection Timeout :<'); //function calls
      } else {
        res(`Promise: Here's your fake data from`);
      }
    }, delay);
  });
};

async function asyncQuote() {
  try {
    let data = await getQuote();
    console.log('data', data);
  } catch (error) {
    console.log(error);
  }
}

// const asyncQuote = async () => {
//   try {
//     return await getQuote();
//   } catch (error) {
//     console.log(error);
//   }
// };
// asyncQuote();

// getQuote()
//   .then((quote) => {
//     console.log(quote);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

const greeting = (firstname, lastname) => {
  return `Hi, ${firstname} ${lastname}`;
};

var string1 = '';
var object1 = { a: 1, b: 2, c: 3 };

for (var property1 in object1) {
  string1 += object1[property1];
}

console.log(string1);

// async function myFunc() {

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 3000)
//   });

//   const error = false

//   if(!error) {
//     const res = await promise; //Wait until teh promise is resolved 
//     return res
//   } else {
//     await Promise.reject(new Error('Something went wrong'))
//   }
// }

// myFunc()
// .then(res => console.log(res))
// .catch(err => console.log(err))

async function getUsers() {
  // Await the response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // Only procced once its resolved
  const data = await response.json();

  // Only proceed when the second promise is resolved
  return data;
}

getUsers().then(users => console.log(users));
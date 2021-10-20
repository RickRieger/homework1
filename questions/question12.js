const { fetchData } = require('../fancyLibrary');

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// fetchData that returns a promise.
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

fetchData().then((data) => console.log(data));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function fetchStuff() {
  const res = await fetchData();
  try {
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}

fetchStuff();

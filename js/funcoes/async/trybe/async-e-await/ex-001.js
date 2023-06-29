const getQuoteButton = document.querySelector('.get-quote');
const quoteText = document.querySelector('.quote');
const quoteAuthor = document.querySelector('.author');
const erroText = document.querySelector('.erro');
const API_URL = 'https://dummyjson.com/quotes/random';


const getQoute = async () => {
  // com then/catch
  fetch(API_URL)
    .then(response => response.json())
    .then((data) => {
      quoteText.innerHTML = data.quote;
      quoteAuthor.innerHTML = data.author;
      erroText.innerHTML = '';
      })
    .catch((error) => {
      erroText.innerHTML = error;
      quoteAuthor.innerHTML = '';
      quoteText.innerHTML = '';
    })
    .then(data => console.log(data));

  // com async/await  
  const response = await fetch(API_URL);
  const data = await response.json();
  quoteAuthor.innerHTML = data.author;
  quoteText.innerHTML = data.quote;
  erroText.innerHTML = '';
  
  // com try/catch
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    quoteAuthor.innerHTML = data.author;
    quoteText.innerHTML = data.quote;
    erroText.innerHTML = '';
  } catch (error) {
    erroText.innerHTML = error;
    quoteAuthor.innerHTML = '';
    quoteText.innerHTML = '';
  };
  return data;
}

console.log(getQoute());

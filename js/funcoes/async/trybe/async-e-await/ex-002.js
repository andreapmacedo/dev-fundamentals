const cep = '30130-010'; 

fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.json())
  .then(data => console.log(data));

// com async/await
const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
const data = await response.json();
console.log(data);


// com try/catch
try {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data = await response.json();
  console.log(data);
} catch(error) {
  console.log(error)
}
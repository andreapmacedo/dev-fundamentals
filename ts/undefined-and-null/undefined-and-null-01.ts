let test;


if (test === null) {
  console.log("é nulo");
} else {
  console.log("não é nulo");
}

console.log("test", test); // undefined


interface Andar {
  passos: number | null;
}

const andar: Andar = {
  passos: null,
};

const funcaoTest = (): undefined | number => {
  if (andar.passos && andar.passos > 5) {
    return 543;
  }
  return undefined;
};

const outroNome = funcaoTest();

// se ele for nulo, ele vai ser nulo
if (!andar.passos) {
  console.log("é nulo");
}

// se ele não for nulo, ele vai ser um number
if (outroNome) { 
  outroNome.toFixed();
}

console.log("andar", andar);
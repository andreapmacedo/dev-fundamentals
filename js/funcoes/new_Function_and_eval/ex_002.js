function testEval() {
  var a = 'original';
  eval("(a = 'alterado')");
  console.log(a);
}

function testNewFunction() {
  var a = 'original';
  new Function("(a = 'alterado')")();
  console.log(a);
}

testEval()
testNewFunction()
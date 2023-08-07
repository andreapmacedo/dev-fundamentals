/**
 * O String.prototype é uma propriedade em JavaScript que representa o protótipo de objeto para o construtor String. Isso significa que você pode adicionar propriedades ou métodos a todos os objetos String adicionando-os ao String.prototype.

No código fornecido, um novo método chamado capitalizeAllFirstLetters está sendo adicionado ao String.prototype. Este método irá transformar todas as primeiras letras de cada palavra em uma string em maiúsculas. O argumento o fornecido na função não é usado no corpo da função, portanto, na realidade, não é necessário.

Aqui está o que a função faz, passo a passo:

String(this).toLowerCase(): Este comando transforma toda a string em letras minúsculas. O this refere-se à string atual sobre a qual o método está sendo chamado.

split(' '): Este comando divide a string em um array de palavras. Ele usa um espaço (' ') como o delimitador para dividir a string.

map((s) => s.charAt(0).toUpperCase() + s.substring(1)): Este comando usa a função map para criar um novo array com os resultados de chamar a função fornecida em cada elemento do array original. A função fornecida pega a primeira letra de cada palavra (s.charAt(0)) e a transforma em maiúscula com toUpperCase(), depois adiciona o restante da palavra (s.substring(1)) de volta.

join(' '): Este comando junta todas as palavras de volta em uma única string, com um espaço entre cada palavra.

Depois de adicionar este método ao String.prototype, você pode chamá-lo em qualquer string. Por exemplo:
 * 
 */


String.prototype.capitalizeAllFirstLetters = function (o) {
  return String(this).toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
}

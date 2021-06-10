function countVogals(text) {
return text.match(/[aeiou]/gi).length;
}

//https://www.devmedia.com.br/iniciando-expressoes-regulares/6557

console.log('rielly',countVogals('rielly'));
console.log('celso', countVogals('celso'));
console.log('wesler', countVogals('wesler'));
console.log('matheus', countVogals('matheus'));
console.log('doris', countVogals('doris'));
console.log('elaine', countVogals('elaine'));
console.log('kim', countVogals('kim'));
console.log('banana', countVogals('banana'));
console.log('azul', countVogals('azul'));
console.log('vermelho', countVogals('vermelho'));
console.log('roxo', countVogals('roxo'));
console.log('prasi', countVogals('prasi'));
console.log('guerini', countVogals('guerini'));
console.log('homeguru', countVogals('homeguru'));

console.log()
process.exit();
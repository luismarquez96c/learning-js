const frutas = 'manzana,pera,uva'.split(',');
const frutasLenght = frutas.lenght;
frutas.reverse();
console.log(frutas.length);
while( frutas.length > 0 ){
	console.log(frutas.pop())
}

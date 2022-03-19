const persona = {
	nombre: 'Alex',
	apellido: 'Camacho',
	ubicacion: {
		pais: 'México',
		ciudad: 'Guadalajara',
		direccion: 'Calle #7 Colonia Random CP 1234'
	}
}

console.log( persona?.propiedades?.direccion )
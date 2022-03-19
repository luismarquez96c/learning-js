const PIEDRA = 'piedra';
const PAPEL = 'papel';
const TIJERA = 'tijera';

const resultado = jugar( TIJERA, PIEDRA );

console.log(resultado);

function jugar( opcionUsuario, opcionMaquina ){

    if( opcionUsuario === opcionMaquina ){
        return "EMPATE, VUELVE A JUGAR";
    }

    /**
     * EXISTIRAN DOS GRUPOS DE VALIDACIONES
     * 1. PIEDRA(3) gana a TIJERA(2) gana a PAPEL(1)
     * 2. PAPEL(1) gana a PAPEL(3)
     * 
     * La frase gana a en validacion 1 equivaldrá a >
     * La frase gana a en validacion 2 equivaldrá a <
     */

    const opcionUsuarioNumerica = opcionUsuario === 'piedra' ? 3 : opcionUsuario === 'tijera' ? 2 : 1 ;
    const opcionMaquinaNumerica = opcionMaquina === 'piedra' ? 3 : opcionMaquina === 'tijera' ? 2 : 1 ;

    const mensajeGanar = `Ganaste! ${opcionUsuario} le gana a ${opcionMaquina}`;
    const mensajePerder = `Perdiste! ${opcionMaquina} le gana a ${opcionUsuario}`;

    //ENTRA EN GRUPO VALIDACION 2
    if( ( opcionUsuarioNumerica === 3 || opcionUsuarioNumerica === 1 ) && (opcionMaquinaNumerica === 3 || opcionMaquinaNumerica === 1) ) {
        console.log('Entro en grupo de validaciones 2: ' + opcionUsuario + " " + opcionMaquina);
        return opcionUsuarioNumerica < opcionMaquinaNumerica ? mensajeGanar : mensajePerder; 
    }
    //ENTRA EN GRUPO VALIDACION 1
    else { 
        console.log('Entro en grupo de validaciones 1: ' + opcionUsuario + " " + opcionMaquina);
        return opcionUsuarioNumerica > opcionMaquinaNumerica ? `Ganaste! el ${opcionUsuario} le gana a ${opcionMaquina}` :  `Perdiste! el ${opcionMaquina} le gana a ${opcionUsuario}`
    }

}
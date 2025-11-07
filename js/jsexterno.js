        function cambiarColor(id_elemento, color) {
            document.getElementById(id_elemento).style.color = color;
        }
        function agregarElemento(idelementopadre, html) {
            document.getElementById(idelementopadre).innerHTML = html;

        }
        function construirH1 (){
            return '<h1 id="id_calculadora">Calculadora</h1>';
        }
        function elminarElemento(idElemento){
            document.getElementById(idElemento).remove();
        }

        function ocultarElemento(idElemento){
            document.getElementById(idElemento).style.display = 'none';
        }
        function mostrarElemento(idElemento){
            document.getElementById(idElemento).style.display = 'block';
        }

        function evaluarOperacion(tipo){
            let num1 = parseFloat(document.getElementById('id_n1').value);
            let num2 = parseFloat(document.getElementById('id_n2').value);
            let resultado = 0;

            if(tipo === '+'){
               resultado = sumar(num1, num2);
            }
            if(tipo === '-'){
                resultado = restar(num1, num2);
            }   
            if(tipo === '*'){
                resultado = multiplicar(num1, num2);
            }   
            if(tipo === '/'){
                resultado = dividir(num1, num2);

            }
            document.getElementById('id_resultado').innerText = resultado;
        }    

        function sumar(num1, num2){
            return num1 + num2;
        }
        function restar(num1, num2){
            return num1 - num2;
        }   
        function multiplicar(num1, num2){
            return num1 * num2;
        }
        function dividir(num1, num2){
            return num1 / num2;
        }
        function fundamentosJS(){
            /*Tipos de variables*/
            var nombre = "Freddy"; //Antigua, ya es considerada obsoleta
            let apellido = "Tapia"; // Para variables cambiantes
            let apellido2 = 15;
            apellido2 = "Teran"; // Variable global
            let arreglo = [1,2,3,4,5,6]; // Arreglo
            let diasSemana = ['Lunes', 'Martes','...'] // Arreglo de strings
            const IVA = 12.8; // Constante
            console.log('Fundamentos de JS');
            console.log(nombre);
            console.log(IVA);
            console.log(arreglo);
            //Arreglos
            const arreglosDiasSemana = ['Lunes', 'Martes', 'Miercoles'];
            arreglosDiasSemana.push('Jueves'); // Agregar un elemento al final
            arreglosDiasSemana.unshift('Dias')
            console.log(arreglosDiasSemana);
            console.log(arreglosDiasSemana[0]);
            console.log('Manejo de nulos, undefined y Vacio');
            arreglosDiasSemana.push(null);
            arreglosDiasSemana.push('');
            console.log(arreglosDiasSemana[5]);
            console.log(arreglosDiasSemana[6]);
            console.log(arreglosDiasSemana[7]);

            const numerosPares =[2,4,6,8];
            const numerosImpares =[1,3,5,7,9];
            const numerosTotales = numerosImpares.concat(numerosPares);
            console.log(numerosTotales);

            /*Sentencias de control*/
            let edad=19;
            if(edad>18){
                console.log('Es mayor de edad');
            }else{
                console.log('Es menor de edad');
            }

            let dia = 'Lunes';
            switch(dia){
                case 'Lunes':
                    console.log('Es Lunes');
                    break;
                case 'Martes':
                    console.log('Es Martes');
                    break;
                default:
                    console.log('No es ninguno de esos dias ');
                    break;
            }   

            for (let i=0; i <= 5; i++){
                console.log(i);
            
            }

            const frutas = ['Manzana', 'Sandia', 'Papaya','Naranja'];
            for(let fruta of frutas){
                console.log(fruta);

            }

            /*manejo de objetos*/
            const profesor = {
                nombre: 'Freddy',
                apellido: 'Tapia',
                edad: 25,
                ecuatoriano: true,
                genero: 'M',
                ciudad: 'Quito'
            }
            console.log(profesor);
            console.log(profesor.nombre);
            profesor.apellido = 'Teran';
            console.log(profesor);

            /*Comparadores*/
            if(profesor.ciudad === 'Quito'){
                console.log('Es Quiteño');
            }
            if(profesor.edad !== 35){
                console.log('Es diferente de 36');
            }else{
                console.log('Es 36');
            }

            for (let clave in profesor){
                console.log(clave);
                console.log(profesor[clave]);
            }   
    

            const e1 = {
                nombre: 'Freddy',
                apellido: 'Tapia',
                edad: 25,
                ecuatoriano: true,
                genero: 'M',
                ciudad: 'Quito'
            }
            const e2 = {
                nombre: 'Freddy',
                apellido: 'Tapia',
                edad: 25,
                ecuatoriano: true,
                genero: 'M',
                ciudad: 'Quito'
            }
            const arregloEstudiantes = [e1, e2, {
                nombre: 'Freddy 3',
                apellido: 'Tapia',
                edad: 25,
                ecuatoriano: true,
                genero: 'M',
                ciudad: 'Quito'
            }];
            
            console.log(arregloEstudiantes[0]);
            console.log(arregloEstudiantes[2]);


    /* Desestructuracion */        
    //Arreglos
    const ar1=[1,2,3,4,5,6,7];
    const[p1,p2,p3,p4,p5]=ar1;
    console.log(p1);
    console.log(p4);

    const [primero,,,,,,ultimo]=ar1;
    console.log(primero);
    console.log(ultimo);

    const [pos1,pos2] = [1,2,3,4,5,6,7];
    imprime(ar1);

    //Objetos
      const e3 = {
                nombre1: 'Freddy',
                apellido: 'Tapia',
                edad: 25,
                ecuatoriano: true,
                genero: 'M',
                ciudad: 'Quito'
    }
    const {nombre1, ciudad}=e3;
    console.log(nombre1);
    console.log(ciudad);

     const {nombre:n, ciudad:ciu}= {
        nombre: 'Freddy',
        apellido: 'Tapia',
        edad: 25,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
     };
    console.log(n);
    console.log(ciu);

    const e4 = {
                nombre1: 'Freddy',
                apellido: 'Tapia',
                edad: 25,
                ecuatoriano: true,
                genero: 'M',
                ciudad: 'Quito',
                direccion: {
                    calle: 'Av. America',
                    barrio: ":La Gasca",
                    numeracion: "2343"
        }
    }
    console.log(e4.direccion);
    console.log(e4.direccion.barrio);

    const {edad:ed,direccion}=e4;
    console.log(ed);
    console.log(direccion);
    const {calle} = direccion;
    console.log(calle);

    const {direccion:{barrio,calle:c1,numeracion}}=e4;
    console.log(barrio);
    console.log(c1);
    console.log(numeracion);
    

}


function imprime([a,b,c]){
    console.log(a);
    console.log(b);
    console.log(c);
}

class Tarea{
    mensaje(){
        // console.log("mensaje desde tarea")
        debugger;
        let n,r,c=1,msg="",m
        n = document.getElementById("n").value
        m = document.getElementById("msg").value
        n = parseInt(n)
        r = document.getElementById("resp")

        while (c <= n){
            msg = msg + m+"<br>"
            c=c+1
        }
        r.innerHTML = msg

    }
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    PnmNn2() {
        let n = parseInt(document.getElementById("n").value);
        let r = document.getElementById("resp");
        let resultado = "";

        for (let i = 1; i <= n; i++) {
        if (i % 7 === 0) {
          resultado += i + " es múltiplo de 7<br>";
        } 
       }

      r.innerHTML = resultado;
    }

    
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
     PnmdchN3(){
      let n = parseInt(document.getElementById("n").value);
      let hasta = parseInt(document.getElementById("hasta").value);
      let r = document.getElementById("resp");
      let resultado = "";

      for (let i = 1; i <= hasta; i++) {
      if (i % n === 0) {
        resultado += i + " es múltiplo de "+n+"<br>";
      } 
     }

      r.innerHTML = resultado;
    }

    PlmodNn4() {
      let ingreso = document.getElementById("ingreso").value;
      let numerosIngresados = ingreso.split(',').map(num => parseInt(num.trim()));
      let numerosPositivos = [];
      for (let i = 0; i < numerosIngresados.length; i++) {
          if ((numerosIngresados[i]) && numerosIngresados[i] > 0) {
              numerosPositivos.push(numerosIngresados[i]);
          }
      }
      let resultadoDiv = document.getElementById("resp");
      if (numerosPositivos.length > 0) {
          resultadoDiv.innerHTML = "Los números positivos son: " + numerosPositivos.join(', ');
      } else {
          resultadoDiv.innerHTML = "No se ingresaron números positivos.";
      }
    }

    PlnpdNn5(){
      let ingreso = document.getElementById("ingreso").value;
            let numerosIngresados = ingreso.split(',').map(num => parseInt(num.trim()));
            let numerosPares = [];

            for (let i = 0; i < numerosIngresados.length; i++) {
                if (!isNaN(numerosIngresados[i]) && numerosIngresados[i] % 2 === 0) {
                    numerosPares.push(numerosIngresados[i]);
                }
            }

            let resultadoDiv = document.getElementById("resp");
            if (numerosPares.length > 0) {
                resultadoDiv.innerHTML = "Los números pares son: " + numerosPares.join(', ');
            } else {
                resultadoDiv.innerHTML = "No se ingresaron números pares.";
            }
      
    }

    Plddcn6(){
      let n = parseInt(document.getElementById("n").value);
        let r = document.getElementById("resp");
        let resultado = "";
        let divisores = [];
        for (let i = 1; i <= n; i++) {
          if (n % i === 0) {
              divisores.push(i);
          }
      }

      resultado += divisores.join(', ') + '</p>';

      r.innerHTML = resultado;
    }

    Pltds7(){
        /*debugger;

        let n,r,c=1,tabla="",m,suma
        n = document.getElementById("n").value
        tabla = document.getElementById("tabla").value
        tabla = parseInt(tabla)
        n = parseInt(n)
        r = document.getElementById("resp")

        while (c <= n) {
          suma = tabla + c;
          resultado += tabla + " + " + c + " = " + suma + "<br>";
          c++;
      }

      r.innerHTML=resultado;*/
      let n = parseInt(document.getElementById("n").value);
      let tabla = parseInt(document.getElementById("tabla").value);
      let r = document.getElementById("resp");
      let resultado = "";
      let suma;
      let c = 1;

      while (c <= n) {
          suma = tabla + c;
          resultado += tabla + " + " + c + " = " + suma + "<br>";
          c++;
      }

      r.innerHTML = resultado;
    }

    Pctdm8(){
      let n = parseInt(document.getElementById("n").value);
      let tabla = parseInt(document.getElementById("tabla").value);
      let r = document.getElementById("resp");
      let resultado = "";
      let producto;
      let c = 1;

      while (c <= n) {
        producto = tabla * c;
        resultado += tabla + " * " + c + " = " + producto + "<br>";
        c++;
      }

      r.innerHTML = resultado;

    }

    Plncedn9(){
      let numero1 = parseInt(document.getElementById('numero1').value);
     let numero2 = parseInt(document.getElementById('numero2').value);
     let inicio = Math.min(numero1, numero2);
     let fin = Math.max(numero1, numero2);

     let numerosComprendidos = [];
      for (let i = inicio + 1; i < fin; i++) {
        numerosComprendidos.push(i);
      }

      let resultado = document.getElementById('resultado');
      if (numerosComprendidos.length > 0) {
        resultado.innerHTML = "Números comprendidos entre " +numero1+ "y" +numero2+ ":" +numerosComprendidos.join(', ');
      } else {
        resultado.innerHTML = "No hay números comprendidos entre " +numero1+ "y" +numero2+".";
     }
    }

    Plnpcedn10(){
      const numero1 = parseInt(document.getElementById('numero1').value);
      const numero2 = parseInt(document.getElementById('numero2').value);
      let inicio = Math.min(numero1, numero2);
      let fin = Math.max(numero1, numero2);
      let numerosParesComprendidos = [];
      for (let i = inicio + 1; i < fin; i++) {
        if (i % 2 === 0) {
            numerosParesComprendidos.push(i);
        }
      }
      let resultado = document.getElementById('resultado');
      if (numerosParesComprendidos.length > 0) {
        resultado.innerHTML = "Números comprendidos entre " +numero1+ "y" +numero2+ ":" +numerosParesComprendidos.join(', ');;
      } else {
        resultado.innerHTML = "No hay números comprendidos entre " +numero1+ "y" +numero2+".";
      }
    }

    Idena11(){
        let numeros = [];

              let ingreso = document.getElementById("ingreso").value;
              let numerosIngresados = ingreso.split(',');
              let resultadoDiv = document.getElementById("resp");
              if (numerosIngresados.length >5 ) {
                resultadoDiv.innerHTML = "No se pueden agregar más de 5 números.";
              }else{
                for (let i = 0; i < numerosIngresados.length; i++) {
                    let numero = parseInt(numerosIngresados[i]);
                    numeros.push(numero); 
                }
                resultadoDiv.innerHTML = "Los datos del areglo son: " + numeros.join(', ');
            }
    }
    

    Np12() {
          
               let numeros = [];

              let ingreso = document.getElementById("ingreso").value;
              let numerosIngresados = ingreso.split(',');
              let resultadoDiv = document.getElementById("resp");
              if (numerosIngresados.length > 10) {
                resultadoDiv.innerHTML = "No se pueden agregar más de 10 números.";
              }else{
                for (let i = 0; i < numerosIngresados.length; i++) {
                    let numero = parseInt(numerosIngresados[i]);
                    if (numero % 2 === 0) {
                        numeros.push(numero);
                    }
                }

                resultadoDiv.innerHTML = "Números pares: " + numeros.join(', ');
            }

    }

    Sdle13(){
       
            let ingreso = document.getElementById("ingreso").value;
            let numerosIngresados = ingreso.split(',').map(Number);
            let resultadoDiv = document.getElementById("resp");

            if (numerosIngresados.length > 8) {
                resultadoDiv.innerHTML = "No se pueden agregar más de 8 números.";
            } else {
                let suma = 0;
                for (let i = 0; i < numerosIngresados.length; i++) {
                    suma += numerosIngresados[i];
                }
                resultadoDiv.innerHTML = "La suma de los números es: " + suma;
            }
        
    }


    Pdle14(){
        let ingreso = document.getElementById("ingreso").value;
            let numerosIngresados = ingreso.split(',').map(Number);
            let resultadoDiv = document.getElementById("resp");

            if (numerosIngresados.length > 6) {
                resultadoDiv.innerHTML = "No se pueden agregar más de 6 números.";
            } else {
                let suma = 0;
                for (let i = 0; i < numerosIngresados.length; i++) {
                    suma += numerosIngresados[i];
                }
                let promedio = suma / numerosIngresados.length;
                resultadoDiv.innerHTML = "La suma de los números es: " + suma+ "<br>" + "El promedio de los números es: " + promedio;
            }
        
    }

    Mynn15(){
        let input = document.getElementById("ingreso").value;
        let numeros = input.split(",").map(Number);
        let resultDiv = document.getElementById("resp");

     
        if (numeros.length > 7) {
            resultDiv.innerHTML = "No se pueden ingresar mas de 7 numeros.";
        }

        
          let minimo = numeros[0];
          let maximo = numeros[0];

          
            for (let number of numeros) {
            if (number < minimo) {
            minimo = number;
            } else if (number > maximo) {
             maximo = number;
            }
        }

        resultDiv.innerHTML = "El número mayor es: " + maximo + "<br>" + "El número menor es: " + minimo ;
    }

    Mypn16(){
        
            
            let input = document.getElementById("ingreso").value;
            let numeros = input.split(",").map(Number);
            let resultadoDiv = document.getElementById("resp");
          
            
            if (numeros.length >10) {
              resultadoDiv.innerHTML = "No se pueden ingresar mas de 10 numeros.";
            
            }
          
            let positivo = [];
            let negativo = [];
          
            for (let i = 0; i < numeros.length; i++) {
              if (numeros[i] > 0) {
                positivo.push(numeros[i]);
              } else if (numeros[i] < 0) {
                negativo.push(numeros[i]);
              }
            }
              console.log (positivo)
              console.log (negativo)
             resultadoDiv.innerHTML = "los numeros positivos son: " +positivo+ "<br>"+"los numeros negativo son: "+negativo ;     
    }

    Codun17(){
      //hecho por chatgpt debido a que no lo entendi 
      const numerosInput = document.getElementById('numeros').value;
      const numerosArray = numerosInput.split(',').map(Number);

      // Verificar que se hayan ingresado exactamente 10 números
      if (numerosArray.length !== 10 || numerosArray.some(isNaN)) {
        alert("Por favor, ingrese exactamente 10 números válidos separados por comas.");
        return;
      }

      // Obtener el número específico a buscar
      const numeroEspecifico = parseInt(document.getElementById('numero-especifico').value);

      // Verificar que el número específico sea válido
      if (isNaN(numeroEspecifico)) {
        alert("Por favor, ingrese un número válido a buscar.");
        return;
      }

       // Contar cuántas veces aparece el número específico en el arreglo
      let contador = 0;
      for (let i = 0; i < numerosArray.length; i++) {
        if (numerosArray[i] === numeroEspecifico) {
            contador++;
        }
      }

       const resultado = document.getElementById('resultado');
        resultado.innerHTML = `<p>El número ${numeroEspecifico} aparece ${contador} veces en el arreglo.</p>`;
    }

    Neoi18(){
      let numeros = [];

              let ingreso = document.getElementById("ingreso").value;
              let numerosIngresados = ingreso.split(',');
              let resultadoDiv = document.getElementById("resp");
              if (numerosIngresados.length >5 ) {
                resultadoDiv.innerHTML = "No se pueden agregar más de 5 números.";
              }else{
                for (let i = 0; i < numerosIngresados.length; i++) {
                    let numero = parseInt(numerosIngresados[i]);
                    numeros.push(numero);  
                }
                numeros.reverse()

                resultadoDiv.innerHTML = "Los datos del areglo en reversa son: " + numeros.join(', ');
            }

    }

    Emquvd19(){
      /*let numeros = [];

             // Obtener el valor del input y separarlo en un array de números
              let ingreso = document.getElementById("ingreso").value;
              let numerosIngresados = ingreso.split(',');
              let n =  document.getElementById("n").value;
              let resultadoDiv = document.getElementById("resp");
              if (numerosIngresados.length >8 ) {
                resultadoDiv.innerHTML = "No se pueden agregar más de 8 números.";
              }else{
                for (let i = 0; i < numerosIngresados.length; i++) {
                    let numero = parseInt(numerosIngresados[i]);
                    numeros.push(numero);
                 
                    
                }

                // Mostrar los números pares en el div 'resp'
                resultadoDiv.innerHTML = "Los datos del areglo en reversa son: " + numeros.join(', ');
            }*/
                const numerosInput = document.getElementById('msg').value;
                const numeroConsultar = parseInt(document.getElementById('n').value);
                let numerosArray = numerosInput.split(',').map(Number);
                let numerosMayores = numerosArray.filter(numero => numero > numeroConsultar);  
                const respuestaDiv = document.getElementById('resp');
                respuestaDiv.innerHTML = `Los números mayores que ${numeroConsultar} son: ${numerosMayores.join(', ')}`;
            }

    Ed20(){
     
        const numerosInput = document.getElementById('numeros').value;
    
        const numerosArray = numerosInput.split(',').map(Number);
    
        const ceros = numerosArray.filter(numero => numero === 0);
    
        const respuestaDiv = document.getElementById('resp');
        if (ceros.length > 0) {
            respuestaDiv.textContent = `Los ceros encontrados son: ${ceros.join(', ')}`;
        } else {
            respuestaDiv.textContent = 'No se encontraron ceros en el arreglo.';
        }
    

    }

    Iymcc21(){

      let cadena = document.getElementById('cadena').value;
    
      let resultado = document.getElementById('resultado');


      resultado.innerHTML = '';

        for (let i = 0; i < cadena.length; i++) {
        let parrafo = document.createElement('p');
        parrafo.textContent = cadena[i];
        resultado.appendChild(parrafo);
       }
    }

    Cv22(){
      let frase = document.getElementById("frase").value
      let cv=0
      for(let i=0;i < frase.length;i++){
          if (frase[i]== "a" || frase[i]== "e" || frase[i]== "i" || frase[i]== "o" || frase[i]== "u" ) {
             cv=cv+1
          }
          
      }
      console.table({cv})
      let resp = document.getElementById("resp")
      resp.textContent="cantidad de vocales es  "+ cv
    }

    Mcepp23(){
      let cadena = document.getElementById('cadena').value;

        let resultado = document.getElementById('resultado');

        resultado.innerHTML = '';

         for (let i = 0; i < cadena.length; i += 2) {
        let parrafo = document.createElement('p');
        parrafo.textContent = cadena[i];
        resultado.appendChild(parrafo);
      }
    }

    Cam24(){
      let cadenaInput = document.getElementById("ingreso").value;

      let cadenaMayusculas = cadenaInput.toUpperCase();

      let respuestaDiv = document.getElementById('resp');
      respuestaDiv.textContent = "La cadena en mayúsculas es: " +cadenaMayusculas;
    }

    Cp25(){
      let num = document.getElementById("msg").value;
      let resp = document.getElementById('resp');
  
      let frase = '';
      let palabras = 0;
      frase = num;
  
      frase = frase.trim();
  
      if (frase === '') {
  
        return 0;
      }
      palabras = frase.split(/\s+/);
      palabras = palabras.length;
  
      resp.textContent = "En su frase ingresada hay "+palabras+" palabras ";
  
    }

    Pepc26(){
      let cadena = document.getElementById('cadena').value;
    
       let primerCaracter = cadena.charAt(0);
       let longitudCadena = cadena.length;
       let resultadoCadena = primerCaracter.repeat(longitudCadena);
       let resultado = document.getElementById('resultado');
       resultado.innerHTML = resultadoCadena +"<br>";
    }
    

    Ilc27(){
      
      let num = document.getElementById("frase").value;
      let resp = document.getElementById("resp");
  
      let frase = "";
      num = num.toLowerCase().split("").reverse().join("");
      frase = num.charAt(0).toUpperCase();
  
      resp.textContent = frase + num.slice(1);
    }


    Cc29(){
        let num = document.getElementById("frase").value;
        let resp = document.getElementById("resp");
    
        let cadena = "";
        cadena = num;
      
    
        resp.textContent = "La suma de los digitos de la cadena es: " + cadena.length;
      }

      Ee30(){
          let cadenaInput = document.getElementById("ingreso").value
          let cadenaSinEspacios = cadenaInput.replace(/\s/g, '');
          let respuestaDiv = document.getElementById("resp");
          respuestaDiv.textContent= "La cadena sin espacios es: " + cadenaSinEspacios;
      
      
      }
 

    


    

   

}

let tarea = new Tarea() //crea una variable igual que la clase
// tarea.mensaje()

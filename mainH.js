var tabla = (document.getElementById("house-data"));
var arrayMiembros = data.results[0].members;
var arrayEstados = data.results[0].members.state;
var mi_tabla_body;
var seleccion = "All";
var array_verificados=['R','D','I'];
var array_estados = ["AK", "AL", "AR","AZ","CA", "CO", "CT", "DE", "FL", "GA",  "HI", "IA", "ID", "IL", "IN",  "KS", "KY", "LA", "MA", "MD", "ME", "MI",
    "MN", "MO", "MS", "MT","NC", "ND",  "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC", "SD",
    "TN", "TX",  "UT", "VA",  "VT",  "WA", "WI",  "WV", "WY"];


armar_tabla(arrayMiembros);

function armar_tabla(miembros){
    mi_tabla_body = document.createElement("tbody");


for(var j = 0; j < miembros.length; j++) { //Crea las celdas
    


    let mi_fila = document.createElement("tr"); //Crea elementos tr
   


    let mi_celda = document.createElement("td"); //Crea elementos td
   
    // Crea TextNode
    let texto;
    if(miembros[j].middlename!=null){
        texto = document.createTextNode(miembros[j].first_name + " "+ miembros[j].middlename+" "+miembros[j].last_name);
    }else{
        texto = document.createTextNode(miembros[j].first_name + " "+miembros[j].last_name);
    }

    let a = document.createElement('a');
       a.appendChild(texto);
       a.href=miembros[j].url; 
       
       mi_celda.appendChild(a);//Agrega el textNode creado dentro de la celda td
       
       mi_fila.appendChild(mi_celda);//Agrega el textNode creado dentro de la fila tr
       
       mi_celda = document.createElement("td");//Crea un elemento td
       
       
      
      texto = document.createTextNode(miembros[j].party);//Crear TextNode para los partidos
       
       mi_celda.appendChild(texto);
      
       mi_fila.appendChild(mi_celda);
 
       mi_celda = document.createElement("td");
       
       
       
       
      
       texto = document.createTextNode(miembros[j].state);//Crea TextNode para los estados
       
       mi_celda.appendChild(texto);
       
       mi_fila.appendChild(mi_celda);
       
       mi_celda = document.createElement("td");
       
       
       
       
        texto = document.createTextNode(miembros[j].seniority);//Crea TextNode para el tiempo de antiguedad
       
       mi_celda.appendChild(texto);
       
       mi_fila.appendChild(mi_celda);
     
       mi_celda = document.createElement("td");
      
       
       
       
       texto = document.createTextNode(miembros[j].votes_with_party_pct+"%");//Crea TextNode para el % de votos
      
        mi_celda.appendChild(texto);
      
       mi_fila.appendChild(mi_celda);
      
       mi_tabla_body.appendChild(mi_fila);

   }//fin for
   
   // 
   tabla.appendChild(mi_tabla_body); //Construye la tabla, con cada TextNode que lleno las celdas.

}


function verificarPartido(mi_checkBox){
    console.log(mi_checkBox.value)
    mi_tabla_body.innerHTML="";//vaciamos el body porque la tabla va a cambiar
    mi_checkBox.checked ? array_verificados.push(mi_checkBox.value) : array_verificados.splice(array_verificados.indexOf(mi_checkBox.value),1);
    console.log(array_verificados)
    filtrar(arrayMiembros);
    //con el array de chequeados actualizado---- llamo a filtrar
}


function verificarEstado(mi_opcion){
    mi_tabla_body.innerHTML="";//vaciamos el body porque la tabla va a cambiar
    seleccion = mi_opcion.value;
    filtrar(arrayMiembros);
    //con el array de chequeados actualizado llamo a filtrar
}


function filtrar(miembros){
   
    let filtradoIndividual = []; //corresponde a cada filtro de forma individual
    
    
    
    miembros.forEach(miembro => { //Constru. del elemento (R, D, I)
     
        if(seleccion === "All"){  //Es  importante la asignacion //Si corresponde, toma en cuenta el partido
            filtradoIndividual = miembros.filter(miembro => array_verificados.includes(miembro.party));

           
            
        }else{ //Si no,toma en cuenta partido y estado. 
            filtradoIndividual = miembros.filter(miembro => miembro.state===seleccion && array_verificados.includes(miembro.party));
            
            

        }
       
    
});

armar_tabla(filtradoIndividual)
}





const aplicacion = document.querySelector('.container')




const cargaDatos = async () => {

    try {
        const repuesta = await fetch('https://randomuser.me/api/?gender=male');
        //console.log(repuesta);

       const objPersona = await repuesta.json();
       //console.log(objPersona);
       //console.log(objPersona.results[0].name.first); //Nombre
       //console.log(objPersona.results[0].name.last);//Apellido
       //console.log(objPersona.results[0].location.street.name);         //Domicilio
       //console.log(objPersona.results[0].location.street.number);    //Numero de calle
       //console.log(objPersona.results[0].location.city);             //ciudad
       //console.log(objPersona.results[0].location.state);            //Estado provincia
       //console.log(objPersona.results[0].location.country);         //Pais
       //console.log(objPersona.results[0].location.postcode);        //Codigo postal
       //console.log(objPersona.results[0].cell);                     //Telefono
       //console.log(objPersona.results[0].email);                     //Correo electronico
       //console.log(objPersona.results[0].picture.medium); 

       document.getElementById('imagenApi').src= objPersona.results[0].picture.large;       //imagen

       document.getElementById('nomApellido').innerHTML=objPersona.results[0].name.first + " " +objPersona.results[0].name.last; //Nombre y Apellido

       //Domicilio,altura,ciudad,pais.
       document.getElementById('domicilio').innerHTML=objPersona.results[0].location.street.name + " N° "+objPersona.results[0].location.street.number+", "+ objPersona.results[0].location.postcode+", "+objPersona.results[0].location.city + ", "+objPersona.results[0].location.country;

       document.getElementById('edad').innerHTML=objPersona.results[0].dob.age;

       document.getElementById('correo').innerHTML=objPersona.results[0].email;

       document.getElementById('telefono').innerHTML=objPersona.results[0].cell;
        
       document.getElementById('nacionalidad').innerHTML=objPersona.results[0].nat;


    }catch(error){
        console.log(error);
    }
    

}

cargaDatos();
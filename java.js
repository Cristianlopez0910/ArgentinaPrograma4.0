const aplicacion = document.querySelector('.container')

const cargaDatos = async () => {

    try {
        const repuesta = await fetch('https://randomuser.me/api/?gender=male');
        //console.log(repuesta);

       const objPersona = await repuesta.json();
       //console.log(objPersona);
       
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

//Botones configuracion 
//Reemplazar texto y cambiar color
document.getElementById('mostrarTexto').onclick = function(){
    document.getElementById("datosPersonal").innerHTML ="GRACIAS POR VISITAR MI CV ONLINE!!!";
    document.getElementById("datosPersonal").style.webkitTextFillColor='#F21710';
}

//Cambiar foto
document.getElementById('cambiarFoto').onclick = function(){
document.getElementById("imagenApi").src='imagen/descarga.png';
}
//Cambiar color de texto
document.getElementById('cambiarColorTexto').onclick = function(){
    document.getElementById("bodyColorTExto").style.webkitTextFillColor='#24E24F';
}
document.getElementById('cambiarTemaColor').onclick = function(){
    document.getElementById('headerColor').style.background= '#4710F2';
    document.getElementById('cajaLaboral').style.background= '#4710F2';
    document.getElementById('cajaInformacion').style.background= '#4710F2';
    document.getElementById('footer').style.background= '#4710F2';
}
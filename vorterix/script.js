function mostrarAgradecimiento(event) {
    event.preventDefault();

  
    const nombre = document.getElementById('Nombre').value;
    const correo = document.getElementById('mail').value;

    
    document.getElementById('nombre-placeholder').textContent = nombre;
    document.getElementById('mail-placeholder').textContent = correo;

   
    document.querySelector('.grillaform').style.display = 'none';

  
    document.getElementById('agradecimiento').style.display = 'flex';
}

function volverAlInicio() {
    
    document.getElementById('agradecimiento').style.display = 'none';
    
 
    document.querySelector('.grillaform').style.display = 'block';


    document.getElementById('formulario').reset();
}

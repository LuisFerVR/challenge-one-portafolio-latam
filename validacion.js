//Haz tú validación en javascript acá
function fnGuardarContacto(){
    let IContacto = [];
    let nombre = document.getElementById('inputNombre').value;
    let correo =  document.getElementById("inputCorreo").value;
    let asunto = document.getElementById("inputAsunto").value;
    let inputMsj = document.getElementById("inputMsj").value;

    var expemail = new RegExp('^(.+)@(\\S+)$');
    if(nombre,correo,asunto,inputMsj!=''){
        if(nombre<=50)
        {
            IContacto.push(nombre)
        
        }else{
            alert("Ingresa tu nombre no mayor a 50 caracteres");
        };

        if(expemail.test(correo))
        {
            IContacto.push(nombre)
        
        }else{
            alert("Ingresa un correo válido con @ y ., ejmeplo: luis@gmail.com");
        };

        if(asunto<=50)
        {
            IContacto.push(nombre)
        
        }else{
            alert("Ingresa un asunto no mayor a 50 caracteres");
        };

        if(inputMsj<=300)
        {
            IContacto.push(nombre)
        
        }else{
            alert("Ingresa un mensaje no mayor a 300 caracteres");
        };
        
        let json = {
            persona:IContacto
        }
        console.log(json);
    }
}
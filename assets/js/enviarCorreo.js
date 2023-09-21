//emailjs.init("Yk-L5krPT4RziT7DN"); // Reemplaza "tu_usuario_emailjs" con tu clave de usuario de EmailJS

document.getElementById("form-contact").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const name = document.getElementById("name_contact").value;
    const email = document.getElementById("email_contact").value;
    const message = document.getElementById("message_contact").value;

    var data = {
        service_id: 'service_uyre0bs',
        template_id: 'template_2kpqp58',
        user_id: 'Yk-L5krPT4RziT7DN',
        template_params: {
            from_name: name,
            from_email: email,
            message: message
        }
    };
     
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function() {
        alert('¡Tu correo fue enviado, con exito!');
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });

    document.getElementById("form-contact").reset();

});
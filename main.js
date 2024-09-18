const Cadena = "!@#$'*_(ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.%^&)"
const botonGenerar = document.getElementById('generar');
const contrasena = document.getElementById('contrasena');
const botonLimpiar = document.getElementById('botonLimpiar');
botonLimpiar.addEventListener('click', () => {
    contrasena.value = '';
    document.getElementById('cantidad').value = 1
});
botonGenerar.addEventListener('click', () => {
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const pwd = [];
    if (cantidad <= 0) {
        alert('Debe ingresar una cantidad mayor a 0');
        return;
    }



    let contraseña = '';
    for (let j = 0; j < cantidad; j++) {
        // Selección aleatoria de caracteres de la cadena Cadena para la contraseña
        contraseña += Cadena.charAt(Math.floor(Math.random() * Cadena.length));
        // Se añade un espacio en caso de que la longitud de la contraseña sea par
    }
    pwd.push(contraseña);
    contrasena.value = pwd.join('\n');
    verificaPwd(pwd.join('\n'));  // Añadimos la función de verificación de contraseña aquí.  // Aquí debería ir la función que verifica la contraseña según los requisitos especificados.  // Por ejemplo: const regexCaracteres = /\w/; y alert("ok") si cumple y alert("error") si no cumple.  // La función debe ser llamada en el evento click del botón
});

function verificaPwd(pwd) {
    // verifica caracteres

    const letras = /[a-zA-z]/;
    const numeros = /[0-9]/;
    const especial = /[^a-zA-Z\d]/
    let strength = 0
    let message = ""
    let tips = [];

    if (pwd.length > 11) {
        strength += 1;
    } else {
        tips.push("Debe tener al menos 12 caracteres");
    }
    if (letras.test(pwd)) {
        strength += 1;
    } else {
        tips.push("Debe incluir al menos una letra mayúscula o minúscula");
    }
    if (numeros.test(pwd)) {
        strength += 1;
    } else {
        tips.push("Debe incluir al menos un número");
    }
    if (especial.test(pwd)) {
        strength += 1;
    } else {
        tips.push("Debe incluir al menos un carácter especial");
    }

    if (strength === 0) {
        message = "Constraseña muy débil"
    } else if (strength === 1) {
        message = "Constraseña débil"
    } else if (strength === 2) {
        message = "Constraseña media"
    } else if (strength === 3) {
        message = "Constraseña fuerte"
    } else {
        message = "Constraseña muy fuerte"
    }

    document.getElementById('mess').textContent = message;
    tips.forEach(ele => {
        document.getElementById('mess').insertAdjacentHTML('beforeend', `<li>${ele}</li>`)
    })
}









<template>
    <div class="contenedor">
        <div class="form">
            <form>
                <h2>Registrarse</h2>
                <label for="name">Nombre:</label>
                <input type="text" id="name" placeholder="Escribe tu nombre completo">

                <label for="email">Correo:</label>
                <input type="text" id="email" placeholder="Escribe tu correo">

                <label for="password">Contraseña:</label>
                <input type="text" id="password" placeholder="Escribe tu contraseña">

                <label for="confirmPassword">Confirmar contraseña:</label>
                <input type="text" id="confirmPassword" placeholder="Confirma la contraseña">

                <div class="contenedorCheckbox">
                    <div class="typecheckbox">
                        <input type="checkbox" id="terms">
                    </div>
                    
                    <div class="parrafoTerms">
                        <p class="check">Aceptar términos y condiciones</p>
                    </div>
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}
.contenedor {
    background-image: url('https://i.pinimg.com/1200x/d3/7e/3e/d37e3ebd66d484d4af0c6e5750548248.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

form {
    background: #333;
    padding: 50px 30px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(255, 255, 255, 0.53);
    width: 400px;
}

form h2 {
    text-align: center;
    margin-bottom: 20px;
    color: white;
}

label {
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
    color: #fff;
}

input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    outline: none;
    transition: border 0.3s;
    background: #333;
}

input:focus {
    border-color: #1d4ed8;
}

button {
    width: 100%;
    padding: 10px;
    background: #1d4ed8;
    border: none;
    color: #fff;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s;
}

button:hover {
    background: #2563eb;
}

.contenedorCheckbox {
    display: flex;
    margin: 0px 0px 15px 5px;
    gap: 8px;
    font-size: 14px;
}

.contenedorCheckbox .check{
    color: #fff;
    font-size: 12px;
    cursor: pointer;
}

.contenedorCheckbox input[type="checkbox"] {
    accent-color: #1d4ed8;
    transform: scale(1.1);
}

</style>
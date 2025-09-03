<script setup>
import { ref } from 'vue';
import { useRegistroStore } from '../../stores/registro.js';
import { useRouter } from 'vue-router';

const registroStore = useRegistroStore()
const router = useRouter()

// Variables de los campos
const nombre = ref('')
const correo = ref('')
const isPwd = ref(true)
const password = ref('')
const confirmContraseña = ref('')
const acceptTerms = ref(false)

// Errores de los campos
const errorCorreo = ref('')
const errorNombre = ref('')
const errorPassword = ref('')
const errorConfirmPassword = ref('')
const errorCheckbox = ref('')


// Validacion del nombre
const validarNombre = () => {
    if (!nombre.value.trim()) {
        errorNombre.value = 'El nombre es obligatorio'
    } else {
        errorNombre.value = ''
    }
};

// Validacion del correo
const validarEmail = () => {
    const regla = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correo.value) {
        errorCorreo.value = 'El correo es obligatorio'
    } else if (!regla.test(correo.value)) {
        errorCorreo.value = 'Por favor, ingresa un correo válido.'
    } else {
        errorCorreo.value = ''
    }
};

// Validacion de la contraseña
const validarPassword = () => {
    if (!password.value) {
        errorPassword.value = 'La contraseña es obligatoria'
    } else if (password.value.length < 8){
        errorPassword.value = 'La contraseña debe tener al menos 8 caracteres'
    } else if (!/[A-Z]/.test(password.value)){
        errorPassword.value = 'La contraseña debe incluir al menos una mayúscula'
    } else if (!/[a-z]/.test(password.value)){
        errorPassword.value = 'La contraseña debe incluir al menos una minuscula'
    } else if (!/[0-9]/.test(password.value)){
        errorPassword.value = 'La contraseña debe incluir al menos un número'
    } else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password.value)) {
        errorPassword.value = 'La contraseña debe incluir al menos un símbolo';
    } else {
        errorPassword.value = ''
    }
};

// Validacion que coincidan las contraseñas
const validarConfirmContraseña = () => {
    if (confirmContraseña.value !== password.value) {
        errorConfirmPassword.value = 'La contraseña no coincide'
    } else {
        errorConfirmPassword.value = ''
    }
};

// Validacion del Checkbox
const validarCheckbox = () => {
    if (!acceptTerms.value) {
        errorCheckbox.value = 'Debes aceptar los terminos y las condiciones'
    } else {
        errorCheckbox.value = ''
    }
};

const validarFormulario = () => {
    // Forzamos validacion en los campos
    validarNombre();
    validarEmail();
    validarPassword();
    validarConfirmContraseña();
    validarCheckbox();



    // Verificar si hay errores
    const hayErrores = !!(
        errorNombre.value ||
        errorCorreo.value ||
        errorPassword.value ||
        errorConfirmPassword.value ||
        errorCheckbox.value

    )

    if (!hayErrores) {
        registroStore.registrar({
            nombre: nombre.value,
            correo: correo.value,
            password: password.value
        });
        alert('Registro Exitoso')
        console.log('Usuario registrado: ', registroStore.usuario);
        
        // Redireccionamiento
        router.push('/login');
    }
};

</script>

<template>
    <div class="contenedor">
        <div class="form">
            <form @submit.prevent="validarFormulario">
                <h2>Registrarse</h2>
                <label for="name">Nombre:</label>
                <input
                v-model="nombre"
                type="text" 
                id="name" 
                placeholder="Escribe tu nombre completo"
                @blur="validarNombre"
                :class="{ 'error-input': errorNombre }"
                >
                <span v-if="errorNombre" class="error">
                    {{ errorNombre }}
                </span>

                <label for="email">Correo:</label>
                <input
                v-model="correo"
                type="email" 
                id="email"
                placeholder="Escribe tu correo"
                @input="validarEmail"
                @blur="validarEmail"
                :class="{ 'error-input': errorCorreo }"
                >

                <span v-if="errorCorreo" class="error">{{ errorCorreo }}</span>

                <label for="password">Contraseña:</label>
                <div class="containerPassword">
                    <input
                    placeholder="Escribe tu contraseña"
                    v-model="password" 
                    id="password"
                    :type="isPwd ? 'password' : 'text'"
                    @blur="validarPassword"
                    :class="{ 'error-input': errorPassword }"
                    >

                    <span class="toggle-password" @click="isPwd = !isPwd">
                        {{ isPwd ? '👁️' : '🙈' }}
                    </span>
                </div>
                <small style="color: #bbb; font-size: 11px; display: block; margin-bottom: 10px;">
                    Mín. 8 caracteres, mayúscula, minúscula, número y símbolo.
                </small>
                <span v-if="errorPassword" class="error">{{ errorPassword }}</span>

                <label for="confirmPassword">Confirmar contraseña:</label>
                <input
                v-model="confirmContraseña"
                type="password" 
                id="confirmPassword"
                placeholder="Confirma la contraseña"
                @blur="validarConfirmContraseña"
                :class="{ 'error-input': errorConfirmPassword }"
                >
                <span v-if="errorConfirmPassword" class="error">{{ errorConfirmPassword }}</span>

                <div class="contenedorCheckbox">
                    <div class="typecheckbox">
                        <input 
                        v-model="acceptTerms"
                        type="checkbox" 
                        id="terms"
                        @blur="validarCheckbox"
                        :class="{ 'error-input': errorCheckbox }"
                        >
                    </div>
                    
                    <div class="parrafoTerms">
                        <p class="check">Aceptar términos y condiciones</p>
                    </div>
                </div>
                <span v-if="errorCheckbox" class="error">{{ errorCheckbox }}</span>

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
    background: #fff;
    font-size: 14px;
}

input::placeholder {
    color: #aaa;
}

input:focus {
    border-color: #1d4ed8;
}

/* Estilos para inputs con error */
input.error-input {
    border-color: #ff4444;
}

/* Mensajes de errores */
.error {
    font-size: 12px;
    color: #ff4444;
    margin-top: -5px;
    margin-bottom: 10px;
    display: block;
    text-align: left;
}

/* Contenedor del input + ojo */
.containerPassword {
    position: relative;
    display: inline-block;
    width: 100%;
}

.containerPassword input {
    padding-right: 50px;
}

.toggle-password {
    position: absolute;
    right: 12px;
    top: 10px;
    cursor: pointer;
    font-size: 18px;
    user-select: none;
    color: #888;
}

.toggle-password:hover {
    color: #1d4ed8;
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
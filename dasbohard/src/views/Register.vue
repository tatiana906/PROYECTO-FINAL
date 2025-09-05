<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import DialogAlert from '../components/DialogAlert.vue';
import { useRegistroStore } from '../stores/registro.js';

const router = useRouter()
const registroStore = useRegistroStore();

// Variables de los campos
const rol = ref('usuario') // Por defecto
const nombre = ref('')
const documento = ref('')
const correo = ref('')
const password = ref('')
const confirmContraseña = ref('')
const isPwd = ref(true)
const acceptTerms = ref(false)

// Errores de los campos
const errorCorreo = ref('')
const errorDocumento = ref('')
const errorNombre = ref('')
const errorPassword = ref('')
const errorConfirmPassword = ref('')
const errorCheckbox = ref('')
const errorRol = ref('')

// Variables del Dialogo
const mostrarDialogo = ref(false)
const dialogoTitulo = ref('')
const dialogoMensaje = ref('')
const dialogoTipo = ref('success')  // success, error o info

const mostraDialogoAlerta = (titulo, mensaje, tipo) => {
    dialogoTitulo.value = titulo;
    dialogoMensaje.value = mensaje;
    dialogoTipo.value = tipo;
    mostrarDialogo.value = true;
}

const onDialogoClose = () => {
    // No se necesita ninguna acción al cerrar los diálogos de error.
};

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
    if (rol.value === 'admin'){
        if (!correo.value) {
            errorCorreo.value = 'El correo es obligatorio'
        } else if (!regla.test(correo.value)) {
            errorCorreo.value = 'Por favor, ingresa un correo válido.'
        } else {
            errorCorreo.value = ''
        }
    } else {
        errorCorreo.value = '' // no necesario para usuarios
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
    } else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\\/?]/.test(password.value)) {
        errorPassword.value = 'La contraseña debe incluir al menos un símbolo';
    } else {
        errorPassword.value = ''
    }
};

// Validacion del documento
const validarDocumento = () => {
    if (rol.value === 'usuario'){
        if (!documento.value) {
            errorDocumento.value = 'El documento es obligatorio'
        } else if (documento.value.length < 8) {
            errorDocumento.value = 'El documento debe tener al menos 8 dígitos'
        } else {
            errorDocumento.value = ''
        }
    } else {
        errorDocumento.value = '' // no necesario para admin
    }
}

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

watch(acceptTerms, validarCheckbox);
watch(rol, () => {
    // Limpiar errores y valores al cambiar de rol
    correo.value = '';
    documento.value = '';
    errorCorreo.value = '';
    errorDocumento.value = '';
});

const validarFormulario = () => {
    // Forzamos validacion en los campos
    validarNombre();
    validarEmail();
    validarDocumento();
    validarPassword();
    validarConfirmContraseña();
    validarCheckbox();

    // Verificar si hay errores
    const hayErrores = !!(
        errorNombre.value ||
        errorCorreo.value ||
        errorDocumento.value ||
        errorPassword.value ||
        errorConfirmPassword.value ||
        errorCheckbox.value
    )

    if (hayErrores) {
        mostraDialogoAlerta(
            'Corrige los errores',
            'Revisa los campos marcados en rojo.',
            'error'
        );
        return;
    }

    const datosRegistro = {
        nombre: nombre.value,
        password: password.value,
        rol: rol.value,
    };

    if (rol.value === 'admin') {
        datosRegistro.correo = correo.value;
    } else {
        datosRegistro.documento = documento.value;
    }

    if (registroStore.registrar(datosRegistro)) {
        // Redirigir directamente al login
        router.push('/login');
    } else {
        mostraDialogoAlerta(
            'Error en el registro',
            'El correo o documento ya están registrados.',
            'error'
        );
    }
};

// Función global para reCAPTCHA
window.onRecaptchaSuccess = function() {
    console.log('✅ reCAPTCHA completado');
};

onMounted(() => {
    const interval = setInterval(() => {
        if (window.grecaptcha && document.querySelector('.g-recaptcha')) {
            window.grecaptcha.render('recaptcha', {
                'sitekey': '6Lflj74rAAAAALiARd9r40aRUQLRD2JgjGdcyKa7',
                'callback': window.onRecaptchaSuccess
            });
            clearInterval(interval)
        }
    }, 500);
});
</script>

<template>
    <div class="contenedor">
        <div class="form">
            <form @submit.prevent="validarFormulario">
                <h2>Registrarse</h2>

                <!-- Campo de Rol -->
                <label for="rol">Tipo de cuenta:</label>
                <select v-model="rol" id="rol" @change="validarEmail; validarDocumento">
                    <option value="usuario">Usuario</option>
                    <option value="admin">Administrador</option>
                </select>

                <!-- Campo de Nombre -->
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

                <!-- Campo de Correo -->
                <template v-if="rol === 'admin'">
                    <label for="email">Correo:</label>
                    <input
                        v-model="correo"
                        type="email"
                        id="email"
                        placeholder="Escribe tu correo"
                        @input="validarEmail"
                        @blur="validarEmail"
                        :class="{ 'error-input': errorCorreo }"
                    />
                    <span v-if="errorCorreo" class="error">{{ errorCorreo }}</span>
                </template>

                <!-- Campo de Documento -->
                <template v-else>
                    <label for="documento">Número de documento:</label>
                    <input
                        v-model="documento"
                        type="text"
                        id="documento"
                        placeholder="Escribe tu número de documento"
                        @input="validarDocumento"
                        @blur="validarDocumento"
                        :class="{ 'error-input': errorDocumento }"
                    />
                    <span v-if="errorDocumento" class="error">{{ errorDocumento }}</span>
                </template>

                <!-- Campo de Contraseña -->
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

                <!-- Campo de Confirmar contraseña -->
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

                <!-- Campo de Terminos y condiciones -->
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

                <div class="recaptcha-container">
                    <div
                        id="recaptcha"
                        class="g-recaptcha"
                    ></div>
                </div>

                <button type="submit">Enviar</button>
            </form>
            <DialogAlert
                v-model="mostrarDialogo"
                :title="dialogoTitulo"
                :message="dialogoMensaje"
                :tipo="dialogoTipo"
                @close="onDialogoClose"
            />
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
.recaptcha-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;
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

input, select {
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

input::placeholder, select {
    color: #aaa;
}

input:focus, select:focus {
    border-color: #1d4ed8;
}

/* Estilos para inputs con error */
input.error-input, select.error-input {
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
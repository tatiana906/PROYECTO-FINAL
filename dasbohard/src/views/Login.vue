<!-- <script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const redireccionarRegister = () => {
  router.push("/register");
};
</script> -->

<!-- <template>
    <div class="boton">
        <button @click="redireccionarRegister()">Registrar</button>
    </div>
</template> -->

<!-- <template>
    <div class="contenedor-Padre">
        <img class="fondo-imagen" src="https://wallpapers.com/images/hd/dark-pictures-vs4od12gttji7s12.jpg" alt="" />
        <div class="contenido-superior">
            <div class="titulo-inicio">
                <h3>Inicio de sesion CSTK</h3>
            </div>
            <div class="inputs">
                <label class="input-label" for="email">Correo electrónico</label>
                <input type="email" id="email" placeholder="Correo electrónico" v-model="email" @blur="validateEmail" />
                <span v-if="emailError" class="error">{{ emailError }}</span>

                <label class="input-label" for="password">Contraseña</label>
                <input type="password" id="password" placeholder="Contraseña" v-model="password"
                    @blur="validatePassword" />
                <span v-if="passwordError" class="error">{{ passwordError }}</span>

                <label class="input-label" for="confirm">Confirmar contraseña</label>
                <input type="password" id="confirm" placeholder="Confirmar contraseña" v-model="confirm"
                    @blur="validateConfirm" />
                <span v-if="confirmError" class="error">{{ confirmError }}</span>
            </div>
            <div class="botones">
                <q-btn to="/register" color="primary" label="Registro" unelevated class="btn-registro" style="
                margin-right: 16px;
                font-weight: bold;
                font-size: 16px;
                padding: 10px 30px "/>

                <q-btn to="/dashboard" color="secondary" label="Login" outline class="btn-login"
                    style="font-weight: bold; font-size: 16px; padding: 10px 30px "@submit.prevent="handleRegister"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
const confirm = ref("");

const emailError = ref("");
const passwordError = ref("");
const confirmError = ref("");

function validateEmail() {
    if (!email.value) {
        emailError.value = "El correo es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        emailError.value = "Correo inválido";
    } else {
        emailError.value = "";
    }
}

function validatePassword() {
    if (!password.value) {
        passwordError.value = "La contraseña es obligatoria";
    } else if (password.value.length < 6) {
        passwordError.value = "Mínimo 6 caracteres";
    } else {
        passwordError.value = "";
    }
}

function validateConfirm() {
    if (!confirm.value) {
        confirmError.value = "Confirma tu contraseña";
    } else if (confirm.value !== password.value) {
        confirmError.value = "Las contraseñas no coinciden";
    } else {
        confirmError.value = "";
    }
}

function handleRegister() {
    validateEmail();
    validatePassword();
    validateConfirm();
    if (!emailError.value && !passwordError.value && !confirmError.value) {
        alert("Registro válido");
    }
}
</script> -->

<template>
  <div class="contenedor-Padre">
    <img
      class="fondo-imagen"
      src="https://wallpapers.com/images/hd/dark-pictures-vs4od12gttji7s12.jpg"
      alt="Fondo oscuro"
    />

    <div class="contenido-superior">
      
      <form @submit.prevent="iniciarSesion" class="inputs">
        <div class="titulo-inicio">
          <h3>Inicio de sesión CSTK</h3>
        </div>
        <!-- Campo dinámico según rol -->
        <label class="input-label" for="identifier">
          {{ campoLabel }}
        </label>
        <input
          type="text"
          id="identifier"
          :placeholder="campoPlaceholder"
          v-model="identifier"
          @blur="validarIdentificador"
          :class="{ 'input-error': identifierError }"
        />
        <span v-if="identifierError" class="error">{{ identifierError }}</span>

        <!-- Contraseña -->
        <label class="input-label" for="password">Contraseña</label>
        <input
          type="password"
          id="password"
          placeholder="Tu contraseña"
          v-model="password"
          @blur="validarPassword"
          :class="{ 'input-error': passwordError }"
        />
        <span v-if="passwordError" class="error">{{ passwordError }}</span>

        <!-- Error general -->
        <span v-if="errorGeneral" class="error">{{ errorGeneral }}</span>

        <!-- Botones -->
        <div class="botones">
          <button type="button" @click="redireccionarRegister" class="btn-registro">
            Registro
          </button>
          <button type="submit" class="btn-login">
            Ingresar
          </button>
        </div>
      </form>
      <DialogAlert
        v-model="mostrarDialogo"
        :title="dialogoTitulo"
        :message="dialogoMensaje"
        :type="dialogoTipo"
        @close="onDialogoClose"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useRegistroStore } from '../stores/registro.js';
import DialogAlert from '../components/DialogAlert.vue';

const router = useRouter();
const registroStore = useRegistroStore();

// Campos
const identifier = ref('');
const password = ref('');

// Errores
const identifierError = ref('');
const passwordError = ref('');
const errorGeneral = ref('');

// Rol detectado desde localStorage
const rolDetectado = ref(null);

// Etiquetas y placeholders dinámicos
const campoLabel = computed(() => {
  return rolDetectado.value === 'admin'
    ? 'Correo electrónico'
    : rolDetectado.value === 'usuario'
    ? 'Número de documento'
    : 'Correo o documento';
});

const campoPlaceholder = computed(() => {
  return rolDetectado.value === 'admin'
    ? 'tu@correo.com'
    : rolDetectado.value === 'usuario'
    ? '12345678'
    : 'Ingresa tu correo o documento';
});

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
    if (dialogoTipo.value === 'success') {
        // Redirigimos según el rol
        if (registroStore.usuario.rol === 'admin'){
          router.push('/dashboard');
        } else {
          router.push('/dashboard');
        }
    }
};

// Leer rol desde localStorage al cargar
onMounted(() => {
  const ultimo = localStorage.getItem('ultimoUsuario');
  if (ultimo) {
    rolDetectado.value = ultimo;
  }
});


// Validar identificador
const validarIdentificador = () => {
  identifierError.value = '';
  if (!identifier.value) {
    identifierError.value = 'Este campo es obligatorio';
  } else if (rolDetectado.value === 'admin' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier.value)) {
    identifierError.value = 'Correo inválido';
  } else if (rolDetectado.value === 'usuario' && identifier.value.length < 8) {
    identifierError.value = 'Documento debe tener al menos 8 dígitos';
  }
};

// Validar contraseña
const validarPassword = () => {
  if (!password.value) {
    passwordError.value = 'La contraseña es obligatoria';
  } else if (password.value.length < 8) {
    passwordError.value = 'Mínimo 8 caracteres';
  } else {
    passwordError.value = '';
  }
};

// Iniciar sesión
const iniciarSesion = () => {
    validarIdentificador();
    validarPassword();

    if (identifierError.value || passwordError.value) {
      mostraDialogoAlerta(
        'Campos incompletos',
        'Por favor, completa los campos correctamente',
        'error'
      );
      return;
    }

    const credenciales = {
        password: password.value
    };

    if (rolDetectado.value === 'admin') {
        credenciales.correo = identifier.value;
    } else {
        credenciales.documento = identifier.value;
    }

    if (registroStore.login(credenciales)) {
      // Redirigir directamente al dashboard
      router.push('/dashboard');
    } else {
      mostraDialogoAlerta(
        'Credenciales incorrectas',
        'Verificar tu correo/documento y contraseña',
        'error'
      )
    }
};

const redireccionarRegister = () => {
    router.push('/register');
};
</script>

<style scoped>
.contenedor-Padre {
    position: relative;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
}

.fondo-imagen {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
}

.inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 2;
    width: 400px;
    margin-bottom: 24px;
    position: static;
}

form {
  background: #333;
    padding: 50px 30px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(255, 255, 255, 0.53);
    width: 400px;
}

.input-label {
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    margin-bottom: 4px;
    margin-top: 8px;
    transition: color 0.2s;
}

input {
    padding: 12px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    margin-bottom: 0px;
}

input::placeholder {
    color: rgba(255, 255, 255, 0.4);
}

.error {
    color: #ff6b6b;
    font-size: 14px;
    margin-bottom: 4px;
    margin-top: -6px;
    margin-left: 2px;
}

.contenido-superior {
    position: relative;
    z-index: 2;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.titulo-inicio {
    margin-bottom: 32px;
    color: #fff;
    text-shadow: 0 2px 8px #000;
}

.botones {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 24px;
}

.btn-registro,
.btn-login {
    border-radius: 8px;
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
</style>

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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import DialogAlert from '../components/DialogAlert.vue';

const router = useRouter();
const authStore = useAuthStore();

// Campos
const email = ref('');
const password = ref('');

// Errores
const emailError = ref('');
const passwordError = ref('');
const errorGeneral = ref('');

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
        router.push('/dashboard');
    }
};

// Validar email
const validarEmail = () => {
  emailError.value = '';
  if (!email.value) {
    emailError.value = 'Este campo es obligatorio';
  } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    emailError.value = 'Correo inválido';
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
const iniciarSesion = async () => {
    validarEmail();
    validarPassword();

    if (emailError.value || passwordError.value) {
      mostraDialogoAlerta(
        'Campos incompletos',
        'Por favor, completa los campos correctamente',
        'error'
      );
      return;
    }

    try {
        await authStore.login(email.value, password.value);
        mostraDialogoAlerta(
            'Inicio de sesión exitoso',
            'Bienvenido de nuevo',
            'success'
        );
    } catch (error) {
        mostraDialogoAlerta(
            'Credenciales incorrectas',
            'Verificar tu correo y contraseña',
            'error'
        );
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
// stores/registro.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useRegistroStore = defineStore('registro', () => {
    // Estado: lista de usuarios + usuario actual logueado
    const usuarios = ref([]);        // Todos los usuarios registrados
    const usuario = ref(null);       // Usuario actualmente logueado

    // Registrar un nuevo usuario
    const registrar = (datos) => {
        // Evitar duplicados por correo (admin) o documento (usuario)
        const existe = usuarios.value.some(u => {
            if (u.rol === 'admin' && datos.rol === 'admin') {
                return u.correo === datos.correo;
            }
            if (u.rol === 'usuario' && datos.rol === 'usuario') {
                return u.documento === datos.documento;
            }
            return false;
        });

        if (existe) {
            console.log('Este usuario ya está registrado');
            return false;
        }

        // Guardar nuevo usuario
        usuarios.value.push({ ...datos });
        return true;
    };

    // Iniciar sesión
    const login = (credenciales) => {
        const { correo, documento, password } = credenciales;

        const encontrado = usuarios.value.find(u => {
            if (u.rol === 'admin') {
                return u.correo === correo && u.password === password;
            } else {
                return u.documento === documento && u.password === password;
            }
        });

        if (encontrado) {
            usuario.value = { 
                nombre: encontrado.nombre, 
                rol: encontrado.rol 
            };
            return true;
        }
        return false;
    };

    // Cerrar sesión
    const logout = () => {
        usuario.value = null;
    };

    return {
        usuarios,   // Lista completa
        usuario,    // Usuario logueado
        registrar,
        login,
        logout
    };
}, {
    persist: {
        key: 'registro', // ← Usar la misma clave que estás usando manually
        paths: ['usuarios', 'usuario'] // ← Solo persistir estos campos
    }
});
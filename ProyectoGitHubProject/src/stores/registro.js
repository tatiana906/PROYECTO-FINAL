import { defineStore } from "pinia";
import { ref } from "vue";

export const useRegistroStore = defineStore('registro', () => {
    let usuario = ref(null);

    const registrar = (datos) => {
        usuario.value = {
            nombre: datos.nombre,
            correo: datos.correo,
            password: datos.password
        }
    };

    return {
        usuario,
        registrar
    };
},
{
    persist: true
},);
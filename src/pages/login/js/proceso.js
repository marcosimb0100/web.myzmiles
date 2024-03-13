import { ref } from 'vue';
// import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const useProceso = () => {

    // const router = useRouter();
    const store = useStore();

    const email = ref('');
    const password = ref('');

    const handleLogin = async() => {

        await store.dispatch('api/fn_data_post_grl', {
            mostrarNotificacion: false,
            direccion: `/api/zoho/login01`,
            datos: {
                email: email.value,
                password: password.value
            }
        });

    }

    return {
        email,
        password,
        handleLogin
    }

}

export default useProceso;
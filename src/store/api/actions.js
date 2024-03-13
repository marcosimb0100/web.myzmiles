import {

    data_post_grl,
    data_get_ptd,
    data_put_ptd,
    data_post_ptd,
    file_post_ptd,
    data_get_file_zoho,
    data_post_file_zoho,

    apiPost_normal,
    apiGet_Registro,
    apiPost_Registro,
    apiPost_ArchivoCarga,
    apiPost_ArchivoDescarga,
    apiPut_Registro,
    apiPost_ArchivoDescargaVistaPreviaFactura,
    apiPost_StringCFDI,
    apiPost_StringXMLJSON,

    apiPost_ProduceArchivoCarga
} from '../../helpers/funcionesApi';


// import { socket_estatus, socket_sala } from '../../helpers/funcionesIO';
import { notify } from "@kyvg/vue3-notification";
import router from '../../router/router';

export const apiPostAcceso = async({ commit }, { mostrarNotificacion = false, direccion, datos }) => {

    commit('visibleCargandoMutation');
    const { estatus, mensaje, datosDB } = await apiPost_normal(direccion, datos);

    if (estatus === 200) {
        commit('visibleCargandoMutation');
        if (mostrarNotificacion) {
            notificacion(null, { tipo: 'listo', titulo: 'Notificacion', mensaje: mensaje });
        }
        const { permiso, usuario } = datosDB;
        if (usuario.tipoAcceso === '1') {
            localStorage.setItem('permiso', permiso);
            localStorage.setItem('usuario', JSON.stringify(usuario));
            localStorage.setItem('idUsuario', JSON.stringify(usuario.idUsuario));
            router.replace({ name: 'principal' });
            // socket_estatus();
            // socket_sala();
        }
    } else if (estatus === 400) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'advertencia', titulo: 'Notificacion', mensaje: mensaje });
    } else if (estatus === 401) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: mensaje });
    } else if (estatus === 500) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: mensaje });
    }

    return {
        estatus,
        mensaje,
        datosDB
    };

};

export const apiPost = async({ commit }, { mostrarNotificacion = false, direccion, datos }) => {
    commit('visibleCargandoMutation');
    const { estatus, mensaje, datosDB } = await apiPost_normal(direccion, datos);

    if (estatus === 200) {
        commit('visibleCargandoMutation');
        if (mostrarNotificacion) {
            notificacion(null, { tipo: 'listo', titulo: 'Notificacion', mensaje: mensaje });
        }
    } else if (estatus === 400) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'advertencia', titulo: 'Notificacion', mensaje: mensaje });
    } else if (estatus === 401) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: mensaje });
    } else if (estatus === 500) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: mensaje });
    }

    return {
        estatus,
        mensaje,
        datosDB
    };

};

export const apiGetPermiso = async({ commit }, { mostrarNotificacion = false, direccion }) => {
    commit('visibleCargandoMutation');
    const { estatus, mensaje, datosDB } = await apiGet_Registro(direccion);

    if (estatus === 200) {
        commit('visibleCargandoMutation');
        if (mostrarNotificacion) {
            notificacion(null, { tipo: 'listo', titulo: 'Notificacion', mensaje: mensaje });
        }
    } else if (estatus === 400) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'advertencia', titulo: 'Notificacion', mensaje: mensaje });
    } else if (estatus === 401) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: mensaje });
    } else if (estatus === 403) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: mensaje });
        router.push({ name: 'notpagefound' });
    } else if (estatus === 500) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: mensaje });
    }

    return {
        estatus,
        mensaje,
        datosDB
    };
};

export const apiPostPermiso = async({ commit }, { mostrarNotificacion = false, direccion, datos }) => {
    commit('visibleCargandoMutation');

    const { estatus, mensaje, datosDB } = await apiPost_Registro(direccion, datos);

    if (estatus === 200) {
        commit('visibleCargandoMutation');
        if (mostrarNotificacion) {
            notificacion(null, { tipo: 'listo', titulo: 'Notificacion', mensaje: mensaje });
        }
    } else if (estatus === 400) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'advertencia', titulo: 'Notificacion', mensaje: mensaje });
    } else if (estatus === 401) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: mensaje });
    } else if (estatus === 403) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: mensaje });
        router.push({ name: 'notpagefound' });
    } else if (estatus === 500) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: mensaje });
    }

    return {
        estatus,
        mensaje,
        datosDB
    };

};

export const apiPostArchivoPermiso = async({ commit }, { mostrarNotificacion = false, direccion, datos }) => {
    commit('visibleCargandoMutation');

    const { estatus, mensaje, datosDB } = await apiPost_ArchivoCarga(direccion, datos);

    if (estatus === 200) {
        commit('visibleCargandoMutation');
        if (mostrarNotificacion) {
            notificacion(null, { tipo: 'listo', titulo: 'Notificacion', mensaje: mensaje });
        }
    } else if (estatus === 400) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'advertencia', titulo: 'Notificacion', mensaje: mensaje });
    } else if (estatus === 401) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: mensaje });
    } else if (estatus === 403) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: mensaje });
        router.push({ name: 'notpagefound' });
    } else if (estatus === 500) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: mensaje });
    }

    return {
        estatus,
        mensaje,
        datosDB
    };

};

export const apiPostArchivoDescargaPermiso = async({ commit }, { mostrarNotificacion = false, direccion, datos, nombreArchivo }) => {
    commit('visibleCargandoMutation');

    const { estatus, dataFile } = await apiPost_ArchivoDescarga(direccion, datos);

    if (estatus === 200) {
        commit('visibleCargandoMutation');
        if (mostrarNotificacion) {
            notificacion(null, { tipo: 'listo', titulo: 'Notificacion', mensaje: 'Descarga correcta.' });
        }

        var fileURL = window.URL.createObjectURL(new Blob([dataFile]));
        var fileLink = document.createElement('a');

        fileLink.href = fileURL;
        fileLink.setAttribute('download', nombreArchivo);
        document.body.appendChild(fileLink);

        fileLink.click();

    } else {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'advertencia', titulo: 'Notificacion', mensaje: 'Error al descargar el archivo' });
    }
    // } else if (estatus === 400) {
    //     commit('visibleCargandoMutation');
    //     notificacion(null, { tipo: 'advertencia', titulo: 'Notificacion', mensaje: mensaje });
    // } else if (estatus === 401) {
    //     commit('visibleCargandoMutation');
    //     notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: mensaje });
    // } else if (estatus === 403) {
    //     commit('visibleCargandoMutation');
    //     notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: mensaje });
    //     router.push({ name: 'notpagefound' });
    // } else if (estatus === 500) {
    //     commit('visibleCargandoMutation');
    //     notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: mensaje });
    // }

    // return {
    //     estatus,
    //     mensaje,
    //     datosDB
    // };

};

export const apiPutPermiso = async({ commit }, { mostrarNotificacion = false, direccion, datos }) => {
    commit('visibleCargandoMutation');

    const { estatus, mensaje, datosDB } = await apiPut_Registro(direccion, datos);


    if (estatus === 200) {
        commit('visibleCargandoMutation');
        if (mostrarNotificacion) {
            notificacion(null, { tipo: 'listo', titulo: 'Notificacion', mensaje: mensaje });
        }
    } else if (estatus === 400) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'advertencia', titulo: 'Notificacion', mensaje: mensaje });
    } else if (estatus === 401) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: mensaje });
    } else if (estatus === 403) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: mensaje });
        router.push({ name: 'notpagefound' });
    } else if (estatus === 500) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: mensaje });
    }

    return {
        estatus,
        mensaje,
        datosDB
    };

};

export const notificacion = (_, noti) => {
    // [success], [warn], [error], [Info]
    let finTipo = '';
    let finTitulo = '';
    let finMensaje = '';
    if (noti.tipo === 'info') {
        finTipo = 'info';
        finTitulo = `<span style="color: black; font-weight: bold;">${noti.titulo}</span> <hr>`;
        finMensaje = `<span style="color: black;">${noti.mensaje}</span><br>`;
    } else if (noti.tipo === 'listo') {
        finTipo = 'success';
        finTitulo = `<span style="color: white; font-weight: bold;">${noti.titulo}</span> <hr>`;
        finMensaje = `<span style="color: white;">${noti.mensaje}</span><br>`;
    } else if (noti.tipo === 'advertencia') {
        finTipo = 'warn';
        finTitulo = `<span style="color: black; font-weight: bold;">${noti.titulo}</span> <hr>`;
        finMensaje = `<span style="color: black;">${noti.mensaje}</span><br>`;
    } else if (noti.tipo === 'error') {
        finTipo = 'error';
        finTitulo = `<span style="color: white; font-weight: bold;">${noti.titulo}</span> <hr>`;
        finMensaje = `<span style="color: white;">${noti.mensaje}</span><br>`;
    } else {
        finTipo = 'warn';
        finTitulo = `<span style="color: black; font-weight: bold;">${noti.titulo}</span> <hr>`;
        finMensaje = `<span style="color: black;">${noti.mensaje}</span><br>`;
    }
    notify({
        type: finTipo,
        title: finTitulo,
        text: finMensaje,
        duration: noti.tiempo === undefined ? 1000 : noti.tiempo
    });
}

export const cargando = async({ commit }) => {
    // commit('visibleCargandoMutation', { Hola: 'Aca' } );
    commit('visibleCargandoMutation');
};

//============================================================================================================================

export const apiPostArchivoDescargaFactura = async({ commit }, { mostrarNotificacion = false, direccion, datos, nombreArchivo }) => {
    commit('visibleCargandoMutation');

    const { estatus, dataFile } = await apiPost_ArchivoDescargaVistaPreviaFactura(direccion, datos);

    if (estatus === 200) {
        commit('visibleCargandoMutation');
        if (mostrarNotificacion) {
            notificacion(null, { tipo: 'listo', titulo: 'Notificacion', mensaje: 'Descarga correcta.' });
        }

        var fileURL = window.URL.createObjectURL(new Blob([dataFile]));
        var fileLink = document.createElement('a');

        fileLink.href = fileURL;
        fileLink.setAttribute('download', nombreArchivo);
        document.body.appendChild(fileLink);

        fileLink.click();

    } else {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'advertencia', titulo: 'Notificacion', mensaje: 'Error al descargar el archivo' });
    }

};


export const apiPostCFDI = async({ commit }, { mostrarNotificacion = false, direccion, datos }) => {
    commit('visibleCargandoMutation');

    const { estatus, mensaje, datosDB } = await apiPost_StringCFDI(direccion, datos);

    if (estatus === 200) {
        commit('visibleCargandoMutation');
        if (mostrarNotificacion) {
            notificacion(null, { tipo: 'listo', titulo: 'Notificacion', mensaje: mensaje });
        }
    } else if (estatus === 400) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'advertencia', titulo: 'Notificacion', mensaje: mensaje });
    } else if (estatus === 401) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: mensaje });
    } else if (estatus === 403) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: mensaje });
        router.push({ name: 'notpagefound' });
    } else if (estatus === 500) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: mensaje });
    }

    return {
        estatus,
        mensaje,
        datosDB
    };

};


export const apiPostXMLJSON = async({ commit }, { mostrarNotificacion = false, direccion, datos }) => {
    commit('visibleCargandoMutation');

    const { estatus, mensaje, datosDB } = await apiPost_StringXMLJSON(direccion, datos);

    if (estatus === 200) {
        commit('visibleCargandoMutation');
        if (mostrarNotificacion) {
            notificacion(null, { tipo: 'listo', titulo: 'Notificacion', mensaje: mensaje });
        }
    } else if (estatus === 400) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'advertencia', titulo: 'Notificacion', mensaje: mensaje });
    } else if (estatus === 401) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: mensaje });
    } else if (estatus === 403) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: mensaje });
        router.push({ name: 'notpagefound' });
    } else if (estatus === 500) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: mensaje });
    }

    return {
        estatus,
        mensaje,
        datosDB
    };

};


//============================================================================================================================
//============================================================================================================================
//============================================================================================================================
//============================================================================================================================
////Proveedor 01
//============================================================================================================================


export const fn_data_post_ptd = async({ commit }, { mostrarNotificacion = false, direccion, datos }) => {

    commit('visibleCargandoMutation');
    const { status, message, data } = await data_post_ptd(direccion, datos);

    if (status === 200) {
        commit('visibleCargandoMutation');
        if (mostrarNotificacion) {
            notificacion(null, { tipo: 'listo', titulo: 'Notificacion', mensaje: message });
        }
    } else if (status === 400) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'advertencia', titulo: 'Notificacion', mensaje: message });
    } else if (status === 401) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: message });
        localStorage.clear();
        router.replace({ name: 'login' });
    } else if (status === 500) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: message });
        localStorage.clear();
        router.replace({ name: 'login' });
    }

    return {
        status,
        message,
        data
    };

};


export const fn_data_get_file_zoho = async({ commit }, { mostrarNotificacion = false, direccion, token }) => {

    commit('visibleCargandoMutation');
    const { status, message, data } = await data_get_file_zoho(direccion, token);

    if (status === 200) {
        commit('visibleCargandoMutation');
        if (mostrarNotificacion) {
            notificacion(null, { tipo: 'listo', titulo: 'Notificacion', mensaje: message });
        }
    } else if (status === 400) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'advertencia', titulo: 'Notificacion', mensaje: message });
    } else if (status === 401) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: message });
        localStorage.clear();
        router.replace({ name: 'login' });
    } else if (status === 500) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: message });
        localStorage.clear();
        router.replace({ name: 'login' });
    }

    return {
        status,
        message,
        data
    };

};

export const fn_data_post_file_zoho = async({ commit }, { mostrarNotificacion = false, direccion, token, formData }) => {

    commit('visibleCargandoMutation');
    const { status, message, data } = await data_post_file_zoho(direccion, token, formData);

    if (status === 200) {
        commit('visibleCargandoMutation');
        if (mostrarNotificacion) {
            notificacion(null, { tipo: 'listo', titulo: 'Notificacion', mensaje: message });
        }
    } else if (status === 400) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'advertencia', titulo: 'Notificacion', mensaje: message });
    } else if (status === 401) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: message });
        localStorage.clear();
        router.replace({ name: 'login' });
    } else if (status === 500) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: message });
        localStorage.clear();
        router.replace({ name: 'login' });
    }

    return {
        status,
        message,
        data
    };

};



























export const fn_data_post_grl = async({ commit }, { mostrarNotificacion = false, direccion, datos }) => {

    commit('visibleCargandoMutation');
    const { status, message, permiso, email, proveedor, data } = await data_post_grl(direccion, datos);

    if (status === 200) {
        commit('visibleCargandoMutation');
        if (mostrarNotificacion) {
            notificacion(null, { tipo: 'listo', titulo: 'Notificacion', mensaje: message });
        }
        localStorage.setItem('permiso', permiso);
        localStorage.setItem('email', email);
        localStorage.setItem('proveedor', proveedor);
        router.replace({ name: 'main' });

    } else if (status === 400) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'advertencia', titulo: 'Notificacion', mensaje: message });
    } else if (status === 401) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: message });
    } else if (status === 500) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: message });
        localStorage.clear();
        router.replace({ name: 'login' });
    }

    return {
        status,
        message,
        data
    };

};

export const fn_data_get_ptd = async({ commit }, { mostrarNotificacion = false, direccion }) => {

    commit('visibleCargandoMutation');
    const { status, message, data, permiso } = await data_get_ptd(direccion);

    if (status === 200) {
        commit('visibleCargandoMutation');
        if (mostrarNotificacion) {
            notificacion(null, { tipo: 'listo', titulo: 'Notificacion', mensaje: message });
        }
        if(permiso !== ''){
            localStorage.setItem('permiso', permiso);
        }
    } else if (status === 400) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'advertencia', titulo: 'Notificacion', mensaje: message });
    } else if (status === 401) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: message });
    } else if (status === 500) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: message });
        localStorage.clear();
        router.replace({ name: 'login' });
    }

    return {
        status,
        message,
        data
    };

};

export const fn_file_post_ptd = async({ commit }, { mostrarNotificacion = false, direccion, datos }) => {

    commit('visibleCargandoMutation');
    const { status, message, data } = await file_post_ptd(direccion, datos);

    if (status === 200) {
        commit('visibleCargandoMutation');
        if (mostrarNotificacion) {
            notificacion(null, { tipo: 'listo', titulo: 'Notificacion', mensaje: message });
        }
    } else if (status === 400) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'advertencia', titulo: 'Notificacion', mensaje: message });
    } else if (status === 401) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: message });
    } else if (status === 500) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: message });
        localStorage.clear();
        router.replace({ name: 'login' });
    }

    return {
        status,
        message,
        data
    };

};

export const fn_data_put_ptd = async({ commit }, { mostrarNotificacion = false, direccion, datos }) => {

    commit('visibleCargandoMutation');
    const { status, message, permiso, data } = await data_put_ptd(direccion, datos);

    if (status === 200) {
        commit('visibleCargandoMutation');
        if (mostrarNotificacion) {
            notificacion(null, { tipo: 'listo', titulo: 'Notificacion', mensaje: message });
        }
        if(permiso !== ''){
            localStorage.setItem('permiso', permiso);
        }
    } else if (status === 400) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'advertencia', titulo: 'Notificacion', mensaje: message });
    } else if (status === 401) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: message });
        localStorage.clear();
        router.replace({ name: 'login' });
    } else if (status === 500) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: message });
        localStorage.clear();
        router.replace({ name: 'login' });
    }

    return {
        status,
        message,
        data
    };

};

export const fn_formdata_produce_zoho = async({ commit }, { mostrarNotificacion = false, direccion, formData }) => {

    commit('visibleCargandoMutation');
    const { status, message, data, permiso } = await apiPost_ProduceArchivoCarga(direccion, formData);

    if (status === 200) {
        commit('visibleCargandoMutation');
        if (mostrarNotificacion) {
            notificacion(null, { tipo: 'listo', titulo: 'Notificacion', mensaje: message });
        }
        if(permiso !== ''){
            localStorage.setItem('permiso', permiso);
        }
    } else if (status === 400) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'advertencia', titulo: 'Notificacion', mensaje: message });
    } else if (status === 401) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: message });
    } else if (status === 500) {
        commit('visibleCargandoMutation');
        notificacion(null, { tipo: 'error', titulo: 'Notificacion', mensaje: message });
        localStorage.clear();
        router.replace({ name: 'login' });
    }

    return {
        status,
        message,
        data
    };

};
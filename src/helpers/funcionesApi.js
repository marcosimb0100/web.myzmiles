import axios from 'axios';

// const url = 'http://localhost:6004';
const url = 'https://api-myzmiles.onrender.com';


const urlFacturacion = '';

const consumir = axios.create({ baseURL: url });

// Datos POST SIN TOKENCV 
export const apiPost_normal = async(direccion, datos) => {
    return await consumir.post(direccion, datos).then((response) => {
        const { status, data } = response;
        return {
            estatus: status,
            mensaje: data.mensaje,
            datosDB: data.datos
        };
    }).catch((error) => {
        const { response } = error;
        return {
            estatus: response.status === 0 ? 500 : response.status,
            mensaje: response.status === 0 ? `[Api] Error ${error}` : response.data.mensaje,
            datosDB: response.status === 0 ? `[Api] Error ${error}` : response.data.data,
        };
    });

};

// Datos POST
export const apiPost_Registro = async(direccion, datos) => {

    const permiso = (localStorage.getItem('permiso') === null && localStorage.getItem('permiso') === '') ? '' : localStorage.getItem('permiso');
    const rutaActual = (localStorage.getItem('rutaActual') === null && localStorage.getItem('rutaActual') === '') ? '' : localStorage.getItem('rutaActual');
    const consumirSeguridad = axios.create({ baseURL: url, headers: { 'permiso': permiso, 'rutaActual': rutaActual, 'Content-Type': 'application/json', } });

    return await consumirSeguridad.post(direccion, datos).then((response) => {
        const { status, data } = response;
        return {
            estatus: status,
            mensaje: data.mensaje,
            datosDB: data.datos
        };
    }).catch((error) => {
        const { response } = error;
        return {
            estatus: response.status === 0 ? 500 : response.status,
            mensaje: response.status === 0 ? `[Api] Error ${error}` : response.data.mensaje,
            datosDB: response.status === 0 ? `[Api] Error ${error}` : response.data.datos,
        };
    });

};

// Datos POST Subir Archivo
export const apiPost_ArchivoCarga = async(direccion, datos) => {

    const permiso = (localStorage.getItem('permiso') === null && localStorage.getItem('permiso') === '') ? '' : localStorage.getItem('permiso');
    const rutaActual = (localStorage.getItem('rutaActual') === null && localStorage.getItem('rutaActual') === '') ? '' : localStorage.getItem('rutaActual');
    const consumirSeguridad = axios.create({ baseURL: url, headers: { 'permiso': permiso, 'rutaActual': rutaActual, 'Content-Type': 'multipart/form-data' } });

    return await consumirSeguridad.post(direccion, datos).then((response) => {
        const { status, data } = response;
        return {
            estatus: status,
            mensaje: data.mensaje,
            datosDB: data.datos
        };
    }).catch((error) => {
        const { response } = error;
        return {
            estatus: response.status === 0 ? 500 : response.status,
            mensaje: response.status === 0 ? `[Api] Error ${error}` : response.data.mensaje,
            datosDB: response.status === 0 ? `[Api] Error ${error}` : response.data.datos,
        };
    });

};

// Datos POST Bajar Archivo
export const apiPost_ArchivoDescarga = async(direccion, datos) => {

    const permiso = (localStorage.getItem('permiso') === null && localStorage.getItem('permiso') === '') ? '' : localStorage.getItem('permiso');
    const rutaActual = (localStorage.getItem('rutaActual') === null && localStorage.getItem('rutaActual') === '') ? '' : localStorage.getItem('rutaActual');
    const consumirSeguridad = axios.create({ baseURL: url, headers: { 'permiso': permiso, 'rutaActual': rutaActual, 'Content-Type': 'application/json' }, responseType: 'blob' });

    return await consumirSeguridad.post(direccion, datos).then((response) => {

        const { status, data } = response;

        return {
            estatus: status,
            dataFile: data
        };

    }).catch((error) => {

        const { response } = error;
        return {
            estatus: response.status === 0 ? 500 : response.status,
            mensaje: response.status === 0 ? `[Api] Error ${error}` : response.data.mensaje,
            datosDB: response.status === 0 ? `[Api] Error ${error}` : response.data.datos,
        };

    });

};

// Datos PUT
export const apiPut_Registro = async(direccion, datos) => {

    const permiso = (localStorage.getItem('permiso') === null && localStorage.getItem('permiso') === '') ? '' : localStorage.getItem('permiso');
    const rutaActual = (localStorage.getItem('rutaActual') === null && localStorage.getItem('rutaActual') === '') ? '' : localStorage.getItem('rutaActual');
    const consumirSeguridad = axios.create({ baseURL: url, headers: { 'permiso': permiso, 'rutaActual': rutaActual, 'Content-Type': 'application/json', } });

    return await consumirSeguridad.put(direccion, datos).then((response) => {
        const { status, data } = response;
        return {
            estatus: status,
            mensaje: data.mensaje,
            datosDB: data.datos
        };
    }).catch((error) => {
        const { response } = error;
        return {
            estatus: response.status === 0 ? 500 : response.status,
            mensaje: response.status === 0 ? `[Api] Error ${error}` : response.data.mensaje,
            datosDB: response.status === 0 ? `[Api] Error ${error}` : response.data.datos,
        };
    });

};

// Datos GET
export const apiGet_Registro = async(direccion) => {

    const permiso = (localStorage.getItem('permiso') === null && localStorage.getItem('permiso') === '') ? '' : localStorage.getItem('permiso');
    const rutaActual = (localStorage.getItem('rutaActual') === null && localStorage.getItem('rutaActual') === '') ? '' : localStorage.getItem('rutaActual');
    const consumirSeguridad = axios.create({ baseURL: url, headers: { 'permiso': permiso, 'rutaActual': rutaActual } });

    return await consumirSeguridad.get(direccion).then((response) => {
        const { status, data } = response;
        return {
            estatus: status,
            mensaje: data.mensaje,
            datosDB: data.datos
        };
    }).catch((error) => {
        const { response } = error;
        return {
            estatus: response.status === 0 ? 500 : response.status,
            mensaje: response.status === 0 ? `[Api] Error ${error}` : response.data.mensaje,
            datosDB: response.status === 0 ? `[Api] Error ${error}` : response.data.datos,
        };
    });

};


//============================================================================================================================


// Datos POST Bajar Archivo
export const apiPost_ArchivoDescargaVistaPreviaFactura = async(direccion, datos) => {

    const consumirSeguridad = axios.create({ baseURL: urlFacturacion, headers: { 'Content-Type': 'application/json' }, responseType: 'blob' });

    return await consumirSeguridad.post(direccion, datos).then((response) => {
        // console.log(response);
        const { status, data } = response;

        return {
            estatus: status,
            mensaje: "",
            dataFile: data
        };

    }).catch((error) => {

        const { response } = error;
        return {
            estatus: response.status === 0 ? 500 : response.status,
            mensaje: response.status === 0 ? `[Api] Error ${error}` : response.data.mensaje,
            datosDB: response.status === 0 ? `[Api] Error ${error}` : response.data.datos,
        };

    });

};

// Datos POST Bajar Archivo
export const apiPost_StringCFDI = async(direccion, datos) => {

    const consumirSeguridad = axios.create({ baseURL: urlFacturacion, headers: { 'Content-Type': 'application/json' } });

    return await consumirSeguridad.post(direccion, datos).then((response) => {
        const { status, data } = response;
        return {
            estatus: status,
            mensaje: data.mensaje,
            datosDB: data.CFDI
        };

    }).catch((error) => {

        const { response } = error;
        return {
            estatus: response.status === 0 ? 500 : response.status,
            mensaje: response.status === 0 ? `[Api] Error ${error}` : response.data.mensaje,
            datosDB: response.status === 0 ? `[Api] Error ${error}` : response.data.datos,
        };

    });

};

export const apiPost_StringXMLJSON = async(direccion, datos) => {

    const consumirSeguridad = axios.create({ baseURL: urlFacturacion, headers: { 'Content-Type': 'application/json' } });

    return await consumirSeguridad.post(direccion, datos).then((response) => {
        const { status, data } = response;
        return {
            estatus: status,
            mensaje: data.mensaje,
            datosDB: data.datos
        };

    }).catch((error) => {

        const { response } = error;
        return {
            estatus: response.status === 0 ? 500 : response.status,
            mensaje: response.status === 0 ? `[Api] Error ${error}` : response.data.mensaje,
            datosDB: response.status === 0 ? `[Api] Error ${error}` : response.data.datos,
        };

    });

};




//============================================================================================================================







export const data_post_ptd = async( direccion, datos ) => {

    const permiso = (localStorage.getItem('permiso') === null && localStorage.getItem('permiso') === '') ? '' : localStorage.getItem('permiso');
    const proveedor = (localStorage.getItem('proveedor') === null && localStorage.getItem('proveedor') === '') ? '' : localStorage.getItem('proveedor');
    const consumirSeguridad = axios.create({ baseURL: url, headers: { 'Content-Type': 'application/json', 'permiso': permiso, 'proveedor':proveedor } });

    return await consumirSeguridad.post(direccion, datos).then((response) => {
        const { status, data } = response;
        return {
            status: status,
            message: data.message,
            data: data.data
        };
    }).catch((error) => {
        const { response } = error;
        return {
            status: response.status === 0 ? 500 : response.status,
            message: response.status === 0 ? `[Api] Error ${error}` : response.data.message,
            data: response.status === 0 ? `[Api] Error ${error}` : response.data.data,
        };
    });

};


export const data_get_file_zoho = async( direccion, token ) => {

    // const CORS_PROXY_API = `https://cors.ryanking13.workers.dev/?u=`;

    const consumirSeguridad = axios.create({ baseURL: `https://download.zoho.com/v1/workdrive/download/`, withCredentials: true, headers: { "Access-Control-Allow-Origin": "*", 'Accept':'*/*', 'Authorization': `Zoho-oauthtoken ${token}` } });

    console.log(consumirSeguridad);

    return await consumirSeguridad.get(direccion).then((response) => {
        console.log(response);
        const { status, data } = response;
        return {
            status: status,
            message: data.message,
            data: data.data
        };
    }).catch((error) => {
        const { response } = error;
        return {
            status: response.status === 0 ? 500 : response.status,
            message: response.status === 0 ? `[Api] Error ${error}` : response.data.message,
            data: response.status === 0 ? `[Api] Error ${error}` : response.data.data,
        };
    });

};


export const data_post_file_zoho = async( direccion, token, data ) => {

    console.log(direccion, token, data);

    const consumirSeguridad = axios.create({ baseURL: `https://www.zohoapis.com/workdrive/api/v1/upload`, withCredentials: true, headers: { "Content-Type": "multipart/form-data", "Access-Control-Allow-Origin": "*", 'Accept':'*/*', 'Authorization': `Zoho-oauthtoken ${token}` } });

    return await consumirSeguridad.post(direccion, data).then((response) => {
        console.log(response);
        const { status, data } = response;
        return {
            status: status,
            message: data.message,
            data: data.data
        };
    }).catch((error) => {
        const { response } = error;
        return {
            status: response.status === 0 ? 500 : response.status,
            message: response.status === 0 ? `[Api] Error ${error}` : response.data.message,
            data: response.status === 0 ? `[Api] Error ${error}` : response.data.data,
        };
    });

};



// Datos POST Subir Archivo
















// =========================================================================================
// =========================================================================================
// =========================================================================================
// =========================================================================================





export const data_post_grl = async( direccion, datos ) => {

    
    return await consumir.post(direccion, datos).then((response) => {
        const { status, data } = response;
        return {
            status: status,
            message: data.message,
            permiso: data.permiso,
            email: data.email,
            proveedor: 'verificador',
            data: data.data
        };
    }).catch((error) => {
        const { response } = error;
        return {
            status: response.status === 0 ? 500 : response.status,
            message: response.status === 0 ? `[Api] Error ${error}` : response.data.message,
            permiso: '',
            email: '',
            data: response.status === 0 ? `[Api] Error ${error}` : response.data.data,
        };
    });

};


export const data_get_ptd = async( direccion, datos ) => {

    const permiso = (localStorage.getItem('permiso') === null && localStorage.getItem('permiso') === '') ? '' : localStorage.getItem('permiso');
    const proveedor = (localStorage.getItem('proveedor') === null && localStorage.getItem('proveedor') === '') ? '' : localStorage.getItem('proveedor');
    const consumirSeguridad = axios.create({ baseURL: url, headers: { 'Content-Type': 'application/json', 'permiso': permiso, 'proveedor': proveedor } });

    return await consumirSeguridad.get(direccion, datos).then((response) => {
        const { status, data } = response;
        return {
            status: status,
            message: data.message,
            permiso: data.permiso,
            email: data.email,
            proveedor: 'verificador',
            data: data.data
        };
    }).catch((error) => {
        const { response } = error;
        // console.log('Error: ', response);
        return {
            status: response.status === 0 ? 500 : response.status,
            message: response.status === 0 ? `[Api] Error ${error}` : response.data.message,
            permiso: '',
            email: '',
            data: response.status === 0 ? `[Api] Error ${error}` : response.data.data,
        };
    });

};


export const file_post_ptd = async( direccion, datos ) => {

    const permiso = (localStorage.getItem('permiso') === null && localStorage.getItem('permiso') === '') ? '' : localStorage.getItem('permiso');
    const proveedor = (localStorage.getItem('proveedor') === null && localStorage.getItem('proveedor') === '') ? '' : localStorage.getItem('proveedor');
    const consumirSeguridad = axios.create({ baseURL: url, responseType: 'blob', headers: { 'Content-Type': 'application/json', 'permiso': permiso, 'proveedor':proveedor } });

    return await consumirSeguridad.post(direccion, datos).then((response) => {
        const { status, data } = response;
        return {
            status: status,
            message: data.message,
            permiso: '',
            email: '',
            data: response.data
        };
    }).catch((error) => {
        const { response } = error;
        return {
            status: response.status === 0 ? 500 : response.status,
            message: response.status === 0 ? `[Api] Error ${error}` : response.data.message,
            permiso: '',
            email:  '',
            data: response.status === 0 ? `[Api] Error ${error}` : response.data.data,
        };
    });

};


export const data_put_ptd = async( direccion, datos ) => {

    const permiso = (localStorage.getItem('permiso') === null && localStorage.getItem('permiso') === '') ? '' : localStorage.getItem('permiso');
    const proveedor = (localStorage.getItem('proveedor') === null && localStorage.getItem('proveedor') === '') ? '' : localStorage.getItem('proveedor');
    const consumirSeguridad = axios.create({ baseURL: url, headers: { 'Content-Type': 'application/json', 'permiso': permiso, 'proveedor':proveedor } });

    return await consumirSeguridad.put(direccion, datos).then((response) => {
        const { status, data } = response;
        return {
            status: status,
            message: data.message,
            permiso: data.permiso,
            email: data.email,
            data: data.data
        };
    }).catch((error) => {
        const { response } = error;
        return {
            status: response.status === 0 ? 500 : response.status,
            message: response.status === 0 ? `[Api] Error ${error}` : response.data.message,
            permiso: '',
            email: '',
            data: response.status === 0 ? `[Api] Error ${error}` : response.data.data,
        };
    });

};


export const apiPost_ProduceArchivoCarga = async(direccion, datos) => {

    const permiso = (localStorage.getItem('permiso') === null && localStorage.getItem('permiso') === '') ? '' : localStorage.getItem('permiso');
    const proveedor = (localStorage.getItem('proveedor') === null && localStorage.getItem('proveedor') === '') ? '' : localStorage.getItem('proveedor');
    const consumirSeguridad = axios.create({ baseURL: url, headers: { 'permiso': permiso, 'proveedor':proveedor, 'Content-Type': 'multipart/form-data' } });

    return await consumirSeguridad.post(direccion, datos).then((response) => {
        const { status, data } = response;
        return {
            status: status,
            message: data.message,
            permiso: data.permiso,
            email: data.email,
            data: data.data
        };
    }).catch((error) => {
        const { response } = error;
        return {
            status: response.status === 0 ? 500 : response.status,
            message: response.status === 0 ? `[Api] Error ${error}` : response.data.mensaje,
            permiso: '',
            email: '',
            data: response.status === 0 ? `[Api] Error ${error}` : response.data.datos,
        };
    });

};
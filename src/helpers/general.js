export const convertirFecha = (fecha) => {

    const dia = new Date(fecha).toLocaleDateString('es-MX', { day: 'numeric' }).toString().padStart(2, 0);
    const mes = new Date(fecha).toLocaleDateString('es-MX', { month: 'numeric' }).toString().padStart(2, 0);
    const anio = new Date(fecha).toLocaleDateString('es-MX', { year: 'numeric' }).toString().padStart(4, 0);

    return `${anio}-${mes}-${dia}`;

};

export const fechaHora = async() => {

    return new Promise(resolve => {

        const dia = new Date().toLocaleDateString('es-MX', { day: 'numeric' }).toString().padStart(2, 0);
        const mes = new Date().toLocaleDateString('es-MX', { month: 'numeric' }).toString().padStart(2, 0);
        const anio = new Date().toLocaleDateString('es-MX', { year: 'numeric' }).toString().padStart(4, 0);
        const hora = new Date().toLocaleTimeString('es-MX');
        resolve({
            fecha: `${anio}-${mes}-${dia}`,
            hora: hora,
            fechaCompleta: `${anio}-${mes}-${dia} ${hora}`,
            fechaCompletaSat: `${anio}-${mes}-${dia}T${hora}`
        });
    });

};

export const convertirFechaBanco = (fecha, idBanco, columnas) => {
    let fechaFinal = '';
    if (idBanco === '072' && columnas === 13) {
        fecha = fecha.replaceAll('/', '');
        fechaFinal = `${fecha.substring(4,8)}-${fecha.substring(2,4)}-${fecha.substring(0,2)}`;
    }
    if (idBanco === '072' && columnas === 8) {
        fecha = fecha.replaceAll('/', '').replaceAll('"', '').replaceAll('.', '');
        let mesNumero = '00';

        switch (fecha.substring(2, 5)) {
            case 'Ene':
                mesNumero = '01';
                break;
            case 'Feb':
                mesNumero = '02';
                break;
            case 'Mar':
                mesNumero = '03';
                break;
            case 'Abr':
                mesNumero = '04';
                break;
            case 'May':
                mesNumero = '05';
                break;
            case 'Jun':
                mesNumero = '06';
                break;
            case 'Jul':
                mesNumero = '07';
                break;
            case 'Ago':
                mesNumero = '08';
                break;
            case 'Sep':
                mesNumero = '09';
                break;
            case 'Oct':
                mesNumero = '10';
                break;
            case 'Nov':
                mesNumero = '11';
                break;
            case 'Dic':
                mesNumero = '12';
                break;
        }
        fechaFinal = `${fecha.substring(5,9)}-${mesNumero}-${fecha.substring(0,2)}`;
    }

    if (idBanco === '014' && columnas === 20) {
        fecha = fecha.replaceAll('/', '');
        fechaFinal = `${fecha.substring(4,8)}-${fecha.substring(2,4)}-${fecha.substring(0,2)}`;
    }

    if (idBanco === '012' && columnas === 5) {
        fecha = fecha.replaceAll('-', '');
        fechaFinal = `${fecha.substring(4,8)}-${fecha.substring(2,4)}-${fecha.substring(0,2)}`;
    }

    if (idBanco === '044' && columnas === 15) {
        fecha = fecha.replaceAll('/', '').replaceAll('"', '');
        fechaFinal = `${fecha.substring(0,4)}-${fecha.substring(4,6)}-${fecha.substring(6,8)}`;
    }

    if (idBanco === '058' && columnas === 7) {
        fecha = fecha.replaceAll('/', '').replaceAll('"', '');
        fechaFinal = `${fecha.substring(4,8)}-${fecha.substring(2,4)}-${fecha.substring(0,2)}`;
    }

    if (idBanco === '653' && columnas === 13) {
        fecha = fecha.replaceAll('/', '').replaceAll('"', '').replaceAll('.', '').replaceAll('-', '');
        let mesNumero = '00';

        switch (fecha.substring(2, 5)) {
            case 'Ene':
                mesNumero = '01';
                break;
            case 'Feb':
                mesNumero = '02';
                break;
            case 'Mar':
                mesNumero = '03';
                break;
            case 'Abr':
                mesNumero = '04';
                break;
            case 'May':
                mesNumero = '05';
                break;
            case 'Jun':
                mesNumero = '06';
                break;
            case 'Jul':
                mesNumero = '07';
                break;
            case 'Ago':
                mesNumero = '08';
                break;
            case 'Sep':
                mesNumero = '09';
                break;
            case 'Oct':
                mesNumero = '10';
                break;
            case 'Nov':
                mesNumero = '11';
                break;
            case 'Dic':
                mesNumero = '12';
                break;
        }
        var year = new Date().getFullYear();
        // console.log(year);
        fechaFinal = `${year}-${mesNumero}-${fecha.substring(0,2)}`;
    }

    return fechaFinal;
};

export const convertirFechaBancoGeneral = (fecha) => {


    const dia = new Date(fecha).toLocaleDateString('es-MX', { day: 'numeric' }).toString().padStart(2, 0);
    const mes = new Date(fecha).toLocaleDateString('es-MX', { month: 'numeric' }).toString().padStart(2, 0);
    const anio = new Date(fecha).toLocaleDateString('es-MX', { year: 'numeric' }).toString().padStart(4, 0);

    let fechaFinal = '';
    fechaFinal = `${anio}-${mes}-${dia}`;
    return fechaFinal;
};


export const convertirFechaBancoGeneralSeparado = (fecha) => {


    const dia = new Date(fecha).toLocaleDateString('es-MX', { day: 'numeric' }).toString().padStart(2, 0);
    const mes = new Date(fecha).toLocaleDateString('es-MX', { month: 'numeric' }).toString().padStart(2, 0);
    const anio = new Date(fecha).toLocaleDateString('es-MX', { year: 'numeric' }).toString().padStart(4, 0);

    let fechaFinal = {};
    fechaFinal = {
        anio: anio,
        mes: mes,
        dia: dia
    };
    return fechaFinal;
};

export const convertirFechaMes = (fecha) => {

    // const dia = new Date(fecha).toLocaleDateString('es-MX', { day: 'numeric' }).toString().padStart(2, 0);
    const mes = new Date(fecha).toLocaleDateString('es-MX', { month: 'numeric' }).toString().padStart(2, 0);
    // const anio = new Date(fecha).toLocaleDateString('es-MX', { year: 'numeric' }).toString().padStart(4, 0);
    // const hora = new Date(fecha).toLocaleTimeString('es-MX');

    return `${mes}`;

};

export const isNumber = (evt) => {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode >= 48 && charCode <= 57)) {
        return true;
    } else {
        evt.preventDefault();
    }
};

export const isFormato = (evt) => {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode >= 48 && charCode <= 57)) {
        return true;
    } else {
        evt.preventDefault();
    }
};

export const isNumero = (evt) => {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode >= 48 && charCode <= 57)) {
        return true;
    } else {
        evt.preventDefault();
    }
};

export const isTexto = (evt) => {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        return true;
    } else {
        evt.preventDefault();
    }
};

export const isTextoNumero = (evt) => {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || (charCode >= 48 && charCode <= 57)) {
        return true;
    } else {
        evt.preventDefault();
    }
};

export const isDecimal = (evt) => {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
    } else {
        return true;
    }
};

export const isNumeroDecimal = (evt) => {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode >= 48 && charCode <= 57) || (charCode === 46)) {
        return true;
    } else {
        evt.preventDefault();
    }
};

export const isDecimal02 = (evt) => {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46 && charCode !== 44) {
        evt.preventDefault();
    } else {
        return true;
    }
};

export const imagenToBase64 = async(archivo) => {
    return new Promise(resolve => {
        if (archivo !== null || archivo !== '') {
            if (archivo.type === 'image/jpeg' || archivo.type === 'image/jpg' || archivo.type === 'image/png' || archivo.type === 'application/pdf') {
                const leer = new FileReader();
                leer.readAsDataURL(archivo);
                leer.onload = () => resolve({
                    bandera: true,
                    base64: leer.result,
                    name: archivo.name
                });
            } else {
                resolve({
                    bandera: false,
                    base64: '',
                    name: ''
                });
            }
        } else {
            resolve({
                bandera: false,
                base64: '',
                name: ''
            });
        }



    });

};

export const formatNumero = (value) => {
    value = value === null ? 0 : value;
    value = value === 'null' ? 0 : value;
    if (value === '-') {
        return '0.00';
    } else {
        value = value.toString().replace(/,/g, '').replace('$', '')
        let val = (value / 1).toFixed(2);
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "");
    }
};

export const formatNumeroExcel = (value) => {

    // let valor_inicial = value;
    let valor = 0.00;

    if (value === null || value === undefined) {
        valor = 0.00;
    }
    if ((/\$-/).test(value)) {
        valor = 0.00;
    }
    if ((/\$[0-9]|,/).test(value)) {
        valor = value.replace(/\$|,|\s/g, '');
    }
    // console.log(y, ' 01 -> ', valor_inicial, valor)
    return valor;
};

export const formatoMexico = (value) => {
    try {
        if (value !== undefined) {
            value = value.toString().replace(/,/g, '')

            let val = (value / 1).toFixed(2);
            const exp = /(\d)(?=(\d{3})+(?!\d))/g;
            const rep = '$1,';
            return val.toString().replace(exp, rep);
        }
    } catch (error) {
        return "0.00";
    }
};

const formatearFecha = fecha => {
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate();
    return `${fecha.getFullYear()}-${(mes < 10 ? '0' : '').concat(mes)}-${(dia < 10 ? '0' : '').concat(dia)}`;
};


const obtenerFechaInicioDeMes = () => {
    const fechaInicio = new Date();
    return new Date(fechaInicio.getFullYear(), fechaInicio.getMonth(), 2);
};

const obtenerFechaFinDeMes = () => {
    const fechaFin = new Date();
    return new Date(fechaFin.getFullYear(), fechaFin.getMonth() + 1, 1);
};

export const arrayMesActual = () => {
    const fechaInicio = obtenerFechaInicioDeMes();
    const fechaFin = obtenerFechaFinDeMes();
    const fechaInicioFormateada = formatearFecha(fechaInicio);
    const fechaFinFormateada = formatearFecha(fechaFin);
    return [fechaInicioFormateada, fechaFinFormateada];
};


export const layoutBancario = async(jsonLayOut, jsonDatos) => {
    let contenidos = '';
    jsonLayOut.map((dato) => {
        if (dato.tipo === 'datos') {
            jsonDatos.map((datoDatos, index) => {
                dato.datosConfig.config.map((datoConfig) => {
                    if (datoConfig.tipo === 'autonumerico') {
                        contenidos += (datoConfig.inicariEn + index).toString().substring(0, datoConfig.campoConfi.tamaño).padStart(datoConfig.campoConfi.tamaño, datoConfig.campoConfi.caracterRellenoInicio).padEnd(datoConfig.campoConfi.tamaño, datoConfig.campoConfi.caracterRellenoFin);
                    } else if (datoConfig.tipo === 'caracter') {
                        contenidos += datoConfig.texto.substring(0, datoConfig.campoConfi.tamaño).padStart(datoConfig.campoConfi.tamaño, datoConfig.campoConfi.caracterRellenoInicio).padEnd(datoConfig.campoConfi.tamaño, datoConfig.campoConfi.caracterRellenoFin);
                    } else if (datoConfig.tipo === 'campo') {
                        contenidos += datoDatos[datoConfig.campo].toString().substring(0, datoConfig.campoConfi.tamaño).padStart(datoConfig.campoConfi.tamaño, datoConfig.campoConfi.caracterRellenoInicio).padEnd(datoConfig.campoConfi.tamaño, datoConfig.campoConfi.caracterRellenoFin);
                    } else if (datoConfig.tipo === 'campoMonto') {
                        contenidos += datoDatos[datoConfig.campo].toString().replace(',', '').replace('.', '').substring(0, datoConfig.campoConfi.tamaño).padStart(datoConfig.campoConfi.tamaño, datoConfig.campoConfi.caracterRellenoInicio).padEnd(datoConfig.campoConfi.tamaño, datoConfig.campoConfi.caracterRellenoFin);
                    }

                });
                contenidos += '\n';
            });
        }
    });
    const archivo = new Blob([(contenidos)], { type: 'text/plain' });
    return await blobToBase64(archivo);
};

const blobToBase64 = blob => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
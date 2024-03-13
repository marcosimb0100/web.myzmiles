// socket.on ==> Escuchar
// socket.emit ==> emitir un evento

import { io } from "socket.io-client";

const url_socket_io = 'http://localhost:8503';

// const url_socket_io = 'http://cbancario.ddns:3030';

// const url_socket_io = 'wss://sio.samsuitefinanzas.net';

import router from '../router/router';
let interval = 5000;

export let socket = io.connect(url_socket_io);

const myTiempo = () => {
    setTimeout(myFnCon, interval)
};

const myFnCon = () => {
    try {
        socket.connect()
    } catch (err) {
        console.log(err);
    }
};


export const socket_estatus = () => {

    socket.on('connect', () => {
        localStorage.setItem('clienteIO', socket.id);
        if (localStorage.getItem('permiso') !== null || localStorage.getItem('permiso') === '') {
            socket_sala();
            if (localStorage.getItem('rutaActual') !== null || localStorage.getItem('rutaActual') === '') {
                router.replace({ path: localStorage.getItem('rutaActual') });
            } else {
                router.replace({ name: 'principal' });
            }
        }
        console.log('Conectado');
    });


    socket.on('disconnect', () => {
        myTiempo();
        localStorage.clear();
        router.replace({ name: 'acceso' });
        console.log('Desconectado');
    });

};

export const socket_disconnect = () => {
    socket.disconnect();
    socket.connect();
}

export const socket_sala = () => {
    socket.emit('sala', { permiso: localStorage.getItem('permiso'), softweb: true, softapp: false });
};
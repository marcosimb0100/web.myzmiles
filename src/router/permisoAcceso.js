const permisoAcceso = (to, from, next) => {

    console.log( 'permiso', localStorage.getItem('permiso') );

    if (localStorage.getItem('permiso') !== null || localStorage.getItem('permiso') !== '') {
        next({ path: '/login' });
    }

};

export default permisoAcceso;

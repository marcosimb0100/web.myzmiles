const permisoRutas = (to, from, next) => {

    if (localStorage.getItem('permiso') === null || localStorage.getItem('permiso') === '') {
        next({ path: '/login' });
    } else {
        next();
    }

};

export default permisoRutas;
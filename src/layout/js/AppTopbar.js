const useProcesoTopBar = () => {

    const darkTheme = () => {
        return this.$appState.darkTheme;
    }

    darkTheme();

    const onMenuToggle = (event) => {
        this.$emit('menu-toggle', event);
    }

    const onTopbarMenuToggle = (event) => {
        this.$emit('topbar-menu-toggle', event);
    }

    const topbarImage = () => {
        return this.$appState.darkTheme ? 'images/SAM_200x200.png' : 'images/SAM_200x200.png';
    }

    const cerrarSesion = () => {

        this.$confirm.require({
            message: 'Estas seguro de cerrar la sesion.',
            header: 'Cierre de sesion',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.$router.replace({ name: 'acceso' });
                localStorage.clear();
            }
        });
    }

    return {
        onMenuToggle,
        onTopbarMenuToggle,
        topbarImage,
        cerrarSesion
    }

};

export default useProcesoTopBar;
<template>
    
    <notifications style="z-index: 100050; margin-top: 50px; border-radius: 10px;" position="top center" width="800px"/>
    <cargando></cargando>
    <ConfirmDialog></ConfirmDialog>
    <Toast></Toast>

	<div :class="containerClass" @click="onWrapperClick">

        <AppTopBar @menu-toggle="onMenuToggle" />

        <div class="layout-main-container">
            <div class="main">
                <router-view />
            </div>
            <AppFooter />
        </div>

        <transition name="layout-mask">
            <div class="layout-mask p-component-overlay" v-if="mobileMenuActive"></div>
        </transition>
	</div>
</template>

<script>
import cargando from './components/cargando/Cargando.vue';
import AppTopBar from './layout/AppTopbar.vue';
// import AppMenu from './layout/AppMenu.vue';
import AppFooter from './layout/AppFooter.vue';
import { mapActions } from 'vuex';

export default {
    emits: ['change-theme'],
    data() {
        return {
            
            layoutMode: 'static',
            staticMenuInactive: false,
            overlayMenuActive: false,
            mobileMenuActive: false,
            
            menu : []

        }
    },

    watch: {
        $route() {
            this.menuActive = false;
            this.$toast.removeAllGroups();
        }
    },

    methods: {

        ...mapActions('api', {apiGetPermiso: 'apiGetPermiso'}),


        onWrapperClick() {
            if (!this.menuClick) {
                this.overlayMenuActive = false;
                this.mobileMenuActive = false;
            }

            this.menuClick = false;
        },
        onMenuToggle() {
            this.menuClick = true;

            if (this.isDesktop()) {
                if (this.layoutMode === 'overlay') {
					if(this.mobileMenuActive === true) {
						this.overlayMenuActive = true;
					}

                    this.overlayMenuActive = !this.overlayMenuActive;
					this.mobileMenuActive = false;
                }
                else if (this.layoutMode === 'static') {
                    this.staticMenuInactive = !this.staticMenuInactive;
                }
            }
            else {
                this.mobileMenuActive = !this.mobileMenuActive;
            }

            event.preventDefault();
        },
        onSidebarClick() {
            this.menuClick = true;
        },
        onMenuItemClick(event) {
            if (event.item && !event.item.items) {
                this.overlayMenuActive = false;
                this.mobileMenuActive = false;
            }
        },
		onLayoutChange(layoutMode) {
			this.layoutMode = layoutMode;
		},
        addClass(element, className) {
            if (element.classList)
                element.classList.add(className);
            else
                element.className += ' ' + className;
        },
        removeClass(element, className) {
            if (element.classList)
                element.classList.remove(className);
            else
                element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        },
        isDesktop() {
            return window.innerWidth >= 992;
        },
        isSidebarVisible() {
            if (this.isDesktop()) {
                if (this.layoutMode === 'static')
                    return !this.staticMenuInactive;
                else if (this.layoutMode === 'overlay')
                    return this.overlayMenuActive;
            }

            return true;
        },
        async fnPerfil(){
        //     const { idPerfil } = JSON.parse(localStorage.getItem('usuario'));
        //    const { datosDB } = await this.apiGetPermiso(
        //         { 
        //             mostrarNotificacion: false,
        //             direccion: `api/perfil/menuweb/${idPerfil}`
        //         }
        //     );
        //     this.menu = datosDB;

            // console.log('first')
        }
    },

    computed: {
        containerClass() {
            return ['layout-wrapper', {
                'layout-overlay': this.layoutMode === 'overlay',
                'layout-static': this.layoutMode === 'static',
                'layout-static-sidebar-inactive': this.staticMenuInactive && this.layoutMode === 'static',
                'layout-overlay-sidebar-active': this.overlayMenuActive && this.layoutMode === 'overlay',
                'layout-mobile-sidebar-active': this.mobileMenuActive,
				'p-input-filled': this.$primevue.config.inputStyle === 'filled',
				'p-ripple-disabled': this.$primevue.config.ripple === false
            }];
        },
        logo() {
            return (this.$appState.darkTheme) ? "images/logo-white.svg" : "images/logo.svg";
        }
    },

    beforeUpdate() {
        if (this.mobileMenuActive)
            this.addClass(document.body, 'body-overflow-hidden');
        else
            this.removeClass(document.body, 'body-overflow-hidden');
    },

    components: {
        'AppTopBar': AppTopBar,
        // 'AppMenu': AppMenu,
        // 'AppConfig': AppConfig,
        'AppFooter': AppFooter,
        cargando
    },
    created(){
        this.fnPerfil();
    }
}
</script>

<style lang="scss">
@import './App.scss';
</style>

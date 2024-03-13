<template>
	<div class="layout-topbar" style="background-color: rgba(229, 106, 111);">

		<span class="layout-topbar-logo" style=" background-color: white; width: 210px; margin: 15px; padding: 5px; box-shadow: 0px 0px 8px 5px rgba(255,255,255,1);
-webkit-box-shadow: 0px 0px 8px 5px rgba(255,255,255,1);
-moz-box-shadow: 0px 0px 8px 5px rgba(255,255,255,1);">

			<img alt="Logo" :src="topbarImage()" />

			<label style="color: rgb(53, 80, 112); font-weight: bold; ">Supplier</label>

		</span>

		<button class="p-link layout-topbar-menu-button layout-topbar-button"
			v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', 
			leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true}">
			<i class="pi pi-ellipsis-v"></i>
		</button>
		<ul class="layout-topbar-menu hidden lg:flex origin-top">
			<li>
				<button class="p-link layout-topbar-button" v-tooltip.left="'Sign off'" @click="handleCerrarSesion">
					<i class="pi pi-sign-out" style="color: white;"></i>
					<span>Sign off</span>
				</button>
			</li>
		</ul>
	</div>
</template>

<script>
	// import { socket_disconnect } from '../helpers/funcionesIO.js';
export default {
    methods: {
        onMenuToggle(event) {
            this.$emit('menu-toggle', event);
        },
		onTopbarMenuToggle(event) {
            this.$emit('topbar-menu-toggle', event);
        },
		topbarImage() {
			return this.$appState.darkTheme ? 'https://uploads-ssl.webflow.com/6286aa6a13d02243a271b1a8/62a8cac32f7a6c2d7ce46e9c_Zmiles%20Logos.svg' : 'https://uploads-ssl.webflow.com/6286aa6a13d02243a271b1a8/62a8cac32f7a6c2d7ce46e9c_Zmiles%20Logos.svg';
		},
		handleUsuario(){
			this.$router.push({name: 'usuario'});
		},
		handleCerrarSesion(){
			
			this.$confirm.require({
                message: 'Are you sure to log out?',
                header: 'Sign off',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.$router.replace({ name: 'login' });
					localStorage.clear();
					// socket_disconnect();
                }
            });
		}
    },
	computed: {
		darkTheme() {
			return this.$appState.darkTheme;
		}
	}
}
</script>
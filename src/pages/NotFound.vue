<template>
    <div class="surface-0 flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
        <div class="grid justify-content-center p-2 lg:p-0" style="min-width:80%">
            <div class="col-12 mt-5 xl:mt-0 text-center">
                <img src="https://uploads-ssl.webflow.com/6286aa6a13d02243a271b1a8/62a8cac32f7a6c2d7ce46e9c_Zmiles%20Logos.svg" alt="logo" class="mb-5" width="250">
                <!-- <img src=""> -->
            </div>
            <div class="col-12 xl:col-6" style="border-radius:56px; padding:0.3rem; background: linear-gradient(180deg, rgba(53, 80, 112, 0.4) 10%, rgba(53, 80, 112, 0) 30%);">
                <div class="flex justify-content-center h-full w-full m-0 py-7 px-4" style="border-radius:53px; background: linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0));">
                    <div class="grid flex-column align-items-center">
                        <span class="font-bold text-3xl lg:text-5xl mb-8" style="color: rgb(53, 80, 112);"> <span style="font-size: 85px">404</span></span>
                        <h1 class="text-900 font-bold text-3xl lg:text-5xl mb-2">It seems that you are lost.</h1>
                        <span class="text-gray-600">The requested resource is not available.</span>
                        
                        <div class="col-12 mt-5 text-center">
                            <button class="classButton" @click="goBack">
                                <i class="pi pi-fw pi-arrow-left text-blue-500 mr-2" style="vertical-align:center;"></i>
                                Go back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import router from '../router/router'
    export default {
        setup() {

            const goBack = () => {
                router.push({ name: 'login' });
            };

            return{
                goBack
            }
        }
    }
</script>

<style scoped>
.classButton{
    border: none;
    background-color: inherit;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    display: inline-block;
}
</style>

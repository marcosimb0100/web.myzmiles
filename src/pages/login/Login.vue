<template>
  
    <notifications style="z-index: 100050; margin-top: 10px; border-radius: 10px;" position="top center" width="800px"/>
    <cargando></cargando>

    <section style="margin-top: 70px;">

        <div class="container">

            <div class="row" style="padding: 5px;">

                <div class="col-lg-6" style="margin: auto;">

                    <div class="card cascading-right" style="background: hsla(0, 0%, 100%, 0.55); backdrop-filter: blur(30px);">
                        <div class="card-body p-5 shadow-5 text-center">
                            <img src="https://uploads-ssl.webflow.com/6286aa6a13d02243a271b1a8/62a8cac32f7a6c2d7ce46e9c_Zmiles%20Logos.svg" width="250">
                            <h2 class="fw-bold mb-5" style="color:rgb(53, 80, 112)">Login</h2>
                            
                            <form @submit.prevent="handleLogin">

                                <div class="form-outline mb-4">
                                    <input type="email" id="form3Example3" v-model="email" class="form-control" placeholder="correo@domain.extensión"/>
                                    <label class="form-label" for="form3Example3" style="color:rgb(53, 80, 112); font-weight: bold;">Email supplier</label>
                                </div>

                                <div class="form-outline mb-4">
                                    <input type="password" id="form3Example4" v-model="password" class="form-control" placeholder="**************" />
                                    <label class="form-label" for="form3Example4" style="color:rgb(53, 80, 112); font-weight: bold;">Password</label>
                                </div>

                                <div class="d-grid gap-2">
                                    <button class="btn btn-primary" type="submit">Sign in</button>
                                </div>

                            </form>

                        </div>
                    </div>

                </div>

            </div>

        </div>
        
    </section>
    
</template>

<script>
import proceso from './js/proceso.js';
import cargando from '../../components/cargando/Cargando.vue';
export default {
    components: { cargando },
    setup(){
      return{
        ...proceso()
      }
    }
}
</script>

<style>
 @import './css/estilo.css';
</style>
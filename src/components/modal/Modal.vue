<template>
  
  <div class="modal-background fade-in">

        <div class="modal-container" :style="classSize">
            
            <div class="encabezadoContenido">
                <slot name="encabezado"></slot>
            </div>
            <hr>

            <div class="cuerpoContenido" :style="classSizeCuerpo">
                <slot name="cuerpo">
                    
                </slot>
            </div>

            <footer>
                <slot name="pie"></slot>
            </footer>

            
        </div>

    </div>

</template>

<script>
import proceso from './js/proceso.js';
export default {
    name:'modal',
    props: ['size', 'sizeCuerpo'],
    setup(props){
        return{
            ...proceso(props)
        }
    }
}
</script>

<style scoped>
    @import './css/estilo.css';
</style>
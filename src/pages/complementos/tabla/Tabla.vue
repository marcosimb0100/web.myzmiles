<template>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr style="background-color: gray; color: white">
                    <th v-for="({etiqueta}, index) in registros.camposEncabezados" :key="index" class="header" scope="col" style="background-color: gray; color: white">{{etiqueta}}</th>
                </tr>
            </thead>
            <tbody>

                <tr v-for="(datos, index) in registros.registros" :key="index">

                    <td v-for="( {campo, formato}, index ) in registros.camposEncabezados" :key="index" :style="datos.compartida === true ? 'background-color:RGBA(255,214,82,0.13);' : ''">

                        <h6 class="mb-0 text-xs">{{ formato === 'Moneda' ? `$ ${formatoMexico(datos[campo])}` : datos[campo] }}</h6>
                        
                    </td>

                </tr>

            </tbody>
        </table>
    </div>

    </template>
    
    <script>
    import { formatoMexico } from '../../../helpers/general.js';
    export default {
    
        name: 'Tabla',
        emits: ['nuevo', 'editar', 'eliminar', 'estatus'],
        props: {
    
            registros:{}
    
        },
    
        setup(){
            return {
                formatoMexico
            }    
        }
    
    }
    </script>
    
    <style>
        thead tr th { 
            position: sticky;
            top: 0;
            z-index: 10;
            /* background-color: #ffffff; */
        }
    
        .table-responsive { 
            height:595px;
            /* overflow:scroll; */
        }
    </style>
    
<template>
    <div>
     <div class="container">
        <div class="row"> 
            <div  v-if="!programacionactual.programa" class="col-12">
                <table  class="table">
                    <thead class="thead-dark">
                    <tr>
                    <td scope="col">Descripción del programa</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td></td>
                    </tr>
                    </tbody> 
                </table>
            </div> 
            <div  v-else class="col-12">
                <table  class="table">
                    <thead class="thead-dark">
                    <tr>
                    <th scope="col">Descripción del programa {{programacionactual.programa.name}} - {{programacionactual.programa.name_driver}}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr >
                    <td>{{programacionactual.programa.description}}</td>
                    </tr>
                    </tbody> 
                </table>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <table class="table">
                    <thead class="thead-dark">
                    <tr>
                    <th scope="col">Hora</th>
                    <th scope="col">Programa</th>
                    <th scope="col">Conductor</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="programacion in programacion" :key="programacion.pivot.id">
                    <th>{{programacion.pivot.time_start | formatime}}-{{programacion.pivot.time_end | formatime}}</th>
                    <td>{{programacion.name}}</td>
                    <td>{{programacion.name_driver}}</td>
                    </tr>
                    </tbody> 
                </table>
            </div>
        </div>
    </div>
    </div>


</template>


<script>
import axios from 'axios';
import moment from 'moment';
export default {
    data(){
        return{
          programacion:[],
          programacionactual:[],

        }
    },
    methods:{

        async getProgramacion(){
        let url = '/programacion-estacion/9'
        const res= await axios.get(url)
        this.programacion = res.data.programacion


      },
      async getProgramacionActual(){
            let url= '/programacion-estacion-actual/9'
            const res= await axios.get(url)
            this.programacionactual= res.data.programacion
    },
    },
     mounted(){
     this.getProgramacion();
     this.getProgramacionActual();

 },
  // cortamos la hora  a h:mm co  la function formattime
    filters: {
    formatime: function (date) {
        let hora_format = date.split(":");
        return hora_format[0] + ':'  + hora_format[1];
      }
    }
}
</script>
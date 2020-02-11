<template>
    

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



</template>


<script>
import axios from 'axios';
import moment from 'moment';
export default {
    data(){
        return{
          programacion:[]
        }
    },
    methods:{

        async getProgramacion(){
        let url = '/programacion-estacion/9'
        const res= await axios.get(url)
        this.programacion = res.data.programacion


      }
    },
     mounted(){
     this.getProgramacion();
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
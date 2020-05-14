<template>
    <div>
        <div style="width:340px; float: left; border: 0px solid red;">
        <iframe :src="estacion.video" width="340" height="178" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        </div>
        <div style="float:left; border: 0px solid black;">
            <img :src="programacion.image_full" width="340" height="178" class="alignnone size-medium" />
        </div> 
        <br><br>
        <div class="row">
            <div class="col-10">
                <table style="width:89%" class="table">
                    <thead class="thead-dark">
                    <tr>
                    <th scope="col">Hora</th>
                    <th scope="col">Programa</th>
                    <th scope="col">Conductor</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="programacion in programacionAll" :key="programacion.pivot.id">
                    <td style="width:24%">{{programacion.pivot.time_start | formatime}}-{{programacion.pivot.time_end | formatime}}</td>
                    <td style="width:38%">{{programacion.name}}</td>
                    <td style="width:38%">{{programacion.name_driver}}</td>
                    </tr>
                    </tbody>  

                    
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    
    data(){
        return{
          estacion:{},
          programacion:{},
          programacionAll:[]
        }
    },
    mounted(){
      this.estacionEnvivo1500();
      this.programacion1500();
    },
    methods: {
     async estacionEnvivo1500(){
      let url = '/programacion-estacion-actual/6'
      axios.get(url).then(res=>{
          let respuesta = res.data;
          this.estacion = respuesta.estacion;
          this.programacion = respuesta.programacion.programa;
      })
     },
     async programacion1500(){
      let url = '/programacion-estacion/6'
      axios.get(url).then(res=>{
          this.programacionAll = res.data.programacion;
      })
     }
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
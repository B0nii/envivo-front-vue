<template>
 <div>
    <div class="container" v-show="programacionactual.programa.video != null" >
            <div class="widget-title the-global-title">
            <div style="overflow: hidden">
            <h4 style="color: #0f4d97; font-size: 18px; float:left">Conferencia de Prensa Coronavirus</h4>
            </div>
            </div>
         <div class="row">
            <iframe :src="programacionactual.programa.video" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
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
            estacion:[],
            programacionactual:[],
            loading: true,
         
        }
    },
    methods: {
    async getProgramacion(){
        let url = '/programacion-estacion/10'
        const res= await axios.get(url)
        this.estacion = res.data.estacion


    },
    async getProgramacionActual(){
            let url= '/programacion-estacion-actual/10'
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
  },
    
}
</script>
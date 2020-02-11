<template>
 <div>
       <h3 class="text-center">{{estacion.name}}</h3>
    <div class="container">
         <div v-if="!programacionactual.programa" class="row">
             <img src="https://www.radioformula.com.mx/wp-content/uploads/envivoimg/imagenes/la-mananera_radio-formula_1200x628.jpg"  class="rounded mx-auto d-block img-fluid">
        </div>
        <div v-else class="row">
            <iframe :src="programacionactual.programa.image_full" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        </div>
   
    </div>
   

<!--{{programacion}}
{{programacionactual}}-->
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
        let url = '/programacion-estacion/9'
        const res= await axios.get(url)
        this.estacion = res.data.estacion


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
  },
    
}
</script>
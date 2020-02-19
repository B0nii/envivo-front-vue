<template>
 <div>
<<<<<<< HEAD
      
=======
>>>>>>> 03fbd2e2a1ad47dd792fe7fade60262cdc441768
    <div class="container">
         <div v-if="!programacionactual.programa" class="row">
             <img src="https://www.radioformula.com.mx/wp-content/uploads/envivoimg/la-mananera-en-vivo_radio-formula_1200x628.jpg"  class="rounded mx-auto d-block img-fluid">
        </div>
        <div v-else class="row">
<<<<<<< HEAD
            <iframe :src="programacionactual.programa.image_full" width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
=======
            <iframe :src="programacionactual.programa.video" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
>>>>>>> 03fbd2e2a1ad47dd792fe7fade60262cdc441768
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
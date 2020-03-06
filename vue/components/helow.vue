<template>
    <div>
        <!-- <slider-mananera/> -->
         <sliderdos/>
         <!-- <slider/> -->

        <!-- <estacion-104/>
        <estacion-103/>
        <estacion-970/>
        <estacion-1470/>
        <estacion-1500/>
        <teleformula/>
        <la-mananera/>
        <horarios-mananera/> -->

    </div>   
</template>

<!--template>
  <div>
     <div v-if="programacionactualmananera.time_start < moment() && programacionactualmananera.time_end > moment()" >
       <slider-mananera/>      
     </div>
     <div v-else>
       <slider-carrousel/>
     </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
export default {
    data(){
        return{

            programacionactualmananera:[],
    }
  },
     mounted(){

        this.getProgramacionActualMananera();
    },
     methods: {
   
        async getProgramacionActualMananera(){
            let url= '/programacion-estacion-actual/9'
            const res= await axios.get(url)
            this.programacionactualmananera= res.data.programacion


        },
            moment: function (date) {
            return moment().format('HH:mm:ss');
            },
  }
} 

</script>


<template>
  <div >
    <carousel v-if="programacionactualmananera.time_start < moment() && programacionactualmananera.time_end > moment()" :margin="4" :items="3" :loop="false" :nav="false" :autoHeight="true" autoWidth="true">
      <!-- Inicia Estacion Mañanera -->
        <div v-if="programacionactualmananera.programa" >
          <img  :src="programacionactualmananera.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid">
        </div>
      <!-- Termina Estacion Mañanera -->
      <!-- Inicia Estacion 103 -->
      <div v-if="!programacionactual103.programa">
        <img src="https://www.radioformula.com.mx/wp-content/uploads/envivoimg/imagenes/radio-formula_500x340.jpg"  class="rounded mx-auto d-block img-fluid">
      </div>
      <div v-else-if="programacionactual103.programa">
        <img  :src="programacionactual103.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid">
      </div>
      <!-- Termina Estacion 103 -->
      <!-- EmpiezaEstacion 104 -->
      <div v-if="!programacionactual104.programa">
        <img src="https://www.radioformula.com.mx/wp-content/uploads/envivoimg/imagenes/radio-formula_500x340.jpg"  class="rounded mx-auto d-block img-fluid">
      </div>
      <div v-else-if="programacionactual104.programa">
        <img  :src="programacionactual104.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid">
      </div>
      <!-- Termina Estacion 104 -->
      <!-- EmpiezaEstacion Teleformula -->
      <div v-if="!programacionactualTeleformula.programa">
        <img src="https://www.radioformula.com.mx/wp-content/uploads/envivoimg/imagenes/radio-formula_500x340.jpg"  class="rounded mx-auto d-block img-fluid">

      </div>
      <div v-else-if="programacionactualTeleformula.programa">
        <img  :src="programacionactualTeleformula.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid">
      </div>
      <!-- Termina Estacion Teleformula -->
      <!-- EmpiezaEstacion 970 -->
      <div v-if="!programacionactual970.programa">
        <img src="https://www.radioformula.com.mx/wp-content/uploads/envivoimg/imagenes/radio-formula_500x340.jpg"  class="rounded mx-auto d-block img-fluid">

      </div>
      <div v-else-if="programacionactual970.programa">
        <img  :src="programacionactual970.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid">
      </div>
      <!-- Termina Estacion 970 -->
      <!-- EmpiezaEstacion 1470 -->
      <div v-if="!programacionactual1470.programa">
        <img src="https://www.radioformula.com.mx/wp-content/uploads/envivoimg/imagenes/radio-formula_500x340.jpg"  class="rounded mx-auto d-block img-fluid">

      </div>
      <div v-else-if="programacionactual1470.programa">
        <img  :src="programacionactual1470.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid">
      </div>
      <!-- Termina Estacion 1470 -->
      <!-- EmpiezaEstacion 1500 -->
      <div v-if="!programacionactual1500.programa">
        <img src="https://www.radioformula.com.mx/wp-content/uploads/envivoimg/imagenes/radio-formula_500x340.jpg"  class="rounded mx-auto d-block img-fluid">

      </div>
      <div v-else-if="programacionactual1500.programa">
        <img  :src="programacionactual1500.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid">
      </div>
      <!-- Termina Estacion 1500 -->
</carousel>
<div v-else>
      <carousel :margin="4" :items="3" :loop="false" :nav="false">
      <!-- Inicia Estacion 103 -->
      <div v-if="!programacionactual103.programa">
        <img src="https://www.radioformula.com.mx/wp-content/uploads/envivoimg/imagenes/radio-formula_500x340.jpg"  class="rounded mx-auto d-block img-fluid">
      </div>
      <div v-else-if="programacionactual103.programa">
        <img  :src="programacionactual103.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid">
      </div>
      <!-- Termina Estacion 103 -->
      <!-- EmpiezaEstacion 104 -->
      <div v-if="!programacionactual104.programa">
        <img src="https://www.radioformula.com.mx/wp-content/uploads/envivoimg/imagenes/radio-formula_500x340.jpg"  class="rounded mx-auto d-block img-fluid">
      </div>
      <div v-else-if="programacionactual104.programa">
        <img  :src="programacionactual104.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid">
      </div>
      <!-- Termina Estacion 104 -->
      <!-- EmpiezaEstacion Teleformula -->
      <div v-if="!programacionactualTeleformula.programa">
        <img src="https://www.radioformula.com.mx/wp-content/uploads/envivoimg/imagenes/radio-formula_500x340.jpg"  class="rounded mx-auto d-block img-fluid">

      </div>
      <div v-else-if="programacionactualTeleformula.programa">
        <img  :src="programacionactualTeleformula.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid">
      </div>
      <!-- Termina Estacion Teleformula -->
      <!-- EmpiezaEstacion 970 -->
      <div v-if="!programacionactual970.programa">
        <img src="https://www.radioformula.com.mx/wp-content/uploads/envivoimg/imagenes/radio-formula_500x340.jpg"  class="rounded mx-auto d-block img-fluid">

      </div>
      <div v-else-if="programacionactual970.programa">
        <img  :src="programacionactual970.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid">
      </div>
      <!-- Termina Estacion 970 -->
      <!-- EmpiezaEstacion 1470 -->
      <div v-if="!programacionactual1470.programa">
        <img src="https://www.radioformula.com.mx/wp-content/uploads/envivoimg/imagenes/radio-formula_500x340.jpg"  class="rounded mx-auto d-block img-fluid">

      </div>
      <div v-else-if="programacionactual1470.programa">
        <img  :src="programacionactual1470.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid">
      </div>
      <!-- Termina Estacion 1470 -->
      <!-- EmpiezaEstacion 1500 -->
      <div v-if="!programacionactual1500.programa">
        <img src="https://www.radioformula.com.mx/wp-content/uploads/envivoimg/imagenes/radio-formula_500x340.jpg"  class="rounded mx-auto d-block img-fluid">

      </div>
      <div v-else-if="programacionactual1500.programa">
        <img  :src="programacionactual1500.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid">
      </div>
      <!-- Termina Estacion 1500 -->
</carousel>
</div>


  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import carousel from 'vue-owl-carousel'
export default {
        components: { carousel},

    data(){
        return{
            programacionactual103:[],
            
            programacionactual104:[],

            programacionactualTeleformula:[],

            programacionactual970:[],

            programacionactualTeleformula:[],

            programacionactual1470:[],
            
            programacionactual1500:[],

            programacionactualmananera:[],
    }
  },
     mounted(){

        this.getProgramacionActual103();

        this.getProgramacionActual104();

        this.getProgramacionActualTeleformula();

        this.getProgramacionActual970();

        this.getProgramacionActual470();

        this.getProgramacionActual1500();

        this.getProgramacionActualMananera();
    },
     methods: {
      
        async getProgramacionActual103(){
            let url= '/programacion-estacion-actual/1'
            const res= await axios.get(url)
            this.programacionactual103= res.data.programacion


        },
      
        async getProgramacionActual104(){
            let url= '/programacion-estacion-actual/2'
            const res= await axios.get(url)
            this.programacionactual104= res.data.programacion


        },

        async getProgramacionActualTeleformula(){
            let url= '/programacion-estacion-actual/3'
            const res= await axios.get(url)
            this.programacionactualTeleformula= res.data.programacion
           this.loading = true;


        },
     
        async getProgramacionActual970(){
            let url= '/programacion-estacion-actual/4'
            const res= await axios.get(url)
            this.programacionactual970= res.data.programacion

        },
    
        async getProgramacionActual470(){
            let url= '/programacion-estacion-actual/5'
            const res= await axios.get(url)
            this.programacionactual1470= res.data.programacion


        },
     
        async getProgramacionActual1500(){
            let url= '/programacion-estacion-actual/6'
            const res= await axios.get(url)
            this.programacionactual1500= res.data.programacion


        },
   
        async getProgramacionActualMananera(){
            let url= '/programacion-estacion-actual/9'
            const res= await axios.get(url)
            this.programacionactualmananera= res.data.programacion


        },
            moment: function (date) {
            return moment().format('HH:mm:ss');7
            },
  }
} 

</script>


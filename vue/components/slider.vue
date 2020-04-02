<template>
 <carousel  :margin="8"  :merge="true" :loop="true" :nav="false" :responsive="{0:{items:1},600:{items:3}}">
     <!-- Inicia Estacion 103 -->
      <div v-if="!programacionactual103.programa">
        <a title="103.3. FM" href="https://www.radioformula.com.mx/103-3-fm-programacion-estacion-de-radio-grupo-formula">
        <img :src="programacionactual103.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid" style="width:330px; height:auto;  margin:auto;">
        </a>
       <h4 style="text-align: center;"><a title="103.3 FM" href="https://www.radioformula.com.mx/103-3-fm-programacion-estacion-de-radio-grupo-formula"><p style="color:#0f4d97">103.3 FM</p></a></h4>
      </div>
      <div v-else>
        <a title="103.3. FM" href="https://www.radioformula.com.mx/103-3-fm-programacion-estacion-de-radio-grupo-formula">
        <img  :src="programacionactual103.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid" style="width:330px; height:auto;  margin:auto;">
        </a>
        <h4 style="text-align: center;"><a title="103.3 FM" href="https://www.radioformula.com.mx/103-3-fm-programacion-estacion-de-radio-grupo-formula"><p style="color:#0f4d97">103.3 FM</p></a></h4>
      </div>
      <!-- Termina Estacion 103 -->
      <!-- EmpiezaEstacion 104 -->
      <div v-if="!programacionactual104.programa">
        <a title="104.1 FM" href="https://www.radioformula.com.mx/104-fm-programacion-estacion-de-radio-grupo-formula">
        <img :src="programacionactual103.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid" style="width:330px; height:auto;  margin:auto;">
        </a>
        <h4 style="text-align: center;"><a title="104.1 FM" href="https://www.radioformula.com.mx/104-fm-programacion-estacion-de-radio-grupo-formula"><p style="color:#0f4d97">104.1 FM</p></a></h4>

      </div>
      <div v-else>
        <a title="104.1 FM" href="https://www.radioformula.com.mx/104-fm-programacion-estacion-de-radio-grupo-formula">
        <img  :src="programacionactual104.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid" style="width:330px; height:auto;  margin:auto;" >
        </a>
        <h4 style="text-align: center;"><a title="104.1 FM" href="https://www.radioformula.com.mx/104-fm-programacion-estacion-de-radio-grupo-formula"><p style="color:#0f4d97">104.1 FM</p></a></h4>
      </div>
      <!-- Termina Estacion 104 -->
      <!-- EmpiezaEstacion Teleformula -->
      <div v-if="!programacionactualTeleformula.programa">
        <a title="Telefórmula" href="https://www.radioformula.com.mx/teleformula-programacion-semanal-tv-en-vivo-grupo-formula">
        <img :src="programacionactual103.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid" style="width:330px; height:auto;  margin:auto;">
        </a>
        <h4 style="text-align: center;"><a title="Telefórmula" href="https://www.radioformula.com.mx/teleformula-programacion-semanal-tv-en-vivo-grupo-formula"><p style="color:#0f4d97">Telefórmula</p></a></h4>
      </div>
      <div v-else>
        <a title="Telefórmula" href="https://www.radioformula.com.mx/teleformula-programacion-semanal-tv-en-vivo-grupo-formula">
        <img  :src="programacionactualTeleformula.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid" style="width:330px; height:auto;  margin:auto;">
        </a>
        <h4 style="text-align: center;"><a title="Telefórmula" href="https://www.radioformula.com.mx/teleformula-programacion-semanal-tv-en-vivo-grupo-formula"><p style="color:#0f4d97">Telefórmula</p></a></h4>
      </div>
      <!-- Termina Estacion Teleformula -->
      <!-- EmpiezaEstacion 970 -->
      <div v-if="!programacionactual970.programa">
        <a title="970 AM" href="https://www.radioformula.com.mx/970-am-programacion-estacion-de-radio-grupo-formula">
        <img :src="programacionactual103.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid" style="width:330px; height:auto;  margin:auto;">
        </a>
        <h4 style="text-align: center;"><a title="970 AM" href="https://www.radioformula.com.mx/970-am-programacion-estacion-de-radio-grupo-formula"><p style="color:#0f4d97">970 AM</p></a></h4>
      </div>
      <div v-else>
        <a title="970 AM" href="https://www.radioformula.com.mx/970-am-programacion-estacion-de-radio-grupo-formula">
        <img  :src="programacionactual970.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid" style="width:330px; height:auto;  margin:auto;">
        </a>
        <h4 style="text-align: center;"><a title="970 AM" href="https://www.radioformula.com.mx/970-am-programacion-estacion-de-radio-grupo-formula"><p style="color:#0f4d97">970 AM</p></a></h4>
      </div>
      <!-- Termina Estacion 970 -->
      <!-- EmpiezaEstacion 1470 -->
      <div v-if="!programacionactual1470.programa">
        <a title="1470 AM" href="https://www.radioformula.com.mx/1470-am-programacion-estacion-de-radio-grupo-formula/">
        <img :src="programacionactual103.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid" style="width:330px; height:auto;  margin:auto;">
        </a>
        <h4 style="text-align: center;"><a title="1470 AM" href="https://www.radioformula.com.mx/1470-am-programacion-estacion-de-radio-grupo-formula/"><p style="color:#0f4d97">1470 AM</p></a></h4>
      </div>
      <div v-else>
        <a title="1470 AM" href="https://www.radioformula.com.mx/1470-am-programacion-estacion-de-radio-grupo-formula/">
        <img  :src="programacionactual1470.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid" style="width:330px; height:auto;  margin:auto;">
        </a>
        <h4 style="text-align: center;"><a title="1470 AM" href="https://www.radioformula.com.mx/1470-am-programacion-estacion-de-radio-grupo-formula/"><p style="color:#0f4d97">1470 AM</p></a></h4>
      </div>
      <!-- Termina Estacion 1470 -->
      <!-- EmpiezaEstacion 1500 -->
      <div v-if="!programacionactual1500.programa">
        <a title="1500 AM" href="https://www.radioformula.com.mx/1500-am-programacion-estacion-de-radio-grupo-formula">
        <img :src="programacionactual103.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid" style="width:330px; height:auto;  margin:auto;">
        </a>
        <h4 style="text-align: center;"><a title="1500 AM" href="https://www.radioformula.com.mx/1500-am-programacion-estacion-de-radio-grupo-formula"><p style="color:#0f4d97">1500 AM</p></a></h4>
      </div>
      <div v-else>
        <a title="1500 AM" href="https://www.radioformula.com.mx/1500-am-programacion-estacion-de-radio-grupo-formula">
        <img  :src="programacionactual1500.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid" style="width:330px; height:auto;  margin:auto;">
        </a>
        <h4 style="text-align: center;"><a title="1500 AM" href="https://www.radioformula.com.mx/1500-am-programacion-estacion-de-radio-grupo-formula"><p style="color:#0f4d97">1500 AM</p></a></h4>
      </div>
      <!-- Termina Estacion 1500 -->
</carousel>
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
            
            programacionActualCoronavirus:[]
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

        this.getProgramacionActualCoronavirus();
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

        async getProgramacionActualCoronavirus(){
            let url = '/programacion-estacion-actual/10'
            const res = await axios.get(url)
            this.programacionActualCoronavirus = res.data.programacion
        },
            moment: function (date) {
            return moment().format('HH:mm:ss');
            },
  }
} 

</script>

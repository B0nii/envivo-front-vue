<template>
    <div>
        <!-- 180918 -->
    <div class="envivo">
    <div class="mag-box-container clearfix">
    <div class="loader-overlay">
    <div class="spinner-circle"></div>
    </div>
    <div class="scrolling-slider scrolling-box-slider">
    <div class="slide tie-audio" v-show="programacionactualmananera.time_start < moment() && programacionactualmananera.time_end > moment()"> 
    <div v-if="programacionactualmananera.time_start < moment() && programacionactualmananera.time_end > moment()" >

    <div  class="slide-img">
    <a title="LaMañanera" href="https://www.testdo.radioformula.com.mx/conferencia-amlo-en-vivo-mananera-hoy">
        <img :src="programacionactualmananera.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid">
    </a>
    </div>
    <div class="slide-content" >
    <h3 class="post-title"><a title="LaMañanera" href="https://www.testdo.radioformula.com.mx/conferencia-amlo-en-vivo-mananera-hoy">La Mañanera</a></h3>
    </div>
    </div>
    </div>
    <div class="slide tie-audio">
    <div v-if="!programacionactual103.programa" class="slide-img"><a title="103.3. FM" href="https://www.testdo.radioformula.com.mx/103-3-fm-programacion-estacion-de-radio-grupo-formula">
        <img src="https://www.radioformula.com.mx/wp-content/uploads/envivoimg/imagenes/radio-formula_500x340.jpg"  class="rounded mx-auto d-block img-fluid"></a>

    </div>
    <div v-else class="slide-img"><a title="103.3. FM" href="https://www.testdo.radioformula.com.mx/103-3-fm-programacion-estacion-de-radio-grupo-formula">
        <img :src="programacionactual103.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid"></a>
    </div>
    <div class="slide-content">
    <h3 class="post-title"><a title="103.3. FM" href="https://www.radioformula.com.mx/103-3-fm-programacion-estacion-de-radio-grupo-formula">103.3 FM</a></h3>
    </div>
    </div>
    <div  class="slide tie-audio">
    <div v-if="!programacionactual104.programa" class="slide-img">
        <a title="104.1 FM" href="https://www.radioformula.com.mx/104-fm-programacion-estacion-de-radio-grupo-formula">
        <img src="https://www.radioformula.com.mx/wp-content/uploads/envivoimg/imagenes/radio-formula_500x340.jpg"  class="rounded mx-auto d-block img-fluid"></a>
    </div>
    <div v-else class="slide-img">
        <a title="104.1 FM" href="https://www.radioformula.com.mx/104-fm-programacion-estacion-de-radio-grupo-formula">
        <img :src="programacionactual104.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid">
    </a>
    </div>
    <div class="slide-content">
    <h3 class="post-title"><a title="104.1 FM" href="https://www.radioformula.com.mx/104-fm-programacion-estacion-de-radio-grupo-formula">104.1 FM</a></h3>
    </div>
    </div>
    <div class="slide tie-audio">
    <div v-if="!programacionactualTeleformula.programa"  class="slide-img">
    <a title="Telefórmula" href="https://www.radioformula.com.mx/teleformula-programacion-semanal-tv-en-vivo-grupo-formula">
        <img src="https://www.radioformula.com.mx/wp-content/uploads/envivoimg/imagenes/radio-formula_500x340.jpg"  class="rounded mx-auto d-block img-fluid"></a>
    </div>
    <div v-else class="slide-img">
    <a title="Telefórmula" href="https://www.radioformula.com.mx/teleformula-programacion-semanal-tv-en-vivo-grupo-formula">
            <img :src="programacionactualTeleformula.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid">
    </a>
    </div>
    <div class="slide-content">
    <h3 class="post-title"><a title="Telefórmula" href="https://www.radioformula.com.mx/teleformula-programacion-semanal-tv-en-vivo-grupo-formula">Telefórmula</a></h3>
    </div>
    </div>
    <div class="slide tie-audio">
    <div v-if="!programacionactual970.programa" class="slide-img">
    <a title="970 AM" href="https://www.radioformula.com.mx/970-am-programacion-estacion-de-radio-grupo-formula">
        <img src="https://www.radioformula.com.mx/wp-content/uploads/envivoimg/imagenes/radio-formula_500x340.jpg"  class="rounded mx-auto d-block img-fluid"></a>
    </div>
    <div v-else class="slide-img">
    <a title="970 AM" href="https://www.radioformula.com.mx/970-am-programacion-estacion-de-radio-grupo-formula">
        <img :src="programacionactual970.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid">
    </a>
    </div>
    <div class="slide-content">
    <h3 class="post-title"><a title="970 AM" href="https://www.radioformula.com.mx/970-am-programacion-estacion-de-radio-grupo-formula">970 AM</a></h3>
    </div>
    </div>
    <div class="slide tie-audio">
    <div v-if="!programacionactual1470.programa" class="slide-img">
    <a title="1470 AM" href="https://www.radioformula.com.mx/1470-am-programacion-estacion-de-radio-grupo-formula/">
        <img src="https://www.radioformula.com.mx/wp-content/uploads/envivoimg/imagenes/radio-formula_500x340.jpg"  class="rounded mx-auto d-block img-fluid"></a>
    </div>
    <div v-else class="slide-img">
    <a title="1470 AM" href="https://www.radioformula.com.mx/1470-am-programacion-estacion-de-radio-grupo-formula/">
        <img :src="programacionactual1470.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid">
    </a>
    </div>
    <div class="slide-content">
    <h3 class="post-title"><a title="1470 AM" href="https://www.radioformula.com.mx/1470-am-programacion-estacion-de-radio-grupo-formula">1470 AM</a></h3>
    </div>
    </div>
    <div class="slide tie-audio">
    <div v-if="!programacionactual1500.programa"  class="slide-img">
    <a title="1500 AM" href="https://www.radioformula.com.mx/1500-am-programacion-estacion-de-radio-grupo-formula">
        <img src="https://www.radioformula.com.mx/wp-content/uploads/envivoimg/imagenes/radio-formula_500x340.jpg"  class="rounded mx-auto d-block img-fluid"></a>
    </div>
    <div v-else class="slide-img">
    <a title="1500 AM" href="https://www.radioformula.com.mx/1500-am-programacion-estacion-de-radio-grupo-formula/">
        <img :src="programacionactual1500.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid">
    </a>
    </div>
    <div class="slide-content">
    <h3 class="post-title"><a title="1500 AM" href="https://www.radioformula.com.mx/1500-am-programacion-estacion-de-radio-grupo-formula/">1500 AM</a></h3>
    </div>
    </div>
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
            programacionactual103:[],

            programacionactual104:[],

            programacionactualTeleformula:[],

            programacionactual970:[],

            programacionactualTeleformula:[],

            programacionactual1470:[],
            
            programacionactual1500:[],

            programacionactualmananera:[],
// estacion:[],
//             programacion:[],
//             programacionactual:[],

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
        

    //      this.getProgramacion();
    //  this.getProgramacionActual();
        
      

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
            let url= '/programacion-estacion-actual/7'
            const res= await axios.get(url)
            this.programacionactualmananera= res.data.programacion


        },
    //     async getProgramacion(){
    //     let url = '/programacion-estacion/7'
    //     const res= await axios.get(url)
    //     this.programacion = res.data.programacion
    //     this.estacion = res.data.estacion


    // },
    // async getProgramacionActual(){
    //         let url= '/programacion-estacion-actual/7'
    //         const res= await axios.get(url)
    //         this.programacionactual= res.data.programacion
    // },
        
         moment: function (date) {
            return moment().format('HH:mm:ss');
        },
 


    },
    
   
}
</script>

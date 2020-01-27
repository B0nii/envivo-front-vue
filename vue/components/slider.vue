<template>
    <div>
        <!-- 180918 -->
    <div class="envivo">
    <div class="mag-box-container clearfix">
    <div class="loader-overlay">
    <div class="spinner-circle"></div>
    </div>
    <div class="scrolling-slider scrolling-box-slider">
    <div class="slide tie-audio">
    <div v-if="!programacionactual103.programa" class="slide-img"><a title="103.3. FM" href="https://www.radioformula.com.mx//103-3-fm-programacion-estacion-de-radio-grupo-formula">
        <img src="https://www.radioformula.com.mx/wp-content/uploads/2018/08/cover_GF_1200x630-220x150.jpg"  class="rounded mx-auto d-block img-fluid"></a>
    </div>
    <div v-else class="slide-img"><a title="103.3. FM" href="https://www.radioformula.com.mx//103-3-fm-programacion-estacion-de-radio-grupo-formula">
        <img :src="programacionactual103.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid"></a>
    </div>
    <div class="slide-content">
    <h3 class="post-title"><a title="103.3. FM" href="https://www.radioformula.com.mx//103-3-fm-programacion-estacion-de-radio-grupo-formula">103.3 FM</a></h3>
    </div>
    </div>
    <div  class="slide tie-audio">
    <div v-if="!programacionactual104.programa" class="slide-img">
        <a title="104.1 FM" href="https://www.radioformula.com.mx//104-fm-programacion-estacion-de-radio-grupo-formula">
        <img src="https://www.radioformula.com.mx/wp-content/uploads/2018/08/cover_GF_1200x630-220x150.jpg"  class="rounded mx-auto d-block img-fluid"></a>
    </div>
    <div v-else class="slide-img">
        <a title="104.1 FM" href="https://www.radioformula.com.mx//104-fm-programacion-estacion-de-radio-grupo-formula">
        <img :src="programacionactual104.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid">
    </a>
    </div>
    <div class="slide-content">
    <h3 class="post-title"><a title="104.1 FM" href="https://www.radioformula.com.mx//104-fm-programacion-estacion-de-radio-grupo-formula">104.1 FM</a></h3>
    </div>
    </div>
    <div class="slide tie-audio">
    <div v-if="!programacionactualTeleformula.programa"  class="slide-img">
    <a title="Telefórmula" href="https://www.radioformula.com.mx//teleformula-programacion-semanal-tv-en-vivo-grupo-formula">
        <img src="https://www.radioformula.com.mx/wp-content/uploads/2018/08/cover_GF_1200x630-220x150.jpg"  class="rounded mx-auto d-block img-fluid"></a>
    </div>
    <div v-else class="slide-img">
    <a title="Telefórmula" href="https://www.radioformula.com.mx//teleformula-programacion-semanal-tv-en-vivo-grupo-formula">
            <img :src="programacionactualTeleformula.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid">
    </a>
    </div>
    <div class="slide-content">
    <h3 class="post-title"><a title="Telefórmula" href="https://www.radioformula.com.mx//teleformula-programacion-semanal-tv-en-vivo-grupo-formula">Telefórmula</a></h3>
    </div>
    </div>

    <div class="slide tie-audio">
    <div v-if="!programacionactual970.programa" class="slide-img">
    <a title="970 AM" href="https://www.radioformula.com.mx//970-am-programacion-estacion-de-radio-grupo-formula">
        <img src="https://www.radioformula.com.mx/wp-content/uploads/2018/08/cover_GF_1200x630-220x150.jpg"  class="rounded mx-auto d-block img-fluid"></a>
    </div>
    <div v-else class="slide-img">
    <a title="970 AM" href="https://www.radioformula.com.mx//970-am-programacion-estacion-de-radio-grupo-formula">
        <img :src="programacionactual970.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid">
    </a>
    </div>
    <div class="slide-content">
    <h3 class="post-title"><a title="970 AM" href="https://www.radioformula.com.mx//970-am-programacion-estacion-de-radio-grupo-formula">970 AM</a></h3>
    </div>
    </div>
    <div class="slide tie-audio">
    <div v-if="!programacionactual1470.programa" class="slide-img">
    <a title="1470 AM" href="https://www.radioformula.com.mx/1470-am-programacion-estacion-de-radio-grupo-formula/">
        <img src="https://www.radioformula.com.mx/wp-content/uploads/2018/08/cover_GF_1200x630-220x150.jpg"  class="rounded mx-auto d-block img-fluid"></a>
    </div>
    <div v-else class="slide-img">
    <a title="1470 AM" href="https://www.radioformula.com.mx//1470-am-programacion-estacion-de-radio-grupo-formula/">
        <img :src="programacionactual1470.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid">
    </a>
    </div>
    <div class="slide-content">
    <h3 class="post-title"><a title="1470 AM" href="https://www.radioformula.com.mx//1470-am-programacion-estacion-de-radio-grupo-formula">1470 AM</a></h3>
    </div>
    </div>
    <div class="slide tie-audio">
    <div v-if="!programacionactual1500.programa"  class="slide-img">
    <a title="1500 AM" href="https://www.radioformula.com.mx//1500-am-programacion-estacion-de-radio-grupo-formula">
        <img src="https://www.radioformula.com.mx/wp-content/uploads/2018/08/cover_GF_1200x630-220x150.jpg"  class="rounded mx-auto d-block img-fluid"></a>
    </div>
    <div v-else class="slide-img">
    <a title="1500 AM" href="https://www.radioformula.com.mx//1500-am-programacion-estacion-de-radio-grupo-formula/">
        <img :src="programacionactual1500.programa.image_thumbnail"  class="rounded mx-auto d-block img-fluid">
    </a>
    </div>
    <div class="slide-content">
    <h3 class="post-title"><a title="1500 AM" href="https://www.radioformula.com.mx//1500-am-programacion-estacion-de-radio-grupo-formula/">1500 AM</a></h3>
    </div>
    </div>
    </div>
    </div>
    </div>
       <!-- {{"103"}}{{programacionactual103}}
        {{"----------------------------------------"}}
        {{"104"}}{{programacionactual104}}
        {{"----------------------------------------"}}
        {{"1500"}}{{programacionactual1500}}
        {{"----------------------------------------"}}
        {{"970"}}{{programacionactual970}}
        {{"----------------------------------------"}}
        {{"1470"}}{{programacionactual1470}}
        {{"----------------------------------------"}}
        {{"teleformula"}}{{programacionactualTeleformula}}
        {{"----------------------------------------"}}-->


    </div>

</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            estacion103:[],
            programacionactual103:[],

            estacion104:[],
            programacionactual104:[],

            estacionTeleformula:[],
            programacionactualTeleformula:[],

            estacion970:[],
            programacionactual970:[],

            estacionTeleformula:[],
            programacionactualTeleformula:[],

            estacion1470:[],
            programacionactual1470:[],
            
            estacion1500:[],
            programacionactual1500:[],


        }
    },
    mounted(){
        this.getProgramacion103();
        this.getProgramacionActual103();

        this.getProgramacion104();
        this.getProgramacionActual104();

        this.getProgramacionTeleformula();
        this.getProgramacionActualTeleformula();

        this.getProgramacion970();
        this.getProgramacionActual970();

        this.getProgramacion1470();
        this.getProgramacionActual470();

        this.getProgramacion1500();
        this.getProgramacionActual1500();

        


    },
    methods: {
        async getProgramacion103(){
            let url= '/programacion-estacion/1'
            const res= await axios.get(url)
            this.estacion103= res.data.estacion
        },
        async getProgramacionActual103(){
            let url= '/programacion-estacion-actual/1'
            const res= await axios.get(url)
            this.programacionactual103= res.data.programacion


        },
        async getProgramacion104(){
            let url= '/programacion-estacion/2'
            const res= await axios.get(url)
            this.estacion104= res.data.estacion

        },
        async getProgramacionActual104(){
            let url= '/programacion-estacion-actual/2'
            const res= await axios.get(url)
            this.programacionactual104= res.data.programacion


        },
        async getProgramacionTeleformula(){
            let url= '/programacion-estacion/3'
            const res= await axios.get(url)
            this.estacionTeleformula= res.data.estacion

        },
        async getProgramacionActualTeleformula(){
            let url= '/programacion-estacion-actual/3'
            const res= await axios.get(url)
            this.programacionactualTeleformula= res.data.programacion
           this.loading = true;


        },
        async getProgramacion970(){
            let url= '/programacion-estacion/4'
            const res= await axios.get(url)
            this.estacion970= res.data.estacion

        },
        async getProgramacionActual970(){
            let url= '/programacion-estacion-actual/4'
            const res= await axios.get(url)
            this.programacionactual970= res.data.programacion

        },
        async getProgramacion1470(){
            let url= '/programacion-estacion/5'
            const res= await axios.get(url)
            this.estacion1470= res.data.estacion

        },
        async getProgramacionActual470(){
            let url= '/programacion-estacion-actual/5'
            const res= await axios.get(url)
            this.programacionactual1470= res.data.programacion


        },
        async getProgramacion1500(){
            let url= '/programacion-estacion/6'
            const res= await axios.get(url)
            this.estacion1500= res.data.estacion

        },
        async getProgramacionActual1500(){
            let url= '/programacion-estacion-actual/6'
            const res= await axios.get(url)
            this.programacionactual1500= res.data.programacion


        },


    },
}
</script>

<template>
    <div>
       <h3 class="text-center">{{estacion.name}}</h3>
    <div class="container">
        <div style="padding: 0px; margin: 0px; text-align: center; background-color: #212121; border: 0px solid red;">
            <iframe style="margin: -5px 0 0 -5px; border: 0px solid red; overflow: hidden;" :src="estacion.audio" width="250" height="45" scrolling="no" align="center" allowfullscreen="allowfullscreen"></iframe>
        </div> 
         <div v-if="!programacionactual.programa" class="row">
            <img src="https://www.radioformula.com.mx/wp-content/uploads/envivoimg/imagenes/radio-formula_500x340.jpg"  class="rounded mx-auto d-block img-fluid">
        </div>
        <div v-else class="row">
            <img :src="programacionactual.programa.image_full"  class="rounded mx-auto d-block img-fluid">
        </div>  
    </div>
        <!--<div  class="card text-center">
            <div class="card-header">
            Descripción Del Programa
            </div>
            <div v-if="!programacionactual.programa"  class="card-body">
                  <h5 class="card-title"></h5>
                <p class="card-text"></p>
            </div>
            <div v-else  class="card-body">
                <h5  class="card-title">{{programacionactual.programa.name_driver}} </h5>
                <p class="card-text">{{programacionactual.programa.description}}</p>
            </div> 
        </div>-->
    <div class="container">
        <div class="row"> 
            <div  v-if="!programacionactual.programa" class="col-12">
            <div class="mag-box-title the-global-title">
			<h3>Horarios de Programas</h3>
			</div>
                <table  class="table">
                    <thead class="thead-dark">
                    <tr>
                    <td scope="col"></td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>  
                    <td></td>
                    </tr>
                    </tbody> 
                </table>
            </div> 
            <div  v-else class="col-12">
                <table  class="table">
                    <thead class="thead-dark">
                    <tr>
                    <th scope="col">{{programacionactual.programa.name}} - {{programacionactual.programa.name_driver}}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr >
                    <td>{{programacionactual.programa.description}}</td>
                    </tr>
                    </tbody> 
                </table>
            </div>
        </div>
    </div>
  <div class="container">
        <div class="row">
            <div class="col-12">
                <table style="width:100%" class="table">
                    <thead class="thead-dark">
                    <tr>
                    <th scope="col">Hora</th>
                    <th scope="col">Programa</th>
                    <th scope="col">Conductor</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="programacion in programacion" :key="programacion.pivot.id">
                    <td style="width:24%">{{programacion.pivot.time_start | formatime}}-{{programacion.pivot.time_end | formatime}}</td>
                    <td style="width:38%">{{programacion.name}}</td>
                    <td style="width:38%">{{programacion.name_driver}}</td>
                    </tr>
                    </tbody>  

                    
                </table>
            </div>
        </div>
    </div>
<!--{{programacion}}
{{programacionactual}}-->
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            estacion:[],
            programacion:[],
            programacionactual:[],


        }
    },
    mounted(){
        this.getProgramacion();
        this.getProgramacionActual();


    },
    methods: {
        async getProgramacion(){
            let url= '/programacion-estacion/6'
            const res= await axios.get(url)
            this.programacion= res.data.programacion
            this.estacion= res.data.estacion

        },
            async getProgramacionActual(){
            let url= '/programacion-estacion-actual/6'
            const res= await axios.get(url)
            this.programacionactual= res.data.programacion



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
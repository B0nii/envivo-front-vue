<template>
    <div class="center">
        <div style="width:340px; float: left; border: 0px solid red;">
        <iframe :src="estacion.video" width="340" height="178" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        </div>
        <div style="float:left; border: 0px solid black;">
            <img :src="programacion.programa.image_full" width="340" height="178" class="alignnone size-medium" />
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    
    data(){
        return{
          estacion:{},
          programacion:{}
        }
    },
    mounted(){
      this.estacionEnvivo1500();
    },
    methods: {
     async estacionEnvivo1500(){
      let url = '/programacion-estacion-actual/6'
      axios.get(url).then(res=>{
          let respuesta = res.data;
          this.estacion = respuesta.estacion;
          this.programacion = respuesta.programacion;
   
      })
     }
    },
}
</script>
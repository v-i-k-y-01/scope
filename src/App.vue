<!-- <template>

 <router-view></router-view>


</template>

<script>

export default {
  name:'App',
  components:{

   
  }
}
</script>
<style scoped>

</style> -->
<template>
<PropertiesFile name="albert"/>
<PropertiesFile name="bruce"/>
<PropertiesFile name="clark"/>
<PropertiesFile :name="name" :age="age" :sex="sex" :hobby="hobby" />

``
</template>

<script>
import PropertiesFile from './components/PropertiesFile.vue'
export default {
  
  components:{
  PropertiesFile,
  },
  data(){
    return{
        name:"bean",
        age:18,
        sex:"male",
    }
   }
  
}
</script>

<style scoped>

</style>
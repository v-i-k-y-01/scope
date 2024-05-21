<template>
    <div>
      <h2>Total Sum:{{ totalSum(10,20) }}</h2>
    </div>
</template>
    
    <script>
    export default {
        data(){
           return{
            message:' '
           } 
        },
      methods: {
        totalSum(a,b) {
          return a+b;
          
        }
      }
      
    }
    </script>
    <style scoped>
    
    </style>
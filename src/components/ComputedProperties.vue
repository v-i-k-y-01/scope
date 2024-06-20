<template>
    <h1>Toys</h1>
    <h3>FullName:{{ fullname}}</h3>
"
    <p v-for="toy in toys" :key="toy">{{ toy }}</p>
  
    <p>Total Toys: {{ toycount }}</p>
    <button @click="Addtoy('teddy')" >ADD TOY</button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        toys: ['barbie', 'noddy', 'powerranger', 'ben10'],
        fname: 'barbie',
        lname: 'doll'
     
      };
    },
    computed: {
      toycount() {
        return this.toys.length;
      },

      fullname(){
        return this.fname+this.lname;
      }
    },
    methods: {
        Addtoy(x)
        {
            this.toys.push(x);
        }
  }
}
  </script>
  
  <style scoped>
  </style>
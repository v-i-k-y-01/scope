<template>
    <div>
        <h2>{{ name }}</h2>
    </div>
    <div class="segment1">
        <button id="button1" @click="changeName()" type="button">change</button> 

    </div>
    <br>
    <br>
    <div>
      <form>
            <input type="text" v-model="questions">
            <button type="textarea">{{ questions }}</button>
        </form>
        <div>
      
    </div>
    </div>
    <div>
        <h2>{{ count }}</h2>
    <button id="increment" @click="increment()">increment</button>
<button id="decrement" @click="count > 0? decrement() : null">decrement</button>
    </div>
</template>
<script>
export default {
    data()
    {
        return {
     
            name: 'vignesh',
            oldname: 'vignesh',
            newName: 'Karuna',
            questions: ' ',
            count:0,
        }
    },
    methods: {
      
        changeName()
        {
            let  temp =this.name;
            this.name = this.newName;
            this.newName = temp;
        },
        increment()
        {
            this.count+=1;
        },
        decrement()
        {
            this.count-=1;  
        }
    }
}

    

</script>
<style scoped>
#button1
{
  background-color: aquamarine;
  padding: 0.5em;
  
    

}
#button2
{
    background-color: goldenrod;
    padding : 0.5em;
}

</style>
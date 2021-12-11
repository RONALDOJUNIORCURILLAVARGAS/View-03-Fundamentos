<template>
<div>
  <img v-if="image" :src="image" alt="bg">
    <div class="indecision-container">
        <input v-model="question" type="text" placeholder="Hazme una pregunta" >
        <p>Recuerda terminar con un signo de interrogación (?)</p>
        <div v-if="isValidQuestion">
            <h2>{{question}}</h2>
            <h1>{{(answer==='yes')?'Sí':'No'}}</h1>

        </div>
    </div>
</div>
</template>

<script>
export default {

     data() {
        return {
            //question,
            question:null,
            answer: null,
            image:null,
            isValidQuestion:false
        }
    }, 
    methods: {
        async getAnswer(){
            this.answer='Pensando ...'
            const {answer,image}=await fetch('https://yesno.wtf/api').then(response =>response.json())
            this.answer=answer
            this.image=image
           
        }
    },
    watch:{
        question(value,oldValue){
            this.isValidQuestion=false
            //Si no se encuentra un signo de interrogacion no se realiza la
            //peticion http es decir se retorna el mismo  y no se ejecuta
            // this.getAnswer()
            if (!value.includes('?'))return;
            this.isValidQuestion=true
            //TODO: Realizar peticion HTTP
            this.getAnswer()
        }
    }
    //question
}
</script>

<style >

    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }
</style>
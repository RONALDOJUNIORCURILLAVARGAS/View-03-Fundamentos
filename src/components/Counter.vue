<template>
<div>
    <h2>{{ customTitle}}</h2>
    <p> {{counter}}<sup>2</sup>={{SquareCounter}} </p>
    <div>
        <button @click="increase">+1</button>
        <button @click="decrease">-1</button>
    </div>

</div>
  
</template>

<script>
export default {
    props:{
        title:String,
        start:{
            type:Number,
            default:100,
            validator(value){
                return value>=100 
            }
           // required:true
        }
    },
    data() {
        return {
            counter:this.start
        }
    },
    methods: {
        getSquareValue(){
            //console.log('ejecucion del get');
            return this.counter * this.counter;
        },
        increase(){
            ++this.counter;

        },
        decrease(){
            --this.counter;
        }
        //decrease
    },
    //Las propieadades computadas se guardan en el cache los methods no
    computed:{
        SquareCounter(){
            //console.log('Computed Square counter')
            return this.counter * this.counter;
        },
        customTitle(){
           // return this.title?this.title:'Counter';
            return this.title || 'Counter';
        }
    }

}
</script>

<style>
button{
    background-color: #64BB87;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;

}
button:hover{
    background-color: #5aa67b;
    transition: 0.3s ease-in-out;
}
</style>

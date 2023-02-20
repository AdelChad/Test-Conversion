<template>
    <div class="content">
      <div class="rond"></div>
      <form class="convertion">
        <div>
          <p class="input-form">
            <label>Input</label>
            <input v-model.number="input" type="number" min="0" max="100" style="flex:auto;" placeholder="Chiffre à convertir">
          </p>
        </div>

        <div>
          <p class="input-form">
            <label>Output</label>
            <input v-model="output" style="flex:auto;" placeholder="Chiffre romain" disabled>
          </p>
        </div>

        <div class="error">
          <div v-if="this.error">Veuillez renseigner un chiffre à convertir.</div>
        </div>
        <div class="error">
          <div v-if="this.error2">Veuillez renseigner un chiffre inférieur à 100.</div>
        </div>

        <button v-on:click="convertir" type="button" class="button">Convert</button>
        
      </form>
    </div>
  </template>
  
<script>
import axios from 'axios'

export default {
  name: "Home",
  components: {
  },

  data() {
    return {
      input: '',
      output: '',
      error: false,
      error2: false,
    };
  },

  methods: {
    async convertir() {
      this.error = false
      this.error2 = false
      if (this.input == 0) { // Erreur si l'entrer est vide ou égale à 0
        this.error = true
        return;
      }
      if(this.input>100){ // Erreur si l'entrer est supérieur à 100
        this.error2 = true
        return;
      }
      else { // Appel de la fonction en back-end pour convertir le champs en input
        const config = { data: this.input }
        this.output = await axios.post("http://localhost:3000/convert",config)
        this.output = this.output.data.slice(1);
      }
    }
  },
};
</script>

<style lang="scss" scoped>

.content{
  background-color: black;
  width: 100%;
  height: 100%;
}

.rond{
  z-index: -1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: solid #c8aa6d;
  position: fixed;
  height: 95vh;
  width: 95vh;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
}

.convertion{
  width: 55%;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-15%,-35%);
}

.input-form{
  font-family: police;
  margin-top: 3%;
  margin-left: 15px;
  width: 25%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 20px;
  border: 3px solid #01060D;
  border-radius: 110px;
}

label{
  font-size: 18px;
  color: #01060D;
  position: absolute;
  background-color: white;
  padding-inline: 10px;
  left: 7.5%;
  top: -15%;
}

input{
  all: unset;

  font-size: 18px !important;
  text-align: start;
  color: #01060D;

  &::placeholder {
    color: #01060D;
    opacity: 0.6;
  }
}

.output{
  left: 30%;
  top: 40%;
  transform: translate(-0%, -0%);
  width: 40%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 20px;
  border: 3px solid #c8aa6d;
  border-radius: 110px;
}

.error{
  margin-top: 3vh;
  margin-bottom: 2vh;
  margin-left: 2%;
}

.button{
  margin-left: 22%;
}
</style>
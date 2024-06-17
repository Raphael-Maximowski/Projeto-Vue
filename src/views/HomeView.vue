<template>
<main>
  <div id="flex">
    <div id="imagem">
      <img src="../assets/imagens/Marvel_Logo.svg.png" alt="">
      </div>
    <div id="center">
      <div id="block1">
        <h2>Seja Bem Vindo</h2>
        <p>Insira suas Credenciais por Gentileza</p>
        <div id="form">
          <form action="">
            <div class="input">
              <label for="">Insira seu Usuario <br></label>
              <input type="text" placeholder="Usuario" @input="recieveusername">
            </div>

            <div class="input">
              <label for="">Insira sua senha <br></label>
              <input type="input" placeholder="Senha" @input="recievepassword">
            </div>

            <div>
              <div id="Login">
              <button @click="login">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div id="block2">
        <h2>About Us</h2>
        <p>Somos apaixonados por trazer o rico e expansivo mundo da Marvel para as suas mãos. Nossa plataforma é projetada para entusiastas da Marvel, aficionados por quadrinhos e curiosos em geral, proporcionando uma experiência abrangente e imersiva no Universo Marvel.</p>
        <p>Junte-se a nós nesta emocionante jornada pelo Universo Marvel. Siga-nos nas redes sociais, assine nossa newsletter e participe de nossos fóruns comunitários para se manter conectado com outros fãs da Marvel. Seja você um fã de longa data ou esteja apenas começando sua aventura na Marvel, o Marvel Universe Insights está aqui para ser seu guia.</p>
      </div>
    </div>
  </div>
</main>
</template>

<script>
export default {
    data () {
        return {
          username: "1",
          password: "1",
          tryusername: "",
          trypassword: "",
          permission: false
          
        }
    },

    methods: {
      recieveusername (event) {
        this.tryusername = event.target.value
      },

      recievepassword (event) {
        this.trypassword = event.target.value
        if (this.trypassword == this.password && this.tryusername == this.username)
        {
          this.permission = true
          console.log(this.permission)
        }
      },

      login () {
        if (this.permission == true){
        this.$router.push('/PersHq')
        }
        else {
          alert("Usuario ou Senha Incorreto")
        }
      }

    }
}
</script>

















<style scoped>
@media only screen and (min-width: 880px){
  #flex {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #151515
}

#imagem {
  position: fixed;
}

#imagem img {
  width: 150px;
margin-bottom: 39em;
}

#center {
  width: 70vw;
  height: 70vh;
  display: flex;
  border-radius: 40px;
  border: 3px solid #EE171F;
}

#block1 {
  width: 35vw;
  height: 70vh;
}

#block1 h2 {
  color: rgb(255, 255, 255);
  margin-top: 2em;
  margin-left: 2.5vw;
}

#block1 p {
  margin-left: 2.5vw;
  margin-top: 1em;
  color: rgb(255, 255, 255);
}

.input {
  margin-left: 2.5vw;
  margin-top: 2em;
}

.input label {
  color: rgb(255, 255, 255);
}

.input input {
  margin-top: 1em;
  width: 25vw;
  height: 5vh;
}

button {
  margin-left: 2.5vw;
  margin-top: 2em;
  height: 2em;
  width: 7vw;
  font-size: 20px;
  background-color: #EE171F;
  border: 2px solid #EE171F;
  border-radius: 5px;
  color: white;
}

#block2 {
  width: 35vw;
  height: 70vh;
  background-color: #EE171F;
  border-radius: 0px 39px 39px 0px;
}

#block2 h2 {
  color: white;
    margin-left: 2.5vw;
    margin-top: 2em;
}

#block2 p {
  margin-top: 1.5em;
  color: white;
  width: 30vw;
  margin-left: 2.5vw;
  text-align: left;
}
}

@media only screen and (max-width: 879px){
  #flex {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #151515
}

#imagem {
  position: fixed;
}

#imagem img {
  width: 150px;
margin-bottom: 39em;
}

#center {
  width: 70vw;
  height: 70vh;
  display: flex;
  border-radius: 40px;
  border: 3px solid #EE171F;
}

#block1 {
  width: 35vw;
  height: 70vh;
}

#block1 h2 {
  color: rgb(255, 255, 255);
  margin-top: 2em;
  margin-left: 2.5vw;
  font-size: 3vw;
}

#block1 p {
  margin-left: 2.5vw;
  margin-top: 1em;
  color: rgb(255, 255, 255);
    font-size: 1.8vw;
  line-height: 2.3vw;
}

.input {
  margin-left: 2.5vw;
  margin-top: 2em;
}

.input label {
  color: rgb(255, 255, 255);
  font-size: 1.8vw;
  line-height: 2.3vw;
}

.input input {
  margin-top: 1em;
  width: 25vw;
  height: 5vw;
  font-size: 2vw;
}

button {
  margin-left: 2.5vw;
  margin-top: 2em;
  height: 2em;
  width: 4em;
  font-size: 15px;
  background-color: #EE171F;
  border: 2px solid #EE171F;
  border-radius: 5px;
  color: white;
}

#block2 {
  width: 35vw;
  height: 70vh;
  background-color: #EE171F;
  border-radius: 0px 39px 39px 0px;
}

#block2 h2 {
  color: white;
    margin-left: 2.5vw;
    margin-top: 2em;
    font-size: 3vw;
}

#block2 p {
  margin-top: 1.5em;
  color: white;
  width: 30vw;
  margin-left: 2.5vw;
  text-align: left;
  font-size: 1.8vw;
  line-height: 2.3vw;
}
}

</style>

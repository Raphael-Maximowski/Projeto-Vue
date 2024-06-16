<template>
<main>
  <div id="base">
    <div id="block1">
      <img src="../assets/imagens/Marvel_Logo.svg.png" alt="">
      </div>
    <div id="block2">
      <h2>Seja bem Vindo <br> Insira suas Credenciais</h2>
      <div id="Flex">
        <form action="">
          <div>
          <label for="Login">Insira seu Usuario:</label>
          </div>
          <div>
            <input type="text">
          </div>
          <div>
          <label for="Login">Insira sua Senha:</label>
          </div>
          <div>
            <input type="password">
          </div>
        </form>
      </div>
    </div>
    <div id="block3">NewAcount</div>
  </div>
</main>
</template>

<script>

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}

main {
  background-color: #151515;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

#base {
  background-color: white;
  width: 50vw;
  height: 80vh;
  border-radius: 40px;
  }

  #base:hover {
    padding: 10px;
    transition: 0.5s;
  }

  #block1 {
    height: 20vh;
    display: flex;
        align-items: center;
    justify-content: center;
  }

  #block1 img {
    width: 250px;
    height: 100px;
  }

  #block2 {
    background-color: blue;
    height: 40vh;
  }

  #block2 h2 {
    text-align: center;
    font-size: 20px;
  }
  #block3 {
    background-color: green;
     height: 20vh;
  }

  form {
    margin-left: 2vw;
  }

  input {
    width: 40vw;
  }
</style>



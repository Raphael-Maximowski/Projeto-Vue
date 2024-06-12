
<template>
<main>
    <div id="flex">
        <div id="imagem">
            <div id="insideImage"></div>
        </div>
        <div id="desc">
            <div id="boxContent">
                <h2>{{character.Nome}}</h2>
                <p>{{character.Descricao }}</p>
            </div>
        </div>
    </div>
</main>
</template>

<script>
export default {
  data() {
    return {
      character: {
        "Nome": "Iron Man",
        "Id": 1,
        "Descricao": "Tony Stark, um gênio bilionário, playboy e filantropo, criou uma armadura poderosa para salvar sua vida e se tornou o super-herói Iron Man. Utiliza sua inteligência e recursos para combater ameaças ao redor do mundo."
      }
    };
  },
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}


@media only screen and ((min-width: 375px)
and (max-width: 700px)){

    main {
    height: 100vh;
}

    #imagem {
        width: 60vw;
        height: 60vh;
        margin: 0vw 15vw;
        margin-top: 4em;
        background-image: url(../assets/imgFooter/ironmain.jpg);
        background-position: center;
        background-size: cover;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.181);
    }

    #desc h2 {
        margin-top: 1em;
        margin-left: 15vw;
        padding-bottom: 0.5em;
        font-size: 5vw;
    }

    #desc p {
        margin-left: 15vw;
        text-align: justify;
        width: 60vw;
        font-size: 2.8vw;
    }
}

@media only screen and ((min-width: 701px) and (max-width: 900px)){
    #flex {
        display: flex;
    }
    #imagem {
        width: 40vw;
        height: 40em;
        display: flex;
        justify-content: center;
        align-items: center;
    }  

    #insideImage {
        width: 30vw;
        height: 30em;
        background-image: url(../assets/imgFooter/ironmain.jpg);
        background-position: center;
        background-size: cover;
        border-radius: 20px;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.181);
    }

    #desc {
        width: 60vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #boxContent {
        width: 50vw;
        height: 30em;
    }

    #boxContent h2 {
        margin-bottom: 1em;
        font-size: 3vw;
        font-weight: bolder;
    }

    #boxContent p {
        font-size: 2.5vw;
        text-align: justify;
    }
}

@media only screen and ((min-width: 901px) and (max-width: 1100px)){
    #flex {
        display: flex;
    }
    #imagem {
        width: 40vw;
        height: 40em;
        display: flex;
        justify-content: center;
        align-items: center;
    }  

    #insideImage {
        width: 30vw;
        height: 30em;
        background-image: url(../assets/imgFooter/ironmain.jpg);
        background-position: center;
        background-size: cover;
        border-radius: 20px;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.181);

    }

    #desc {
        width: 60vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #boxContent {
        width: 50vw;
        height: 30em;
    }

    #boxContent h2 {
        margin-bottom: 1em;
        font-size: 2.5vw;
        font-weight: bolder;
    }

    #boxContent p {
        font-size: 20px;
        text-align: justify;
    }
}

@media only screen and (min-width: 1101px){
    #flex {
        display: flex;
    }
    #imagem {
        width: 40vw;
        height: 40em;
        display: flex;
        justify-content: center;
        align-items: center;
    }  

    #insideImage {
        width: 30vw;
        height: 30em;
        background-image: url(../assets/imgFooter/ironmain.jpg);
        background-position: center;
        background-size: cover;
        border-radius: 20px;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.181);

    }

    #desc {
        width: 60vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #boxContent {
        width: 50vw;
        height: 30em;
    }

    #boxContent h2 {
        margin-bottom: 1em;
        font-size: 40px;
        font-weight: bolder;
    }

    #boxContent p {
        font-size: 25px;
        text-align: justify;
    }
}


</style>

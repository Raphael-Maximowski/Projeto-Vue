<template>
<header>
    <nav>
        <div id="box1">
            <div class="width1000">
                <img src="../assets/imgFooter/logo.png" alt="">]
            </div>
            <div class="width900">
                <img src="../assets/imgFooter/menu.png" alt="">
            </div>
        
        </div>
        <div id="box2">
            <div id="imgWidth900">
                <img src="../assets/imgFooter/Marvel_Logo.svg.png" alt="">
            </div>
            <ul class="width1000">
                <li>Personagens</li>
                <li>Comics</li>
                <li>Criadores</li>
                <li>Eventos</li>
                <li>Séries</li>
                <li>Histórias</li>
            </ul>
            
        </div>
        <div id="box3">
            <form action="">
                <div id="flex">
                 <div id="lupa">
                    <img src="../assets/imgFooter/lupa(2).png" alt="">
                 </div>   
                 <div>
                    <input type="text" placeholder="Pesquisar">
                 </div>
                </div>
            </form>
        </div>
    </nav>
</header>

</template>

<script>


export default {
    name: 'NavBar',
    data() {
        
    },
}
</script>
<style scoped>
* {
    font-family: Arial, Helvetica, sans-serif;
}


header {
    width: 100vw;
    height: 5em;
    background-color: #151515;
}

@media only screen and (min-width: 1000px){
    nav{
    display: flex;
}
.width900 {
    display: none;
}

#box1 {

    width: 20vw;
    height: 5em;
    display: flex;
    justify-content: center;
    align-items: center;
}

#box1 img {
    width: 45px;
    
}
#box2 {

    width: 50vw;
    height: 5em;
}

#box2 ul {
    display: flex;
    justify-content: space-around;
    margin-top: 1.5em;
    padding-left: 0;
}

#imgWidth900 {
    display: none;
}

#box2 li {
    list-style-type: none;
    color: white;
    font-size: 17px;

    padding: 5px 10px;
    border-radius: 15px;
}

#box2 li:hover {
    transition: 0.3s;
    font-size: 18px;
    background-color: red;
}

.imgnone {
    display: none
}

#box3 {
    width: 30vw;
    height: 5em;
    display: flex;
    align-items: center;
    justify-content: center;
}

#box3 input {
    border-radius: 10px;
    padding: 5px 10px ;
    font-size: 15px;
    width: 15vw;
}

#box3 #flex {
    width: 30vw;

    display: flex;
    align-items: center;
    justify-content: center;
}

#lupa img {
    width: 25px;
    margin-right: 15px;
}
}

@media only screen and ((min-width: 300px) and (max-width: 999px))
{
    .width1000 {
        display: none;
    }

    nav{
        display: flex;
    }
    #box1 {
        width: 20vw;
        height: 5em;
        display: flex;
        align-items: center;
    }

    #box1 img {
        margin-left: 2em;
    }

    #box2 {
        width: 40vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #imgWidth900 img {
        width: 150px;
    }
    #box3 {

        width: 40vw;
        display: flex;
        align-items: center;
        justify-content: center
    }
    
    #flex {
        display: flex
    }

    #lupa img {
    width: 25px;
    margin-right: 15px;
    margin-top: 5px;
}

#box3 input {
    border-radius: 10px;
    padding: 5px 10px ;
    font-size: 15px;
    width: 25vw;
}

}

</style>
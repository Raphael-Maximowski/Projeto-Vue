<template>
    <div>
        <div class="title"> <h5 class="card-title">{{character.name}}</h5></div>
        <div class="card">
       <img :src="character.thumbnail.path + '.' + character.thumbnail.extension"/>
        <div class="card-body">
        </div>
    </div>
    </div>


</template>
<script>
export default {
    name: 'CardsHq',

 props: {
    character: {
      type: Object,
      required: true,
    },
    }   
}
</script>
<style>
     .card {
            position: relative;
            width: 18rem;
            height: 20rem;
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            transition: transform 0.2s;
            margin: 0;
        }
        .card:hover {
            transform: translateY(-5px);
        }
        .card img {
            width: 100%;
            height: 100%;
        }
        .card-body {
            position: absolute;
            display: flex;
            justify-content: center;
            bottom: 0;
            left: 0;
            width: 100%;
            color: white;
      
        }
        .card-title {
            
            font-size: 1.25rem;
            color: black;
            background-color: rgba(255, 255, 255, 0.744);
            padding: 5px 10px;
            border-radius: 10px;
        }
        .card-text {
            font-size: 1rem;
        }

        .title {
            text-align: center;
        }

        * {
            font-family: Arial, Helvetica, sans-serif;
        }
</style>
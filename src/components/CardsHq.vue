<template>
    <div class="card">
        <img src="" alt="">
        <div class="card-body">
            <h5 class="card-title">Teste</h5>
        </div>
    </div>

</template>
<script>
export default {
    name: 'CardsHq',
    props: {
        card: {}
    }   
}
</script>
<style>
        .card {
            position: relative;
            width: 18rem;
            height: 26rem;
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            transition: transform 0.2s;
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
            margin-bottom: 2rem;
            color: black;
        }
        .card-text {
            font-size: 1rem;
            margin-bottom: 2rem;
        }
</style>
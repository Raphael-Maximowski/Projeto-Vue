<template>
    <div class="card">
        <img src="../img/semtítulo.jpeg" alt="Imagem de Exemplo">
        <div class="card-body">
            <h5 class="card-title">Título do Cartão</h5>
            
        </div>
    </div>

</template>
<script>
export default {
    name: 'CardsHq',
}
</script>
<style>
        .card {
            position: relative;
            width: 18rem;
            height: 16rem;
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
            padding: 1rem;
        }
        .card-title {
            
            font-size: 1.25rem;
            margin-bottom: 0.5rem;
        }
        .card-text {
            
            font-size: 1rem;
            margin-bottom: 1rem;
        }
</style>
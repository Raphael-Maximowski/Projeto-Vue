<template>
<main>
    <div id="body">
        <ul>
            <li @click = "decrement" class="increment">&laquo;</li>
            <li>{{fixed - 2}}</li>
            <li>{{ fixed - 1}}</li>
            <li>{{ current }}</li>
            <li @click = "increment" class="decrement">&raquo;</li>
        </ul>
    </div>
</main>
</template>
<script>
export default {
    name: 'Pages',
props: {
        current: {
        type: Number,
        required: true
        }
    },
    data () {
        return {
            fixed: 3,
            current: 3
        }
    },
    methods: {
        increment () {
            this.$emit('update:current', this.current + 1);
        },
        decrement () {
            if (this.current == 3) {
                alert("Decremente Clicando em 1 e 2")
            } else {
                this.$emit('update:current', this.current - 1);
                console.log(this.current)
            }
        }
    }
}
</script>

<style scoped>
#body {
    font-family: Arial, Helvetica, sans-serif;
}

ul {
    display: flex;
    justify-content: center;
    margin-bottom: 2em;
}

ul li {
    list-style-type: none;
    padding: 5px 10px 5px 10px;
    border: 1px solid red;
    margin: 0px 5px;
}
ul li:hover {
    background-color: red;
    color: white;
    transition: 0.5s;
}

.increment, .decrement {
        background-color: red;
    color: white;
}
</style>

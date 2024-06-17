<template>
<main>
    <div id="body">
        <ul>
            <li @click = "decrement" class="increment">&laquo;</li>
            <li @click="page1">{{fixed - 2}}</li>
            <li @click="page2">{{ fixed - 1}}</li>
            <li @click="page3 ">{{ visual }}</li>
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
            visual : 3
        }
    },
    methods: {
        increment () {
            if (this.current > 2) {
                this.$emit('update:current', this.current + 1);
            if (this.current > 2) {
                this.visual = this.current
            }
            console.log(current)
            }
            else {
                alert("Chegue na Pagina 3 para então Incrementar")
            }

            
        },
        decrement () {
            if (this.current > 3)
            {
                if (this.current == 3) {
                alert("Decremente Clicando em 1 e 2")
            } else {
                this.$emit('update:current', this.current - 1);
                console.log(this.current)
            }
            }

            if (this.current > 2){
                this.visual = this.current
            }
            else {
                alert("Teste")
            }

        },
        page1 () {
            this.$emit('update:current', this.current + 0 );
        },
        page2 () {
            this.$emit('update:current', this.current + 1);
        },
        page3 () {
            this.$emit('update:current', this.current + 2);      
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

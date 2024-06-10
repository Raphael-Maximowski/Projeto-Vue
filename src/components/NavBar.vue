<template>
    <nav class="navbar">
        <div class="container-fluid">
            <a><RouterLink to="/">Home</RouterLink></a>
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="60" height="30" />
            <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-danger" type="submit">Search</button>
            </form>
        </div>
    </nav>

</template>

<script>


export default {
    name: 'NavBar',
    data() {
        
    },
}
</script>
<style scoped>
.navbar {
    background: #151515;
    height: 80px;
    width: 100%;
}
.container-fluid {
    display: block;

}
a {
    color : red;
}

button {
    color: red;
}
</style>
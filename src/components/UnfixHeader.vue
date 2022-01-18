<template>
    <div class="header">
        <div class="inner-header">
            <div class="logo-container">
                <h1><a href="/"><img src="../assets/duck_feet.svg" alt="cns-logo"></a></h1>
                <h1><a href="/">SFC CNS GUIDE</a></h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UnfixHeader'
}
</script>

<style scoped>
.header {
    width: 100%;
    height: 80px;
    display: block;
    background-color: #fafafa;
    border: 1px solid #dee2e6;
}

.inner-header {
    width: 80%;
    height: 100%;
    display: block;
    margin: 0 auto;
}

.logo-container {
    height: 100%;
    display: table;
    float: left;
    cursor: pointer;
}

.logo-container h1{
    color: black;
    height: 100%;
    display: table-cell;
    vertical-align: middle;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 1.3rem;
}

a:link {
    color: black;
    text-decoration: none;
}

a:visited {
    color: black;
    text-decoration: none;
}

a:hover {
    text-decoration: none;
}
</style>
<template>
<div class="footer">
    <div class="inner-footer">
        <div class="name-container">
            <h1><a href="/">SFC CNS GUIDE</a></h1>
        </div>
        <ul class="navigation">
            <a href="/sitemap"><li>Sitemap</li></a>
            <a href="/privacy-policy"><li>Privacy Policy</li></a>
            <a href="/site-policy"><li>Site Policy</li></a>
        </ul>
    </div>
</div>
    
</template>

<style scoped>
.footer {
    width: 100%;
    height: 80px;
    display: block;
    background-color: #FF961B;
    border: none;
}

.inner-footer {
    width: 80%;
    height: 100%;
    display: block;
    margin: 0 auto;
}

.name-container {
    height: 100%;
    display: table;
    float: left;
    cursor: pointer;
    padding-left: 2rem;
}

.name-container h1 a:visited {
    color: white;
}

.name-container h1{
    color: white;
    height: 100%;
    display: table-cell;
    vertical-align: middle;
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
}

.navigation {
    float: right;
    height: 100%;
}

.navigation a{
    height: 100%;
    display: table;
    float: left;
    padding: 0px 20px;
    transition: all .5s;
}

.navigation a:hover {
    transform: scale(1.01);
}

.navigation a li{
    height: 100%;
    display: table-cell;
    vertical-align: middle;
    color: white;
    font-size: 1.2rem;

}
</style>
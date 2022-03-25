<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from '../src/views/NavView.vue'
</script>

<template>
    <Nav/>
    <router-view></router-view>
</template>

<style>
:root{
    --main-primary: white;
    --main-secuandary: black;
    --main-nav: #1899cee0;
    --back-color: #18ce42;
}
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}

ul{
    margin: 0;
}

li,a,button{
    color: var(--main-secuandary);
    font-weight: 500;
    font-size: 16px;
    text-decoration: none;
    list-style: none;
}

header{
    display: flex;
    justify-content: center;
    padding: 5px 10%;
    background-color: var(--main-nav);
 
}


.nav_link li{
    display: inline-block;
    padding: 0px 20px;
}

.nav_link li a{
    font-weight: bold;
    cursor: pointer;
    color: var(--main-primary);
}
.nav_link li a:hover{
    color : var(--main-secuandary);
}

.logo{
    height: 70px;
    width: 70px;
    margin: 0;
}

.img-mide{
    height: 250px;
    width: 100%;
    margin: 0;
}

.img-invetario{
    height: 50px;
    width: 70px;
    margin: 0;
}

#color-fondo-producto{
    display: flex;
    align-items: center;
    background: var(--main-nav);
}
#color-fondo-accesorio{
    display: flex;
    align-items: center;
    background: var(--back-color);
}
</style>

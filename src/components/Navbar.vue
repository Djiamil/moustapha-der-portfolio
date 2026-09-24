<template>

<nav 
class="navbar"
:class="{ scrolled: isScrolled }"
>

<div class="nav-content">


<div class="logo">
  Moustapha DER
</div>


<ul 
class="menu"
:class="{ active: menuOpen }"
>


<li>
<a href="#about">À propos</a>
</li>


<li>
<a href="#experience">Expérience</a>
</li>


<li>
<a href="#skills">Compétences</a>
</li>


<li>
<a href="#projects">Projets</a>
</li>


<li>
<a href="#contact">Contact</a>
</li>


</ul>



<button 
class="menu-btn"
@click="menuOpen=!menuOpen"
>

☰

</button>


</div>


</nav>


</template>



<script setup lang="ts">

import { ref, onMounted, onUnmounted } from 'vue'


const menuOpen = ref(false)

const isScrolled = ref(false)



const handleScroll = () => {

  isScrolled.value = window.scrollY > 50

}



onMounted(()=>{

 window.addEventListener(
   'scroll',
   handleScroll
 )

})


onUnmounted(()=>{

 window.removeEventListener(
   'scroll',
   handleScroll
 )

})


</script>



<style scoped>


.navbar {

position:fixed;

top:0;

left:0;

width:100%;

padding:20px 0;

z-index:1000;

transition:.3s;

}


.navbar.scrolled {

background:rgba(15,23,42,.95);

box-shadow:0 5px 20px rgba(0,0,0,.2);

}



.nav-content {


width:90%;

max-width:1200px;

margin:auto;

display:flex;

align-items:center;

justify-content:space-between;


}



.logo {


font-size:24px;

font-weight:700;

color:white;


}



.menu {


display:flex;

gap:30px;

list-style:none;


}



.menu a {


color:#cbd5e1;

transition:.3s;


}


.menu a:hover {

color:#38bdf8;

}



.menu-btn {


display:none;

background:none;

border:none;

color:white;

font-size:30px;

cursor:pointer;


}





@media(max-width:768px){


.menu-btn{

display:block;

}



.menu{


position:absolute;

top:75px;

left:0;

width:100%;

background:#0f172a;

flex-direction:column;

align-items:center;

padding:30px 0;


transform:translateY(-200%);

transition:.3s;


}



.menu.active{

transform:translateY(0);

}



}


</style>
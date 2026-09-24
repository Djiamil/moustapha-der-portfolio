<template>

<section id="certifications" class="certifications">

<div class="container">


<div class="section-title">

<h2>
Certifications & Formations professionnelles
</h2>

</div>



<div class="certifications-grid">


<div
class="certification-card"
v-for="item in certifications"
:key="item.title"
>


<div class="icon">
🎓
</div>


<h3>
{{ item.title }}
</h3>


<h4>
{{ item.organism }}
</h4>


<p>
{{ item.date }}
</p>


<p>
{{ item.description }}
</p>


</div>


</div>


</div>

</section>


</template>



<script setup lang="ts">


const certifications = [

{
title:"Full Stack Development",
organism:"EDACY - Dakar",
date:"Février 2024 - Août 2024",
description:
"Formation intensive en développement Full Stack couvrant la conception d'applications web, les architectures backend, les APIs et les bonnes pratiques professionnelles."
},


{
title:"Formation Développement Web Mobile",
organism:"SONATEL Academy - Dakar",
date:"Depuis Octobre 2021",
description:
"Formation orientée développement web et mobile, intégration d'API, conception d'applications et environnement professionnel."
}

]


</script>




<style scoped>


.certifications{

padding:100px 0;

}



.section-title{

text-align:center;
margin-bottom:50px;

}



.section-title h2{

font-size:40px;

}



.certifications-grid{

display:grid;
grid-template-columns:repeat(2,1fr);
gap:30px;

}



.certification-card{

background:#1e293b;
padding:30px;
border-radius:15px;

}



.icon{

font-size:35px;
margin-bottom:15px;

}



.certification-card h3{

color:#38bdf8;
font-size:24px;

}



.certification-card h4{

margin-top:10px;

}



.certification-card p{

margin-top:15px;
color:#cbd5e1;
line-height:1.7;

}



@media(max-width:800px){

.certifications-grid{

grid-template-columns:1fr;

}

}


</style>
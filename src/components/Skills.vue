<template>
  <section id="skills" class="skills">

    <div class="container">

      <div class="section-title">
        <h2>Compétences</h2>
      </div>


      <div class="skills-grid">


      <div
      class="skill-card"
      v-for="(skill,index) in skills"
      :key="skill.title"

      data-aos="fade-up"

      :data-aos-delay="index * 100"

      >

    <div class="icon">

    <i :class="skill.icon"></i>

    </div>


          <h3>
            {{ skill.title }}
          </h3>


          <ul>

            <li
              v-for="item in skill.items"
              :key="item"
            >
              {{ item }}
            </li>

          </ul>


        </div>


      </div>


    </div>

  </section>
</template>



<script setup lang="ts">


const skills = [

{
 title:"Backend & API",
 icon:"fa-solid fa-server",
 items:[
  "Python (Django, Django REST Framework)",
  "PHP (Laravel, Symfony)",
  "FastAPI",
  "Conception d'API REST",
  "Architecture backend"
 ]
},


{
 title:"Frontend",
 icon:"fa-solid fa-code",
 items:[
  "Vue.js",
  "Angular",
  "React.js",
  "JavaScript / TypeScript",
  "Responsive Design"
 ]
},


{
 title:"Bases de données",
 icon:"fa-solid fa-database",
 items:[
  "PostgreSQL",
  "MySQL",
  "Modélisation des données",
  "Optimisation des requêtes"
 ]
},


{
 title:"Cloud & DevOps",
 icon:"fa-solid fa-cloud",
 items:[
  "AWS",
  "Linux Ubuntu",
  "Docker",
  "CI/CD",
  "Déploiement & supervision"
 ]
},


{
 title:"Intégration & Systèmes",
 icon:"fa-solid fa-network-wired",
 items:[
  "API tierces",
  "Services SMS",
  "Firebase Notifications",
  "IoT",
  "Protocoles TCP"
 ]
},


{
 title:"Méthodes & Outils",
 icon:"fa-solid fa-gears",
 items:[
  "Git / GitHub",
  "Swagger / OpenAPI",
  "Jenkins",
  "Jira / Trello",
  "Agile Scrum"
 ]
}


]


</script>




<style scoped>


.skills{

padding:100px 0;

}



.section-title{

text-align:center;
margin-bottom:50px;

}



.section-title h2{

font-size:40px;

}



.skills-grid{

display:grid;
grid-template-columns:repeat(3,1fr);
gap:25px;

}



.skill-card{

background:#1e293b;
padding:30px;
border-radius:15px;

transition:.3s;

}



.skill-card:hover{

transform:translateY(-8px);

}



.icon{

font-size:40px;

color:#38bdf8;

margin-bottom:20px;

}



.skill-card h3{

color:#38bdf8;
margin-bottom:20px;

}



.skill-card ul{

padding-left:20px;

}



.skill-card li{

color:#cbd5e1;
margin-bottom:10px;

}



@media(max-width:900px){

.skills-grid{

grid-template-columns:1fr;

}

}


</style>
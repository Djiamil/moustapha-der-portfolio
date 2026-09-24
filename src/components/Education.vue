```vue
<template>
  <section id="formation" class="education">

    <div class="container">

      <!-- Section header -->
      <div class="section-title">
        <span class="section-label">MON PARCOURS</span>

        <h2>
          Formation & Certifications
        </h2>

        <p>
          Mon parcours académique et les formations qui ont renforcé
          mes compétences en développement logiciel.
        </p>
      </div>


      <!-- =========================
           CONTENT
      ========================== -->

      <div class="education-wrapper">


        <!-- =========================
             FORMATIONS ACADÉMIQUES
        ========================== -->

        <div class="education-column">

          <div class="column-header">

            <div class="column-icon">
              🎓
            </div>

            <div>
              <span>PARCOURS ACADÉMIQUE</span>
              <h3>Formations</h3>
            </div>

          </div>


          <div class="education-list">

            <div
              v-for="(item, index) in formations"
              :key="`formation-${index}`"
              class="education-item"
              data-aos="fade-up"
              :data-aos-delay="index * 100"
            >

              <div class="timeline-dot"></div>

              <div class="education-card">

                <div class="card-top">
                  <span class="date">
                    {{ item.date }}
                  </span>

                  <span class="number">
                    {{ String(index + 1).padStart(2, '0') }}
                  </span>
                </div>

                <h4>
                  {{ item.title }}
                </h4>

                <p class="school">
                  {{ item.school }}
                </p>

                <p class="description">
                  {{ item.description }}
                </p>

              </div>

            </div>

          </div>

        </div>


        <!-- =========================
             FORMATIONS PROFESSIONNELLES
        ========================== -->

        <div class="education-column">

          <div class="column-header">

            <div class="column-icon">
              📜
            </div>

            <div>
              <span>FORMATION PROFESSIONNELLE</span>
              <h3>Certifications</h3>
            </div>

          </div>


          <div class="education-list">

            <div
              v-for="(item, index) in certifications"
              :key="`certification-${index}`"
              class="education-item"
              data-aos="fade-up"
              :data-aos-delay="index * 100"
            >

              <div class="timeline-dot certification-dot"></div>

              <div class="education-card">

                <div class="card-top">
                  <span class="date">
                    {{ item.date }}
                  </span>

                  <span class="number">
                    {{ String(index + 1).padStart(2, '0') }}
                  </span>
                </div>

                <h4>
                  {{ item.title }}
                </h4>

                <p class="school">
                  {{ item.organism }}
                </p>

                <p class="description">
                  {{ item.description }}
                </p>

                <div class="tags">
                  <span
                    v-for="skill in item.skills"
                    :key="skill"
                  >
                    {{ skill }}
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </section>
</template>


<script setup lang="ts">

/* =========================
   FORMATIONS ACADÉMIQUES
========================= */

const formations = [

  {
    date: "2019 — Aujourd'hui",
    title: "Licence en Informatique de Gestion",
    school: "UCAO / Saint-Michel de Dakar",
    description:
      "Licence en informatique de gestion"
  },

  {
    date: "2016",
    title: "Baccalauréat",
    school: "Lycée de Richard Toll",
    description:
      "Formation générale préparant aux études supérieures."
  }

]


/* =========================
   FORMATIONS PROFESSIONNELLES
========================= */

const certifications = [

  {
    date: "Fév. 2024 — Août 2024",
    title: "Full Stack Development",
    organism: "EDACY — Dakar",
    description:
      "Formation intensive en développement Full Stack couvrant la conception d'applications web, les architectures backend, les APIs et les bonnes pratiques professionnelles.",
    skills: [
      "Backend",
      "Frontend",
      "API REST",
      "Architecture"
    ]
  },

  {
    date: "Depuis Oct. 2021",
    title: "Développement Web & Mobile",
    organism: "SONATEL Academy — Dakar",
    description:
      "Formation orientée développement web et mobile, intégration d'API, conception d'applications et découverte de l'environnement professionnel.",
    skills: [
      "Web",
      "Mobile",
      "API",
      "Développement"
    ]
  }

]

</script>


<style scoped>

/* =========================
   SECTION
========================= */

.education {
  padding: 110px 0;
  position: relative;
}


/* =========================
   SECTION HEADER
========================= */

.section-title {
  max-width: 700px;
  margin: 0 auto 75px;

  text-align: center;
}

.section-label {
  display: inline-block;

  margin-bottom: 12px;

  color: #38bdf8;

  font-size: 13px;
  font-weight: 700;

  letter-spacing: 2px;
  text-transform: uppercase;
}

.section-title h2 {
  margin: 0;

  font-size: clamp(32px, 5vw, 44px);
  font-weight: 800;

  letter-spacing: -1px;
}

.section-title p {
  margin-top: 16px;

  color: #94a3b8;

  font-size: 16px;
  line-height: 1.7;
}


/* =========================
   TWO COLUMNS
========================= */

.education-wrapper {
  max-width: 1100px;

  margin: 0 auto;

  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 70px;
}


/* =========================
   COLUMN HEADER
========================= */

.column-header {
  display: flex;

  align-items: center;

  gap: 15px;

  margin-bottom: 35px;
}

.column-icon {
  width: 48px;
  height: 48px;

  display: flex;

  align-items: center;
  justify-content: center;

  border: 1px solid rgba(56, 189, 248, 0.18);

  border-radius: 12px;

  background: rgba(56, 189, 248, 0.08);

  font-size: 22px;
}

.column-header span {
  color: #64748b;

  font-size: 10px;
  font-weight: 700;

  letter-spacing: 1.5px;
}

.column-header h3 {
  margin: 4px 0 0;

  font-size: 24px;
}


/* =========================
   TIMELINE
========================= */

.education-list {
  position: relative;

  padding-left: 24px;
}

.education-list::before {
  content: "";

  position: absolute;

  left: 5px;

  top: 0;
  bottom: 0;

  width: 1px;

  background: linear-gradient(
    to bottom,
    transparent,
    #334155 5%,
    #334155 95%,
    transparent
  );
}


/* =========================
   ITEM
========================= */

.education-item {
  position: relative;

  margin-bottom: 28px;
}


/* =========================
   DOT
========================= */

.timeline-dot {
  position: absolute;

  left: -24px;
  top: 25px;

  width: 11px;
  height: 11px;

  border: 2px solid #0f172a;

  border-radius: 50%;

  background: #38bdf8;

  box-shadow:
    0 0 0 4px rgba(56, 189, 248, 0.10),
    0 0 15px rgba(56, 189, 248, 0.20);

  z-index: 2;
}

.certification-dot {
  background: #a78bfa;

  box-shadow:
    0 0 0 4px rgba(167, 139, 250, 0.10),
    0 0 15px rgba(167, 139, 250, 0.20);
}


/* =========================
   CARD
========================= */

.education-card {
  padding: 25px;

  border: 1px solid rgba(148, 163, 184, 0.10);

  border-radius: 15px;

  background: rgba(30, 41, 59, 0.72);

  backdrop-filter: blur(10px);

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.education-card:hover {
  transform: translateY(-4px);

  border-color: rgba(56, 189, 248, 0.28);

  box-shadow:
    0 15px 35px rgba(0, 0, 0, 0.18);
}


/* =========================
   CARD TOP
========================= */

.card-top {
  display: flex;

  align-items: center;
  justify-content: space-between;

  gap: 15px;

  margin-bottom: 15px;
}

.date {
  color: #38bdf8;

  font-size: 12px;
  font-weight: 700;

  letter-spacing: 0.3px;
}

.number {
  color: rgba(148, 163, 184, 0.20);

  font-size: 22px;
  font-weight: 800;
}


/* =========================
   CARD CONTENT
========================= */

.education-card h4 {
  margin: 0;

  color: #f8fafc;

  font-size: 19px;
  font-weight: 750;

  line-height: 1.4;
}

.school {
  margin-top: 7px;

  color: #38bdf8;

  font-size: 13px;
  font-weight: 600;
}

.description {
  margin-top: 15px;

  color: #cbd5e1;

  font-size: 13px;

  line-height: 1.7;
}


/* =========================
   TAGS
========================= */

.tags {
  display: flex;

  flex-wrap: wrap;

  gap: 7px;

  margin-top: 18px;
}

.tags span {
  padding: 5px 9px;

  border: 1px solid rgba(148, 163, 184, 0.12);

  border-radius: 6px;

  background: rgba(51, 65, 85, 0.50);

  color: #cbd5e1;

  font-size: 10px;
  font-weight: 600;
}


/* =========================
   TABLET
========================= */

@media (max-width: 900px) {

  .education {
    padding: 90px 20px;
  }

  .education-wrapper {
    gap: 35px;
  }

}


/* =========================
   MOBILE
========================= */

@media (max-width: 700px) {

  .education {
    padding: 80px 20px;
  }

  .section-title {
    margin-bottom: 55px;
  }

  .section-title h2 {
    font-size: 32px;
  }

  .section-title p {
    font-size: 14px;
  }

  .education-wrapper {
    grid-template-columns: 1fr;

    gap: 60px;
  }

  .column-header {
    margin-bottom: 28px;
  }

  .education-card {
    padding: 21px;
  }

}


/* =========================
   SMALL MOBILE
========================= */

@media (max-width: 450px) {

  .education {
    padding: 70px 15px;
  }

  .column-header h3 {
    font-size: 21px;
  }

  .column-icon {
    width: 43px;
    height: 43px;

    font-size: 19px;
  }

  .education-card h4 {
    font-size: 17px;
  }

  .number {
    display: none;
  }

}

</style>
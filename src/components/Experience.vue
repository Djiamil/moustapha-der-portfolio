```vue
<template>
  <section id="experience" class="experience">

    <div class="container">

      <!-- Section header -->
      <div class="section-title">
        <span class="section-label">MON PARCOURS</span>
        <h2>Expériences professionnelles</h2>
        <p>
          Quelques expériences et projets qui ont contribué à construire
          mon parcours de développeur.
        </p>
      </div>

      <!-- Timeline -->
      <div class="timeline">

        <div
          v-for="(item, index) in experiences"
          :key="`${item.company}-${index}`"
          class="experience-item"
          data-aos="fade-up"
          :data-aos-delay="index * 80"
        >

          <!-- Timeline marker -->
          <div class="timeline-marker">
            <span></span>
          </div>

          <!-- Date -->
          <div class="date">
            <span>{{ item.date }}</span>

            <span
              v-if="item.current"
              class="current-badge"
            >
              En cours
            </span>
          </div>

          <!-- Card -->
          <div class="content">

            <div class="card-header">

              <div>
                <h3>
                  {{ item.role }}
                </h3>

                <h4>
                  {{ item.company }}
                </h4>
              </div>

              <span class="experience-number">
                {{ String(index + 1).padStart(2, '0') }}
              </span>

            </div>

            <p class="description">
              {{ item.description }}
            </p>

            <div class="tags">
              <span
                v-for="tech in item.technologies"
                :key="tech"
              >
                {{ tech }}
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>

  </section>
</template>


<script setup lang="ts">

const experiences = [
    {
    date: "Nov. 2024 — Mai 2026",
    role: "Développeur",
    company: "Plateforme Agricole XamSaMbaye · Mlouma",
    description:
      "Développement d'une solution digitale destinée aux producteurs agricoles avec gestion des exploitations, alertes météo, informations sur les prix du marché et services SMS.",
    technologies: [
      "Laravel",
      "API REST",
      "SMS",
      "Applications métiers",
      "Angular"
    ],
    current: false
  },

  {
    date: "Jan. 2025 — Avr. 2026",
    role: "Développeur Backend & Chef de Projet",
    company: "Plateforme de Suivi & Évaluation de Projets",
    description:
      "Conception et développement d'une plateforme destinée au suivi de projets sociaux et humanitaires avec dashboards, KPI, rapports PDF/Excel, notifications et gestion sécurisée des données.",
    technologies: [
      "Laravel",
      "Vue.js",
      "PostgreSQL",
      "Dashboard"
    ],
    current: false
  },

  {
    date: "Jan. 2024 — Sept. 2026",
    role: "Développeur Backend",
    company: "Kaaraange Kids · Lecorpus Medical · Orange Startup Studio",
    description:
      "Développement d'une plateforme de suivi des enfants intégrant la géolocalisation temps réel, les zones de sécurité, les notifications et la communication avec des dispositifs IoT.",
    technologies: [
      "Django REST",
      "IoT",
      "GPS",
      "Firebase",
      "API REST"
    ],
    current: false
  },

  {
    date: "Sept. 2023 — Sept. 2024",
    role: "Développeur Backend & Lead",
    company: "KANIMMO · Volkeno",
    description:
      "Développement d'une application de gestion immobilière couvrant la gestion des biens, les paiements et différents processus comptables.",
    technologies: [
      "Laravel",
      "Vue.js",
      "API REST"
    ],
    current: false
  },

  {
    date: "2023 — 2025",
    role: "Chef de Projet",
    company: "WER",
    description:
      "Conception et développement d'une plateforme de gestion de soins avec suivi des remboursements et automatisation de plusieurs processus métiers.",
    technologies: [
      "Laravel",
      "Vue.js",
      "Gestion de projet"
    ],
    current: false
  },

  {
    date: "Jan. 2023 — Août 2023",
    role: "Développeur Web",
    company: "Créatic Studio",
    description:
      "Développement d'une application web dédiée à la prise et à la gestion de rendez-vous médicaux.",
    technologies: [
      "PHP",
      "JavaScript",
      "Web"
    ],
    current: false
  },

  {
    date: "Oct. 2022 — Jan. 2023",
    role: "Stagiaire Développeur Web & Mobile",
    company: "SONATEL",
    description:
      "Participation à l'intégration des interfaces et des APIs d'un système destiné au suivi et à la sécurisation des sites du groupe.",
    technologies: [
      "API",
      "Frontend",
      "Mobile"
    ],
    current: false
  }

]

</script>


<style scoped>

.experience {
  padding: 110px 0;
  position: relative;
}


/* =========================
   SECTION HEADER
========================= */

.section-title {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 75px;
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
   TIMELINE
========================= */

.timeline {
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  padding: 10px 0;
}


/* Vertical line */

.timeline::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 185px;
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
   EXPERIENCE ITEM
========================= */

.experience-item {
  position: relative;

  display: grid;
  grid-template-columns: 150px 1fr;

  column-gap: 70px;

  margin-bottom: 45px;
}


/* =========================
   MARKER
========================= */

.timeline-marker {
  position: absolute;

  left: 185px;
  top: 30px;

  width: 14px;
  height: 14px;

  transform: translateX(-50%);

  border: 3px solid #0f172a;
  border-radius: 50%;

  background: #38bdf8;

  box-shadow:
    0 0 0 4px rgba(56, 189, 248, 0.12),
    0 0 18px rgba(56, 189, 248, 0.25);

  z-index: 2;
}

.timeline-marker span {
  display: block;

  width: 4px;
  height: 4px;

  margin: 2px auto;

  border-radius: 50%;

  background: white;
}


/* =========================
   DATE
========================= */

.date {
  padding-top: 23px;

  text-align: right;

  color: #94a3b8;

  font-size: 13px;
  font-weight: 600;

  line-height: 1.5;
}

.current-badge {
  display: block;

  width: fit-content;

  margin-top: 8px;
  margin-left: auto;

  padding: 4px 9px;

  border: 1px solid rgba(34, 197, 94, 0.25);
  border-radius: 20px;

  background: rgba(34, 197, 94, 0.08);

  color: #4ade80;

  font-size: 10px;
  font-weight: 700;

  text-transform: uppercase;
  letter-spacing: 0.7px;
}


/* =========================
   CARD
========================= */

.content {
  position: relative;

  padding: 28px 30px;

  border: 1px solid rgba(148, 163, 184, 0.10);
  border-radius: 16px;

  background: rgba(30, 41, 59, 0.72);

  backdrop-filter: blur(10px);

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.content:hover {
  transform: translateY(-4px);

  border-color: rgba(56, 189, 248, 0.28);

  box-shadow:
    0 15px 40px rgba(0, 0, 0, 0.18);
}


/* =========================
   CARD HEADER
========================= */

.card-header {
  display: flex;

  align-items: flex-start;
  justify-content: space-between;

  gap: 20px;
}

.content h3 {
  margin: 0;

  font-size: 21px;
  font-weight: 750;

  color: #f8fafc;
}

.content h4 {
  margin: 7px 0 0;

  color: #38bdf8;

  font-size: 14px;
  font-weight: 600;

  line-height: 1.5;
}


/* Number */

.experience-number {
  color: rgba(148, 163, 184, 0.25);

  font-size: 28px;
  font-weight: 800;

  line-height: 1;
}


/* =========================
   DESCRIPTION
========================= */

.description {
  margin: 20px 0 0;

  color: #cbd5e1;

  font-size: 14px;

  line-height: 1.75;
}


/* =========================
   TAGS
========================= */

.tags {
  display: flex;

  flex-wrap: wrap;

  gap: 8px;

  margin-top: 20px;
}

.tags span {
  padding: 6px 11px;

  border: 1px solid rgba(148, 163, 184, 0.12);

  border-radius: 7px;

  background: rgba(51, 65, 85, 0.55);

  color: #cbd5e1;

  font-size: 11px;
  font-weight: 600;
}


/* =========================
   MOBILE
========================= */

@media (max-width: 800px) {

  .experience {
    padding: 80px 20px;
  }

  .section-title {
    margin-bottom: 55px;
  }

  .timeline {
    padding-left: 22px;
  }

  .timeline::before {
    left: 5px;
  }

  .experience-item {
    display: block;

    margin-bottom: 35px;
  }

  .timeline-marker {
    left: 5px;
    top: 27px;
  }

  .date {
    padding: 0 0 12px 20px;

    text-align: left;
  }

  .current-badge {
    margin-left: 0;
  }

  .content {
    margin-left: 20px;

    padding: 23px 20px;
  }

  .content h3 {
    font-size: 18px;
  }

  .experience-number {
    font-size: 22px;
  }

}


@media (max-width: 480px) {

  .experience {
    padding: 70px 15px;
  }

  .section-title h2 {
    font-size: 30px;
  }

  .section-title p {
    font-size: 14px;
  }

  .content {
    padding: 20px 17px;
  }

  .card-header {
    gap: 10px;
  }

  .experience-number {
    display: none;
  }

}

</style>
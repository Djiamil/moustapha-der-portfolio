```vue
<template>
  <section id="projects" class="projects">

    <div class="container">

      <!-- Section header -->
      <div class="section-title">

        <span class="section-label">
          MES RÉALISATIONS
        </span>

        <h2>
          Mes projets
        </h2>

        <p>
          Quelques réalisations professionnelles et personnelles
          développées autour de problématiques concrètes.
        </p>

      </div>


      <!-- Projects grid -->
      <div class="projects-grid">

        <article
          v-for="(project, index) in projects"
          :key="project.id"
          class="project-card"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >

          <!-- Image -->
          <div class="project-image">

            <img
              :src="project.image"
              :alt="project.title"
            />

            <div class="image-overlay"></div>

            <div class="project-top">

              <span class="project-number">
                {{ String(index + 1).padStart(2, '0') }}
              </span>

              <span
                v-if="project.category"
                class="category"
              >
                {{ project.category }}
              </span>

            </div>

          </div>


          <!-- Content -->
          <div class="project-content">

            <h3>
              {{ project.title }}
            </h3>
            <div
              v-if="project.achievements?.length"
              class="achievements-badge"
            >
              🏆 {{ project.achievements.length }} distinction{{ project.achievements.length > 1 ? 's' : '' }}
            </div>

            <p class="description">
              {{ project.description }}
            </p>


            <!-- Technologies -->
            <div class="technologies">

              <span
                v-for="tech in project.technologies"
                :key="tech"
              >
                {{ tech }}
              </span>

            </div>


            <!-- Actions -->
            <div class="actions">

              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="btn primary"
              >
                Voir le projet
                <span>↗</span>
              </a>

              <router-link
                :to="`/projects/${project.id}`"
                class="btn secondary"
              >
                Détails
                <span>→</span>
              </router-link>

            </div>

          </div>

        </article>

      </div>

    </div>

  </section>
</template>


<script setup lang="ts">

import { projects } from '../data/projects'

</script>


<style scoped>

/* =========================
   SECTION
========================= */

.projects {
  padding: 110px 0;
}


/* =========================
   SECTION HEADER
========================= */

.section-title {
  max-width: 700px;

  margin: 0 auto 70px;

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
   GRID
========================= */

.projects-grid {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 28px;
}


/* =========================
   CARD
========================= */

.project-card {
  position: relative;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  border: 1px solid rgba(148, 163, 184, 0.10);

  border-radius: 18px;

  background: rgba(30, 41, 59, 0.78);

  backdrop-filter: blur(10px);

  transition:
    transform 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease;
}

.project-card:hover {
  transform: translateY(-7px);

  border-color: rgba(56, 189, 248, 0.30);

  box-shadow:
    0 20px 45px rgba(0, 0, 0, 0.22);
}


/* =========================
   IMAGE
========================= */

.project-image {
  position: relative;
  height: 215px;
  overflow: hidden;
  background: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.03);
}


/* Image dark overlay */

.image-overlay {
  position: absolute;

  inset: 0;

  background: linear-gradient(
    to bottom,
    rgba(15, 23, 42, 0.05),
    rgba(15, 23, 42, 0.65)
  );
}


/* =========================
   PROJECT TOP
========================= */

.project-top {
  position: absolute;

  top: 15px;
  left: 15px;
  right: 15px;

  display: flex;

  align-items: center;
  justify-content: space-between;
}

.project-number {
  width: 35px;
  height: 35px;

  display: flex;

  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255, 255, 255, 0.15);

  border-radius: 9px;

  background: rgba(15, 23, 42, 0.70);

  color: white;

  font-size: 11px;
  font-weight: 700;

  backdrop-filter: blur(8px);
}

.category {
  padding: 6px 10px;

  border: 1px solid rgba(56, 189, 248, 0.25);

  border-radius: 20px;

  background: rgba(15, 23, 42, 0.70);

  color: #7dd3fc;

  font-size: 10px;
  font-weight: 700;

  letter-spacing: 0.5px;

  text-transform: uppercase;

  backdrop-filter: blur(8px);
}


/* =========================
   CONTENT
========================= */

.project-content {
  display: flex;

  flex: 1;

  flex-direction: column;

  padding: 25px;
}

.project-content h3 {
  margin: 0;

  color: #f8fafc;

  font-size: 21px;
  font-weight: 750;

  line-height: 1.3;
}

.description {
  margin: 13px 0 0;

  color: #cbd5e1;

  font-size: 14px;

  line-height: 1.7;
}


/* =========================
   TECHNOLOGIES
========================= */

.technologies {
  display: flex;

  flex-wrap: wrap;

  gap: 7px;

  margin-top: 20px;
}

.technologies span {
  padding: 5px 9px;

  border: 1px solid rgba(148, 163, 184, 0.12);

  border-radius: 6px;

  background: rgba(15, 23, 42, 0.65);

  color: #94a3b8;

  font-size: 10px;
  font-weight: 600;
}


/* =========================
   ACTIONS
========================= */

.actions {
  display: flex;

  flex-wrap: wrap;

  gap: 10px;

  margin-top: auto;
  padding-top: 25px;
}

.btn {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  gap: 7px;

  padding: 9px 15px;

  border-radius: 8px;

  font-size: 12px;
  font-weight: 650;

  text-decoration: none;

  transition:
    transform 0.25s ease,
    background 0.25s ease,
    border-color 0.25s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn span {
  font-size: 14px;
}


/* Primary */

.primary {
  background: #38bdf8;

  color: #0f172a;
}

.primary:hover {
  background: #7dd3fc;
}


/* Secondary */

.secondary {
  border: 1px solid rgba(56, 189, 248, 0.30);

  background: transparent;

  color: #e2e8f0;
}

.secondary:hover {
  border-color: #38bdf8;

  background: rgba(56, 189, 248, 0.08);
}


/* =========================
   TABLET
========================= */

@media (max-width: 1050px) {

  .projects {
    padding: 90px 20px;
  }

  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }

}


/* =========================
   MOBILE
========================= */

@media (max-width: 700px) {

  .projects {
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

  .projects-grid {
    grid-template-columns: 1fr;

    gap: 22px;
  }

  .project-image {
    height: 220px;
  }

}


/* =========================
   SMALL MOBILE
========================= */

@media (max-width: 450px) {

  .projects {
    padding: 70px 15px;
  }

  .project-image {
    height: 200px;
  }

  .project-content {
    padding: 21px;
  }

  .project-content h3 {
    font-size: 19px;
  }

  .actions {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

}

.achievements-badge {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  margin-top: 12px;
  padding: 5px 9px;

  border: 1px solid rgba(56, 189, 248, 0.22);
  border-radius: 20px;

  background: rgba(56, 189, 248, 0.08);
  color: #7dd3fc;

  font-size: 10px;
  font-weight: 700;
}

</style>
```

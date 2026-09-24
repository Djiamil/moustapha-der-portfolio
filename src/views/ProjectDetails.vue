<script setup lang="ts">
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"
import { projects } from "../data/projects"

const route = useRoute()
const router = useRouter()

const project = computed(() =>
  projects.find((item) => item.id === route.params.id)
)

const goBack = () => {
  router.push("/")
}
</script>

<template>
  <main class="project-details">

    <div v-if="project" class="container">

      <button class="back-button" @click="goBack">
        ← Retour aux projets
      </button>

      <div class="project-header">
        <span v-if="project.category" class="category">
          {{ project.category }}
        </span>

        <h1>{{ project.title }}</h1>

        <p class="description">
          {{ project.description }}
        </p>
      </div>

      <div class="project-image">
        <img :src="project.image" :alt="project.title" />
      </div>

      <div class="project-content">

        <section>
          <h2>À propos du projet</h2>
          <p>{{ project.details }}</p>
        </section>

        <section>
          <h2>Technologies</h2>

          <div class="technologies">
            <span
              v-for="tech in project.technologies"
              :key="tech"
            >
              {{ tech }}
            </span>
          </div>
        </section>

        <section v-if="project.achievements?.length">
          <h2>Distinctions & événements</h2>

          <ul class="achievements">
            <li
              v-for="achievement in project.achievements"
              :key="achievement"
            >
              {{ achievement }}
            </li>
          </ul>
        </section>

        <a
          v-if="project.link"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="btn primary"
        >
          Voir le projet ↗
        </a>

      </div>
    </div>

    <div v-else class="not-found">
      <h1>Projet introuvable</h1>

      <button class="btn primary" @click="goBack">
        Retour aux projets
      </button>
    </div>

  </main>
</template>


```css
<style scoped>
.project-details {
  min-height: 100vh;
  padding: 120px 0 80px;
  background: var(--bg-primary, #0b1120);
  color: #f8fafc;
}

.container {
  width: min(1100px, 90%);
  margin: 0 auto;
}

/* =========================
   RETOUR
========================= */

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 45px;
  padding: 10px 0;
  border: none;
  background: transparent;
  color: #94a3b8;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;
}

.back-button:hover {
  color: #38bdf8;
  transform: translateX(-4px);
}

/* =========================
   HEADER
========================= */

.project-header {
  max-width: 850px;
  margin-bottom: 45px;
}

.category {
  display: inline-flex;
  align-items: center;
  margin-bottom: 18px;
  padding: 7px 13px;
  border: 1px solid rgba(56, 189, 248, 0.25);
  border-radius: 30px;
  background: rgba(56, 189, 248, 0.08);
  color: #38bdf8;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.project-header h1 {
  margin: 0 0 18px;
  font-size: clamp(38px, 6vw, 70px);
  line-height: 1.05;
  font-weight: 800;
  letter-spacing: -0.04em;
}

.project-header .description {
  max-width: 750px;
  margin: 0;
  color: #94a3b8;
  font-size: 18px;
  line-height: 1.8;
}

/* =========================
   IMAGE
========================= */

.project-image {
  position: relative;
  width: 100%;
  height: 520px;
  margin-bottom: 65px;
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, 0.12);
  border-radius: 24px;
  background: #111827;

  display: flex;
  align-items: center;
  justify-content: center;
}

.project-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  transition: transform 0.6s ease;
}

.project-image::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 55%,
    rgba(11, 17, 32, 0.35)
  );
  pointer-events: none;
}


.project-image:hover img {
  transform: scale(1.02);
}

/* =========================
   CONTENT
========================= */

.project-content {
  max-width: 850px;
  margin: 0 auto;
}

.project-content section {
  margin-bottom: 55px;
}

.project-content h2 {
  margin: 0 0 20px;
  font-size: 25px;
  font-weight: 750;
  color: #f8fafc;
}

.project-content section h2::after {
  content: "";
  display: block;
  width: 45px;
  height: 3px;
  margin-top: 10px;
  border-radius: 3px;
  background: #38bdf8;
}

.project-content p {
  margin: 0;
  color: #94a3b8;
  font-size: 16px;
  line-height: 1.9;
}

/* =========================
   TECHNOLOGIES
========================= */

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.technologies span {
  display: inline-flex;
  align-items: center;
  padding: 9px 14px;
  border: 1px solid rgba(148, 163, 184, 0.15);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.035);
  color: #cbd5e1;
  font-size: 13px;
  font-weight: 600;
  transition:
    border-color 0.3s ease,
    color 0.3s ease,
    background 0.3s ease;
}

.technologies span:hover {
  border-color: rgba(56, 189, 248, 0.4);
  background: rgba(56, 189, 248, 0.08);
  color: #38bdf8;
}

/* =========================
   DISTINCTIONS
========================= */

.achievements {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.achievements li {
  position: relative;
  padding: 16px 18px 16px 45px;
  border: 1px solid rgba(56, 189, 248, 0.12);
  border-radius: 12px;
  background: rgba(56, 189, 248, 0.04);
  color: #cbd5e1;
  font-size: 15px;
  line-height: 1.6;
}

.achievements li::before {
  content: "✦";
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  color: #38bdf8;
  font-size: 16px;
}

/* =========================
   BOUTON
========================= */

.btn.primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 13px 22px;
  border: 1px solid #38bdf8;
  border-radius: 10px;
  background: #38bdf8;
  color: #08111f;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background 0.3s ease;
}

.btn.primary:hover {
  background: #7dd3fc;
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(56, 189, 248, 0.2);
}

/* =========================
   NOT FOUND
========================= */

.not-found {
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  text-align: center;
}

.not-found h1 {
  margin: 0;
  font-size: 36px;
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 768px) {
  .project-details {
    padding: 100px 0 60px;
  }

  .container {
    width: min(92%, 1100px);
  }

  .back-button {
    margin-bottom: 30px;
  }

  .project-header {
    margin-bottom: 30px;
  }

  .project-header h1 {
    font-size: 42px;
  }

  .project-header .description {
    font-size: 16px;
  }

  .project-image {
    height: 320px;
    margin-bottom: 45px;
    border-radius: 18px;
  }

  .project-content section {
    margin-bottom: 40px;
  }

  .project-content h2 {
    font-size: 22px;
  }
}

@media (max-width: 480px) {
  .project-details {
    padding-top: 90px;
  }

  .project-header h1 {
    font-size: 34px;
  }

  .project-image {
    height: 240px;
    border-radius: 14px;
  }

  .technologies span {
    font-size: 12px;
    padding: 8px 11px;
  }

  .achievements li {
    padding: 14px 14px 14px 40px;
    font-size: 14px;
  }
}
</style>
```

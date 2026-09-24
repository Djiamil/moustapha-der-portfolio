<template>
  <section class="hero">

    <div class="hero-container">

      <!-- Content -->
      <div
        class="hero-content"
        data-aos="fade-right"
      >

        <span class="hero-label">
          DÉVELOPPEUR FULL STACK
        </span>

        <h1>
          Moustapha <span>DER</span>
        </h1>

        <h2>
          Je transforme des idées en
          <strong>solutions digitales.</strong>
        </h2>

        <p>
          Développeur Full Stack avec une forte orientation Backend,
          je conçois des applications web, des API REST et des
          solutions métiers robustes et évolutives avec
          <strong>Django, Laravel, Vue.js, react js et Angular.</strong>
        </p>


        <!-- Buttons -->
        <div class="buttons">

          <a
            href="/documents/CV_Moustapha_DER.pdf"
            download="CV_Moustapha_DER.pdf"
            class="btn primary"
          >
            Télécharger mon CV
          </a>

          <a
            href="https://github.com/Djiamil"
            target="_blank"
            rel="noopener noreferrer"
            class="btn secondary"
          >
            Voir mon GitHub
          </a>

        </div>


        <!-- Quick information -->
        <div class="hero-meta">

          <div class="meta-item">
            <strong>Full Stack</strong>
            <span>Développement</span>
          </div>

          <div class="meta-separator"></div>

          <div class="meta-item">
            <strong>Backend</strong>
            <span>API & Architecture</span>
          </div>

          <div class="meta-separator"></div>

          <div class="meta-item">
            <strong>Web</strong>
            <span>Solutions métiers</span>
          </div>

        </div>

      </div>


      <!-- Profile -->
      <div
        class="hero-image"
        data-aos="fade-left"
      >

        <div class="avatar-wrapper">

          <div class="avatar-glow"></div>

          <div class="avatar">

            <img
              src="/images/profile.png"
              alt="Moustapha DER"
            />

          </div>

        </div>

      </div>

    </div>

  </section>
</template>


<style scoped>

.hero {
  min-height: 100vh;

  display: flex;
  align-items: center;

  padding: 120px 0 80px;

  position: relative;
}


/* =========================
   CONTAINER
========================= */

.hero-container {
  width: 90%;
  max-width: 1200px;

  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 80px;
}


/* =========================
   CONTENT
========================= */

.hero-content {
  max-width: 680px;
}


/* Label */

.hero-label {
  display: inline-block;

  margin-bottom: 18px;

  padding: 7px 14px;

  border: 1px solid rgba(56, 189, 248, 0.3);

  border-radius: 30px;

  background: rgba(56, 189, 248, 0.08);

  color: #38bdf8;

  font-size: 12px;
  font-weight: 700;

  letter-spacing: 2px;
}


/* Name */

.hero h1 {
  margin: 0;

  font-size: 64px;

  line-height: 1.1;

  font-weight: 800;

  color: #f8fafc;
}

.hero h1 span {
  color: #38bdf8;
}


/* Main title */

.hero h2 {
  margin: 20px 0;

  max-width: 650px;

  font-size: 38px;

  line-height: 1.25;

  font-weight: 600;

  color: #e2e8f0;
}

.hero h2 strong {
  color: #38bdf8;
}


/* Description */

.hero p {
  max-width: 620px;

  margin: 0;

  font-size: 17px;

  line-height: 1.8;

  color: #94a3b8;
}

.hero p strong {
  color: #cbd5e1;
}


/* =========================
   BUTTONS
========================= */

.buttons {
  display: flex;

  gap: 16px;

  margin-top: 35px;
}

.btn {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  padding: 14px 26px;

  border-radius: 30px;

  font-weight: 600;

  text-decoration: none;

  transition:
    transform 0.3s ease,
    background 0.3s ease,
    box-shadow 0.3s ease;
}


/* Primary */

.primary {
  background: #38bdf8;

  color: #0f172a;

  box-shadow:
    0 10px 25px rgba(56, 189, 248, 0.15);
}

.primary:hover {
  transform: translateY(-3px);

  box-shadow:
    0 15px 30px rgba(56, 189, 248, 0.25);
}


/* Secondary */

.secondary {
  border: 1px solid rgba(56, 189, 248, 0.5);

  color: #f8fafc;

  background: transparent;
}

.secondary:hover {
  transform: translateY(-3px);

  background: rgba(56, 189, 248, 0.08);
}


/* =========================
   META
========================= */

.hero-meta {
  display: flex;

  align-items: center;

  gap: 22px;

  margin-top: 45px;
}

.meta-item {
  display: flex;

  flex-direction: column;

  gap: 4px;
}

.meta-item strong {
  font-size: 14px;

  color: #f8fafc;
}

.meta-item span {
  font-size: 12px;

  color: #64748b;
}

.meta-separator {
  width: 1px;
  height: 30px;

  background: rgba(148, 163, 184, 0.2);
}


/* =========================
   PROFILE IMAGE
========================= */

.hero-image {
  width: 360px;
  height: 360px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-wrapper {
  width: 100%;
  height: 100%;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
}


/* Glow */

.avatar-glow {
  position: absolute;

  width: 300px;
  height: 300px;

  border-radius: 50%;

  background: rgba(56, 189, 248, 0.12);

  filter: blur(45px);
}


/* Image */

.avatar {
  position: relative;

  width: 300px;
  height: 300px;

  border-radius: 50%;

  overflow: hidden;

  border: 3px solid rgba(56, 189, 248, 0.8);

  background: #1e293b;

  box-shadow:
    0 0 0 12px rgba(56, 189, 248, 0.04),
    0 25px 60px rgba(0, 0, 0, 0.35);
}

.avatar img {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 900px) {

  .hero {
    padding: 120px 0 80px;
  }

  .hero-container {
    flex-direction: column-reverse;

    gap: 50px;

    text-align: center;
  }

  .hero-content {
    max-width: 700px;
  }

  .hero h1 {
    font-size: 48px;
  }

  .hero h2 {
    font-size: 30px;
  }

  .hero p {
    margin: auto;
  }

  .buttons {
    justify-content: center;
  }

  .hero-meta {
    justify-content: center;
  }

  .hero-image {
    width: 280px;
    height: 280px;
  }

  .avatar {
    width: 240px;
    height: 240px;
  }

  .avatar-glow {
    width: 240px;
    height: 240px;
  }

}


@media (max-width: 600px) {

  .hero {
    padding: 110px 0 70px;
  }

  .hero h1 {
    font-size: 40px;
  }

  .hero h2 {
    font-size: 25px;
  }

  .hero p {
    font-size: 15px;
  }

  .buttons {
    flex-direction: column;

    align-items: stretch;
  }

  .btn {
    width: 100%;
  }

  .hero-meta {
    gap: 12px;
  }

  .meta-item strong {
    font-size: 12px;
  }

  .meta-item span {
    font-size: 10px;
  }

}

</style>
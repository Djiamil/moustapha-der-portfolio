<template>
  <section id="about" class="about">

    <div class="container">

      <!-- Section title -->
      <div class="section-title" data-aos="fade-up">
        <span class="section-label">À PROPOS</span>

        <h2>
          Développeur Full Stack
          <span>orienté Backend</span>
        </h2>

        <p>
          Je conçois des applications web, des API et des solutions
          digitales adaptées aux besoins métiers.
        </p>
      </div>


      <div class="about-content">

        <!-- About text -->
        <div
          class="about-text"
          data-aos="fade-right"
        >

          <p>
            Je suis <strong>Moustapha DER</strong>, développeur Full Stack
            avec une forte orientation Backend. Je conçois et développe
            des applications web, des API REST et des solutions digitales
            adaptées aux besoins métiers.
          </p>

          <p>
            J'ai participé au développement de plusieurs plateformes
            professionnelles dans des domaines variés :
            <strong>agriculture, santé, immobilier, suivi-évaluation
            et IoT</strong>.
          </p>

          <p>
            Mon expertise se concentre principalement sur
            <strong>Django, Django REST Framework, Laravel et Symfony</strong>,
            avec une expérience côté frontend sur
            <strong>Vue.js, Angular et React.js</strong>.
          </p>

          <p>
            Je m'intéresse particulièrement à la conception d'architectures
            propres, aux API, à la sécurité, aux performances et au
            déploiement des applications.
          </p>

        </div>


        <!-- About information -->
        <div
          class="about-info"
          data-aos="fade-left"
        >

          <!-- Specialisation -->
          <div class="info-card">

            <div class="card-icon">
              &lt;/&gt;
            </div>

            <div>
              <h3>Spécialisation</h3>

              <p>
                Backend · API REST · Full Stack
              </p>
            </div>

          </div>


          <!-- Stack -->
          <div class="info-card">

            <div class="card-icon">
              ⚙
            </div>

            <div>
              <h3>Stack principale</h3>

              <p>
                Django · Laravel · Vue.js · Angular
              </p>
            </div>

          </div>


          <!-- Domaines -->
          <div class="info-card">

            <div class="card-icon">
              ◈
            </div>

            <div>
              <h3>Domaines</h3>

              <p>
                Agriculture · Santé · IoT · Immobilier
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>

  </section>
</template>


<style scoped>

.about {
  padding: 100px 0;
}


/* =========================
   SECTION TITLE
========================= */

.section-title {
  text-align: center;
  max-width: 750px;
  margin: 0 auto 60px;
}

.section-label {
  display: inline-block;

  margin-bottom: 14px;

  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;

  color: #38bdf8;
}

.section-title h2 {
  margin: 0;

  font-size: 42px;
  line-height: 1.2;

  color: #f8fafc;
}

.section-title h2 span {
  color: #38bdf8;
}

.section-title p {
  margin-top: 18px;

  font-size: 16px;
  line-height: 1.7;

  color: #94a3b8;
}


/* =========================
   CONTENT
========================= */

.about-content {
  display: flex;

  gap: 70px;

  align-items: flex-start;
}


/* =========================
   TEXT
========================= */

.about-text {
  flex: 1;
}

.about-text p {
  margin: 0 0 22px;

  font-size: 16px;
  line-height: 1.85;

  color: #cbd5e1;
}

.about-text strong {
  color: #f8fafc;
  font-weight: 600;
}


/* =========================
   INFO CARDS
========================= */

.about-info {
  flex: 0 0 380px;

  display: flex;
  flex-direction: column;

  gap: 18px;
}


.info-card {
  display: flex;
  align-items: center;

  gap: 18px;

  padding: 22px;

  background: #1e293b;

  border: 1px solid rgba(148, 163, 184, 0.08);

  border-radius: 14px;

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.info-card:hover {
  transform: translateY(-4px);

  border-color: rgba(56, 189, 248, 0.35);

  box-shadow:
    0 15px 35px rgba(0, 0, 0, 0.2);
}


/* =========================
   ICON
========================= */

.card-icon {
  width: 48px;
  height: 48px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;

  background: rgba(56, 189, 248, 0.1);

  color: #38bdf8;

  font-size: 18px;
  font-weight: 700;
}


/* =========================
   CARD TEXT
========================= */

.info-card h3 {
  margin: 0 0 7px;

  font-size: 16px;

  color: #f8fafc;
}

.info-card p {
  margin: 0;

  font-size: 14px;

  line-height: 1.5;

  color: #94a3b8;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 900px) {

  .about {
    padding: 80px 0;
  }

  .about-content {
    flex-direction: column;

    gap: 40px;
  }

  .about-info {
    width: 100%;

    flex: none;
  }

}


@media (max-width: 600px) {

  .section-title {
    margin-bottom: 45px;
  }

  .section-title h2 {
    font-size: 32px;
  }

  .section-title p {
    font-size: 15px;
  }

  .about-text p {
    font-size: 15px;
  }

  .info-card {
    padding: 18px;
  }

}

</style>
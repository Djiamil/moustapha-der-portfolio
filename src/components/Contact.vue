<template>
  <section id="contact" class="contact">

    <div class="container">

      <!-- Section title -->
      <div
        class="section-title"
        data-aos="fade-up"
      >

        <span class="section-label">
          CONTACT
        </span>

        <h2>
          Parlons de votre
          <span>projet</span>
        </h2>

        <p>
          Vous avez un projet, une opportunité professionnelle ou
          simplement envie d'échanger ? Je serais ravi d'en discuter.
        </p>

      </div>


      <div class="contact-content">

        <!-- Main CTA -->
        <div
          class="contact-intro"
          data-aos="fade-right"
        >

          <h3>
            Une idée ou une opportunité ?
          </h3>

          <p>
            Je suis disponible pour discuter de projets web,
            d'opportunités professionnelles et de collaborations
            autour de solutions digitales.
          </p>


          <a
            href="mailto:moustaphader61@gmail.com"
            class="contact-button"
          >
            Me contacter
            <span>→</span>
          </a>

        </div>


        <!-- Contact information -->
        <div
          class="contact-info"
          data-aos="fade-left"
        >

          <!-- Email -->
          <a
            href="mailto:moustaphader61@gmail.com"
            class="contact-item"
          >

            <div class="contact-icon">
              @
            </div>

            <div>
              <span>Email</span>

              <strong>
                moustaphader61@gmail.com
              </strong>
            </div>

          </a>


          <!-- Phone -->
          <a
            href="tel:+221773488929"
            class="contact-item"
          >

            <div class="contact-icon">
              ☎
            </div>

            <div>
              <span>Téléphone</span>

              <strong>
                +221 77 348 89 29
              </strong>
            </div>

          </a>


          <!-- Location -->
          <div class="contact-item">

            <div class="contact-icon">
              ◉
            </div>

            <div>
              <span>Localisation</span>

              <strong>
                Dakar, Sénégal
              </strong>
            </div>

          </div>


          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/Mmoustapha-der"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-item"
          >

            <div class="contact-icon">
              in
            </div>

            <div>
              <span>LinkedIn</span>

              <strong>
                Mon profil professionnel
              </strong>
            </div>

          </a>

        </div>

      </div>


      <!-- Bottom links -->
      <div
        class="contact-footer"
        data-aos="fade-up"
      >

        <span>
          Retrouvez-moi également sur
        </span>

        <div class="social-links">

          <a
            href="https://github.com/Djiamil"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/Mmoustapha-der"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="/documents/CV_Moustapha_DER.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>

        </div>

      </div>

    </div>

  </section>
</template>


<style scoped>

.contact {
  padding: 110px 0 80px;
}


/* =========================
   SECTION TITLE
========================= */

.section-title {
  max-width: 700px;

  margin: 0 auto 65px;

  text-align: center;
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

.contact-content {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 30px;
}


/* =========================
   INTRO CARD
========================= */

.contact-intro {
  padding: 45px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  min-height: 320px;

  background:
    linear-gradient(
      135deg,
      rgba(56, 189, 248, 0.12),
      rgba(30, 41, 59, 0.9)
    );

  border: 1px solid rgba(56, 189, 248, 0.15);

  border-radius: 18px;
}

.contact-intro h3 {
  margin: 0 0 18px;

  font-size: 28px;

  color: #f8fafc;
}

.contact-intro p {
  max-width: 500px;

  margin: 0;

  font-size: 16px;

  line-height: 1.8;

  color: #94a3b8;
}


/* =========================
   CTA
========================= */

.contact-button {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  gap: 12px;

  width: fit-content;

  margin-top: 30px;

  padding: 14px 24px;

  border-radius: 30px;

  background: #38bdf8;

  color: #0f172a;

  font-weight: 700;

  text-decoration: none;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.contact-button span {
  font-size: 20px;

  transition: transform 0.3s ease;
}

.contact-button:hover {
  transform: translateY(-3px);

  box-shadow:
    0 12px 30px rgba(56, 189, 248, 0.2);
}

.contact-button:hover span {
  transform: translateX(4px);
}


/* =========================
   CONTACT INFO
========================= */

.contact-info {
  display: flex;

  flex-direction: column;

  gap: 15px;
}


.contact-item {
  display: flex;

  align-items: center;

  gap: 18px;

  padding: 20px;

  background: #1e293b;

  border: 1px solid rgba(148, 163, 184, 0.08);

  border-radius: 14px;

  text-decoration: none;

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    background 0.3s ease;
}

.contact-item:hover {
  transform: translateX(5px);

  border-color: rgba(56, 189, 248, 0.3);

  background: #243247;
}


/* =========================
   ICON
========================= */

.contact-icon {
  width: 48px;
  height: 48px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;

  background: rgba(56, 189, 248, 0.1);

  color: #38bdf8;

  font-size: 17px;

  font-weight: 700;
}


/* =========================
   TEXT
========================= */

.contact-item div:last-child {
  display: flex;

  flex-direction: column;

  gap: 5px;
}

.contact-item span {
  font-size: 12px;

  color: #64748b;

  text-transform: uppercase;

  letter-spacing: 1px;
}

.contact-item strong {
  font-size: 15px;

  font-weight: 500;

  color: #cbd5e1;
}

.contact-item:hover strong {
  color: #38bdf8;
}


/* =========================
   FOOTER
========================= */

.contact-footer {
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 20px;

  margin-top: 45px;

  padding-top: 30px;

  border-top: 1px solid rgba(148, 163, 184, 0.1);

  color: #64748b;

  font-size: 14px;
}

.social-links {
  display: flex;

  gap: 20px;
}

.social-links a {
  color: #94a3b8;

  text-decoration: none;

  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #38bdf8;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 850px) {

  .contact {
    padding: 90px 0 60px;
  }

  .section-title h2 {
    font-size: 34px;
  }

  .contact-content {
    grid-template-columns: 1fr;
  }

  .contact-intro {
    min-height: auto;

    padding: 35px;
  }

}


@media (max-width: 600px) {

  .section-title {
    margin-bottom: 45px;
  }

  .section-title h2 {
    font-size: 30px;
  }

  .section-title p {
    font-size: 15px;
  }

  .contact-intro {
    padding: 28px;
  }

  .contact-intro h3 {
    font-size: 24px;
  }

  .contact-item {
    padding: 17px;
  }

  .contact-item strong {
    font-size: 13px;
  }

  .contact-footer {
    flex-direction: column;

    gap: 15px;
  }

}

</style>
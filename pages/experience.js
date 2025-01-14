import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styles from '../styles/Experience.module.css';

export default function Experience() {
  return (
    <div>
      <Head>
        <title>Experience - Angelos Devletoglou</title>
        <meta name="description" content="Experience of Angelos Devletoglou" />
      </Head>
      <Header />
      <Nav />
      <main>
        <div className={styles.timeline}>
          <div className={`${styles['timeline-item']} ${styles.left}`}>
            <div className={styles['timeline-content']}>
              <img src="/logo-baresquare.png" alt="Baresquare" className={styles['timeline-logo']} />
              <div className={styles['timeline-date']}>2021 - 2024</div>
              <h3 className={styles['timeline-title']}>Head of Engineering</h3>
              <p>
                Joined the founding team, led the development of a Seed-funded AI/ML e-commerce revenue insights SaaS.
                Re-architected existing data platform, with cost ans scale in mind. Overhauled the team structure and
                processes to enhance product delivery in a lean and nimble way.
              </p>
            </div>
          </div>

          <div className={`${styles['timeline-item']} ${styles.right}`}>
            <div className={styles['timeline-content']}>
              <img src="/logo-checkatrade.png" alt="Checkatrade" className={styles['timeline-logo']} />
              <div className={styles['timeline-date']}>2021</div>
              <h3 className={styles['timeline-title']}>Head of Software Development</h3>
              <p>
                Led a team of 100 developing and operating the #1 marketplace platform that enables consumers to find
                the right traders for their home improvement projects. Overhauled the hiring process to enhance
                fairness, diversity, and inclusivity while streamlining procedures for greater efficiency. Defined clear
                job descriptions and responsibilities across the Development team, effectively managing uncertainty
                during a period of organizational change.
              </p>
            </div>
          </div>

          <div className={`${styles['timeline-item']} ${styles.left}`}>
            <div className={styles['timeline-content']}>
              <img src="/logo-sainsburys.png" alt="Sainsbury's" className={styles['timeline-logo']} />
              <div className={styles['timeline-date']}>2020 - 2021</div>
              <h3 className={styles['timeline-title']}>Engineering Manager</h3>
              <p>
                Led a cross-functional product team developing the shared services platform for user management. A
                platform that was predominantly consisting of backend Rest API and Event bus services for contact
                management, people profiles and authorisation, powering the personalisation of downstream system
                experiences across the commercial side of the business.
              </p>
            </div>
          </div>

          <div className={`${styles['timeline-item']} ${styles.right}`}>
            <div className={styles['timeline-content']}>
              <img src="/logo-maru.webp" alt="Maru" className={styles['timeline-logo']} />
              <div className={styles['timeline-date']}>2016 - 2020</div>
              <h3 className={styles['timeline-title']}>CTO UK</h3>
              <p>
                Following the acquisition of eDigitalResearch, I was responsible for the execution and implementation of
                the technology strategy supporting the rapid growth of Maru Group internationally through leading a
                cross-functional team of software engineers, testers, product managers and DevOps specialists.
              </p>
            </div>
          </div>

          <div className={`${styles['timeline-item']} ${styles.left}`}>
            <div className={styles['timeline-content']}>
              <img src="/logo-edigitalresearch.webp" alt="eDigitalResearch" className={styles['timeline-logo']} />
              <div className={styles['timeline-date']}>2010 - 2016</div>
              <h3 className={styles['timeline-title']}>Director of Technical Operations</h3>
              <p>
                Oversaw the technical operations team alongside supporting the board of Directors with their long term
                vision, business development, efficiency, product innovation and providing employees with an environment
                they feel valued in collaboration with the other members of the senior management team.
              </p>
            </div>
          </div>
          <div className={`${styles['timeline-item']} ${styles.right}`}>
            <div className={styles['timeline-content']}>
              <div className={styles['timeline-date']}>2005 - 2010</div>
              <h3 className={styles['timeline-title']}>Software Engineering positions</h3>
              <p>
                Started my career as a PHP developer in a boutique web design agency, developed a content management
                system, a white label e-commerce platform, sms marketing platform. Moved on in a scalup agency,
                delivering projects for customers such as the BBC, Sky, British Airways, Sainsbury's and many more
                enterprise customers.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

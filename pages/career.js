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
      <Header title="Career" subtitle="Career and education timeline" />
      <Nav />
      <main>
        <div className={styles.timeline}>
          <div className={`${styles['timeline-item']} ${styles.left}`}>
            <div className={styles['timeline-content']}>
              <img src="/logo-iag-loyalty.png" alt="IAG Loyalty" className={styles['timeline-logo']} />
              <div className={styles['timeline-date']}>2025 - Present</div>
              <h3 className={styles['timeline-title']}>Engineering Manager (Acting Head of Engineering)</h3>
              <p>
                Providing high-impact engineering leadership within Avios Group (Oneworld Group's Airline Loyalty
                currency), accountable for engineers across partner, currency, membership, and redemption domains.
                Led adoption of Backstage to improve service ownership and standardise architecture decisions, drove a
                +6 point increase in Developer Experience Index (DXI) to 67, and developed an LLM-powered engineering
                workflow for JIRA categorisation to bring data-driven transparency to engineering investment.
              </p>
            </div>
          </div>

          <div className={`${styles['timeline-item']} ${styles.right}`}>
            <div className={styles['timeline-content']}>
              <img src="/logo-baresquare.png" alt="Baresquare" className={styles['timeline-logo']} />
              <div className={styles['timeline-date']}>2021 - 2024</div>
              <h3 className={styles['timeline-title']}>Head of Engineering</h3>
              <p>
                Led a 15-person engineering function building an AI-powered B2B analytics platform, restructuring the
                team into specialised domains and establishing clear engineering standards. Led migration to a
                microservices architecture on AWS and GCP, lifting delivery throughput by 200%. Developed AI agent
                capabilities using OpenAI, Python and Node.js, and embedded shift-left security and quality practices
                that cut production incidents by 30%.
              </p>
            </div>
          </div>

          <div className={`${styles['timeline-item']} ${styles.left}`}>
            <div className={styles['timeline-content']}>
              <img src="/logo-checkatrade.png" alt="Checkatrade" className={styles['timeline-logo']} />
              <div className={styles['timeline-date']}>2021</div>
              <h3 className={styles['timeline-title']}>Head of Development</h3>
              <p>
                Overhauled hiring, performance management, and career-path frameworks across a 70-engineer team
                developing and operating the #1 marketplace platform that enables consumers to find the right traders
                for their home improvement projects, bringing clarity and predictable delivery through a period of
                major organizational change.
              </p>
            </div>
          </div>

          <div className={`${styles['timeline-item']} ${styles.right}`}>
            <div className={styles['timeline-content']}>
              <img src="/logo-sainsburys.png" alt="Sainsbury's" className={styles['timeline-logo']} />
              <div className={styles['timeline-date']}>2020 - 2021</div>
              <h3 className={styles['timeline-title']}>Engineering Manager</h3>
              <p>
                Transitioned B2B platform delivery from external consultants to a high-performing internal team within
                four months, reducing OPEX and embedding DevOps practice (CI/CD, shift-left testing, on-call ownership)
                under a "you build it, you own it" model for the shared services platform powering contact management,
                people profiles and authorisation.
              </p>
            </div>
          </div>

          <div className={`${styles['timeline-item']} ${styles.left}`}>
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

          <div className={`${styles['timeline-item']} ${styles.right}`}>
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
          <div className={`${styles['timeline-item']} ${styles.left}`}>
            <div className={styles['timeline-content']}>
              <div className={styles['timeline-date']}>2005 - 2010</div>
              <h3 className={styles['timeline-title']}>Software Engineering positions</h3>
              <p>
                Started my career as a PHP developer in a boutique web design agency, developed a content management
                system, a white label e-commerce platform, sms marketing platform. Moved on in a scale-up agency,
                delivering projects for customers such as the BBC, Sky, British Airways, Sainsbury's and many more
                enterprise customers.
              </p>
            </div>
          </div>
          <div className={`${styles['timeline-item']} ${styles.right}`}>
            <div className={styles['timeline-content']}>
              <img src="/logo-uop.png" alt="University of Portsmouth" className={styles['timeline-logo']} />
              <div className={styles['timeline-date']}>2000 - 2003</div>
              <h3 className={styles['timeline-title']}>BSc in Internet Technology</h3>
              <p>
                Studied at the University of Portsmouth, graduating with a 2:1 in Internet Technology. <br /> Final year
                project: J2ME mobile application for university registry.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

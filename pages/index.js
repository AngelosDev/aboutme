import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Angelos Devletoglou - Portfolio</title>
        <meta name="description" content="Angelos Devletoglou - Software Engineering Leader" />
      </Head>
      <Header title="Angelos Devletoglou" subtitle="Software Engineering Leader" />
      <Nav />
      <main className={styles.main}>
        <section>
          <h2>About Me</h2>
          <p>
            Technology leader with 20 years of experience in developing engineering culture, strategy and SaaS data
            platforms.
          </p>
          <p>
            Whether you are a startup, scaleup, or enterprise, I have developed the skills that can help you build
            high-performing teams, deliver impactful tech solutions, and drive business growth.
          </p>
          <h3>Key accomplishments</h3>
          <p>Across my time at Maru, Sainsbury's, Checkatrade and Baresquare</p>
          <ul>
            <li>Delivered growth pre and post-acquisition from £1M to £35M ARR.</li>
            <li>Halved unit costs by optimizing cloud architecture and SDLC.</li>
            <li>
              Developed AI enabled data platforms to deliver faster, more accurate business insights and improved UX via
              RAG.
            </li>
            <li>Managed enterprise stakeholders to successfully commission a new product.</li>
            <li>
              Delivered CX programmes for enterprise customers in the UK, US and Canada (e.g Tesco, BA, Uber, Sony)
            </li>
          </ul>
          <h2>Leadership</h2>
          <p>
            I inspire <strong>people</strong>, deliver <strong>business</strong> impact, and build future-ready{' '}
            <strong>technology</strong>. I thrive in environments where strategic thinking, innovation, and strong
            execution are essential.
          </p>

          <h3>People</h3>
          <p>
            I build high-performing, resilient teams by fostering trust, autonomy, and a culture of continuous growth.
          </p>
          <ul>
            <li>
              Leadership Coaching & Mentoring: Helping individuals and managers grow through structured development
              frameworks
            </li>
            <li>Team Culture & Engagement: Building psychologically safe, inclusive, and collaborative environments</li>
            <li>
              Talent Retention & Growth: Designing org structures and career pathways that support long-term success
            </li>
          </ul>

          <h3>Business</h3>
          <p>I drive growth by aligning technology strategy with commercial outcomes and operational excellence.</p>
          <ul>
            <li>
              Tech Strategy & Execution Planning: Bridging business goals with engineering roadmaps and investment cases
            </li>
            <li>
              Operational Excellence & Cost Optimisation: Streamlining delivery and reducing operational spend through
              automation and balancing insourcing with outsourcing
            </li>
            <li>
              Post-M&A Integration & Scaling: Onboarding teams, aligning platforms, and embedding culture after
              acquisitions
            </li>
          </ul>

          <h3>Technology</h3>
          <p>I design and deliver modern, scalable solutions that create scalable value and competitive advantage.</p>
          <ul>
            <li>
              Platform Architecture & Cloud Modernisation: Designing resilient, cloud-native infrastructures on AWS/GCP
            </li>
            <li>
              Data & AI Product Development: Building intelligent systems with real-time analytics and AI/ML
              capabilities
            </li>
            <li>
              Developer Experience & DevOps Enablement: Implementing CI/CD, monitoring, and tooling to increase
              productivity and quality
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

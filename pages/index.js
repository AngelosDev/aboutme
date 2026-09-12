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
        <meta name="description" content="Angelos Devletoglou - VP of Engineering & Mentor | SaaS, AI, B2B2C" />
      </Head>
      <Header title="Angelos Devletoglou" subtitle="VP of Engineering & Mentor | SaaS, AI, B2B2C" />
      <Nav />
      <main className={styles.main}>
        <section>
          <h2>About Me</h2>
          <p>
            Technology leader with 20+ years of experience in developing engineering culture, strategy and SaaS data
            platforms.
          </p>
          <p>
            Whether you are a startup, scaleup, or enterprise, I have developed the skills that can help you build
            high-performing teams, deliver impactful tech solutions, and drive business growth.
          </p>
          <h3>Key accomplishments</h3>
          <p>Across my time at Avios Group, Baresquare, Maru, Sainsbury's and Checkatrade</p>
          <ul>
            <li>Scaled engineering organisations from 10 to 70 engineers across enterprise (Avios/IAG Loyalty, Checkatrade) and high-growth SaaS (Maru, Baresquare).</li>
            <li>
              Accelerated release throughput by 200% and cut production incidents by 30% through cloud-native
              microservices architecture and shift-left engineering practices.
            </li>
            <li>Drove a +6 point increase in Developer Experience Index (DXI) by streamlining developer workflows and reducing cognitive load.</li>
            <li>
              Operationalized AI-assisted engineering, from LLM-powered JIRA workflow tooling to AI agent capabilities
              delivering automated insights to enterprise customers.
            </li>
            <li>Delivered growth pre and post-acquisition from £1M to £35M ARR while owning ISO27001 certification and security compliance.</li>
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
            <li>
              Security & Governance: Embedding ISO27001 practices and AI review guardrails, turning customer security
              reviews into routine procedures
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
            <li>
              Agentic SDLC: Embedding LLM/AI-powered tools into daily engineering workflows with review guardrails and
              metrics to drive measurable efficiency
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

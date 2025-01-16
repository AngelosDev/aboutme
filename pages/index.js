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
        </section>
        <section>
          <h2>Approach</h2>
          <h3>People</h3>
          <p>
            My leadership approach centers on empowering individuals and fostering collaborative, high-performing teams.
            Some key accomplishments include:
          </p>
          <ul>
            <li>
              Empowered individuals to take ownership of their decisions, fostering a culture of trust and
              accountability.
            </li>
            <li>
              Guided team members in defining and achieving their career goals, contributing to personal and
              professional growth.
            </li>
            <li>
              Created a psychologically safe environment of open communication, where team members felt supported,
              listened to, and guided.
            </li>
            <li>Resolved interpersonal conflicts, balancing team dynamics and enhancing overall performance.</li>
            <li>
              Transformed underperformers into high-performing contributors through targeted mentorship and coaching.
            </li>
            <li>Strong team retention, and appointments from internal talent that might otherwise have been lost.</li>
            <li>
              Built strong relationships with external contractors, earning their trust and ensuring long-term
              collaboration
            </li>
            <li>Mentored managers continuing to seek my guidance even after my departure.</li>
          </ul>
          <h3>Business</h3>
          <p>
            Driving business growth and impact through strategic initiatives and operational excellence, I've achieved
            milestones such as:
          </p>
          <ul>
            <li>
              Improved Scalability & Reduced Costs: Optimized data processing through ephemeral cloud-native platforms,
              reducing costs by 20-50%.
            </li>
            <li>
              Productivity Gains: Boosted team productivity by 60% via clear strategy, empowerment, and metrics, leading
              to faster feature releases.
            </li>
            <li>
              Cost Optimization: Cut operational expenses by £20K and reduced unit costs by 40% through strategic
              migrations and infrastructure re-architecture.
            </li>
            <li>
              Operational Efficiency: Transitioned outsourced operations to high-performing internal teams, reducing
              OPEX and ensuring seamless delivery within months.
            </li>
            <li>
              Business Expansion through acquisitions: Migrated and embedded two new businesses on owned platform
              driving significant growth and revenue.
            </li>
            <li>
              Award-Winning Solutions: Delivered award-winning Customer Experience Management and Market Research
              solutions, enhancing client satisfaction and business outcomes.
            </li>
            <li>
              Team Growth: Scaled development teams from 30 to 50+ members, integrating acquisitions and new hires
              seamlessly.
            </li>
            <li>
              Innovation: Introduced new technologies and methodologies, such as AI/ML, cloud-native platforms, and
              DevOps, to drive innovation and competitive advantage.
            </li>
          </ul>
          <h3>Technology</h3>
          <p>
            My technical expertise lies in designing and delivering scalable, innovative solutions that align with
            business goals. Highlights include:
          </p>
          <ul>
            <li>
              Cloud-Native Platforms: Designed scalable, cloud-native platforms to enhance performance and reduce
              operational costs
            </li>
            <li>
              DevOps Transformation: Embedded CI/CD pipelines, on-call rotations, and DevOps best practices, improving
              deployment speed and reliability.
            </li>
            <li>
              AI/ML Innovation: Developed AI/ML product for actionable insights, leveraging natural language processing,
              anomaly detection and root cause analysis.
            </li>
            <li>
              Microservices Migration: Transitioned legacy systems to microservices on AWS/GCP, improving performance
              and delivery throughput by 40%.
            </li>
            <li>
              Advanced Infrastructure: Built high-availability cloud systems using AWS, Kubernetes, Terraform, and
              Datadog to ensure scalability and security.
            </li>
            <li>
              Data Platforms: Architected real-time data platforms utilizing Kafka, PostgreSQL, BigQuery, and Airflow
              for scalable analytics.
            </li>
            <li>
              Innovation Incubator: Pioneered novel tech solutions, including voice surveys, Messenger bots, AR/VR
              experiences, and geofencing apps.
            </li>
            <li>
              Developer Experience: Improved developer experience with tooling like Swarmia, Datadog, Asynchornous
              standups, Miro for improved collaboration, self-evaluation metrics, monitoring and alerting.
            </li>
            <li>
              Software Architecture: Led the design of robust, scalable software systems across Python, Node.js, React,
              and AWS ecosystems.
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

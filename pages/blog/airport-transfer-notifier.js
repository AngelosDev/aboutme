import Head from 'next/head';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import styles from '../../styles/BlogPost.module.css';

export default function AirportTransferNotifier() {
  return (
    <div>
      <Head>
        <title>Airport Transfer Notifier - Angelos Devletoglou</title>
        <meta name="description" content="Airport Transfer Notifier by Angelos Devletoglou" />
      </Head>
      <Header title="Airport Transfer Notifier" subtitle="Serverless Automation for Transfer Job Alerts" />
      <Nav />
      <main className={styles.main}>
        <div className={styles.container}>
          <article className={styles.article}>
            <section id="introduction" className={styles.section}>
              <h2>Introduction</h2>
              <p>
                The Airport Transfer Notifier is a production-grade serverless application I built to automate a
                critical operational task for a small airport transfer taxi business: catching new transfer jobs the
                moment they become available on a third-party booking platform, and getting them in front of drivers
                instantly. Built with AWS and Python, it demonstrates event-driven design and operational resilience
                on a small, focused scale.
              </p>
            </section>

            <section id="problem" className={styles.section}>
              <h2>Problem Statement</h2>
              <p>
                New transfer jobs appeared on a third-party booking platform, but the only way to catch them was to
                keep checking the platform manually. For drivers who are often on the road, that meant missed job
                offers, wasted time refreshing a page, and no reliable way to act on a new job the moment it appeared.
              </p>
            </section>

            <section id="solution" className={styles.section}>
              <h2>Solution Overview</h2>
              <p>
                The Airport Transfer Notifier removes the manual checking entirely by combining active polling with
                real-time webhook events, then routing everything through Telegram:
              </p>
              <ol>
                <li>Polls the third-party platform for unassigned transfers and also receives webhook events for new bookings as they happen</li>
                <li>Deduplicates incoming transfers so the same job never triggers more than one notification</li>
                <li>Publishes an instant notification the moment a genuinely new job is detected</li>
                <li>Delivers the job straight to Telegram, where drivers can accept or decline with a single tap, no website required</li>
              </ol>
            </section>

            <section id="features" className={styles.section}>
              <h2>Key Capabilities</h2>
              <ul>
                <li>
                  <strong>Real-time Transfer Monitoring:</strong> Polls unassigned transfers and triggers immediate
                  notifications via SNS and Telegram
                </li>
                <li>
                  <strong>Intelligent Deduplication:</strong> Tracks transfer IDs in DynamoDB to prevent duplicate
                  processing
                </li>
                <li>
                  <strong>Webhook Integration Layer:</strong> Receives and validates external booking events with
                  built-in rate limiting and payload validation
                </li>
                <li>
                  <strong>Live Bot Controls:</strong> Exposes a Telegram bot endpoint for runtime toggles and
                  operational commands, gated behind authorization checks
                </li>
                <li>
                  <strong>Production Observability:</strong> Integrated error tracking with Sentry and structured
                  logging
                </li>
              </ul>
            </section>

            <section id="tech-stack" className={styles.section}>
              <h2>Tech Stack</h2>
              <ul>
                <li>
                  <strong>Infrastructure:</strong> AWS SAM (Serverless Application Model), Lambda, SNS, DynamoDB, API
                  Gateway
                </li>
                <li>
                  <strong>Language:</strong> Python 3.12
                </li>
                <li>
                  <strong>Dependencies:</strong> Requests, BeautifulSoup4, Sentry SDK, python-dotenv
                </li>
                <li>
                  <strong>Testing:</strong> Pytest, with unit and integration test suites
                </li>
                <li>
                  <strong>Security:</strong> Webhook validation, authorization-gated commands, hardened receiver
                  endpoints
                </li>
              </ul>
              <h3>Technical Highlights</h3>
              <ul>
                <li>Event-driven architecture with bounded retry policies and explicit timeouts</li>
                <li>Infrastructure-as-Code with SAM templates for reproducible deployments</li>
                <li>Environment-based configuration management with AWS SSM Parameter Store</li>
                <li>Comprehensive test coverage, including integration smoke tests</li>
                <li>Security-first design: no credentials in code, authorization gates on every external interface</li>
              </ul>
            </section>

            <section id="conclusion" className={styles.section}>
              <h2>Conclusion</h2>
              <p>
                The Airport Transfer Notifier is a small-scale but production-grade example of automating an annoying
                manual task with proper cloud engineering discipline: event-driven Lambda functions, deduplication,
                observability, and a security-first approach to every external interface. Instead of a person
                babysitting a booking platform for new work, the opportunity arrives the moment it exists, wherever
                the driver is, with a one-tap way to act on it.
              </p>
            </section>
          </article>

          <div className={styles.toc}>
            <h2>Contents</h2>
            <ul>
              <li>
                <a href="#introduction">Introduction</a>
              </li>
              <li>
                <a href="#problem">Problem Statement</a>
              </li>
              <li>
                <a href="#solution">Solution Overview</a>
              </li>
              <li>
                <a href="#features">Key Capabilities</a>
              </li>
              <li>
                <a href="#tech-stack">Tech Stack</a>
              </li>
              <li>
                <a href="#conclusion">Conclusion</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

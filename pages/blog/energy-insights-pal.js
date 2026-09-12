import Head from 'next/head';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import styles from '../../styles/BlogPost.module.css';

export default function EnergyInsightsPAL() {
  return (
    <div>
      <Head>
        <title>Energy Insights Pal - Angelos Devletoglou</title>
        <meta name="description" content="Energy Insights Pal by Angelos Devletoglou" />
      </Head>
      <Header title="Energy Insights Pal" subtitle="Your AI-Powered Energy Dashboard" />
      <Nav />
      <main className={styles.main}>
        <div className={styles.container}>
          <article className={styles.article}>
            <section id="overview" className={styles.section}>
              <h2>Overview</h2>
              <p>
                Energy bills arrive every quarter, but what really happened to your electricity and gas consumption?
                Energy Insights Pal is a personal project I designed and built: a real-time, AI-powered dashboard that
                transforms raw energy data into actionable insights, helping homeowners and renters understand when
                they're using energy, how much it's costing them, and why their usage patterns change.
              </p>
              <p>
                <a href="https://energyinsightspal.com/" target="_blank" rel="noopener noreferrer">
                  Try Energy Insights Pal live →
                </a>
              </p>
            </section>

            <section id="problem-statement" className={styles.section}>
              <h2>Problem Statement</h2>
              <p>
                Most energy bill PDFs show you a single number. They don't tell you why your bill spiked in January,
                which room might be draining power, or when you're paying the most for the energy you use. Consumers
                are left to guess:
              </p>
              <ul>
                <li>When during the day (or night) they're actually using the most energy</li>
                <li>How today's usage compares to last week, last month, or the same period last year</li>
                <li>Whether an unusual spike is a one-off or the start of a pattern worth investigating</li>
                <li>What their real-world costs look like against their actual tariff, not an estimated average</li>
              </ul>
            </section>

            <section id="solution" className={styles.section}>
              <h2>What It Does</h2>
              <p>
                Energy Insights Pal connects directly to the Octopus Energy API to pull half-hourly electricity and
                gas readings straight to your browser. The app displays:
              </p>
              <ul>
                <li>
                  <strong>Consumption tracking</strong> across Day, Week, Month, and Year timeframes, with costs
                  calculated against your actual tariff
                </li>
                <li>
                  <strong>Trend analysis</strong> that compares current usage to previous periods, spotting spikes and
                  shifts at a glance
                </li>
                <li>
                  <strong>Usage Spotlights</strong>, an AI-driven anomaly detection feature that automatically flags
                  unusual patterns, such as overnight standby creep, appliance-specific spikes, or seasonal shifts, and
                  explains them in plain language
                </li>
                <li>
                  <strong>AI summarization</strong> powered by Google's Gemini API, which turns detected anomalies into
                  natural-language insights instead of raw numbers
                </li>
                <li>
                  <strong>Offline-first loading</strong>, with a caching layer that keeps the dashboard fast even when
                  the energy provider's API is slow or unavailable
                </li>
              </ul>
              <p>
                The app is built with privacy in mind: API credentials are encrypted at rest, and energy data is kept
                within my own cloud project rather than passing through a third-party server.
              </p>
            </section>

            <section id="features" className={styles.section}>
              <h2>Built for Real Users</h2>
              <p>
                The interface is deliberately minimal, no bloat, no distraction. Period selectors, scrollable
                multi-day breakdowns, and year-on-year comparisons are built with interactive charts and smooth,
                animated transitions. The app is a Progressive Web App, so it can be installed to a home screen and
                used like a native app, with real-time updates that keep the dashboard fresh without constant
                polling.
              </p>
            </section>

            <section id="implementation" className={styles.section}>
              <h2>Tech Stack</h2>
              <p>Under the hood, Energy Insights Pal is built on a modern, full-stack TypeScript foundation:</p>
              <ul>
                <li>
                  <strong>Frontend:</strong> React 19 with TypeScript, Vite, and Tailwind CSS
                </li>
                <li>
                  <strong>Charts &amp; Visualization:</strong> Recharts for data-driven charts, Framer Motion for
                  interactions
                </li>
                <li>
                  <strong>Backend &amp; Sync:</strong> An Express.js service that brokers requests to Octopus Energy
                  and coordinates a cache-first sync strategy, minimizing redundant API calls and staying comfortably
                  within provider rate limits
                </li>
                <li>
                  <strong>Infrastructure:</strong> Firebase Authentication (Google OAuth), Cloud Firestore for
                  persistence and real-time updates, and Cloud Run for serverless deployment
                </li>
                <li>
                  <strong>AI:</strong> Google's Gemini API for natural-language insight generation
                </li>
                <li>
                  <strong>Analytics:</strong> Google Analytics 4 for tracking feature adoption
                </li>
              </ul>
              <p>
                The external energy API is treated as a data source to sync in the background rather than a live
                dependency the UI waits on, which keeps the dashboard responsive and avoids hammering the provider's
                rate limits.
              </p>
              <h3>Development Practices</h3>
              <p>
                The codebase emphasizes correctness and transparency: a lightweight, dependency-free test suite,
                documented architecture decisions, semantic versioning with conventional commits, and automated
                CI/CD so every change is tested before it ships.
              </p>
            </section>

            <section id="conclusion" className={styles.section}>
              <h2>Why It Matters</h2>
              <p>
                Energy Insights Pal shows you the story behind the number on your bill: why it spiked, which habits
                are driving cost, and when you're paying the most. It's a tool for both curiosity and action,
                understand your consumption, then adjust your habits or have a more informed conversation with your
                energy supplier.
              </p>
              <p>
                You can try it yourself at{' '}
                <a href="https://energyinsightspal.com/" target="_blank" rel="noopener noreferrer">
                  energyinsightspal.com
                </a>
                .
              </p>
            </section>
          </article>

          <div className={styles.toc}>
            <h2>Contents</h2>
            <ul>
              <li>
                <a href="#overview">Overview</a>
              </li>
              <li>
                <a href="#problem-statement">Problem Statement</a>
              </li>
              <li>
                <a href="#solution">What It Does</a>
              </li>
              <li>
                <a href="#features">Built for Real Users</a>
              </li>
              <li>
                <a href="#implementation">Tech Stack</a>
              </li>
              <li>
                <a href="#conclusion">Why It Matters</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

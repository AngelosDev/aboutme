import Link from 'next/link';
import Layout from '../../components/preview/Layout';
import { BASE } from '../../components/preview/config';
import styles from '../../styles/Preview.module.css';

const wins = [
  'Grew engineering teams from 10 to 70 people, in enterprise (Avios / IAG Loyalty, Checkatrade) and in fast-moving SaaS (Maru, Baresquare).',
  'Moved to cloud-native microservices and shifted quality left: releases came 200% faster and production incidents dropped by 30%.',
  'Lifted the Developer Experience Index by 6 points by simplifying workflows and cutting the cognitive load on engineers.',
  'Put AI to work in the engineering process itself: an LLM-powered JIRA workflow, and AI agents that deliver automated insights to enterprise customers.',
  'Helped take a business from £1M to £35M ARR, before and after acquisition, while owning ISO27001 certification and security compliance.',
];

const pillars = [
  {
    title: 'People',
    intro: 'Good teams are built on trust and autonomy, and they keep growing.',
    items: [
      ['Coaching and mentoring', 'Structured ways to help individuals and managers grow.'],
      ['Team culture', 'Safe, inclusive, collaborative places to do good work.'],
      ['Retention and growth', 'Org structures and career paths worth staying for.'],
    ],
  },
  {
    title: 'Business',
    intro: 'Technology earns its keep when it lines up with what the business needs.',
    items: [
      ['Strategy and execution', 'Turning business goals into roadmaps and investment cases.'],
      [
        'Operational excellence',
        'Lower running costs through automation and a sensible in-house / outsourced balance.',
      ],
      ['Post-M&A integration', 'Bringing teams, platforms and culture together after an acquisition.'],
      ['Security and governance', 'ISO27001 and AI review guardrails, so customer security reviews become routine.'],
    ],
  },
  {
    title: 'Technology',
    intro: 'Modern, scalable platforms that give the business a real edge.',
    items: [
      ['Platform and cloud', 'Resilient, cloud-native systems on AWS and GCP.'],
      ['Data and AI products', 'Real-time analytics and AI/ML that people actually use.'],
      ['Developer experience', 'CI/CD, monitoring and tooling that raise productivity and quality.'],
      ['Agentic SDLC', 'LLM tools in everyday engineering work, with guardrails and metrics to prove the gain.'],
    ],
  },
];

export default function Home() {
  return (
    <Layout
      title="Angelos Devletoglou"
      description="Angelos Devletoglou: tech leader and mentor across SaaS, AI and B2B2C."
    >
      <div className={styles.hero}>
        <img src="/avatar.png" alt="Angelos Devletoglou" className={styles.avatar} />
        <div>
          <h1 className={styles.h1}>
            I help engineering teams do their <em>best work</em>.
          </h1>
          <p className={styles.lede}>
            Tech leader and mentor, twenty years in. SaaS, AI and B2B2C are where I&rsquo;ve spent most of them.
          </p>
          <div className={styles.actions}>
            <Link href={`${BASE}/blog`} className={styles.btn}>
              Read my writing
            </Link>
            <Link href={`${BASE}/career`} className={`${styles.btn} ${styles.btnGhost}`}>
              See my career
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.h2}>Where I come from</h2>
        <div className={styles.prose}>
          <p>
            I&rsquo;ve spent twenty-plus years building engineering culture, strategy and SaaS data platforms. Startup,
            scale-up or enterprise, the job is much the same: build a team people trust, point it at problems that
            matter, and ship things that move the business.
          </p>
          <p>My time at Avios Group, Baresquare, Maru, Sainsbury&rsquo;s and Checkatrade boils down to this.</p>
        </div>
        <ul className={`${styles.wins} ${styles.prose}`} style={{ marginTop: '2rem', maxWidth: 'none' }}>
          {wins.map((w) => (
            <li key={w} className={styles.win}>
              {w}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.h2}>How I lead</h2>
        <div className={styles.prose}>
          <p>
            I look after three things: <strong>people</strong>, <strong>business</strong> impact and future-ready{' '}
            <strong>technology</strong>. I do my best work where strategy, curiosity and steady execution all matter.
          </p>
        </div>
        <div className={styles.grid3} style={{ marginTop: '2rem' }}>
          {pillars.map((p) => (
            <div key={p.title} className={styles.pillar}>
              <h3 className={styles.h3}>{p.title}</h3>
              <p>{p.intro}</p>
              <ul>
                {p.items.map(([name, text]) => (
                  <li key={name}>
                    <strong>{name}</strong>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

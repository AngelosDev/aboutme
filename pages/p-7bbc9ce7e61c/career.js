import Layout, { PageHeader } from '../../components/preview/Layout';
import styles from '../../styles/Preview.module.css';

const roles = [
  {
    logo: '/logo-iag-loyalty.png',
    org: 'IAG Loyalty',
    date: '2025 – Present',
    title: 'Engineering Manager (Acting Head of Engineering)',
    text: 'Leading engineering inside Avios Group, the Oneworld airline loyalty currency, across the partner, currency, membership and redemption domains. I introduced Backstage to clarify service ownership and standardise architecture decisions, helped lift the Developer Experience Index by 6 points to 67, and built an LLM-powered workflow that categorises JIRA work, so engineering investment is finally visible in data.',
  },
  {
    logo: '/logo-baresquare.png',
    org: 'Baresquare',
    date: '2021 – 2024',
    title: 'Head of Engineering',
    text: 'Led 15 engineers building an AI-powered B2B analytics platform. I reorganised the team into specialist domains, set clear engineering standards and led the move to microservices on AWS and GCP, which raised delivery throughput by 200%. We built AI agent capabilities with OpenAI, Python and Node.js, and shift-left security and quality practices cut production incidents by 30%.',
  },
  {
    logo: '/logo-checkatrade.png',
    org: 'Checkatrade',
    date: '2021',
    title: 'Head of Development',
    text: "Reworked hiring, performance management and career paths for a 70-engineer team running the UK's number one marketplace for finding traders for home improvement. The result was clarity and predictable delivery through a period of major change.",
  },
  {
    logo: '/logo-sainsburys.png',
    org: "Sainsbury's",
    date: '2020 – 2021',
    title: 'Engineering Manager',
    text: 'Within four months I moved B2B platform delivery from external consultants to a strong in-house team, cutting OPEX. We adopted CI/CD, shift-left testing and on-call ownership under a "you build it, you own it" model, for the shared services platform behind contact management, people profiles and authorisation.',
  },
  {
    logo: '/logo-maru.webp',
    org: 'Maru',
    date: '2016 – 2020',
    title: 'CTO UK',
    text: "After Maru acquired eDigitalResearch, I owned the execution of the technology strategy behind the group's international growth, leading a cross-functional team of engineers, testers, product managers and DevOps specialists.",
  },
  {
    logo: '/logo-edigitalresearch.webp',
    org: 'eDigitalResearch',
    date: '2010 – 2016',
    title: 'Director of Technical Operations',
    text: 'Ran technical operations and supported the board on long-term vision, business development, efficiency and product innovation, working with the senior team to make it a place where people felt valued.',
  },
  {
    org: 'Early career',
    date: '2005 – 2010',
    title: 'Software engineering roles',
    text: "I started as a PHP developer at a boutique web agency, where I built a CMS, a white-label e-commerce platform and an SMS marketing platform. Then I joined a scale-up agency, delivering for the BBC, Sky, British Airways, Sainsbury's and other large clients.",
  },
  {
    logo: '/logo-uop.png',
    org: 'University of Portsmouth',
    date: '2000 – 2003',
    title: 'BSc in Internet Technology',
    text: 'Graduated with a 2:1. My final-year project was a J2ME mobile app for the university registry.',
  },
];

export default function Career() {
  return (
    <Layout title="Career - Angelos Devletoglou" description="Career and education timeline of Angelos Devletoglou.">
      <PageHeader
        title="Career"
        lede="Twenty years of building teams, platforms and the habits that keep them healthy."
      />
      <div className={styles.timeline}>
        {roles.map((r) => (
          <div key={r.org} className={styles.role}>
            <div className={styles.roleHead}>
              <div>
                <span className={styles.meta}>{r.date}</span>
                <h2 className={styles.h3} style={{ marginTop: '0.25rem' }}>
                  {r.title}
                </h2>
                <span
                  className={styles.meta}
                  style={{ color: 'var(--muted)', textTransform: 'none', letterSpacing: 0 }}
                >
                  {r.org}
                </span>
              </div>
              {r.logo && <img src={r.logo} alt="" className={styles.logo} />}
            </div>
            <p>{r.text}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

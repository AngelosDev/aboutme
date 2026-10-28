import Layout, { PageHeader, PostCard } from '../../components/preview/Layout';
import styles from '../../styles/Preview.module.css';

// Posts still open in the current theme; only the index is restyled in this preview.
const posts = [
  {
    title: 'Developer Productivity Insights',
    date: 'April 9, 2025',
    excerpt:
      'What Netflix, Indeed, Dropbox, Pinterest and Twilio have learned about measuring developer productivity at scale, and what I would borrow.',
    image: '/developer-productivity-insights.png',
    href: '/blog/developer-productivity-insights',
  },
  {
    title: 'Principles of Responsible AI',
    date: 'April 2, 2025',
    excerpt:
      'Six principles for responsible AI, and how an organisation can turn them into working ethical frameworks while everyone races to adopt.',
    image: '/responsible-ai.png',
    href: '/blog/responsible-ai',
  },
  {
    title: 'Tech Strategy',
    date: 'March 15, 2024',
    excerpt:
      'How I think about building and running a scalable multi-tenant SaaS platform: architecture, scalability, cost and the trade-offs between them.',
    image: '/tech-strategy.webp',
    href: '/blog/tech-strategy',
  },
  {
    title: 'Leadership Playbook',
    date: 'March 10, 2024',
    excerpt:
      'What I lean on when leading technology teams: building the team, setting direction and growing the organisation around it.',
    image: '/leadership-playbook.webp',
    href: '/blog/leadership-playbook',
  },
  {
    title: 'Shift Left Playbook',
    date: 'March 5, 2024',
    excerpt:
      'A practical guide to shift-left practices: catch problems earlier, ship with more confidence and deliver faster.',
    image: '/shift-left-playbook.webp',
    href: '/blog/shift-left-playbook',
  },
];

export default function Blog() {
  return (
    <Layout title="Writing - Angelos Devletoglou" description="Notes on technology, leadership and growth.">
      <PageHeader title="Writing" lede="Notes on tackling technology problems with a growth mindset." />
      <div className={styles.cards}>
        {posts.map((p) => (
          <PostCard key={p.href} post={p} />
        ))}
      </div>
    </Layout>
  );
}

import Layout, { PageHeader, PostCard } from '../components/site/Layout';
import styles from '../styles/Site.module.css';

const projects = [
  {
    title: 'Airport Transfer Notifier',
    date: 'February 20, 2023',
    excerpt:
      'A serverless AWS app for a small airport-transfer taxi firm. It spots new transfer jobs the moment they appear and sends them to Telegram, where drivers accept or decline with one tap.',
    image: '/airport-transfer.png',
    href: '/blog/airport-transfer-notifier',
  },
  {
    title: 'Energy Insights Pal',
    date: 'January 1, 2025',
    excerpt:
      'Smart-meter and Octopus Energy data turned into AI-powered insight: when you use energy, what it costs and why your patterns change.',
    image: '/energy-insights.png',
    href: '/blog/energy-insights-pal',
  },
];

export default function Projects() {
  return (
    <Layout title="Projects - Angelos Devletoglou" description="Personal projects that keep me learning.">
      <PageHeader title="Projects" lede="Side projects I build to keep learning." />
      <div className={styles.cards}>
        {projects.map((p) => (
          <PostCard key={p.href} post={p} />
        ))}
      </div>
    </Layout>
  );
}

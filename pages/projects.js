import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styles from '../styles/Blog.module.css';

const blogPosts = [
  {
    id: 'airport-transfer-notifier',
    title: 'Airport Transfer Notifier',
    date: 'February 20, 2023',
    excerpt:
      'A production-grade serverless AWS app built for a small airport transfer taxi business: catches new transfer jobs the moment they appear and relays them straight to Telegram, where drivers can accept or decline with a single tap.',
    image: '/airport-transfer.png',
    href: '/blog/airport-transfer-notifier',
  },
  {
    id: 'energy-insights-pal',
    title: 'Energy Insights Pal',
    date: 'January 1, 2025',
    excerpt:
      "A personal project turning raw smart-meter and Octopus Energy data into clear, AI-powered insights: see when you're using energy, what it's costing, and why your usage patterns change.",
    image: '/energy-insights.png',
    href: '/blog/energy-insights-pal',
  },
];

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Blog - Angelos Devletoglou</title>
        <meta name="description" content="Projects and Ideas" />
      </Head>
      <Header title="Personal Projects" subtitle="Ideas and personal projects to keep me learning and growing" />
      <Nav />
      <main className={styles.main}>
        <div className={styles.grid}>
          {blogPosts.map((post) => (
            <div key={post.id} className={styles.cardLink}>
              <Link href={post.href}>
                <div className={styles.card}>
                  <div className={styles.cardImage}>
                    <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.cardDate}>{post.date}</div>
                    <h2 className={styles.cardTitle}>{post.title}</h2>
                    <p className={styles.cardExcerpt}>{post.excerpt}</p>
                    <span className={styles.cardReadMore}>Read More</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

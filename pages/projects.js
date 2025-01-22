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
    title: 'Airport Transfer Assistant',
    date: 'February 20, 2023',
    excerpt:
      'Boost airport transfer earnings with instant job alerts via Telegram/WhatsApp. Stay ahead, reduce downtime, and secure more transfers effortlessly!',
    image: '/airport-transfer.webp',
    href: '/blog/airport-transfer-notifier',
  },
  {
    id: 'energy-insights-pal',
    title: 'Energy Insights Pal',
    date: 'January 1, 2025',
    excerpt:
      "Take control of your home's energy like never before! Get smart insights on your usage, optimize heating and power, and make informed decisions to save money and live sustainably",
    image: '/energy-insights.webp',
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
            <Link href={post.href} key={post.id} className={styles.cardLink}>
              <article className={styles.card}>
                <div className={styles.cardImage}>
                  <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardDate}>{post.date}</div>
                  <h2 className={styles.cardTitle}>{post.title}</h2>
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>
                  <span className={styles.cardReadMore}>Read More</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

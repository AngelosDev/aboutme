import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styles from '../styles/Blog.module.css';

const blogPosts = [
  {
    id: 'tech-strategy',
    title: 'Tech Strategy',
    date: 'March 15, 2024',
    excerpt:
      'A comprehensive guide to building and maintaining a scalable, multi-tenant SaaS platform. Covering architecture, scalability, cost management, and more.',
    image: '/tech-strategy.webp',
    href: '/blog/tech-strategy',
  },
  {
    id: 'leadership-playbook',
    title: 'Leadership Playbook',
    date: 'March 10, 2024',
    excerpt:
      'Essential strategies and insights for effective technology leadership, team building, and organizational growth.',
    image: '/leadership-playbook.webp',
    href: '/blog/leadership-playbook',
  },
  {
    id: 'shift-left-playbook',
    title: 'Shift Left Playbook',
    date: 'March 5, 2024',
    excerpt:
      'A practical guide to implementing shift-left practices in your development process for better quality and faster delivery.',
    image: '/shift-left-playbook.webp',
    href: '/blog/shift-left-playbook',
  },
];

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Blog - Angelos Devletoglou</title>
        <meta name="description" content="My approach to solving technological challenges with a growth mindset" />
      </Head>
      <Header title="Blog" subtitle="My approach to solving technological challenges with a growth mindset" />
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

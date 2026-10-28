import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NAV, PROJECT_POSTS } from './config';
import styles from '../../styles/Site.module.css';

const FONTS =
  'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&display=swap';

export default function Layout({ title, description, children }) {
  const { asPath } = useRouter();
  const path = asPath.split(/[?#]/)[0].replace(/\/$/, '') || '/';
  const isActive = (href) => {
    if (href === '/') return path === '/';
    const inProjects = PROJECT_POSTS.includes(path);
    if (href === '/projects') return path === href || inProjects;
    if (href === '/blog') return (path === href || path.startsWith(`${href}/`)) && !inProjects;
    return path === href;
  };

  return (
    <div className={styles.root}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="color-scheme" content="light dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={FONTS} />
      </Head>

      <div className={styles.nav} role="navigation" aria-label="Main">
        <div className={styles.navInner}>
          <Link href="/" className={styles.brand}>
            a<span>.</span>d
          </Link>
          <ul className={styles.navList}>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={isActive(item.href) ? `${styles.navLink} ${styles.active}` : styles.navLink}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <main className={styles.main}>{children}</main>

      <div className={styles.footer} role="contentinfo">
        <p>&copy; {new Date().getFullYear()} Angelos Devletoglou</p>
        <p className={styles.footerLinks}>
          <a href="https://www.linkedin.com/in/adevletoglou/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/AngelosDev" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="/Angelos Devletoglou CV - pub.pdf" target="_blank" rel="noopener noreferrer">
            CV
          </a>
        </p>
      </div>
    </div>
  );
}

export function PageHeader({ title, lede }) {
  return (
    <div className={styles.pageHeader}>
      <h1 className={styles.h1}>{title}</h1>
      {lede && <p className={styles.lede}>{lede}</p>}
    </div>
  );
}

export function PostCard({ post }) {
  return (
    <Link href={post.href} className={styles.card}>
      <img src={post.image} alt="" className={styles.cardImage} loading="lazy" />
      <span className={styles.cardBody}>
        <span className={styles.meta}>{post.date}</span>
        <span className={styles.cardTitle}>{post.title}</span>
        <span className={styles.cardExcerpt}>{post.excerpt}</span>
      </span>
    </Link>
  );
}

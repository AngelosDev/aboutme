import Head from 'next/head';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import styles from '../../styles/BlogPost.module.css';

export default function LeadershipPlaybook() {
  return (
    <div>
      <Head>
        <title>Personal Projects - Airport Transfer Assistant</title>
        <meta
          name="description"
          content="Take control of your home's energy like never before! Get smart insights on your usage, optimize heating and power, and make informed decisions to save money and live sustainably"
        />
      </Head>
      <Header title="Airport Transfer Assistant" subtitle="Secure more transfers effortlessly" />
      <Nav />
      <main className={styles.main}>
        <article className={styles.article}>
          <h2>Effortless Job Notifications for Airport Transfer Drivers</h2>
          <p>
            Airport transfer drivers often miss out on potential jobs due to inefficient booking systems and slow
            notifications.
            <strong> Airport Transfer Notifier</strong> is designed to solve this problem by providing real-time job
            alerts directly via
            <strong> Telegram</strong> and <strong> WhatsApp</strong>.
          </p>
          <h3>Why Use Airport Transfer Notifier?</h3>
          <ul>
            <li>🚖 **Instant Notifications:** Receive new transfer job alerts as soon as they're available.</li>
            <li>📅 **Reduce Downtime:** Get more jobs and maximize earnings without waiting around.</li>
            <li>🔗 **Seamless Integration:** Works with existing messaging platforms, no new apps required.</li>
          </ul>
          <p>
            Whether you're an independent driver or part of a fleet, **Airport Transfer Notifier** helps you stay ahead
            of the competition and secure more passengers with minimal effort.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}

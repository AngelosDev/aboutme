import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function MeetMe() {
  return (
    <div>
      <Head>
        <title>Meet Me - Angelos Devletoglou</title>
        <meta name="description" content="Schedule a meeting with Angelos Devletoglou" />
      </Head>
      <Header title="Meet Me" subtitle="Schedule some time to chat" />
      <Nav />
      <main className={styles.main}>
        <div className={styles.container}>
          {/* Google Calendar Appointment Scheduling iframe */}
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ21LFuym13gGcTpUPF486zBDncx8U8VEkdM2tCRT7Vveq0m4vdF4MHczrou0jtjwfLQ1hSoFiGN?gv=true"
            style={{ border: 0 }}
            width="100%"
            height="600"
            frameBorder="0"
          ></iframe>
        </div>
      </main>
      <Footer />
    </div>
  );
}

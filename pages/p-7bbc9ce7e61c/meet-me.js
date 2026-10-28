import Layout, { PageHeader } from '../../components/preview/Layout';
import styles from '../../styles/Preview.module.css';

export default function MeetMe() {
  return (
    <Layout title="Meet me - Angelos Devletoglou" description="Book some time to talk with Angelos Devletoglou.">
      <PageHeader title="Let's talk" lede="Pick a time that works and we'll have a chat." />
      <iframe
        title="Book a meeting"
        className={styles.frame}
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ21LFuym13gGcTpUPF486zBDncx8U8VEkdM2tCRT7Vveq0m4vdF4MHczrou0jtjwfLQ1hSoFiGN?gv=true"
      />
    </Layout>
  );
}

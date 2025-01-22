import Head from 'next/head';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import styles from '../../styles/BlogPost.module.css';

export default function LeadershipPlaybook() {
  return (
    <div>
      <Head>
        <title>Personal Projects - Energy Insights Pal</title>
        <meta
          name="description"
          content="Take control of your home's energy like never before! Get smart insights on your usage, optimize heating and power, and make informed decisions to save money and live sustainably"
        />
      </Head>
      <Header title="Energy Insights Pal" subtitle="Smart Insights for your Home" />
      <Nav />
      <main className={styles.main}>
        <article className={styles.article}>
          <div class="section">
            <h2>The Problem:</h2>
            <p>
              Homeowners across the UK and beyond are facing skyrocketing energy prices. While energy providers promote
              smart meters and data dashboards to help them see real-time consuption and understand where to cut
              spending, the reality is that understanding and acting on this data requires time, effort, and technical
              know-how. As a result, many homeowners struggle to optimize their energy consumption effectively.
            </p>
          </div>

          <div class="section">
            <h2>The Solution:</h2>
            <p>
              Energy Insights Pal is a smart assistant designed to bridge this gap. It translates raw energy data into
              actionable insights, helping homeowners understand their usage patterns, optimize heating efficiency, and
              make informed decisions about their energy consumption. By providing tailored advice, Energy Insights Pal
              empowers users to save money, reduce waste, and live more sustainably.
            </p>
          </div>

          <div class="section">
            <h2>Key Features</h2>

            <h3>1. Intelligent Data Collection</h3>
            <ul>
              <li>
                Seamless integration with platforms like Home Assistant (HASSIO) and InfluxDB (v0.1), with more sources
                coming soon.
              </li>
              <li>
                Tracks key metrics, including gas and electricity consumption (in kWh) and indoor temperature (in
                Celsius).
              </li>
              <li>Supports daily and on-demand data retrieval for real-time monitoring.</li>
            </ul>

            <h3>2. Advanced Analysis Engine</h3>
            <ul>
              <li>
                <strong>Heating Efficiency Calculations:</strong> Measures energy consumption relative to temperature
                changes to optimize heating performance.
              </li>
              <li>
                <strong>Heat Loss Rate Analysis:</strong> Identifies inefficiencies in home insulation and heating.
              </li>
              <li>
                <strong>Temperature Correlation Analysis:</strong> Understands the relationship between indoor climate
                and energy usage.
              </li>
              <li>
                <strong>Anomaly Detection:</strong> Flags unusual consumption patterns, preventing excessive waste or
                unexpected bills.
              </li>
            </ul>

            <h3>3. Powerful Visualization Tools</h3>
            <ul>
              <li>Time-series plots with annotations to track energy trends.</li>
              <li>Correlation heatmaps to reveal hidden consumption patterns.</li>
              <li>Interactive dashboards for intuitive data exploration.</li>
            </ul>

            <h3>4. Personalized Insights & Recommendations</h3>
            <ul>
              <li>Generates clear, actionable insights tailored to individual usage habits.</li>
              <li>Provides practical recommendations for energy-saving actions.</li>
              <li>
                Delivers insights via an intuitive web-based UI, making data-driven decisions easy for every homeowner.
              </li>
            </ul>
          </div>

          <div class="section">
            <h2>Why Energy Insights Pal?</h2>
            <p>
              Energy Insights Pal goes beyond generic energy-tracking solutions. By offering a personalized, data-driven
              approach, it helps homeowners take real control over their energy consumption. Whether you're looking to
              reduce costs, improve home efficiency, or embrace a more sustainable lifestyle, Energy Insights Pal is
              your trusted companion on the journey to smarter energy use.
            </p>
          </div>

          <p>
            <strong>
              Stay tuned for upcoming updates and features as I find enthusiasts to contribute and help evolve the
              platform!
            </strong>
          </p>
        </article>
        <div class="survey">
          <h2>Can you Spare 2 minutes?</h2>
          <p>
            <a href="https://forms.gle/1mAGJh4mWn3iGo546" target="_blank">
              Complete the survey
            </a>{' '}
            to help me understand your needs and priorities for the platform. Your feedback is invaluable in shaping
            Energy Insights Pal into a tool that truly meets your needs.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

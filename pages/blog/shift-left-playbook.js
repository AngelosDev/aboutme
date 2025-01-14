import Head from 'next/head';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import styles from '../../styles/BlogPost.module.css';

export default function ShiftLeftPlaybook() {
  return (
    <div>
      <Head>
        <title>Shift Left Playbook - Angelos Devletoglou</title>
        <meta name="description" content="Instilling a Shift-Left Testing Culture" />
      </Head>
      <Header title="Shift Left Playbook" subtitle="Instilling a Shift-Left Testing Culture" />
      <Nav />
      <main className={styles.main}>
        <article className={styles.article}>
          <h2>Instilling a Shift-Left Testing Culture: A Framework for Maturity</h2>
          <p>
            In today's fast-paced, data-driven environments, instilling a <strong>shift-left testing</strong> culture is
            key to delivering high-quality software quickly and efficiently. The idea behind shift-left testing is
            simple: test early and test often. The earlier you identify and address issues in the development process,
            the less expensive and disruptive they'll be.
          </p>

          <p>
            However, implementing a shift-left culture requires more than hiring SDETs, writing tests, or even using the
            right tools. It's a cultural shift that requires active buy-in from business leaders, managers and their
            teams. The biggest impediment in successfully adopting shift-left culture is lack of psychological safety.
            However if you are a leader trying to shift-left your team, following some of the steps below, you can
            establish where your team stands today and help your teams to embrace a culture of{' '}
            <strong>collaboration, quality, and continuous improvement</strong>.
          </p>

          <h3>The Shift-Left Testing Maturity Framework</h3>
          <p>
            The maturity of your team's shift-left testing practices can be assessed using a 5-stage framework. Each
            stage represents the level of integration of testing into the development lifecycle. Here are the stages:
          </p>

          <section id="stage1" className={styles.section}>
            <h4>1. Unaware</h4>
            <p>
              <strong>Description:</strong> Testing is mostly non-existent or reactive. There's little awareness of the
              benefits of testing early in the process.
            </p>
            <p>
              <strong>Indicators:</strong>
            </p>
            <ul>
              <li>Testing occurs after development.</li>
              <li>No standardized testing processes or tools in place.</li>
              <li>Fear of failure and mistakes dominates the team culture.</li>
              <li>No clear acceptance criteria or definition of "done."</li>
            </ul>
          </section>

          <section id="stage2" className={styles.section}>
            <h4>2. Recognizing</h4>
            <p>
              <strong>Description:</strong> Teams are aware of the need for testing but often do it too late, with
              manual testing and bottlenecks in the process.
            </p>
            <p>
              <strong>Indicators:</strong>
            </p>
            <ul>
              <li>Testing is manual and typically occurs late in the process.</li>
              <li>Reliance on a dedicated QA team for validation.</li>
              <li>Bottlenecks are created when testing is delayed until after development.</li>
              <li>Test cycles are time-consuming and hinder fast delivery.</li>
            </ul>
          </section>

          <section id="stage3" className={styles.section}>
            <h4>3. Implementing</h4>
            <p>
              <strong>Description:</strong> Structured testing processes are introduced, with unit tests and basic
              automation. SDETs begin working with developers on test scenarios.
            </p>
            <p>
              <strong>Indicators:</strong>
            </p>
            <ul>
              <li>Unit tests are written as part of the development process.</li>
              <li>Some automation is introduced, primarily for unit testing.</li>
              <li>SDETs collaborate with developers to define test scenarios and acceptance criteria.</li>
              <li>CI/CD pipelines may be in place but with limited automation.</li>
            </ul>
          </section>

          <section id="stage4" className={styles.section}>
            <h4>4. Mastering</h4>
            <p>
              <strong>Description:</strong> Shift-left testing becomes part of the team's culture. Testing is automated,
              and feedback loops are implemented to ensure code quality before production.
            </p>
            <p>
              <strong>Indicators:</strong>
            </p>
            <ul>
              <li>Full automation in unit, integration, and acceptance testing.</li>
              <li>CI/CD pipelines are fully integrated into the development process.</li>
              <li>Development teams are responsible for validating their own code.</li>
              <li>Fast, continuous feedback is provided to improve code quality.</li>
            </ul>
          </section>

          <section id="stage5" className={styles.section}>
            <h4>5. Transforming</h4>
            <p>
              <strong>Description:</strong> Testing is fully integrated into every stage of development. There is
              continuous monitoring and improvement, and no external sign-offs are needed for production releases.
            </p>
            <p>
              <strong>Indicators:</strong>
            </p>
            <ul>
              <li>Full end-to-end test automation, including unit, integration, contract, and E2E tests.</li>
              <li>Continuous feedback from production systems, with immediate fixes to identified issues.</li>
              <li>Engineers take full responsibility for production quality.</li>
              <li>Process improvements are continuously made based on metrics and feedback.</li>
            </ul>
          </section>

          <section id="assessment" className={styles.section}>
            <h3>Evaluating Shift-Left Maturity: Team Assessment Table</h3>
            <p>
              To help evaluate where your teams stand in their shift-left maturity journey, you can ask a series of
              yes/no questions. Each "yes" answer will score 1 point. The total score will help determine which stage
              the team is currently in.
            </p>

            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Question</th>
                  <th>Yes</th>
                  <th>No</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Is testing performed earlier than development (shift-left)?</td>
                  <td>□</td>
                  <td>□</td>
                </tr>
                <tr>
                  <td>Are automated unit tests part of the development process?</td>
                  <td>□</td>
                  <td>□</td>
                </tr>
                <tr>
                  <td>Does the team collaborate with SDETs to define test scenarios?</td>
                  <td>□</td>
                  <td>□</td>
                </tr>
                <tr>
                  <td>Is there a CI/CD pipeline with automated tests?</td>
                  <td>□</td>
                  <td>□</td>
                </tr>
                <tr>
                  <td>Are all types of tests automated (unit, integration, E2E)?</td>
                  <td>□</td>
                  <td>□</td>
                </tr>
                <tr>
                  <td>Do engineers have full responsibility for code quality and production releases?</td>
                  <td>□</td>
                  <td>□</td>
                </tr>
                <tr>
                  <td>Is continuous feedback provided from production to improve quality?</td>
                  <td>□</td>
                  <td>□</td>
                </tr>
              </tbody>
            </table>

            <p>Based on the total points accumulated, you can assess the maturity level:</p>
            <ul>
              <li>0-2 points: Ad Hoc / Initial Stage</li>
              <li>3-4 points: Reactive Stage</li>
              <li>5-6 points: Defined Stage</li>
              <li>7-8 points: Proactive Stage</li>
              <li>9-10 points: Optimized Stage</li>
            </ul>
          </section>

          <section id="roadmap" className={styles.section}>
            <h3>Phased Maturity Roadmap</h3>
            <p>To successfully implement shift-left testing, here's a practical approach:</p>
            <ul>
              <li>
                <strong>Assess the Current State</strong>: Interview your <strong>Tech Leads</strong> and review your
                team's existing SDLC to understand where they stand on the maturity scale.
              </li>
              <li>
                <strong>Develop and Introduce Changes</strong>: Start with manageable, smaller improvements in testing
                and automation.
              </li>
              <li>
                <strong>Monitor Progress</strong>: Regularly track key metrics and feedback to identify obstacles and
                refine the process.
              </li>
              <li>
                <strong>Encourage Continuous Improvement</strong>: As you introduce new processes, tools, and cultural
                shifts, maintain a focus on iteration and growth.
              </li>
            </ul>
            <p>
              The maturity framework will help you assess and monitor the evolution of your team's testing culture. Over
              time, teams will move through these stages, adopting the practices and mindset necessary to make
              shift-left testing a natural part of their workflow.
            </p>

            <p>
              By guiding your teams through this transition and emphasizing the role of collaboration, continuous
              testing, and automation, you'll not only improve the quality of your software but also foster a culture
              where quality and <strong>psychological safety</strong> are top priorities.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}

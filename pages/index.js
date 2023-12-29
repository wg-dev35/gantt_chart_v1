import Head from "next/head";
import GanttChart from "../components/GanttChart/GanttChart";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gantt Chart Test with Next.js</title>
      </Head>
      <main className="main">
        <h1 className="title">Gantt Tracker Test</h1>
        <GanttChart />
      </main>
      <style jsx>{`
        .main {
          min-height: 100vh;
          padding: 1rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .title {
          font-size: 1.5rem;
        }
      `}</style>
    </div>
  );
}

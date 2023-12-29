import Layout from "../components/Layout";

function Gantt({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default Gantt;

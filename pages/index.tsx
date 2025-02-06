import Header from "@/components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | MichaelYoussefDev</title>
      </Head>

      <main className="home-main-container">
          <Header  />
      </main>
    </>
  );
}

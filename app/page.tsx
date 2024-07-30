import styles from "./page.module.css";
import dynamic from "next/dynamic";
import Loading from "./components/Loading/Loading";

// Dynamically import the ClientComponent with SSR disabled
const Homepage = dynamic(() => import("./components/Homepage"), {
  ssr: false,
  loading: () => <Loading />,
});

export default function Home() {
  return (
    <>
      <main className={styles.mainContainer}>
        <div className={styles.container}>
          <Homepage />
        </div>
      </main>
    </>
  );
}

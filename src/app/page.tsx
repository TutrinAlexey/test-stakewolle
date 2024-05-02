import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
      <main className={styles.main}>
        <h1 className={styles.headerText}>Task Stakewolle</h1>
        <Link className={styles.link} href='/exchange'>Go to the exchanger</Link>
      </main>
  );
}

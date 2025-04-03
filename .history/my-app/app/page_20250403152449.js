import styles from "./page.module.css";

// React component!
function Product(){
  return (
    <article>
      <div>
        <p>Product Name</p>
        <p>$3.99</p>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
     <header className={styles.header}>
        <h1>General store</h1>
     </header>
        <main className={styles.main}>
          <section>
            <Product />
          </section>
        </main>
    </div>
  );
}

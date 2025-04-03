import styles from "./page.module.css";

// React component!
function Product({name, image, price, hasSale}){
  return (
    <article>
      <img src={`/${image}.jpg`}></img>
      <div>
        <p>{name}</p>
        <p>${price}</p>
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
            <Product 
              name="Refried Beans"
              price="2.99"
              image="beans"
              hasSale={false}
            />
            <Product 
              name="tomato"
              price="3.99"
              image="tomato"
              hasSale={false}
            />
            <Product 
              name="corned beef"
              price="5.99"
              image="cornedbeef"
              hasSale={true}
            />
                        <Product 
              name="spam"
              price="4"
              image="spam"
              hasSale={false}
            />
            
          </section>
        </main>
    </div>
  );
}

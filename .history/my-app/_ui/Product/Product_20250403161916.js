import Styles from "./Product.module.css"
// React component!

function Product({name, image, price = 2.99, hasSale}){
    let priceClasses;
    let formattedPrice = price;
    
    if(hasSale){
      priceClasses= styles.product__priceSale;
      formattedPrice = (price/2).toFixed(2);
    }
  
    return (
      <article className={styles.product}>
        <img className={styles.product__image} src={`/${image}.jpg`}></img>
        <div>
          <p className = {styles.product__name}>{name}</p>
          <p className={priceClasses}>${formattedPrice}</p>
        </div>
      </article>
    );
  }
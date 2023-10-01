import styles from "../../../styles/Cart.module.scss"
import { ReactComponent as MinusBtn } from "../../../icons/minus-btn.svg"
import { ReactComponent as PlusBtn } from "../../../icons/plus-btn.svg"

function Porduct() {
    const products = [
      {
        id: '1',
        name: '貓咪罐罐',
        img: 'https://picsum.photos/300/300?text=1',
        price: 100,
        quantity: 2, 
        },
        {
        id: '2',
        name: '貓咪干干',
        img: 'https://picsum.photos/300/300?text=2',
        price: 200,
        quantity: 1,
        },
    ]

    const productsItem = products.map(product =>
    <div className={styles.productContainer} key={product.id}>
        <img className={styles.imageContainer} src={product.img} alt={product.name} />
            <div className={styles.productInfo}>
            <div className={styles.productName}>{product.name}</div>
            <div className={styles.productControlPanel}>
                <div className={styles.productControl}>
                    <MinusBtn />
                    <span className={styles.productCount}>{product.quantity}</span>
                    <PlusBtn />
                </div>
            </div>
            <div className={styles.price}>${product.price}</div>
            </div>
        </div>
    )
    return <section className={styles.productList}>{productsItem}</section>
}

function CartInfo({text, price}){
    return(
        <>
            <section className={styles.cartInfo}>
                <div className={styles.text}>{text}</div>
                <div className={styles.price}>{price}</div>
            </section>
        </>
    )
}



export default function Cart() {
    return(
    <>
        <section className={styles.cartContainer}>
          <h3>購物籃</h3>
          <Porduct/>
          <CartInfo text="運費" price="免費"/>
          <CartInfo text="小計" price="$400"/>
          </section>
    </>
    )
}
